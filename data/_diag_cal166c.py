import sys, io, json
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
sys.path.insert(0, r"C:\lm_hub_export")
from export_lm_hubs import (
    build_session, resolve_cookie_file, default_roster_date_range,
    _fetch_ops_calendar, _cook_roster_hub_row, _fetch_attendance_rows,
    _ROSTER_DATE_FROM, _ROSTER_DATE_TO, _ROSTER_AGENCY_ID,
)
import export_lm_hubs as m

cookie = resolve_cookie_file()
sess, headers, path = build_session(cookie)
d_from, d_to = default_roster_date_range()
m._ROSTER_DATE_FROM = d_from
m._ROSTER_DATE_TO = d_to
m._ROSTER_AGENCY_ID = 0  # current default

print("fetching calendar station 166 agency_id=0 ...")
rows, err, allow_att, labor = _fetch_ops_calendar(sess, headers, 166)
print("err", err, "allow_att", allow_att, "kept_rows", len(rows or []), "labor_only", len(labor or []))

# classify kept
ev_only = att_only = both = 0
present_n = 0
for row in rows or []:
    lf = row.get("list") or {}
    ev = bool(lf.get("event_list"))
    att = bool(lf.get("attendance_list"))
    if ev and att: both += 1
    elif ev: ev_only += 1
    elif att: att_only += 1
    from export_lm_hubs import _calendar_row_match
    k,p = _calendar_row_match(row, 166, d_from, allow_att)
    if p: present_n += 1
print("kept breakdown ev_only", ev_only, "att_only", att_only, "both", both, "present_match", present_n)

# also try agency 9 only
m._ROSTER_AGENCY_ID = 9
print("fetching calendar station 166 agency_id=9 ...")
rows9, err9, allow9, labor9 = _fetch_ops_calendar(sess, headers, 166)
print("err", err9, "kept", len(rows9 or []), "labor_only", len(labor9 or []))
ev_only=att_only=both=0
for row in rows9 or []:
    lf = row.get("list") or {}
    ev = bool(lf.get("event_list")); att = bool(lf.get("attendance_list"))
    if ev and att: both += 1
    elif ev: ev_only += 1
    elif att: att_only += 1
print("agency9 kept breakdown ev_only", ev_only, "att_only", att_only, "both", both)

# cook with agency0 result if we still have it - refetch 0
m._ROSTER_AGENCY_ID = 0
rows, err, allow_att, labor = _fetch_ops_calendar(sess, headers, 166)
att_rows = []
try:
    att_rows, att_err = _fetch_attendance_rows(sess, headers, 166)
    print("attendance rows", len(att_rows or []), "err", att_err)
except Exception as e:
    print("attendance fetch failed", e)
    att_rows = []

cooked = _cook_roster_hub_row(
    166, "50-HCM Binh Chanh/Vinh Loc Hub",
    rows, att_rows, allow_att, labor
)
print("COOKED", {k: cooked.get(k) for k in (
    "scheduled_count","present_count","late_count","fte_count","os_count","bpo_count",
    "attendance_pct","event_date_iso","notes")})

# simulate user rule cook from agency0 kept + agency9
def user_rule_counts(cal_rows):
    sched=pres=0
    for row in cal_rows or []:
        if not m._is_ops_fm_lm_row(row):
            continue
        lf = row.get("list")
        if not isinstance(lf, dict):
            continue
        evs = lf.get("event_list") or []
        if not evs:
            continue
        matched=False; is_pres=False
        for ev in evs:
            if not isinstance(ev, dict):
                continue
            esid = ev.get("event_station_id")
            try:
                if esid in (None,"") or int(esid)!=166: continue
            except Exception:
                continue
            ed = ev.get("event_date")
            if ed is None: ed = ev.get("attendance_date")
            if ed is not None:
                dm = m._attendance_date_matches(ed, d_from)
                if dm is False: continue
            matched=True
            if ev.get("clock_in_time") not in (None,"",0,"0"):
                is_pres=True
        if matched:
            sched += 1
            if is_pres: pres += 1
    return sched, pres

print("user_rule on agency0-fetch kept", user_rule_counts(rows))
m._ROSTER_AGENCY_ID = 9
rows9, err9, allow9, labor9 = _fetch_ops_calendar(sess, headers, 166)
print("user_rule on agency9-fetch kept", user_rule_counts(rows9))
