import json, sys
from pathlib import Path
from collections import Counter

sys.path.insert(0, r"C:\lm_hub_export")
import export_lm_hubs as m

out = Path(r"C:\lm_hub_export\data\smoke\_diag_os_4232_report.txt")
lines = []
def P(*a):
    s = " ".join(str(x) for x in a)
    lines.append(s)

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

def list_labor(rows, label, labor_want="OS"):
    people = []
    labor_counts = Counter()
    for row in rows:
        if not m._is_ops_fm_lm_row(row):
            continue
        agency, contract = m._row_agency_contract(row)
        labor = m._map_labor_type(agency, contract)
        labor_counts[labor] += 1
        if labor == labor_want:
            people.append({
                "ops_id": row.get("ops_id") or row.get("biz_staff_id"),
                "ops_name": row.get("ops_name") or row.get("staff_name") or row.get("name"),
                "agency": agency,
                "contract": contract,
                "has_event_list": has_event_list(row),
                "ops_status": row.get("ops_status"),
            })
    # unique by ops_id
    seen = set(); uniq = []
    for ppl in sorted(people, key=lambda x: (str(x["ops_name"]), str(x["ops_id"]))):
        if ppl["ops_id"] in seen:
            continue
        seen.add(ppl["ops_id"]); uniq.append(ppl)
    P(f"\n=== {label} labor={dict(labor_counts)} | unique {labor_want}={len(uniq)} ===")
    for i, ppl in enumerate(uniq, 1):
        P(f"  {i:02d}. {ppl['ops_name']} | ops_id={ppl['ops_id']} | agency={ppl['agency']} | contract={ppl['contract']} | event_list={ppl['has_event_list']} | status={ppl['ops_status']}")
    return uniq, labor_counts

cal0 = d["calendar_agency_0"]["rows"]
cal9 = d["calendar_agency_9"]["rows"]
att = d["attendance"]["rows"]

list_labor(cal0, "calendar_agency_0", "OS")
list_labor(cal9, "calendar_agency_9", "OS")
list_labor(att, "attendance_dump", "OS")
list_labor(cal0, "calendar_agency_0", "BPO")

# mapping rules dump
P("\n=== _map_labor_type rules (from code) ===")
P("1. Part-time / rider os / \\bos\\b in contract -> OS (before agency)")
P("2. in-house / inhouse agency -> FTE")
P("3. else (agency contractors Full-time etc) -> BPO")
P("4. default FTE")
for sample in [
    ("GRG", "Agency Part-time"),
    ("GRG", "Agency Full-time Skilled"),
    ("in-house", "Inhouse-Full-time"),
    ("SKT", "Agency Full-time Skilled"),
    ("AGR", "Agency Part-time"),
    ("MBB", "Agency Part-time"),
    ("SPX Full-time", "Inhouse Full-time Skilled"),
]:
    P(f"  map{sample} -> {m._map_labor_type(*sample)}")

# cook
kept0 = m._filter_calendar_today_rows(cal0, 4232, False)
kept9 = m._filter_calendar_today_rows(cal9, 4232, False)
shells = [r for r in cal0 if m._is_ops_fm_lm_row(r) and m._is_explicit_os_row(r)]
P(f"\nfilter cal0={len(kept0)} cal9={len(kept9)} explicit_os_shells={len(shells)} att={len(att)}")
keys = ["scheduled_count","present_count","late_count","fte_count","os_count","bpo_count","metric_notes"]
row = m._cook_roster_hub_summary(kept0, att, 4232, "SDD", cal_labor_rows=shells)[0]
P("COOK cal0+shells+att:", {k: row.get(k) for k in keys})
row9 = m._cook_roster_hub_summary(kept9, att, 4232, "SDD")[0]
P("COOK cal9+att:", {k: row9.get(k) for k in keys})

# Also: among agency0 with event_list only, labor mix
el_only = [r for r in cal0 if m._is_ops_fm_lm_row(r) and has_event_list(r)]
lc = Counter(m._map_labor_type(*m._row_agency_contract(r)) for r in el_only)
P(f"\nagency0 ops FM/LM WITH event_list: n={len(el_only)} labor={dict(lc)}")

out.write_text("\n".join(lines), encoding="utf-8")
print(f"wrote {out} lines={len(lines)}")
