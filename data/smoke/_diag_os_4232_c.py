import json, sys
from pathlib import Path
from collections import Counter

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
        return bool(lst.get("event_list") or [])
    return False

def classify_rows(rows, label):
    labor_counts = Counter()
    dept_counts = Counter()
    contract_counts = Counter()
    agency_counts = Counter()
    os_people = []
    non_ops = Counter()
    for row in rows:
        if not m._is_ops_fm_lm_row(row):
            dept = str(row.get("department_name") or row.get("department") or "?")
            non_ops[dept] += 1
            continue
        agency, contract = m._row_agency_contract(row)
        labor = m._map_labor_type(agency, contract)
        dept_counts[str(row.get("department_name") or "?")] += 1
        labor_counts[labor] += 1
        contract_counts[str(contract)] += 1
        agency_counts[str(agency)] += 1
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
    print(f"\n=== {label} ===")
    print(f"ops FM/LM rows: {sum(labor_counts.values())} labor={dict(labor_counts)}")
    print(f"non-ops depts skipped: {dict(non_ops)}")
    print(f"ops depts: {dict(dept_counts)}")
    print(f"contracts: {dict(contract_counts)}")
    print(f"agencies: {dict(agency_counts)}")
    print(f"OS people ({len(os_people)}):")
    seen = set()
    uniq = []
    for ppl in sorted(os_people, key=lambda x: (str(x["ops_name"]), str(x["ops_id"]))):
        key = str(ppl["ops_id"])
        if key in seen:
            continue
        seen.add(key)
        uniq.append(ppl)
    for i, ppl in enumerate(uniq, 1):
        print(
            f"  {i:02d}. {str(ppl['ops_name']):40s} ops_id={ppl['ops_id']} "
            f"agency={ppl['agency']!r} contract={ppl['contract']!r} "
            f"event_list={ppl['has_event_list']} status={ppl['ops_status']}"
        )
    print(f"unique OS ops_id: {len(uniq)}")
    return uniq, labor_counts

cal0 = d["calendar_agency_0"]["rows"]
cal9 = d["calendar_agency_9"]["rows"]
att = d["attendance"]["rows"]

os0, _ = classify_rows(cal0, "calendar_agency_0 RAW")
os9, _ = classify_rows(cal9, "calendar_agency_9 RAW")
osa, _ = classify_rows(att, "attendance RAW")

# Also show BPO people on agency0 for comparison (user may confuse OS vs BPO)
print("\n=== BPO people calendar_agency_0 (for comparison) ===")
bpo = []
for row in cal0:
    if not m._is_ops_fm_lm_row(row):
        continue
    agency, contract = m._row_agency_contract(row)
    if m._map_labor_type(agency, contract) == "BPO":
        bpo.append((row.get("ops_name"), row.get("ops_id"), agency, contract, has_event_list(row)))
seen=set()
i=0
for name, oid, ag, ct, el in sorted(bpo, key=lambda x: str(x[0])):
    if oid in seen: continue
    seen.add(oid); i+=1
    print(f"  {i:02d}. {str(name):40s} ops_id={oid} agency={ag!r} contract={ct!r} event_list={el}")
print(f"unique BPO: {len(seen)}")

# Cook using filtered helpers from module
print("\n=== Filter helpers ===")
print("has _filter_calendar_today_rows", hasattr(m, "_filter_calendar_today_rows"))
import inspect
print("filter sig:", inspect.signature(m._filter_calendar_today_rows))

# try allow_att_without_esid True/False
for allow in (True, False):
    kept = m._filter_calendar_today_rows(cal0, 4232, allow)
    print(f"filter cal0 allow={allow} -> {len(kept)}")
kept9 = m._filter_calendar_today_rows(cal9, 4232, False)
print(f"filter cal9 allow=False -> {len(kept9)}")

# attendance filter
if hasattr(m, "_filter_attendance_for_hub"):
    print("att filter sig", inspect.signature(m._filter_attendance_for_hub))
att_f = m._filter_attendance_today_rows(att) if hasattr(m, "_filter_attendance_today_rows") else att
print("att after today filter", len(att_f) if att_f is not None else None)

# Cook agency0 kept + explicit OS shells
shells = [r for r in cal0 if m._is_ops_fm_lm_row(r) and m._is_explicit_os_row(r)]
print("explicit OS shells:", len(shells))
kept0 = m._filter_calendar_today_rows(cal0, 4232, False)
# also need event_list only? cook does that internally now
row = m._cook_roster_hub_summary(kept0, att, 4232, "SDD", cal_labor_rows=shells)[0]
keys = ["scheduled_count","present_count","late_count","fte_count","os_count","bpo_count","metric_notes"]
print("COOK cal0+shells+att:", {k: row.get(k) for k in keys})

kept9 = m._filter_calendar_today_rows(cal9, 4232, False)
row9 = m._cook_roster_hub_summary(kept9, att, 4232, "SDD")[0]
print("COOK cal9+att:", {k: row9.get(k) for k in keys})
