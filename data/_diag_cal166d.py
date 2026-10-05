import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
sys.path.insert(0, r"C:\lm_hub_export")
import export_lm_hubs as m
from export_lm_hubs import (
    build_session, resolve_cookie_file, default_roster_date_range,
    _fetch_ops_calendar, _cook_roster_hub_summary, _calendar_row_match,
)

cookie = resolve_cookie_file()
sess, headers, path = build_session(cookie)
d_from, d_to = default_roster_date_range()
m._ROSTER_DATE_FROM = d_from
m._ROSTER_DATE_TO = d_to

def user_rule_counts(cal_rows, station_id=166):
    sched=pres=0
    details=[]
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
                if esid in (None,"") or int(esid)!=int(station_id):
                    continue
            except Exception:
                continue
            ed = ev.get("event_date")
            if ed is None:
                ed = ev.get("attendance_date")
            if ed is not None:
                dm = m._attendance_date_matches(ed, d_from)
                if dm is False:
                    continue
            matched=True
            if ev.get("clock_in_time") not in (None,"",0,"0"):
                is_pres=True
        if matched:
            sched += 1
            if is_pres:
                pres += 1
                details.append((row.get("ops_id"), "PRESENT", row.get("contract_type_name"), row.get("agency_name")))
            else:
                details.append((row.get("ops_id"), "ABSENT", row.get("contract_type_name"), row.get("agency_name")))
    return sched, pres, details

for agency in (0, 9):
    m._ROSTER_AGENCY_ID = agency
    print("===== FETCH agency_id=%s =====" % agency)
    rows, err, allow_att, labor = _fetch_ops_calendar(sess, headers, 166)
    print("err=%s allow_att=%s kept=%s labor_only=%s" % (err, allow_att, len(rows or []), len(labor or [])))
    ev_only=att_only=both=none=0
    for row in rows or []:
        lf = row.get("list") or {}
        ev=bool(lf.get("event_list")); att=bool(lf.get("attendance_list"))
        if ev and att: both+=1
        elif ev: ev_only+=1
        elif att: att_only+=1
        else: none+=1
    print("kept shapes ev_only=%s att_only=%s both=%s none=%s" % (ev_only, att_only, both, none))
    # current match counts
    k_n=p_n=0
    for row in rows or []:
        if not m._is_ops_fm_lm_row(row):
            continue
        k,p=_calendar_row_match(row,166,d_from,allow_att)
        if k: k_n+=1
        if p: p_n+=1
    print("current match keep/present", k_n, p_n)
    us, up, details = user_rule_counts(rows)
    print("user_rule event_list scheduled/present", us, up)
    cooked = _cook_roster_hub_summary(
        station_id=166,
        station_name_hint="50-HCM Binh Chanh/Vinh Loc Hub",
        cal_rows=rows,
        att_rows=[],
        allow_att_without_esid=allow_att,
        cal_labor_rows=labor,
    )
    print("cook(no-att-api)", {k:cooked.get(k) for k in (
        "scheduled_count","present_count","fte_count","os_count","bpo_count","notes")})
    print("sample details", details[:15])
