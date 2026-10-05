import json
from pathlib import Path
import sys
sys.path.insert(0, r"C:\lm_hub_export")
from spx_cookies import build_session, resolve_cookie_file

sess, headers, used = build_session(resolve_cookie_file())
# pull full station list with names
stations = []
for pageno in range(1, 20):
    resp = sess.get(
        "https://spx.shopee.vn/api/admin/basicserver/current_user/station_list/",
        headers=headers,
        params={"count": 100, "pageno": pageno, "status_list": 0},
        timeout=30,
    )
    payload = resp.json()
    data = payload.get("data") or {}
    lst = data.get("list") or data.get("station_list") or []
    if not lst:
        break
    for st in lst:
        if isinstance(st, dict):
            stations.append({
                "id": st.get("id") or st.get("station_id"),
                "name": st.get("station_name") or st.get("name"),
            })
    if len(lst) < 100:
        break

sdd = [s for s in stations if s.get("name") and ("SDD" in str(s["name"]).upper() or "4232" in str(s.get("id")))]
ids = sorted({int(s["id"]) for s in stations if s.get("id") is not None})

# fetch one unscoped page rows for attachment
import export_lm_hubs as m
d_from, d_to = m.default_roster_date_range()
m._ROSTER_DATE_FROM = int(d_from)
m._ROSTER_DATE_TO = int(d_to)
att_start, att_end = m._attendance_query_window()
payload, err = m._get_attendance_page(sess, headers, {
    "pageno": 1, "count": 50, "staff_type": 2,
    "start_time": att_start, "end_time": att_end,
})
data = payload.get("data") if isinstance(payload, dict) else {}
lst = (data or {}).get("list") or []

for path in [
    Path(r"C:\lm_hub_export\data\smoke\raw_attendance_hub4232_latest.json"),
    Path(r"C:\lm_hub_export\data\smoke\raw_attendance_hub4232_20261002_224228.json"),
]:
    doc = json.loads(path.read_text(encoding="utf-8"))
    doc["station_list"]["all_station_ids"] = ids
    doc["station_list"]["sdd_name_matches"] = sdd
    doc["station_list"]["total_listed"] = len(ids)
    doc["unscoped_page1_when_switch_failed"]["rows"] = lst
    doc["unscoped_page1_when_switch_failed"]["error"] = err
    doc["unscoped_page1_when_switch_failed"]["total"] = (data or {}).get("total")
    doc["unscoped_page1_when_switch_failed"]["list_len"] = len(lst)
    path.write_text(json.dumps(doc, ensure_ascii=False, indent=2), encoding="utf-8")
    print("updated", path, "stations", len(ids), "sdd", sdd, "unscoped_rows", len(lst))
