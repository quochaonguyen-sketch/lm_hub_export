import sys, io, json
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
print("agency0 kept", len(rows0 or []), "allow_att", allow0)
att_only = []
ev_only = []
for row in rows0 or []:
    lf = row.get("list") or {}
    if lf.get("event_list"):
        ev_only.append(row)
    elif lf.get("attendance_list"):
        att_only.append(row)
print("ev_only", len(ev_only), "att_only", len(att_only))
for row in att_only[:6]:
    at = (row.get("list") or {}).get("attendance_list") or []
    a0 = at[0] if at else {}
    print("ATT_ONLY ops=%s contract=%s agency=%s att_date=%s event_date=%s esid=%s cin=%s station_fields=%s" % (
        row.get("ops_id"),
        row.get("contract_type_name"),
        row.get("agency_name"),
        a0.get("attendance_date"),
        a0.get("event_date"),
        a0.get("event_station_id"),
        a0.get("clock_in_time"),
        {k:a0.get(k) for k in a0 if "station" in k.lower()},
    ))
out = _cook_roster_hub_summary(rows0, [], 166, "hint", allow_att_without_esid=allow0, cal_labor_rows=labor0)
print("COOK agency0", {k:out.get(k) for k in ("scheduled_count","present_count","fte_count","os_count","bpo_count","attendance_pct","event_date_iso","notes")})

m._ROSTER_AGENCY_ID = 9
rows9, err9, allow9, labor9 = _fetch_ops_calendar(sess, headers, 166)
out9 = _cook_roster_hub_summary(rows9, [], 166, "hint", allow_att_without_esid=allow9, cal_labor_rows=labor9)
print("COOK agency9", {k:out9.get(k) for k in ("scheduled_count","present_count","fte_count","os_count","bpo_count","attendance_pct","event_date_iso","notes")})

diag = {
    "date_from": d_from,
    "date_from_iso": m._unix_to_iso_saigon(d_from),
    "user_example_ts": 1790874000,
    "date_matches_user_example": d_from == 1790874000,
    "hub166_csv": {"scheduled":44,"present":43},
    "agency0": {"kept": len(rows0 or []), "ev_only": len(ev_only), "att_only": len(att_only),
                "cook_scheduled": out.get("scheduled_count"), "cook_present": out.get("present_count")},
    "agency9": {"kept": len(rows9 or []), "cook_scheduled": out9.get("scheduled_count"), "cook_present": out9.get("present_count")},
    "user_rule_expected_scheduled_present": [12, 12],
}
with open(r"C:\lm_hub_export\data\_diag_cal166_summary.json","w",encoding="utf-8") as f:
    json.dump(diag, f, ensure_ascii=False, indent=2)
print("SUMMARY", json.dumps(diag, ensure_ascii=False, indent=2))
