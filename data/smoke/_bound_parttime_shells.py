from pathlib import Path
p=Path('export_lm_hubs.py')
s=p.read_text(encoding='utf-8')
s=s.replace('_CALENDAR_UNSCOPED_MAX_PAGES = 5  # bounded agency_id=0 sample before agency9 merge\n', '_CALENDAR_UNSCOPED_MAX_PAGES = 5  # bounded agency_id=0 sample before agency9 merge\n_CALENDAR_PARTTIME_SHELL_MAX = 20  # reject an obviously global empty-shell dump\n', 1)
needle='''def _filter_calendar_today_rows(rows, station_id, allow_att_without_esid):
    """Keep only rows carrying today's Event Station/attendance for this hub."""
    day_start = int(_ROSTER_DATE_FROM)
    return [
        row
        for row in (rows or [])
        if isinstance(row, dict)
        and _calendar_row_match(
            row, station_id, day_start, allow_att_without_esid
        )[0]
    ]


'''
insert=needle+'''def _calendar_part_time_labor_rows(rows, station_id, allow_att_without_esid):
    """Return a bounded set of empty-list Part-time labor shells.

    A few station responses contain a handful of explicit Part-time shells,
    while other responses are clearly a global roster dump with hundreds of
    them. Only the former are safe supplemental labor evidence.
    """
    day_start = int(_ROSTER_DATE_FROM)
    candidates = [
        row
        for row in (rows or [])
        if _is_part_time_row(row)
        and not _calendar_row_match(
            row, station_id, day_start, allow_att_without_esid
        )[0]
    ]
    if len(candidates) > int(_CALENDAR_PARTTIME_SHELL_MAX):
        return []
    return candidates


'''
if needle not in s: raise SystemExit('filter needle not found')
s=s.replace(needle,insert,1)
old='''            labor_only_rows = [
                r for r in (rows or [])
                if _is_part_time_row(r)
                and not _calendar_row_match(r, station_id, day_start, False)[0]
            ]
'''
new='''            labor_only_rows = _calendar_part_time_labor_rows(
                rows, station_id, False
            )
'''
if old not in s: raise SystemExit('merged extraction not found')
s=s.replace(old,new,1)
old='''    labor_only_rows = [
        r for r in (rows or [])
        if _is_part_time_row(r)
        and not _calendar_row_match(r, station_id, int(_ROSTER_DATE_FROM), allow_att_without_esid)[0]
    ]
'''
new='''    labor_only_rows = _calendar_part_time_labor_rows(
        rows, station_id, allow_att_without_esid
    )
'''
if old not in s: raise SystemExit('normal extraction not found')
s=s.replace(old,new,1)
p.write_text(s,encoding='utf-8')
