from pathlib import Path
p = Path(r"C:\lm_hub_export\README.md")
t = p.read_text(encoding="utf-8")
old = "- Calendar keep filter uses **today + Event Station only** (`event_list[].event_station_id` / `attendance_list[].event_station_id`); never Profile Station."
# find the actual line
for i, line in enumerate(t.splitlines(), 1):
    if "Calendar keep filter" in line:
        print(i, repr(line[:200]))
new = "- Calendar keep filter for scheduled/present uses **today + Event Station only** via non-empty `event_list[].event_station_id` (never Profile Station; never attendance_list-only)."
# replace any line starting with Calendar keep filter
import re
t2, n = re.subn(
    r"- Calendar keep filter[^\n]*",
    new,
    t,
    count=1,
)
print("replaced", n)
# also Calendar soft line about default **0** if any leftover
for i, line in enumerate(t2.splitlines(), 1):
    if "default **0**" in line or ("agency_id` mac dinh **0**" in line):
        print("STALE", i, line[:120])
p.write_text(t2, encoding="utf-8")
print("ok")
