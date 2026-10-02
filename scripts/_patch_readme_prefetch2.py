from pathlib import Path
path = Path(r"C:\lm_hub_export\README.md")
lines = path.read_text(encoding="utf-8").splitlines()
idx = None
for i, line in enumerate(lines):
    if "statistic_data_list" in line and "count=" in line:
        idx = i
        break
if idx is None:
    raise SystemExit("not found")
lines[idx] = (
    "- `GET https://spx.shopee.vn/api/wfm/admin/attendance/clock/statistic_data_list"
    "?pageno&count=50&staff_type=2&start_time=TODAY_MIDNIGHT-30d&end_time=END_OF_TODAY` "
    "(browser-style wide start; no station filter; paginate until list empty or `total` reached; "
    "fetched ONCE per roster run then day+station filter client-side). Soft maintenance retries "
    "capped at 3 (1-3s backoff). Prefetch has a 90s deadline - on timeout/fail roster continues "
    "calendar-only with `late=0`."
)
path.write_text("\n".join(lines) + "\n", encoding="utf-8")
print("fixed", idx + 1)
print(lines[idx][:180])
