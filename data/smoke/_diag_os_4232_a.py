import json
from pathlib import Path
from collections import Counter

p = Path(r"C:\lm_hub_export\data\smoke\raw_4232_calendar_attendance_20261002.json")
d = json.loads(p.read_text(encoding="utf-8"))
print("TOP KEYS:", list(d.keys()))
for k, v in d.items():
    if isinstance(v, dict):
        print(f"  {k}: subkeys={list(v.keys())[:30]}")
        if "rows" in v:
            print(f"    rows={len(v['rows'])}")
        for sk in ("total", "pages", "err", "agency_id"):
            if sk in v:
                print(f"    {sk}={v.get(sk)!r}")
    elif isinstance(v, list):
        print(f"  {k}: list len={len(v)}")
    else:
        print(f"  {k}: {v!r}"[:160])
