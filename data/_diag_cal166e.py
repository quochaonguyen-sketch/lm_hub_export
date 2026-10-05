import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
sys.path.insert(0, r"C:\lm_hub_export")
import export_lm_hubs as m
from export_lm_hubs import (
    build_session, resolve_cookie_file, default_roster_date_range,
    _fetch_ops_calendar, _cook_roster_hub_summary,
)

cookie = resolve_cookie_file()
sess, headers, path = build_session(cookie)
d_from, d_to = default_roster_date_range()
m._ROSTER_DATE_FROM = d_from
m._ROSTER_DATE_TO = d_to
m._ROSTER_AGENCY_ID = 9
rows, err, allow_att, labor = _fetch_ops_calendar(sess, headers, 166)
print("agency9 kept", len(rows or []), "err", err)
# inspect signature via help
import inspect
sig = inspect.signature(_cook_roster_hub_summary)
print("cook sig", sig)
# try calling
out = _cook_roster_hub_summary(166, "hint", rows, [], allow_att, labor)
print("type", type(out), "len" if isinstance(out,(list,tuple)) else "", len(out) if isinstance(out,(list,tuple)) else "")
if isinstance(out, list) and out:
    print("first keys", out[0].keys() if isinstance(out[0], dict) else out[0])
    print("first", out[0] if isinstance(out[0], dict) else out)
elif isinstance(out, dict):
    print(out)

# Inspect a few att_only rows from agency0 to see why they keep
m._ROSTER_AGENCY_ID = 0
rows0, err0, allow0, labor0 = _fetch_ops_calendar(sess, headers, 166)
print("agency0 kept", len(rows0 or []))
att_only = []
for row in rows0 or []:
    lf = row.get("list") or {}
    if not lf.get("event_list") and lf.get("attendance_list"):
        att_only.append(row)
print("att_only count", len(att_only))
for row in att_only[:5]:
    at = (row.get("list") or {}).get("attendance_list") or []
    a0 = at[0] if at else {}
    print(" ops", row.get("ops_id"), "name", (row.get("ops_name") or "")[:40],
          "contract", row.get("contract_type_name"),
          "att_date", a0.get("attendance_date"), a0.get("event_date"),
          "esid", a0.get("event_station_id"),
          "cin", a0.get("clock_in_time"),
          "keys", sorted(a0.keys())[:12])
