from pathlib import Path
path = Path(r"C:\lm_hub_export\README.md")
src = path.read_text(encoding="utf-8")
# Find ops_calendar section and add note if not present
needle = "ops_calendar_list"
idx = None
for i, line in enumerate(src.splitlines()):
    if "Event Station" in line or "event_station_id only" in line:
        print("already documented", i+1)
        break
    if "ops_calendar/ops_calendar_list" in line and idx is None:
        idx = i
else:
    lines = src.splitlines()
    # insert after attendance line we updated earlier
    for i, line in enumerate(lines):
        if "late=0" in line and "statistic_data_list" in line:
            insert_at = i + 1
            break
    else:
        insert_at = None
    if insert_at is not None:
        note = (
            "- Calendar keep filter uses **Event Station only** (`event_list[].event_station_id` / "
            "`attendance_list[].event_station_id`); never Profile Station. Part-time -> OS first. "
            "If `agency_id=0` returns a huge unscoped total, merge with `agency_id=9` + event-matched rows. "
            "Maintenance hubs get stronger retries + a second pass."
        )
        lines.insert(insert_at, note)
        path.write_text("\n".join(lines) + "\n", encoding="utf-8")
        print("README note inserted at", insert_at+1)
    else:
        print("no insert point")
