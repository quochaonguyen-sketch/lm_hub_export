import json, sys
from pathlib import Path
sys.path.insert(0, r"C:\lm_hub_export")
import export_lm_hubs as m

d = json.loads(Path(r"C:\lm_hub_export\data\smoke\raw_4232_live_20261002_evening.json").read_text(encoding="utf-8"))
m._ROSTER_DATE_FROM = int(d["date_from"])
cal0 = d["calendar_agency_0"]["rows"]

def has_el(row):
    lst = row.get("list") or {}
    return bool((lst.get("event_list") or []) if isinstance(lst, dict) else False)

print("=== 10 BPO with event_list today (ops FM/LM) ===")
n=0
for r in sorted(cal0, key=lambda x: str(x.get("ops_name"))):
    if not m._is_ops_fm_lm_row(r) or not has_el(r):
        continue
    ag, ct = m._row_agency_contract(r)
    labor = m._map_labor_type(ag, ct)
    if labor != "BPO":
        continue
    n+=1
    print(f"{n:02d}. {r.get('ops_name')} | {r.get('ops_id')} | agency={ag} | contract={ct} | labor={labor}")

print("\n=== ALL agency0 ops FM/LM with event_list labor breakdown ===")
from collections import Counter
el=[r for r in cal0 if m._is_ops_fm_lm_row(r) and has_el(r)]
print(Counter(m._map_labor_type(*m._row_agency_contract(r)) for r in el))

print("\n=== map edge cases that look inhouse but become BPO ===")
for r in el:
    ag, ct = m._row_agency_contract(r)
    if m._map_labor_type(ag, ct)=="BPO" and "inhouse" in str(ct).lower().replace("-","").replace(" ",""):
        print(f"  {r.get('ops_name')} | agency={ag!r} contract={ct!r} -> BPO (agency not in-house)")
