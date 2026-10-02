from pathlib import Path

path = Path(r"C:\lm_hub_export\export_lm_hubs.py")
src = path.read_text(encoding="utf-8")

start = src.index("def _fetch_ops_calendar(sess, headers, station_id):")
end = src.index("def _attendance_query_window():")

new = r'''def _fetch_ops_calendar_agency(sess, headers, station_id, agency_id):
    """POST ops_calendar_list paginated for one agency_id.

    Returns (rows, error, response_total).
    On soft maintenance after partial pages, return partial rows + soft err
    so caller can continue rather than skip the hub entirely.
    """
    page_size = 100
    all_rows = []
    response_total = None
    pageno = 1
    max_pages = 50
    day_start = int(_ROSTER_DATE_FROM)
    last_soft_err = None
    while pageno <= max_pages:
        body = {
            "pageno": pageno,
            "count": page_size,
            "station_id": int(station_id),
            "agency_id": int(agency_id),
            "range_start_time": day_start,
            "range_end_time": day_start,
        }
        payload, err = _post_ops_calendar_page(sess, headers, body)
        if err:
            if all_rows and _soft_api_message(err):
                last_soft_err = err
                print(
                    "  calendar station=%s agency=%s partial=%s soft_stop=%s"
                    % (station_id, agency_id, len(all_rows), err),
                    flush=True,
                )
                break
            return all_rows, err, response_total
        data = payload.get("data") if isinstance(payload, dict) else None
        if not isinstance(data, dict):
            if all_rows:
                break
            return [], "empty ops_calendar data", response_total
        raw_total = data.get("total")
        if raw_total not in (None, ""):
            response_total = max(0, _as_int(raw_total))
        lst = data.get("list") or []
        if not isinstance(lst, list):
            lst = []
        page_rows = [x for x in lst if isinstance(x, dict)]
        all_rows.extend(page_rows)
        if response_total is not None and len(all_rows) >= response_total:
            break
        if not page_rows or len(page_rows) < page_size:
            break
        pageno += 1
    return all_rows, last_soft_err, response_total


def _row_has_event_station(row, station_id):
    """True if event_list has an item with event_station_id == hub."""
    lf = row.get("list")
    if not isinstance(lf, dict):
        return False
    sid_i = int(station_id)
    for ev in lf.get("event_list") or []:
        if not isinstance(ev, dict):
            continue
        raw = ev.get("event_station_id")
        if raw in (None, ""):
            continue
        try:
            if int(raw) == sid_i:
                return True
        except (TypeError, ValueError):
            continue
    return False


def _merge_calendar_rows(primary, extra):
    """Merge calendar person rows by ops_id (fallback: identity tuple)."""
    out = []
    seen = set()

    def key(row):
        oid = row.get("ops_id")
        if oid not in (None, ""):
            return ("ops", str(oid))
        return (
            "fallback",
            str(row.get("ops_name") or ""),
            str(row.get("agency_name") or ""),
            str(row.get("contract_type_name") or ""),
        )

    for row in list(primary or []) + list(extra or []):
        if not isinstance(row, dict):
            continue
        k = key(row)
        if k in seen:
            continue
        seen.add(k)
        out.append(row)
    return out


def _fetch_ops_calendar(sess, headers, station_id):
    """POST ops_calendar_list paginated. Returns (rows, error, allow_att_without_esid).

    agency_id=0 sometimes returns a huge unscoped dump (thousands of empty
    Part-time shells). When total looks unscoped, also fetch agency_id=9
    (in-house) and keep agency0 rows that have matching Event Station events.
    """
    agency_id = int(_ROSTER_AGENCY_ID)
    rows, err, total = _fetch_ops_calendar_agency(
        sess, headers, station_id, agency_id
    )
    allow_att_without_esid = True
    if total is not None and int(total) > int(_CALENDAR_UNSCOPED_TOTAL):
        allow_att_without_esid = False

    if agency_id == 0 and total is not None and int(total) > int(
        _CALENDAR_UNSCOPED_TOTAL
    ):
        print(
            "  calendar station=%s agency0 total=%s unscoped; merge agency9 + event-matched"
            % (station_id, total),
            flush=True,
        )
        # Keep only agency0 rows that explicitly list this Event Station.
        day_start = int(_ROSTER_DATE_FROM)
        matched0 = [
            r
            for r in rows
            if _row_has_event_station(r, station_id)
            or _calendar_row_match(r, station_id, day_start, False)[0]
        ]
        rows9, err9, total9 = _fetch_ops_calendar_agency(
            sess, headers, station_id, 9
        )
        rows = _merge_calendar_rows(matched0, rows9)
        # Prefer hard err only when both fetches failed with no rows.
        if err and err9 and not rows:
            return [], err or err9, False
        if err9 and not rows9 and not matched0:
            # agency9 failed but we may still have matched0
            pass
        print(
            "  calendar station=%s merged rows=%s (matched0=%s agency9=%s total9=%s)"
            % (
                station_id,
                len(rows),
                len(matched0),
                len(rows9 or []),
                total9,
            ),
            flush=True,
        )
        return rows, None, False

    if err and not rows:
        return [], err, allow_att_without_esid
    # Soft partial success: continue with rows we have.
    return rows, None if rows else err, allow_att_without_esid


'''

src = src[:start] + new + src[end:]
path.write_text(src, encoding="utf-8")
print("fetch_ops_calendar replaced")
