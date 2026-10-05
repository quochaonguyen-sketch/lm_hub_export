import os
from pathlib import Path
roots = [Path(r"C:\SPX_Launcher"), Path(r"C:\lm_hub_export")]
for root in roots:
    if not root.exists():
        print("missing", root)
        continue
    for p in root.rglob("*cookie*"):
        if p.is_file() and p.stat().st_size < 5_000_000:
            print(p, p.stat().st_size)
