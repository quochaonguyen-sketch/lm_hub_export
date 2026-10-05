import sys, io, json, inspect
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
m._ROSTER_AGENCY_ID = 0
rows0, err0, allow0, labor0 = _fetch_ops_calendar(sess, headers, 166)
out = _cook_roster_hub_summary(rows0, [], 166, "hint", allow_att_without_esid=allow0, cal_labor_rows=labor0)
print("cook type", type(out))
if isinstance(out, list):
    print("list len", len(out))
    if out and isinstance(out[0], dict):
        print("row0", {k:out[0].get(k) for k in ("scheduled_count","present_count","fte_count","os_count","bpo_count")})
        out = out[0]
elif isinstance(out, dict):
    print("dict", {k:out.get(k) for k in ("scheduled_count","present_count","fte_count","os_count","bpo_count")})
m._ROSTER_AGENCY_ID = 9
rows9, err9, allow9, labor9 = _fetch_ops_calendar(sess, headers, 166)
out9 = _cook_roster_hub_summary(rows9, [], 166, "hint", allow_att_without_esid=allow9, cal_labor_rows=labor9)
if isinstance(out9, list) and out9:
    out9 = out9[0]
print("agency9 cook", {k:out9.get(k) for k in ("scheduled_count","present_count","fte_count","os_count","bpo_count")})
ev = sum(1 for r in (rows0 or []) if (r.get("list") or {}).get("event_list"))
att = sum(1 for r in (rows0 or []) if not (r.get("list") or {}).get("event_list") and (r.get("list") or {}).get("attendance_list"))
diag = {
  "date_from": d_from,
  "date_iso": m._unix_to_iso_saigon(d_from),
  "matches_user_ts_1790874000": d_from == 1790874000,
  "csv_166": {"scheduled": 44, "present": 43},
  "agency0_kept": len(rows0 or []),
  "agency0_ev_only": ev,
  "agency0_att_only": att,
  "agency0_cook": {k: out.get(k) for k in ("scheduled_count","present_count","fte_count","os_count","bpo_count")},
  "agency9_kept": len(rows9 or []),
  "agency9_cook": {k: out9.get(k) for k in ("scheduled_count","present_count","fte_count","os_count","bpo_count")},
  "user_rule_event_list_only": {"scheduled": 12, "present": 12},
}
json.dump(diag, open(r"C:\lm_hub_export\data\_diag_cal166_summary.json","w",encoding="utf-8"), indent=2, ensure_ascii=False)
print(json.dumps(diag, indent=2, ensure_ascii=False))
