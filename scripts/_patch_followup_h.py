from pathlib import Path
path = Path(r"C:\lm_hub_export\export_lm_hubs.py")
src = path.read_text(encoding="utf-8")

old = '''def _fetch_ops_calendar_agency(sess, headers, station_id, agency_id):
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
    while pageno <= max_pages:'''

new = '''def _fetch_ops_calendar_agency(
    sess, headers, station_id, agency_id, max_pages=None, stop_if_unscoped=False
):
    """POST ops_calendar_list paginated for one agency_id.

    Returns (rows, error, response_total).
    On soft maintenance after partial pages, return partial rows + soft err
    so caller can continue rather than skip the hub entirely.

    stop_if_unscoped: after page 1, if total > _CALENDAR_UNSCOPED_TOTAL, return
    early so caller can switch to agency9 merge (avoid 50 pages of empty shells).
    """
    page_size = 100
    all_rows = []
    response_total = None
    pageno = 1
    if max_pages is None:
        max_pages = 50
    day_start = int(_ROSTER_DATE_FROM)
    last_soft_err = None
    while pageno <= max_pages:'''

if old not in src:
    raise SystemExit('fetch agency header missing')
src = src.replace(old, new, 1)

# After reading total on each page, add early stop
old2 = '''        raw_total = data.get("total")
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
    return all_rows, last_soft_err, response_total'''

new2 = '''        raw_total = data.get("total")
        if raw_total not in (None, ""):
            response_total = max(0, _as_int(raw_total))
        lst = data.get("list") or []
        if not isinstance(lst, list):
            lst = []
        page_rows = [x for x in lst if isinstance(x, dict)]
        all_rows.extend(page_rows)
        if (
            stop_if_unscoped
            and response_total is not None
            and int(response_total) > int(_CALENDAR_UNSCOPED_TOTAL)
        ):
            print(
                "  calendar station=%s agency=%s total=%s unscoped-early-stop pages=%s"
                % (station_id, agency_id, response_total, pageno),
                flush=True,
            )
            break
        if response_total is not None and len(all_rows) >= response_total:
            break
        if not page_rows or len(page_rows) < page_size:
            break
        pageno += 1
    return all_rows, last_soft_err, response_total'''

if old2 not in src:
    raise SystemExit('fetch agency loop missing')
src = src.replace(old2, new2, 1)

old3 = '''    rows, err, total = _fetch_ops_calendar_agency(
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
            if _calendar_row_match(r, station_id, day_start, False)[0]
        ]
        rows9, err9, total9 = _fetch_ops_calendar_agency(
            sess, headers, station_id, 9
        )
        rows = _merge_calendar_rows(matched0, rows9)'''

new3 = '''    rows, err, total = _fetch_ops_calendar_agency(
        sess,
        headers,
        station_id,
        agency_id,
        stop_if_unscoped=(agency_id == 0),
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
        # Re-scan a bounded slice of agency0 for explicit Event Station matches,
        # then merge with full agency9 (in-house) which is station-scoped.
        day_start = int(_ROSTER_DATE_FROM)
        rows0, err0, _total0 = _fetch_ops_calendar_agency(
            sess, headers, station_id, 0, max_pages=8, stop_if_unscoped=False
        )
        matched0 = [
            r
            for r in (rows0 or [])
            if _calendar_row_match(r, station_id, day_start, False)[0]
        ]
        rows9, err9, total9 = _fetch_ops_calendar_agency(
            sess, headers, station_id, 9
        )
        rows = _merge_calendar_rows(matched0, rows9)
        if err0 and not matched0:
            err = err or err0'''

if old3 not in src:
    raise SystemExit('fetch_ops merge block missing')
src = src.replace(old3, new3, 1)

path.write_text(src, encoding='utf-8')
print('early-stop ok')
