"""Attendance D-1 backwards one calendar month, grouped by hub/day/person.

Uses the same cookie, station switching and attendance API as export_lm_hubs.
No Google Sheets writes. Run --help for date/hub selection and --from-raw replay.
"""
from __future__ import annotations

import argparse
import calendar
import csv
import json
import math
import sys
import threading
from collections import Counter, defaultdict
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import date, datetime, time as daytime, timedelta
from pathlib import Path

import requests

import cookie_launcher as launcher
import export_lm_hubs as source
from spx_cookies import CookieError, build_session

ROOT = Path(__file__).resolve().parent
ENUM_URL = "https://spx.shopee.vn/api/wfm/common/enums"
HOUR_FIELDS = ("actual_hours", "planned_hours", "break_time", "ot_applied", "ot_worked")
TOTAL_FIELDS = tuple("total_" + field for field in HOUR_FIELDS)
COUNT_FIELDS = ("total_people", "present_people", "absent_people", "leave_people",
                "rest_people", "unknown_people", "late_people", "claim_people",
                "missing_clock_in_people", "missing_clock_out_people", "missing_identity_people")
DAILY_COLUMNS = ("date", "station_id", "station_name", "data_status", "error",
                 "api_total", "raw_rows", "kept_rows", "dropped_rows", *COUNT_FIELDS,
                 *TOTAL_FIELDS, "missing_actual_hours_rows", "missing_planned_hours_rows")
DETAIL_COLUMNS = ("date", "station_id", "station_name", "person_key", "biz_staff_id",
                  "staff_id", "staff_name", "agency", "contract_type", "department_name",
                  "attendance_state", "has_leave", "leave_status", "has_rest_day", "is_late",
                  "claim_status", "has_ot_claim", "record_count", *HOUR_FIELDS,
                  "missing_actual_hours_rows", "missing_planned_hours_rows",
                  "missing_identity", "missing_clock_in", "missing_clock_out",
                  "first_clock_in", "last_clock_out", "clock_in_statuses", "clock_out_statuses",
                  "clock_in_channels", "clock_out_channels", "data_status")


def previous_month(day):
    year, month = (day.year - 1, 12) if day.month == 1 else (day.year, day.month - 1)
    return date(year, month, min(day.day, calendar.monthrange(year, month)[1]))


def date_window(args, today=None):
    today = today or datetime.now(source.TZ).date()
    end = args.date_to or today - timedelta(days=1)
    start = args.date_from or (end - timedelta(days=args.days - 1) if args.days
                              else previous_month(end + timedelta(days=1)))
    if start > end or end >= today:
        raise ValueError("Khoảng ngày phải kết thúc trước hôm nay và ngày đầu không sau ngày cuối.")
    return start, end


def day_window(day):
    start = datetime.combine(day, daytime.min, source.TZ)
    return int(start.timestamp()), int((start + timedelta(days=1)).timestamp()) - 1


def number(value, empty_zero=False):
    if value in (None, "", "-"):
        return 0.0 if empty_zero else None
    try:
        value = float(value)
        return value if math.isfinite(value) and value >= 0 else None
    except (TypeError, ValueError):
        return None


def marked(value):
    return str(value or "").strip().lower() not in ("", "-", "0", "no", "none", "no leave", "false")


def row_key(row):
    # A shift's id must be scoped to its day. Zero IDs are placeholders.
    if row.get("id") not in (None, "", 0, "0"):
        return "id:" + str(row["id"])
    return json.dumps(row, sort_keys=True, ensure_ascii=False, default=str)


def deduplicate(rows):
    seen = set()
    result = []
    for row in rows:
        key = row_key(row)
        if key not in seen:
            seen.add(key)
            result.append(row)
    return result


def fetch_day(sess, headers, day, page_size=50, max_pages=100, stop_event=None):
    """Explicit day parameters; no use of the today-only roster cache/globals."""
    start, end = day_window(day)
    rows, seen, total = [], set(), None
    for page in range(1, max_pages + 1):
        if stop_event is not None and stop_event.is_set():
            return rows, total, "partial" if rows else "failed", "Đã dừng"
        params = dict(pageno=page, count=page_size, staff_type=2, start_time=start, end_time=end)
        payload, error = source._get_attendance_page(sess, headers, params)
        if error:
            return rows, total, "partial" if rows else "failed", str(error)
        data = payload.get("data") if isinstance(payload, dict) else None
        if not isinstance(data, dict) or not isinstance(data.get("list"), list):
            return rows, total, "partial" if rows else "failed", "Attendance response thiếu data.list"
        if data.get("total") not in (None, ""):
            parsed = number(data["total"])
            if parsed is not None and parsed.is_integer():
                total = int(parsed)
        batch = [row for row in data["list"] if isinstance(row, dict)]
        added = 0
        for row in batch:
            key = row_key(row)
            if key not in seen:
                rows.append(row)
                seen.add(key)
                added += 1
        if not batch:
            if total is not None and len(rows) < total:
                return rows, total, "partial", f"Hết trang trước total: {len(rows)}/{total}"
            return rows, total, "complete", ""
        if total is not None and len(rows) >= total:
            return rows, total, "complete", ""
        if not added:
            return rows, total, "partial", "API lặp lại trang; đã dừng để tránh đếm trùng"
        if total is None and len(batch) < page_size:
            return rows, total, "complete", ""
    return rows, total, "partial", f"Vượt giới hạn {max_pages} trang"


def fetch_hub_days(controller, headers, days, args):
    """Parallelize dates of one station; finish all requests before switching.

    Each worker owns its HTTP session/connection pool, copied after change_station.
    Only the calling thread writes raw/CSV data.
    """
    stop = threading.Event()
    local = threading.local()
    sessions = []
    session_lock = threading.Lock()
    pool = ThreadPoolExecutor(max_workers=min(args.workers, len(days)), thread_name_prefix="attendance-day")
    futures = {}

    def work(day):
        if not hasattr(local, "session"):
            session = requests.Session()
            session.cookies = controller.cookies.copy()
            session.headers.update(controller.headers)
            session.proxies.update(controller.proxies)
            session.trust_env = controller.trust_env
            local.session = session
            with session_lock:
                sessions.append(session)
        result = fetch_day(local.session, headers, day, args.page_size, args.max_pages, stop)
        stop.wait(args.request_delay)
        return result

    try:
        futures = {pool.submit(work, day): day for day in days}
        for future in as_completed(futures):
            day = futures[future]
            try:
                result = future.result()
            except Exception as exc:
                result = [], None, "failed", f"{type(exc).__name__}: {exc}"
            yield day, result
    finally:
        stop.set()
        for future in futures:
            future.cancel()
        pool.shutdown(wait=True, cancel_futures=True)
        for session in sessions:
            session.close()


def filter_rows(rows, day, station_id, scope):
    start, _ = day_window(day)
    result = []
    for row in rows:
        try:
            same_station = int(row.get("event_station_id")) == int(station_id)
        except (TypeError, ValueError):
            same_station = False
        if not same_station or not source._attendance_row_matches_day(row, start):
            continue
        if row.get("staff_type") not in (None, "", 2, "2"):
            continue
        if str(row.get("staff_type_name") or "Ops").strip().lower() != "ops":
            continue
        if scope == "fm-lm" and not source._is_ops_fm_lm_row(row):
            continue
        result.append(row)
    return deduplicate(result)


def enum_label(enums, group, value):
    mapping = enums.get(group) or {}
    if not isinstance(mapping, dict):
        return str(value or "")
    # Some enums map codes to labels, others labels to codes.
    if str(value) in mapping:
        return str(mapping[str(value)])
    for label, code in mapping.items():
        if str(code) == str(value):
            return label
    return str(value if value is not None else "")


def claim_state(row):
    """OT application status is only reported if explicitly returned by API."""
    hours = number(row.get("ot_applied"), empty_zero=True)
    if hours is None or hours <= 0:
        return "", False
    for field in ("ot_application_status_name", "ot_application_status", "claim_status_name", "claim_status"):
        if row.get(field) not in (None, ""):
            return str(row[field]), True
    return "status_not_provided", True


def summarize_people(rows, day, hub, enums, data_status):
    people = defaultdict(list)
    for row in rows:
        identity = next((str(row[key]).strip() for key in ("biz_staff_id", "staff_id")
                         if row.get(key) not in (None, "")), None)
        people[identity or "unidentified:" + row_key(row)].append(row)
    details = []
    for identity, records in people.items():
        first = records[0]
        hours = {}
        missing = {}
        for field in HOUR_FIELDS:
            values = [number(row.get(field), empty_zero=field in ("ot_applied", "ot_worked", "break_time"))
                      for row in records]
            hours[field] = round(sum(v for v in values if v is not None), 4) if any(v is not None for v in values) else ""
            missing[field] = sum(v is None for v in values)
        present = any((number(row.get("clock_in_time")) or 0) > 0 or
                      (number(row.get("clock_out_time")) or 0) > 0 or
                      (number(row.get("actual_hours")) or 0) > 0 or
                      str(row.get("clock_in_status")) in ("1", "2", "3") for row in records)
        has_leave = any(marked(row.get("sick_or_leave")) or marked(row.get("leave_status")) for row in records)
        has_rest = any(str(row.get("off_day_flag")) in ("1", "2", "3") for row in records)
        scheduled = any((number(row.get("planned_hours")) or 0) > 0 or
                        str(row.get("clock_in_status")) == "4" for row in records)
        state = "present" if present else "leave" if has_leave else "rest" if has_rest else "absence" if scheduled else "unknown"
        claims = [claim_state(row) for row in records]
        states = set()
        for row, (status, claimed) in zip(records, claims):
            if claimed:
                label = enum_label(enums, "OtApplicationStatus", status)
                states.add(label or status)
        detail = dict(date=day.isoformat(), station_id=hub["station_id"], station_name=hub["station_name"],
                      person_key=identity, attendance_state=state, has_leave=int(has_leave),
                      leave_status=" | ".join(sorted({str(row.get("sick_or_leave") or
                          enum_label(enums, "AttendanceLeaveApplyStatus", row.get("leave_status")))
                          for row in records if marked(row.get("sick_or_leave")) or marked(row.get("leave_status"))})),
                      has_rest_day=int(has_rest), is_late=int(any(source._is_late_attendance_row(row) for row in records)),
                      claim_status=" | ".join(sorted(states)), has_ot_claim=int(any(claimed for _, claimed in claims)),
                      record_count=len(records), missing_actual_hours_rows=missing["actual_hours"],
                      missing_planned_hours_rows=missing["planned_hours"], missing_identity=int(identity.startswith("unidentified:")),
                      missing_clock_in=int(present and not any((number(row.get("clock_in_time")) or 0) > 0 for row in records)),
                      missing_clock_out=int(present and not any((number(row.get("clock_out_time")) or 0) > 0 for row in records)),
                      data_status=data_status, **hours)
        for key in ("biz_staff_id", "staff_id", "staff_name", "agency", "contract_type", "department_name"):
            detail[key] = first.get(key, "")
        for direction in ("in", "out"):
            timestamps = [number(row.get(f"clock_{direction}_time")) for row in records]
            timestamps = [value for value in timestamps if value is not None and value > 0]
            chosen_time = (min(timestamps) if direction == "in" else max(timestamps)) if timestamps else None
            try:
                detail["first_clock_in" if direction == "in" else "last_clock_out"] = (
                    datetime.fromtimestamp(chosen_time, source.TZ).isoformat() if chosen_time else "")
            except (OSError, OverflowError, ValueError):
                detail["first_clock_in" if direction == "in" else "last_clock_out"] = ""
            detail[f"clock_{direction}_statuses"] = " | ".join(sorted({
                str(row.get(f"clock_{direction}_status_name") or enum_label(
                    enums, f"clock_{direction}_status", row.get(f"clock_{direction}_status")))
                for row in records if row.get(f"clock_{direction}_status") not in (None, "", 0)
                or row.get(f"clock_{direction}_status_name")}))
            channels = set()
            for row in records:
                values = row.get(f"clock_{direction}_channel_list")
                if not isinstance(values, list) or not values:
                    values = [row.get(f"clock_{direction}_channel")]
                for value in values:
                    if value not in (None, "", 0):
                        channels.add(enum_label(enums, "ClockChannelName", value))
            detail[f"clock_{direction}_channels"] = " | ".join(sorted(channels))
        details.append(detail)
    return details


def daily_summary(details, hub, day, status, error, raw_rows, kept_rows, api_total):
    result = dict(date=day.isoformat(), **hub, data_status=status, error=error, api_total=api_total,
                  raw_rows=raw_rows, kept_rows=kept_rows, dropped_rows=raw_rows-kept_rows)
    # A failed query is not a day with zero staff/hours.
    if status in ("failed", "partial") and not details:
        result.update({key: "" for key in (*COUNT_FIELDS, *TOTAL_FIELDS,
                       "missing_actual_hours_rows", "missing_planned_hours_rows")})
        return result
    counts = Counter(row["attendance_state"] for row in details)
    result.update(total_people=len(details), present_people=counts["present"], absent_people=counts["absence"],
                  leave_people=sum(row["has_leave"] for row in details), rest_people=sum(row["has_rest_day"] for row in details),
                  unknown_people=counts["unknown"], late_people=sum(row["is_late"] for row in details),
                  claim_people=sum(row["has_ot_claim"] for row in details),
                  missing_clock_in_people=sum(row["missing_clock_in"] for row in details),
                  missing_clock_out_people=sum(row["missing_clock_out"] for row in details),
                  missing_identity_people=sum(row["missing_identity"] for row in details))
    for field in HOUR_FIELDS:
        values = [number(row[field]) for row in details]
        result["total_"+field] = round(sum(v for v in values if v is not None), 4) if not details or any(v is not None for v in values) else ""
    for field in ("actual_hours", "planned_hours"):
        result["missing_"+field+"_rows"] = sum(row["missing_"+field+"_rows"] for row in details)
    return result


def period_reports(daily, details):
    by_hub, by_person, by_claim = defaultdict(list), defaultdict(list), defaultdict(list)
    for row in daily:
        by_hub[row["station_id"]].append(row)
    for row in details:
        by_person[(row["station_id"], row["person_key"])].append(row)
        if row["has_ot_claim"]:
            by_claim[(row["station_id"], row["claim_status"])].append(row)
    hubs, people, claims = [], [], []
    for sid, days in by_hub.items():
        staff = [row for row in details if row["station_id"] == sid]
        known = [row for row in staff if not row["missing_identity"]]
        result = dict(station_id=sid, station_name=days[0]["station_name"], date_from=min(r["date"] for r in days),
                      date_to=max(r["date"] for r in days), requested_days=len(days),
                      complete_days=sum(r["data_status"] == "complete" for r in days),
                      partial_days=sum(r["data_status"] == "partial" for r in days),
                      failed_days=sum(r["data_status"] == "failed" for r in days),
                      unique_people=len({r["person_key"] for r in known}),
                      unique_present_people=len({r["person_key"] for r in known if r["attendance_state"] == "present"}),
                      unique_claim_people=len({r["person_key"] for r in known if r["has_ot_claim"]}))
        for field in COUNT_FIELDS:
            result[field.replace("_people", "_person_days")] = sum(int(r.get(field) or 0) for r in days)
        for field in TOTAL_FIELDS:
            result[field] = round(sum(float(r.get(field) or 0) for r in days), 4)
        result["missing_actual_hours_rows"] = sum(int(r.get("missing_actual_hours_rows") or 0) for r in days)
        hubs.append(result)
    for (sid, identity), rows in by_person.items():
        result = {key: rows[0][key] for key in ("station_id", "station_name", "person_key", "biz_staff_id", "staff_id", "staff_name", "missing_identity")}
        result["observed_days"] = len(rows)
        result["partial_days"] = sum(row["data_status"] != "complete" for row in rows)
        for state in ("present", "absence", "leave", "rest", "unknown"):
            result[state+"_days"] = sum(row["attendance_state"] == state for row in rows)
        result["claim_days"] = sum(row["has_ot_claim"] for row in rows)
        for field in HOUR_FIELDS:
            result["total_"+field] = round(sum(float(row.get(field) or 0) for row in rows), 4)
        result["missing_actual_hours_rows"] = sum(row["missing_actual_hours_rows"] for row in rows)
        people.append(result)
    for (sid, state), rows in by_claim.items():
        claims.append(dict(station_id=sid, station_name=rows[0]["station_name"], claim_status=state,
                           unique_people=len({r["person_key"] for r in rows if not r["missing_identity"]}),
                           person_days=len(rows), total_ot_applied=round(sum(float(r["ot_applied"] or 0) for r in rows), 4),
                           total_ot_worked=round(sum(float(r["ot_worked"] or 0) for r in rows), 4)))
    return hubs, people, claims


def overall_report(daily, details, start, end):
    """Global distinct people/days: one person at two hubs is counted once."""
    known = [row for row in details if not row["missing_identity"]]
    result = dict(date_from=str(start), date_to=str(end), observed_hubs=len({row["station_id"] for row in daily}),
                  complete_hub_days=sum(row["data_status"] == "complete" for row in daily),
                  partial_hub_days=sum(row["data_status"] == "partial" for row in daily),
                  failed_hub_days=sum(row["data_status"] == "failed" for row in daily),
                  unique_people=len({row["person_key"] for row in known}),
                  person_days=len({(row["date"], row["person_key"]) for row in known}),
                  hub_person_days=len(details))
    for state in ("present", "absence", "leave", "rest", "unknown"):
        result[state+"_person_days"] = len({(row["date"], row["person_key"]) for row in known
                                             if row["attendance_state"] == state})
    result["unique_claim_people"] = len({row["person_key"] for row in known if row["has_ot_claim"]})
    result["claim_person_days"] = len({(row["date"], row["person_key"]) for row in known if row["has_ot_claim"]})
    for field in HOUR_FIELDS:
        result["total_"+field] = round(sum(float(row.get(field) or 0) for row in details), 4)
    result["missing_actual_hours_rows"] = sum(row["missing_actual_hours_rows"] for row in details)
    result["missing_identity_person_days"] = sum(row["missing_identity"] for row in details)
    return result


def write_csv(path, rows, columns):
    with path.open("w", newline="", encoding="utf-8-sig") as handle:
        writer = csv.DictWriter(handle, fieldnames=columns, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)


def positive_int(value):
    value = int(value)
    if value < 1:
        raise argparse.ArgumentTypeError("Phải lớn hơn 0")
    return value


def build_parser():
    parser = argparse.ArgumentParser(description="Attendance D-1 lùi một tháng: người, nghỉ, claim OT và giờ làm.")
    parser.add_argument("--hubs", type=Path, default=source.DEFAULT_HUBS)
    parser.add_argument("--station-ids", help="Chỉ lấy các hub này, cách nhau bằng dấu phẩy")
    range_start = parser.add_mutually_exclusive_group()
    range_start.add_argument("--date-from", type=date.fromisoformat, help="Ngày đầu YYYY-MM-DD, bao gồm")
    range_start.add_argument("--days", type=positive_int, help="Số ngày đã hoàn tất, ví dụ 30")
    parser.add_argument("--date-to", type=date.fromisoformat, help="Ngày cuối YYYY-MM-DD; mặc định hôm qua")
    parser.add_argument("--cookie-file", type=Path)
    parser.add_argument("--scope", choices=("ops", "fm-lm"), default="ops", help="Mặc định mọi Ops; fm-lm giống lọc roster D0")
    parser.add_argument("--page-size", type=positive_int, default=50)
    parser.add_argument("--max-pages", type=positive_int, default=100)
    parser.add_argument("--workers", type=positive_int, default=4, help="Số ngày lấy song song trong cùng hub (mặc định 4)")
    parser.add_argument("--request-delay", type=float, default=0.05, help="Giây nghỉ của mỗi worker sau một ngày (mặc định 0.05)")
    parser.add_argument("--out-dir", type=Path, help="Mặc định output/attendance/YYYY-MM-DD_YYYY-MM-DD")
    parser.add_argument("--from-raw", type=Path, help="Tổng hợp lại raw_attendance.jsonl, không gọi mạng")
    return parser


def main(argv=None):
    source._configure_stdio()
    parser = build_parser()
    args = parser.parse_args(argv)
    try:
        start, end = date_window(args)
        if not math.isfinite(args.request_delay) or args.request_delay < 0:
            raise ValueError("--request-delay phải hữu hạn và không âm")
        hubs = source.load_hubs(args.hubs)
        if args.station_ids:
            selected = {int(item.strip()) for item in args.station_ids.split(",")}
            hubs = [hub for hub in hubs if hub["station_id"] in selected]
            if selected - {hub["station_id"] for hub in hubs}:
                raise ValueError("--station-ids chứa hub không có trong --hubs")
        hubs = list({hub["station_id"]: hub for hub in hubs}.values())
    except (ValueError, OSError) as exc:
        parser.error(str(exc))
    out = args.out_dir or ROOT / "output" / "attendance" / f"{start}_{end}"
    out.mkdir(parents=True, exist_ok=True)
    daily, details, enums = [], [], {}
    lock = sess = None
    restore_error = ""
    interrupted = False
    raw_path = out / "raw_attendance.jsonl"

    def consume(item):
        day = date.fromisoformat(item["date"])
        hub = {"station_id": int(item["station_id"]), "station_name": item.get("station_name", "")}
        rows = item.get("rows") or []
        kept = filter_rows(rows, day, hub["station_id"], args.scope)
        status, error = item.get("data_status", "complete"), item.get("error", "")
        # A response entirely scoped to another hub/day is not a verified zero.
        if rows and not filter_rows(rows, day, hub["station_id"], "ops") and status == "complete":
            status = "partial"
            error = "Không có dòng khớp Event Station/ngày/Ops trong phản hồi không rỗng"
        cooked = summarize_people(kept, day, hub, enums, status)
        details.extend(cooked)
        daily.append(daily_summary(cooked, hub, day, status, error, len(rows), len(kept), item.get("api_total")))
        print(f"{day} hub={hub['station_id']} | {status} | người={len(cooked)} | "
              f"giờ={daily[-1].get('total_actual_hours')}" + (f" | {error}" if error else ""), flush=True)

    try:
        if args.from_raw:
            seen = set()
            with args.from_raw.open(encoding="utf-8-sig") as handle:
                for line in handle:
                    item = json.loads(line)
                    if item.get("type") == "metadata":
                        enums = item.get("enums", {})
                        continue
                    key = (int(item["station_id"]), item["date"])
                    if start <= date.fromisoformat(item["date"]) <= end and key[0] in {h["station_id"] for h in hubs}:
                        if key in seen:
                            raise ValueError(f"Raw file có ngày/hub trùng: {key}")
                        seen.add(key)
                        consume(item)
            for hub in hubs:
                for offset in range((end-start).days+1):
                    day = start+timedelta(days=offset)
                    if (hub["station_id"], day.isoformat()) not in seen:
                        consume(dict(**hub, date=day.isoformat(), rows=[], data_status="failed", error="Ngày/hub không có trong raw file"))
        else:
            lock = launcher.acquire_lock()
            if lock is None:
                print("Launcher hoặc export lịch sử khác đang chạy. Dừng tác vụ đó trước.")
                return 3
            if launcher.other_export_running():
                print("export_lm_hubs.py đang chạy. Chờ export hoàn tất trước khi đổi hub.")
                return 3
            sess, headers, cookie_path = build_session(args.cookie_file)
            source._ATTENDANCE_ORIGINAL_STATION = None
            original = source._remember_original_station(sess, headers)
            if original is None:
                raise ValueError("Không xác định được hub hiện tại; chưa đổi hub. Kiểm tra cookie/quyền SPX.")
            try:
                payload = sess.get(ENUM_URL, headers=headers, timeout=30).json()
                if payload.get("retcode") in (0, "0") and isinstance(payload.get("data"), dict):
                    enums = payload["data"]
            except Exception:
                pass
            with raw_path.open("w", encoding="utf-8") as raw:
                raw.write(json.dumps(dict(type="metadata", date_from=str(start), date_to=str(end),
                          scope=args.scope, enums=enums, workers=args.workers, claim_definition="ot_applied > 0"), ensure_ascii=False)+"\n")
                days = [end-timedelta(days=offset) for offset in range((end-start).days+1)]
                print(f"Attendance workers={min(args.workers, len(days))} | nghỉ mỗi ngày={args.request_delay:g}s", flush=True)
                for hub in hubs:
                    ok, switch_error = source._change_station(sess, headers, hub["station_id"])
                    results = fetch_hub_days(sess, headers, days, args) if ok else (
                        (day, ([], None, "failed", "change_station: "+str(switch_error))) for day in days)
                    try:
                        for day, (rows, total, status, error) in results:
                            item = dict(**hub, date=day.isoformat(), rows=rows, api_total=total, data_status=status, error=error)
                            raw.write(json.dumps(item, ensure_ascii=False, default=str)+"\n")
                            raw.flush()
                            consume(item)
                    finally:
                        results.close()
    except KeyboardInterrupt:
        interrupted = True
        print("Đã dừng. Giữ kết quả đã lấy và raw file để tổng hợp lại.")
    except (CookieError, OSError, ValueError) as exc:
        print(f"Lỗi: {exc}")
        restore_error = str(exc)
    finally:
        if sess:
            original = source._ATTENDANCE_ORIGINAL_STATION
            if original is not None:
                try:
                    ok, error = source._change_station(sess, headers, original)
                    if not ok:
                        restore_error += " Restore hub failed: "+str(error)
                except Exception as exc:
                    restore_error += " Restore hub failed: "+str(exc)
            sess.close()
        if lock:
            lock.close()
    daily.sort(key=lambda r: (r["date"], r["station_id"]))
    details.sort(key=lambda r: (r["date"], r["station_id"], r["person_key"]))
    period, staff, claims = period_reports(daily, details)
    overall = overall_report(daily, details, start, end)
    write_csv(out/"attendance_daily_summary.csv", daily, DAILY_COLUMNS)
    write_csv(out/"attendance_staff_daily.csv", details, DETAIL_COLUMNS)
    write_csv(out/"attendance_overall_summary.csv", [overall], tuple(overall))
    for filename, rows, fallback in [("attendance_period_summary.csv", period, ("station_id", "unique_people")),
                                      ("attendance_staff_period.csv", staff, ("station_id", "person_key")),
                                      ("attendance_claim_summary.csv", claims, ("station_id", "station_name", "claim_status", "unique_people", "person_days", "total_ot_applied", "total_ot_worked"))]:
        write_csv(out/filename, rows, tuple(rows[0]) if rows else fallback)
    report = dict(date_from=str(start), date_to=str(end), scope=args.scope, requested_hubs=len(hubs),
                  workers=args.workers, request_delay=args.request_delay,
                  expected_hub_days=len(hubs)*((end-start).days+1), fetched_hub_days=len(daily),
                  complete_hub_days=sum(r["data_status"] == "complete" for r in daily),
                  partial_hub_days=sum(r["data_status"] == "partial" for r in daily),
                  failed_hub_days=sum(r["data_status"] == "failed" for r in daily),
                  interrupted=interrupted, error=restore_error, claim_definition="ot_applied > 0",
                  notes=["Counts apply to staff returned by attendance; not the entire HR employee population.",
                         "Leave/rest flags can overlap presence; absent excludes leave/rest.",
                         "Hours use API decimal-hour fields; missing hours are never inferred from clock timestamps.",
                         "No claim approval status is inferred from OT hours or clock channels.",
                         "Period totals are observed values; check partial/failed days and missing hours."])
    (out/"run_report.json").write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    print("Kết quả:", out)
    if restore_error:
        print(restore_error)
    if interrupted:
        return 130
    return 0 if report["complete_hub_days"] == report["expected_hub_days"] and not restore_error else 1


if __name__ == "__main__":
    raise SystemExit(main())
