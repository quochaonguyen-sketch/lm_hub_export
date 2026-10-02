from pathlib import Path

path = Path(r"C:\lm_hub_export\export_lm_hubs.py")
src = path.read_text(encoding="utf-8")

# Attendance filter: event_station_id ONLY
old = '''def _filter_attendance_for_station(all_rows, station_id):
    day_start = int(_ROSTER_DATE_FROM)
    sid_i = int(station_id)
    filtered = []
    for row in all_rows or []:
        if not isinstance(row, dict):
            continue
        raw_sid = row.get("event_station_id")
        if raw_sid is None:
            raw_sid = row.get("station_id")
        try:
            if int(raw_sid) == sid_i and _attendance_row_matches_day(row, day_start):
                filtered.append(row)
        except (TypeError, ValueError):
            continue
    return filtered'''

new = '''def _filter_attendance_for_station(all_rows, station_id):
    """Filter attendance rows by Event Station only (event_station_id).

    Never match profile_station_id / station_id. Rows without event_station_id
    are dropped (cannot attribute to a hub).
    """
    day_start = int(_ROSTER_DATE_FROM)
    sid_i = int(station_id)
    filtered = []
    for row in all_rows or []:
        if not isinstance(row, dict):
            continue
        raw_sid = row.get("event_station_id")
        if raw_sid in (None, ""):
            continue
        try:
            if int(raw_sid) == sid_i and _attendance_row_matches_day(row, day_start):
                filtered.append(row)
        except (TypeError, ValueError):
            continue
    return filtered'''

if old not in src:
    raise SystemExit("filter_attendance not found")
src = src.replace(old, new, 1)

# cook signature + match calls
old = '''def _cook_roster_hub_summary(
    cal_rows, att_rows, station_id, station_name_hint, cal_err=None, att_err=None
):
    """Cook one hub-summary row from calendar + attendance.

    Labor PRIMARY: kept ops_calendar rows via agency_name/contract_type_name.
    Labor SECONDARY: attendance agency/contract_type when those fields exist.
    Late always from attendance when available.
    """
    day_start = int(_ROSTER_DATE_FROM)
    scheduled = 0
    present = 0
    cal_fte = cal_os = cal_bpo = 0
    station_name = station_name_hint or ""

    for row in cal_rows or []:
        if not isinstance(row, dict):
            continue
        keep, is_present = _calendar_row_match(row, station_id, day_start)
        if not keep:
            continue
        scheduled += 1
        if is_present:
            present += 1
        labor = _map_labor_type(*_row_agency_contract(row))
        if labor == "OS":
            cal_os += 1
        elif labor == "BPO":
            cal_bpo += 1
        else:
            cal_fte += 1

    # Detect whether kept calendar rows actually expose agency/contract labels.
    cal_labeled = 0
    for row in cal_rows or []:
        if not isinstance(row, dict):
            continue
        keep, _is_present = _calendar_row_match(row, station_id, day_start)
        if not keep:
            continue
        agency, contract = _row_agency_contract(row)
        if str(agency or "").strip() or str(contract or "").strip():
            cal_labeled += 1'''

new = '''def _cook_roster_hub_summary(
    cal_rows,
    att_rows,
    station_id,
    station_name_hint,
    cal_err=None,
    att_err=None,
    allow_att_without_esid=False,
):
    """Cook one hub-summary row from calendar + attendance.

    Labor PRIMARY: kept ops_calendar rows via agency_name/contract_type_name.
    Labor SECONDARY: attendance agency/contract_type when those fields exist.
    Late always from attendance when available.
    """
    day_start = int(_ROSTER_DATE_FROM)
    scheduled = 0
    present = 0
    cal_fte = cal_os = cal_bpo = 0
    station_name = station_name_hint or ""

    for row in cal_rows or []:
        if not isinstance(row, dict):
            continue
        keep, is_present = _calendar_row_match(
            row, station_id, day_start, allow_att_without_esid
        )
        if not keep:
            continue
        scheduled += 1
        if is_present:
            present += 1
        labor = _map_labor_type(*_row_agency_contract(row))
        if labor == "OS":
            cal_os += 1
        elif labor == "BPO":
            cal_bpo += 1
        else:
            cal_fte += 1

    # Detect whether kept calendar rows actually expose agency/contract labels.
    cal_labeled = 0
    for row in cal_rows or []:
        if not isinstance(row, dict):
            continue
        keep, _is_present = _calendar_row_match(
            row, station_id, day_start, allow_att_without_esid
        )
        if not keep:
            continue
        agency, contract = _row_agency_contract(row)
        if str(agency or "").strip() or str(contract or "").strip():
            cal_labeled += 1'''

if old not in src:
    raise SystemExit("cook header not found")
src = src.replace(old, new, 1)

# fetch_one roster branch
old = '''        cal_rows, cal_err = _fetch_ops_calendar(sess, headers, station_id)
        att_rows, att_err = _fetch_attendance_stats(sess, headers, station_id)
        ms = (time.perf_counter() - t0) * 1000
        if cal_err:
            return {
                "ok": False,
                "station_id": station_id,
                "station_name": station_name_hint,
                "fetched_at": fetched_at,
                "http": None,
                "retcode": None,
                "request_body": req_body,
                "ms": ms,
                "error": cal_err,
                "rows": [],
            }
        rows = _cook_roster_hub_summary(
            cal_rows, att_rows, station_id, station_name_hint, None, att_err
        )'''

new = '''        cal_rows, cal_err, allow_att = _fetch_ops_calendar(
            sess, headers, station_id
        )
        att_rows, att_err = _fetch_attendance_stats(sess, headers, station_id)
        ms = (time.perf_counter() - t0) * 1000
        if cal_err:
            return {
                "ok": False,
                "station_id": station_id,
                "station_name": station_name_hint,
                "fetched_at": fetched_at,
                "http": None,
                "retcode": None,
                "request_body": req_body,
                "ms": ms,
                "error": cal_err,
                "rows": [],
            }
        rows = _cook_roster_hub_summary(
            cal_rows,
            att_rows,
            station_id,
            station_name_hint,
            None,
            att_err,
            allow_att_without_esid=bool(allow_att),
        )'''

if old not in src:
    raise SystemExit("fetch_one roster not found")
src = src.replace(old, new, 1)

path.write_text(src, encoding="utf-8")
print("pass E ok")
