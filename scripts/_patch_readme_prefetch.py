from pathlib import Path
path = Path(r"C:\lm_hub_export\README.md")
src = path.read_text(encoding="utf-8")
old = """- `GET https://spx.shopee.vn/api/wfm/admin/attendance/clock/statistic_data_list?pageno=1&count=200&staff_type=2&start_time=TODAY_MIDNIGHT&end_time=END_OF_TODAY` (no station filter; fetched ONCE per roster run then filter client-side by station). Soft `API is under maintenance` / try-again retries: up to 5 tries with 1-3s backoff on both calendar and attendance"""
new = """- `GET https://spx.shopee.vn/api/wfm/admin/attendance/clock/statistic_data_list?pageno&count=50&staff_type=2&start_time=TODAY_MIDNIGHT-30d&end_time=END_OF_TODAY` (browser-style wide start; no station filter; paginate until list empty or `total` reached; fetched ONCE per roster run then day+station filter client-side). Soft maintenance retries capped at 3 (1-3s backoff). Prefetch has a 90s deadline — on timeout/fail roster continues calendar-only with `late=0`."""
if old not in src:
    # show nearby lines for debug
    for i, line in enumerate(src.splitlines(), 1):
        if "statistic_data_list" in line:
            print(i, line[:200])
    raise SystemExit("README attendance line not found")
path.write_text(src.replace(old, new, 1), encoding="utf-8")
print("README updated")
