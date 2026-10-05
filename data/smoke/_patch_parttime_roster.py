from pathlib import Path
p=Path('export_lm_hubs.py')
s=p.read_text(encoding='utf-8')
old='''def _map_labor_type(agency, contract):
    """Map agency / contract strings -> FTE | OS | BPO.

    Order (user rule):
      1) Part-time (contract or agency) -> OS  (do not drop OS for in-house label)
      2) agency in-house / inhouse -> FTE
      3) else contract Full-time -> BPO
    """
    agency_s = str(agency or "").strip().lower()
    contract_s = str(contract or "").strip().lower()
    if (
        "part-time" in contract_s
        or "part time" in contract_s
        or "part-time" in agency_s
        or "part time" in agency_s
    ):
        return "OS"
    if "in-house" in agency_s or "inhouse" in agency_s:
        return "FTE"
    if "full-time" in contract_s or "full time" in contract_s:
        return "BPO"
    return "FTE"


'''
new='''def _map_labor_type(agency, contract):
    """Map agency / contract strings -> FTE | OS | BPO.

    Part-time is authoritative and maps to OS before agency (GRG/AGR/SKT)
    or in-house labels are considered.
    """
    def normalize(value):
        text = str(value or "").strip().lower()
        # APIs/UI can use several Unicode dash characters.
        return re.sub(r"[\\u2010-\\u2015\\u2212]", "-", text)

    agency_s = normalize(agency)
    contract_s = normalize(contract)
    blob = "%s %s" % (agency_s, contract_s)
    if (
        "part-time" in blob
        or "part time" in blob
        or "parttime" in blob
    ):
        return "OS"
    if "in-house" in agency_s or "inhouse" in agency_s:
        return "FTE"
    if "full-time" in contract_s or "full time" in contract_s:
        return "BPO"
    return "FTE"


def _is_part_time_row(row):
    """True when a calendar/attendance row explicitly says Part-time."""
    if not isinstance(row, dict):
        return False
    agency, contract = _row_agency_contract(row)
    return _map_labor_type(agency, contract) == "OS" and (
        "part" in str(agency or "").lower()
        or "part" in str(contract or "").lower()
    )


def _row_identity_tokens(row):
    """Return stable staff tokens for de-duplicating calendar/attendance rows."""
    if not isinstance(row, dict):
        return set()
    tokens = set()
    for key in ("ops_id", "biz_staff_id", "staff_id", "employee_id"):
        value = row.get(key)
        if value not in (None, ""):
            tokens.add("id:" + str(value).strip().lower())
    for key in ("ops_name", "staff_name", "employee_name"):
        value = str(row.get(key) or "").strip().lower()
        if value:
            tokens.add("name:" + value)
    return tokens


'''
if old not in s: raise SystemExit('map block not found')
s=s.replace(old,new,1)
old='''def _fetch_ops_calendar(sess, headers, station_id):
    """POST ops_calendar_list paginated. Returns (rows, error, allow_att_without_esid).
'''
new='''def _fetch_ops_calendar(sess, headers, station_id):
    """POST ops_calendar_list paginated.

    Returns ``(kept_rows, error, allow_att_without_esid, labor_only_rows)``.
    Some agency-0 responses contain today's Part-time people as empty ``list``
    shells. They cannot contribute scheduled/present counts, but their explicit
    Part-time label is retained for the labor mix (the UI attendance table does
    the same). Attendance rows are merged separately when they carry a station.
    """
'''
if old not in s: raise SystemExit('fetch doc block not found')
s=s.replace(old,new,1)
# Return tuples in _fetch_ops_calendar only
s=s.replace('return [], err or err9, False\n', 'return [], err or err9, False, []\n', 1)
s=s.replace('''            rows = _filter_calendar_today_rows(rows, station_id, False)
            print(
''','''            labor_only_rows = [
                r for r in (rows or [])
                if _is_part_time_row(r)
                and not _calendar_row_match(r, station_id, day_start, False)[0]
            ]
            rows = _filter_calendar_today_rows(rows, station_id, False)
            print(
''',1)
s=s.replace('''            return rows, None, False

    if err and not rows:
        return [], err, allow_att_without_esid
    # Drop old/future/other-hub shells immediately after fetch.
    filtered_rows = _filter_calendar_today_rows(
        rows, station_id, allow_att_without_esid
    )
''','''            return rows, None, False, labor_only_rows

    if err and not rows:
        return [], err, allow_att_without_esid, []
    # Keep explicit Part-time shells for labor only; do not change schedule
    # counts because an empty list has no station/date attendance evidence.
    labor_only_rows = [
        r for r in (rows or [])
        if _is_part_time_row(r)
        and not _calendar_row_match(r, station_id, int(_ROSTER_DATE_FROM), allow_att_without_esid)[0]
    ]
    # Drop old/future/other-hub shells immediately after fetch.
    filtered_rows = _filter_calendar_today_rows(
        rows, station_id, allow_att_without_esid
    )
''',1)
s=s.replace('''    return filtered_rows, None if filtered_rows or not err else err, allow_att_without_esid


def _attendance_query_window():
''','''    return (
        filtered_rows,
        None if filtered_rows or not err else err,
        allow_att_without_esid,
        labor_only_rows,
    )


def _attendance_query_window():
''',1)
# Cooker signature and add labor-only logic
s=s.replace('''    att_err=None,
    allow_att_without_esid=False,
):
''','''    att_err=None,
    allow_att_without_esid=False,
    cal_labor_rows=None,
):
''',1)
# Insert after cal loop before labeled detection
needle='''        else:
            cal_fte += 1

    # Detect whether kept calendar rows actually expose agency/contract labels.
'''
replacement='''        else:
            cal_fte += 1

    # Empty-list Part-time shells are intentionally excluded from schedule
    # counts, but remain valid OS labor evidence from the station calendar.
    cal_tokens = set()
    for row in cal_rows or []:
        if isinstance(row, dict):
            cal_tokens.update(_row_identity_tokens(row))
    supplemental_os = 0
    for row in cal_labor_rows or []:
        if not _is_part_time_row(row):
            continue
        if _row_identity_tokens(row) & cal_tokens:
            continue
        supplemental_os += 1

    # Detect whether kept calendar rows actually expose agency/contract labels.
'''
if needle not in s: raise SystemExit('cooker insertion needle not found')
s=s.replace(needle,replacement,1)
# Replace labor selection block
old='''    # Primary = calendar kept rows. Secondary = attendance only when calendar
    # has no agency/contract labels (attendance mix is often incomplete).
    if cal_labeled > 0 or att_labor_n == 0:
        fte, os_n, bpo = cal_fte, cal_os, cal_bpo
        labor_source = "calendar"
    else:
        fte, os_n, bpo = att_fte, att_os, att_bpo
        labor_source = "attendance"

    late_count = sum(1 for r in (att_rows or []) if _is_late_attendance_row(r))
'''
new='''    # Primary = calendar kept rows. Add unmatched attendance rows when the
    # calendar dropped them (notably Part-time), without double-counting staff
    # present in both payloads. If calendar labels are absent, preserve the
    # historical attendance-only fallback.
    att_extra_fte = att_extra_os = att_extra_bpo = 0
    if cal_labeled > 0:
        for row in att_rows or []:
            if not isinstance(row, dict):
                continue
            agency, contract = _row_agency_contract(row)
            if not str(agency or "").strip() and not str(contract or "").strip():
                continue
            if _row_identity_tokens(row) & cal_tokens:
                continue
            labor = _map_labor_type(agency, contract)
            if labor == "OS":
                att_extra_os += 1
            elif labor == "BPO":
                att_extra_bpo += 1
            else:
                att_extra_fte += 1
    if cal_labeled > 0 or att_labor_n == 0:
        fte = cal_fte + att_extra_fte
        os_n = cal_os + supplemental_os + att_extra_os
        bpo = cal_bpo + att_extra_bpo
        labor_source = "calendar+attendance" if (supplemental_os or att_extra_fte or att_extra_os or att_extra_bpo) else "calendar"
    else:
        fte, os_n, bpo = att_fte, att_os, att_bpo
        labor_source = "attendance"

    # Attendance is preferred for late status. Calendar event statuses fill
    # the gap when the attendance endpoint returns another station/page.
    att_tokens = set()
    late_count = 0
    for row in att_rows or []:
        if _is_late_attendance_row(row):
            late_count += 1
            att_tokens.update(_row_identity_tokens(row))
    for row in cal_rows or []:
        if not isinstance(row, dict):
            continue
        if _row_identity_tokens(row) & att_tokens:
            continue
        keep, _present = _calendar_row_match(row, station_id, day_start, allow_att_without_esid)
        if not keep or not isinstance(row.get("list"), dict):
            continue
        late_here = False
        for entries in (row["list"].get("event_list") or [], row["list"].get("attendance_list") or []):
            for entry in entries:
                if not isinstance(entry, dict):
                    continue
                if _is_late_attendance_row(entry):
                    late_here = True
                    break
            if late_here:
                break
        if late_here:
            late_count += 1
'''
if old not in s: raise SystemExit('labor selection block not found')
s=s.replace(old,new,1)
# fetch_one unpack/pass
s=s.replace('''        cal_rows, cal_err, allow_att = _fetch_ops_calendar(
            sess, headers, station_id
        )
''','''        cal_rows, cal_err, allow_att, cal_labor_rows = _fetch_ops_calendar(
            sess, headers, station_id
        )
''',1)
s=s.replace('''            att_err,
            allow_att_without_esid=bool(allow_att),
        )
''','''            att_err,
            allow_att_without_esid=bool(allow_att),
            cal_labor_rows=cal_labor_rows,
        )
''',1)
p.write_text(s,encoding='utf-8')
print('updated export_lm_hubs.py')
