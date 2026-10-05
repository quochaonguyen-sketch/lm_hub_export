import json, re, sys
from pathlib import Path
from collections import Counter, defaultdict

sys.path.insert(0, r"C:\lm_hub_export")
import export_lm_hubs as m

p = Path(r"C:\lm_hub_export\data\smoke\raw_4232_calendar_attendance_20261002.json")
d = json.loads(p.read_text(encoding="utf-8"))
day = int(d["date_from"])
m._ROSTER_DATE_FROM = day
m._ROSTER_DATE_TO = int(d["date_to"])

def has_event_list(row):
    lst = row.get("list") or {}
    if isinstance(lst, dict):
        ev = lst.get("event_list") or []
        return bool(ev)
    return False

def classify_rows(rows, label, station_id=4232):
    kept = []
    os_people = []
    labor_counts = Counter()
    dept_counts = Counter()
    contract_counts = Counter()
    agency_counts = Counter()
    for row in rows:
        if not m._is_ops_fm_lm_row(row):
            continue
        agency, contract = m._row_agency_contract(row)
        labor = m._map_labor_type(agency, contract)
        dept_counts[str(row.get("department_name") or row.get("department") or "?")] += 1
        if labor == "OS":
            os_people.append({
                "ops_id": row.get("ops_id") or row.get("biz_staff_id"),
                "ops_name": row.get("ops_name") or row.get("staff_name") or row.get("name"),
                "agency": agency,
                "contract": contract,
                "department": row.get("department_name") or row.get("department"),
                "has_event_list": has_event_list(row),
                "ops_status": row.get("ops_status"),
            })
        labor_counts[labor] += 1
        contract_counts[str(contract)] += 1
        agency_counts[str(agency)] += 1
        if has_event_list(row):
            kept.append(row)
    print(f"\n=== {label} ===")
    print(f"ops FM/LM rows: {sum(labor_counts.values())} labor={dict(labor_counts)}")
    print(f"with event_list: {len(kept)}")
    print(f"depts: {dict(dept_counts)}")
    print(f"contracts: {dict(contract_counts)}")
    print(f"agencies: {dict(agency_counts)}")
    print(f"OS people ({len(os_people)}):")
    for i, ppl in enumerate(sorted(os_people, key=lambda x: (str(x['ops_name']), str(x['ops_id']))), 1):
        print(f"  {i:02d}. {ppl['ops_name']!s:40s} ops_id={ppl['ops_id']} agency={ppl['agency']!r} contract={ppl['contract']!r} event_list={ppl['has_event_list']} status={ppl['ops_status']}")
    return os_people, labor_counts, kept

cal0 = d["calendar_agency_0"]["rows"]
cal9 = d["calendar_agency_9"]["rows"]
att = d["attendance"]["rows"]

# filter calendar today like cooker
cal0_today = m._filter_calendar_today_rows(cal0, 4232) if hasattr(m, "_filter_calendar_today_rows") else cal0
# try both
for name, fn in [
    ("_filter_calendar_today_rows", getattr(m, "_filter_calendar_today_rows", None)),
    ("_calendar_rows_for_hub_today", getattr(m, "_calendar_rows_for_hub_today", None)),
]:
    print(name, "exists", callable(fn))

os0, lc0, kept0 = classify_rows(cal0, "calendar_agency_0 RAW all ops FM/LM")
os9, lc9, kept9 = classify_rows(cal9, "calendar_agency_9 RAW all ops FM/LM")
osa, lca, _ = classify_rows(att, "attendance RAW all ops FM/LM")

# Also cook with current logic
print("\n=== COOK with agency0 cal rows (as cal_labor) + attendance ===")
# Prefer event-list kept for schedule; pass all OS shells as cal_labor
shells0 = [r for r in cal0 if m._is_ops_fm_lm_row(r) and m._is_explicit_os_row(r)]
print("explicit OS shells agency0:", len(shells0))

# Use cook with filtered today event-list rows
# Find how cook expects input
import inspect
sig = inspect.signature(m._cook_roster_hub_summary)
print("cook sig:", sig)

# Filter today for station
def event_station_ok(row, sid=4232):
    lst = row.get("list") or {}
    evs = (lst.get("event_list") or []) if isinstance(lst, dict) else []
    if not evs:
        return False
    for ev in evs:
        esid = ev.get("event_station_id")
        if esid is None or int(esid) == int(sid):
            # date check
            ed = ev.get("event_date") or ev.get("attendance_date")
            if ed is None or int(ed) == day:
                return True
    return False

kept_sched0 = [r for r in cal0 if m._is_ops_fm_lm_row(r) and event_station_ok(r)]
kept_sched9 = [r for r in cal9 if m._is_ops_fm_lm_row(r) and event_station_ok(r)]
print(f"scheduled candidates agency0={len(kept_sched0)} agency9={len(kept_sched9)}")

# attendance filter for station
att_kept = []
for r in att:
    if not m._is_ops_fm_lm_row(r):
        continue
    esid = r.get("event_station_id") or r.get("station_id")
    if esid is not None and int(esid) != 4232:
        continue
    att_kept.append(r)
print(f"attendance ops FM/LM kept for hub: {len(att_kept)}")

row = m._cook_roster_hub_summary(
    kept_sched0, att_kept, 4232, "52-HCM SDD-01 Hub",
    cal_labor_rows=shells0,
)[0]
print("COOK agency0+OS shells:", {k: row[k] for k in ["scheduled_count","present_count","fte_count","os_count","bpo_count","metric_notes"] if k in row})

row9 = m._cook_roster_hub_summary(
    kept_sched9, att_kept, 4232, "52-HCM SDD-01 Hub",
)[0]
print("COOK agency9 only:", {k: row9[k] for k in ["scheduled_count","present_count","fte_count","os_count","bpo_count","metric_notes"] if k in row9})
