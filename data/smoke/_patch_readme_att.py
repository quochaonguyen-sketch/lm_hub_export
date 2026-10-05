from pathlib import Path
rt = Path("README.md").read_text(encoding="utf-8")
start = rt.find("today-only request; no station filter")
end = rt.find("\n- Calendar keep filter", start)
print("span", start, end)
print(repr(rt[start:end]))
new = (
    "today-only; **current-station scoped** ? exporter POSTs "
    "`/api/admin/basicserver/change_station/` per hub first, then GETs this list; "
    "a bare `station_id` query for another hub returns empty; cookie user must "
    "include that hub in `current_user/station_list`). Paginate until list empty "
    "or `total` reached; cached per hub. Soft maintenance retries capped at **3** "
    "(1-3s backoff). On change_station fail, roster continues calendar-only for "
    "that hub (`late=0` from attendance)."
)
if start < 0 or end < 0:
    raise SystemExit("markers missing")
Path("README.md").write_text(rt[:start] + new + rt[end:], encoding="utf-8")
print("readme patched")
