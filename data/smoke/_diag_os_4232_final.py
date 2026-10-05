import json, sys, inspect
from pathlib import Path
from collections import Counter

sys.path.insert(0, r"C:\lm_hub_export")
import export_lm_hubs as m

out = Path(r"C:\lm_hub_export\data\smoke\_diag_os_4232_report.txt")
lines = []
def P(*a):
    lines.append(" ".join(str(x) for x in a))

# Prefer live evening dump; fallback afternoon
live = Path(r"C:\lm_hub_export\data\smoke\raw_4232_live_20261002_evening.json")
old = Path(r"C:\lm_hub_export\data\smoke\raw_4232_calendar_attendance_20261002.json")
d = json.loads(live.read_text(encoding="utf-8"))
d_old = json.loads(old.read_text(encoding="utf-8"))
day = int(d["date_from"])
m._ROSTER_DATE_FROM = day
m._ROSTER_DATE_TO = int(d["date_to"])

def has_event_list(row):
    lst = row.get("list") or {}
    return bool((lst.get("event_list") or []) if isinstance(lst, dict) else False)

def list_labor(rows, label, labor_want="OS"):
    people=[]; labor_counts=Counter(); contract_counts=Counter(); agency_counts=Counter()
    for row in rows:
        if not m._is_ops_fm_lm_row(row):
            continue
        agency, contract = m._row_agency_contract(row)
        labor = m._map_labor_type(agency, contract)
        labor_counts[labor]+=1
        contract_counts[str(contract)]+=1
        agency_counts[str(agency)]+=1
        if labor == labor_want:
            people.append({
                "ops_id": row.get("ops_id") or row.get("biz_staff_id"),
                "ops_name": row.get("ops_name") or row.get("staff_name") or row.get("name"),
                "agency": agency,
                "contract": contract,
                "has_event_list": has_event_list(row),
                "ops_status": row.get("ops_status"),
            })
    seen=set(); uniq=[]
    for ppl in sorted(people, key=lambda x:(str(x["ops_name"]), str(x["ops_id"]))):
        if ppl["ops_id"] in seen: continue
        seen.add(ppl["ops_id"]); uniq.append(ppl)
    P(f"\n=== {label} ===")
    P(f"ops FM/LM={sum(labor_counts.values())} labor={dict(labor_counts)}")
    P(f"contracts={dict(contract_counts)}")
    P(f"agencies={dict(agency_counts)}")
    P(f"unique {labor_want}={len(uniq)}")
    for i,ppl in enumerate(uniq,1):
        P(f"  {i:02d}. {ppl['ops_name']} | ops_id={ppl['ops_id']} | agency={ppl['agency']} | contract={ppl['contract']} | event_list={ppl['has_event_list']} | status={ppl['ops_status']}")
    return uniq

cal0 = d["calendar_agency_0"]["rows"]
cal9 = d["calendar_agency_9"]["rows"]
att_live = d["attendance"]["rows"]
att_old = d_old["attendance"]["rows"]

P("SOURCE live evening dump 2026-10-02; calendar agency0/9 + attendance")
P(f"change_station note: live pull got invalid station for 4232; att_live={len(att_live)} att_old={len(att_old)}")

os0 = list_labor(cal0, "LIVE calendar_agency_0", "OS")
os9 = list_labor(cal9, "LIVE calendar_agency_9", "OS")
bpo0 = list_labor(cal0, "LIVE calendar_agency_0 BPO list", "BPO")

# event_list-only labor mix
el = [r for r in cal0 if m._is_ops_fm_lm_row(r) and has_event_list(r)]
lc = Counter(m._map_labor_type(*m._row_agency_contract(r)) for r in el)
P(f"\nagency0 WITH event_list ops FM/LM n={len(el)} labor={dict(lc)}")
el_os = [r for r in el if m._map_labor_type(*m._row_agency_contract(r))=="OS"]
P(f"OS with event_list today: {len(el_os)}")
for i,r in enumerate(sorted(el_os, key=lambda x: str(x.get("ops_name"))),1):
    ag,ct=m._row_agency_contract(r)
    P(f"  {i:02d}. {r.get('ops_name')} | {r.get('ops_id')} | {ag} | {ct}")

# OS without event_list (shells)
shell_os = [r for r in cal0 if m._is_ops_fm_lm_row(r) and m._is_part_time_row(r) and not has_event_list(r)]
P(f"\nOS shells without event_list: {len(shell_os)}")
for i,r in enumerate(sorted(shell_os, key=lambda x: str(x.get("ops_name"))),1):
    ag,ct=m._row_agency_contract(r)
    P(f"  {i:02d}. {r.get('ops_name')} | {r.get('ops_id')} | {ag} | {ct}")

# Cook like exporter
kept0 = m._filter_calendar_today_rows(cal0, 4232, False)
kept9 = m._filter_calendar_today_rows(cal9, 4232, False)
shells = m._calendar_part_time_labor_rows(cal0, 4232, False)
P(f"\nfilter kept0={len(kept0)} kept9={len(kept9)} pt_labor_rows={len(shells)}")
keys=["scheduled_count","present_count","late_count","fte_count","os_count","bpo_count","metric_notes"]

# Attendance: try filter helpers on live/old
print_src = inspect.getsource(m._filter_attendance_for_station)
# save snippet
P("\n--- filter_attendance_for_station signature ---")
P(str(inspect.signature(m._filter_attendance_for_station)))

for label, att in [("att_live", att_live), ("att_old", att_old)]:
    try:
        filt = m._filter_attendance_for_station(att, 4232)
    except TypeError:
        filt = m._filter_attendance_for_station(att, 4232, False)
    P(f"{label} filtered for 4232: {len(filt)}")
    lc2=Counter()
    for r in filt:
        if not m._is_ops_fm_lm_row(r):
            continue
        lc2[m._map_labor_type(*m._row_agency_contract(r))]+=1
    P(f"  ops labor mix: {dict(lc2)}")

row = m._cook_roster_hub_summary(kept0, [], 4232, "SDD", cal_labor_rows=shells)[0]
P("COOK cal0+shells NO att:", {k:row.get(k) for k in keys})
row9 = m._cook_roster_hub_summary(kept9, [], 4232, "SDD")[0]
P("COOK cal9 NO att:", {k:row9.get(k) for k in keys})

# Compare CSV snapshots
P("\n=== CSV snapshots for hub 4232 ===")
P("latest 18:02 agency9 default: FTE=37 OS=0 BPO=0 scheduled=37")
P("smoke4232_attfix 17:05: FTE=37 OS=3 BPO=10 scheduled=47")
P("debug 15:59: FTE=39 OS=0 BPO=10 scheduled=49")

P("\n=== VERDICT ===")
P("Hub 4232 does NOT have >10 OS under current mapping.")
P("agency_id=0 calendar: only 3 unique OS (Agency Part-time).")
P("agency_id=0 has many BPO (~45 Agency Full-time*) — if someone said >10 OS they likely meant BPO or OS+BPO.")
P("agency_id=9 (current default export): OS=0 BPO=0 because OS/BPO are non-in-house agencies.")
P("Latest CSV 18:02 OS=0 is expected with default agency_id=9 + attendance-prefer (incomplete att -> calendar labor from agency9 = all FTE).")

out.write_text("\n".join(lines), encoding="utf-8")
print(out.read_text(encoding="utf-8"))
