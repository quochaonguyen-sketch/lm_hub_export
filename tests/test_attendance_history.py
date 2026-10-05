"""Historical attendance: dates, pagination, people, leave/rest and actual OT hours."""
from datetime import date
from unittest.mock import Mock
import shutil
import uuid

import pytest

import export_attendance_history as history


def row(staff="A", **values):
    result = dict(id=staff, biz_staff_id=staff, staff_type=2, staff_type_name="Ops",
                  event_station_id=2149, date="2026-10-04", operation_date=1791046800,
                  department_name="FM/LM", planned_hours="8.0", actual_hours="0.0",
                  clock_in_time=0, clock_out_time=0, clock_in_status=4,
                  sick_or_leave="", off_day_flag=0, ot_applied="", ot_worked="", break_time="0.0")
    result.update(values)
    return result


HUB = dict(station_id=2149, station_name="Test hub")
DAY = date(2026, 10, 4)


@pytest.fixture
def workspace_dir():
    # Windows sandbox cannot reopen pytest's mode-0700 temp directories.
    path = history.ROOT / "output" / ("attendance_unit_test_" + uuid.uuid4().hex)
    path.mkdir(parents=True)
    try:
        yield path
    finally:
        assert path.resolve().is_relative_to((history.ROOT / "output").resolve())
        shutil.rmtree(path)


def test_default_month_excludes_today_and_handles_short_months():
    args = history.build_parser().parse_args([])
    assert history.date_window(args, date(2026, 10, 5)) == (date(2026, 9, 5), DAY)
    assert history.previous_month(date(2024, 3, 31)) == date(2024, 2, 29)
    assert history.previous_month(date(2026, 1, 31)) == date(2025, 12, 31)
    args.days = 30
    assert history.date_window(args, date(2026, 10, 5)) == (date(2026, 9, 5), DAY)
    start, end = history.day_window(DAY)
    assert start == 1791046800 and end-start == 86399


def test_multiple_shifts_deduplicate_people_but_sum_authoritative_hours():
    first = row(id=1, actual_hours="8.0", clock_in_time=1791060000, clock_out_time=1791090000,
                clock_in_status=1, ot_applied="2.0", ot_worked="1.5", clock_in_channel=5)
    second = row(id=2, actual_hours="2.0", planned_hours="2.0", clock_in_time=1791100000,
                 clock_out_time=1791110000, clock_in_status=3, ot_applied="1.0", ot_worked="0.5")
    kept = history.filter_rows([first, first.copy(), second], DAY, 2149, "ops")
    details = history.summarize_people(kept, DAY, HUB, {"ClockChannelName": {"5": "Station App"}}, "complete")
    summary = history.daily_summary(details, HUB, DAY, "complete", "", 3, len(kept), 3)
    assert summary["total_people"] == 1
    assert summary["present_people"] == 1
    assert summary["claim_people"] == 1
    assert summary["late_people"] == 1
    assert summary["total_actual_hours"] == 10
    assert summary["total_ot_applied"] == 3
    assert summary["total_ot_worked"] == 2
    assert details[0]["claim_status"] == "status_not_provided"
    assert details[0]["clock_in_channels"] == "Station App"


def test_absence_leave_and_rest_are_separate_no_guessing_from_missing_fields():
    rows = [row("absent"), row("leave", sick_or_leave="Annual Leave"),
            row("rest", off_day_flag=1), row("unknown", planned_hours="", actual_hours="", clock_in_status=0)]
    details = history.summarize_people(rows, DAY, HUB, {}, "complete")
    summary = history.daily_summary(details, HUB, DAY, "complete", "", 4, 4, 4)
    assert (summary["total_people"], summary["absent_people"], summary["leave_people"], summary["rest_people"], summary["unknown_people"]) == (4, 1, 1, 1, 1)
    assert summary["missing_actual_hours_rows"] == 1
    # Clock-channel 5 is facial Station App, not an OT claim.
    assert not history.claim_state(row(clock_in_channel=5))[1]


def test_scope_uses_event_station_and_requested_day():
    rows = [row(), row("other_hub", event_station_id=93, profile_station_id=2149),
            row("other_day", date="2026-10-03", operation_date=1790960400),
            row("rider", department_name="Rider")]
    assert len(history.filter_rows(rows, DAY, 2149, "ops")) == 2
    assert len(history.filter_rows(rows, DAY, 2149, "fm-lm")) == 1


def test_pagination_keeps_fetching_after_silent_page_cap(monkeypatch):
    calls = []
    def page(sess, headers, params):
        calls.append(params)
        batch = [row("A"), row("B")] if params["pageno"] == 1 else [row("C")]
        return {"retcode": 0, "data": {"list": batch, "total": 3}}, None
    monkeypatch.setattr(history.source, "_get_attendance_page", page)
    rows, total, status, error = history.fetch_day(None, {}, DAY, page_size=50)
    assert len(rows) == total == 3 and status == "complete" and not error
    assert [call["pageno"] for call in calls] == [1, 2]
    assert all("station_id" not in call and call["start_time"] == 1791046800 for call in calls)


def test_incomplete_and_repeated_pages_are_marked_partial(monkeypatch):
    page = Mock(side_effect=[({"data": {"list": [row()], "total": 9}}, None),
                            ({"data": {"list": [], "total": 9}}, None)])
    monkeypatch.setattr(history.source, "_get_attendance_page", page)
    assert history.fetch_day(None, {}, DAY)[2] == "partial"
    monkeypatch.setattr(history.source, "_get_attendance_page", lambda *a: ({"data": {"list": [row()], "total": 9}}, None))
    assert history.fetch_day(None, {}, DAY)[2:] == ("partial", "API lặp lại trang; đã dừng để tránh đếm trùng")


def test_failed_day_is_blank_not_zero_and_identity_dedup_spans_period():
    failed = history.daily_summary([], HUB, DAY, "failed", "timeout", 0, 0, None)
    assert failed["total_people"] == failed["total_actual_hours"] == ""
    details = history.summarize_people([row(clock_in_status=1, actual_hours="8", ot_applied="2")], DAY, HUB, {}, "complete")
    other = dict(details[0], date="2026-10-03")
    daily = [history.daily_summary(details, HUB, DAY, "complete", "", 1, 1, 1),
             history.daily_summary([other], HUB, date(2026, 10, 3), "complete", "", 1, 1, 1)]
    hubs, people, claims = history.period_reports(daily, [*details, other])
    assert hubs[0]["unique_people"] == 1 and hubs[0]["total_person_days"] == 2
    assert people[0]["present_days"] == 2 and people[0]["total_actual_hours"] == 16
    assert claims[0]["unique_people"] == 1 and claims[0]["person_days"] == 2


def test_replay_generates_csvs_without_network(workspace_dir, monkeypatch):
    import json
    tmp_path = workspace_dir
    hubs = tmp_path/"hubs.csv"
    hubs.write_text("station_id,station_name\n2149,Test\n", encoding="utf-8")
    raw = tmp_path/"raw.jsonl"
    raw.write_text(json.dumps(dict(type="metadata", enums={}))+"\n"+
                   json.dumps(dict(**HUB, date=str(DAY), rows=[row()], data_status="complete", api_total=1))+"\n", encoding="utf-8")
    monkeypatch.setattr(history, "build_session", lambda *a: (_ for _ in ()).throw(AssertionError("no network")))
    out = tmp_path/"results"
    assert history.main(["--hubs", str(hubs), "--from-raw", str(raw), "--date-from", str(DAY),
                         "--date-to", str(DAY), "--out-dir", str(out)]) == 0
    assert len(list(out.glob("*.csv"))) == 6
    report = json.loads((out/"run_report.json").read_text())
    assert report["complete_hub_days"] == 1 and report["failed_hub_days"] == 0


def test_network_flow_restores_station_and_never_reuses_today_cache(workspace_dir, monkeypatch):
    import io
    import json
    hubs = workspace_dir/"hubs.csv"
    hubs.write_text("station_id,station_name\n2149,Test\n", encoding="utf-8")
    session = history.requests.Session()
    session.get = Mock()
    session.close = Mock()
    session.get.return_value.json.return_value = {"retcode": 0, "data": {}}
    lock = io.StringIO()
    monkeypatch.setattr(history.launcher, "acquire_lock", lambda: lock)
    monkeypatch.setattr(history.launcher, "other_export_running", lambda: False)
    monkeypatch.setattr(history, "build_session", lambda *args: (session, {}, "test-cookie"))
    monkeypatch.setattr(history.source, "_ATTENDANCE_ORIGINAL_STATION", None)
    def remember(*args):
        history.source._ATTENDANCE_ORIGINAL_STATION = 93
        return 93
    monkeypatch.setattr(history.source, "_remember_original_station", remember)
    changed = []
    monkeypatch.setattr(history.source, "_change_station", lambda s,h,sid: (changed.append(sid) or True, None))
    days = []
    def fetch(sess, headers, day, *args):
        days.append(day)
        record = row(date=str(day), operation_date=history.day_window(day)[0])
        return [record], 1, "complete", ""
    monkeypatch.setattr(history, "fetch_day", fetch)
    out = workspace_dir/"result"
    assert history.main(["--hubs", str(hubs), "--date-from", "2026-10-03", "--date-to", "2026-10-04",
                         "--out-dir", str(out), "--request-delay", "0", "--workers", "1"]) == 0
    assert days == [DAY, date(2026, 10, 3)]
    assert changed == [2149, 93] and lock.closed
    session.close.assert_called_once()
    saved = [json.loads(line) for line in (out/"raw_attendance.jsonl").read_text(encoding="utf-8").splitlines()]
    assert saved[0]["type"] == "metadata" and len(saved) == 3


def test_global_totals_deduplicate_person_working_in_two_hubs():
    details = history.summarize_people([row(clock_in_status=1, actual_hours="4", ot_applied="1")], DAY, HUB, {}, "complete")
    other_hub = dict(details[0], station_id=93)
    daily = [history.daily_summary(details, HUB, DAY, "complete", "", 1, 1, 1)]
    overall = history.overall_report(daily, [*details, other_hub], DAY, DAY)
    assert overall["unique_people"] == overall["person_days"] == 1
    assert overall["hub_person_days"] == 2 and overall["total_actual_hours"] == 8
    assert overall["unique_claim_people"] == 1


def test_workers_overlap_dates_but_finish_before_switching_hub(workspace_dir, monkeypatch):
    import io
    import json
    import threading
    hubs = workspace_dir/"hubs.csv"
    hubs.write_text("station_id,station_name\n2149,A\n93,B\n", encoding="utf-8")
    controller = history.requests.Session()
    controller.cookies.set("test", "copied")
    controller.get = Mock()
    controller.get.return_value.json.return_value = {"retcode": 0, "data": {}}
    lock = io.StringIO()
    monkeypatch.setattr(history.launcher, "acquire_lock", lambda: lock)
    monkeypatch.setattr(history.launcher, "other_export_running", lambda: False)
    monkeypatch.setattr(history, "build_session", lambda *a: (controller, {}, "test-cookie"))
    monkeypatch.setattr(history.source, "_ATTENDANCE_ORIGINAL_STATION", 302)
    def remember(*args):
        history.source._ATTENDANCE_ORIGINAL_STATION = 302
        return 302
    monkeypatch.setattr(history.source, "_remember_original_station", remember)
    barrier = threading.Barrier(2)
    guard = threading.Lock()
    active, maximum, current = 0, 0, None
    changes, calls, worker_sessions = [], [], []
    def switch(s, h, sid):
        nonlocal current
        with guard:
            assert active == 0
            current = sid
            changes.append(sid)
        return True, None
    monkeypatch.setattr(history.source, "_change_station", switch)
    def fetch(session, headers, day, *args):
        nonlocal active, maximum
        assert session is not controller
        assert session.cookies.get("test") == "copied"
        with guard:
            sid = current
            active += 1
            maximum = max(maximum, active)
            worker_sessions.append(session)
        try:
            barrier.wait(timeout=3)
            with guard:
                assert current == sid
                calls.append((sid, str(day)))
            return [row(event_station_id=sid, date=str(day), operation_date=history.day_window(day)[0])], 1, "complete", ""
        finally:
            with guard:
                active -= 1
    monkeypatch.setattr(history, "fetch_day", fetch)
    out = workspace_dir/"parallel"
    assert history.main(["--hubs", str(hubs), "--date-from", "2026-10-03", "--date-to", "2026-10-04",
                         "--workers", "2", "--request-delay", "0", "--out-dir", str(out)]) == 0
    assert maximum == 2 and changes == [2149, 93, 302]
    assert len({id(session) for session in worker_sessions}) == 4
    assert len(set(calls)) == 4 and lock.closed
    saved = [json.loads(line) for line in (out/"raw_attendance.jsonl").read_text(encoding="utf-8").splitlines()]
    assert len(saved) == 5
