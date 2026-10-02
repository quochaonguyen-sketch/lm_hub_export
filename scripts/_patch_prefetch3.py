from pathlib import Path
path = Path(r"C:\lm_hub_export\export_lm_hubs.py")
src = path.read_text(encoding="utf-8")

# tighten calendar HTTP timeout from 60 to 45 (match attendance)
src2 = src.replace(
    "ROSTER_CALENDAR_URL, headers=headers, json=body, timeout=60",
    "ROSTER_CALENDAR_URL, headers=headers, json=body, timeout=45",
    1,
)
if src2 == src:
    raise SystemExit("calendar timeout replace failed")
src = src2

# Update default_roster_date_range docstring note about attendance lookback
old = '''    - statistic_data_list uses start=midnight, end=end_of_today.
    Override day with --date-from (unix midnight). --date-to overrides attendance end.'''
new = '''    - statistic_data_list uses start=midnight-30d (browser-style), end=end_of_today;
      rows are day-filtered client-side. count=50, paginate until empty/total.
    Override day with --date-from (unix midnight). --date-to overrides attendance end.'''
if old not in src:
    raise SystemExit("date range doc not found")
src = src.replace(old, new, 1)

path.write_text(src, encoding="utf-8")
print("calendar timeout + date doc ok")
