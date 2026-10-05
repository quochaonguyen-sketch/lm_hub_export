import os, json
from pathlib import Path
cands = [
    Path(r"C:\lm_hub_export\cookies\cookies.json"),
    Path(r"C:\SPX_Launcher\config\cookies\cookies_assign_pick.json"),
]
root = Path(r"C:\SPX_Launcher\config\cookies")
if root.exists():
    for p in root.glob("*.json"):
        cands.append(p)
root2 = Path(r"C:\lm_hub_export\cookies")
if root2.exists():
    for p in root2.glob("*.json"):
        cands.append(p)
seen=set()
for p in cands:
    if p in seen:
        continue
    seen.add(p)
    if not p.exists():
        print("MISSING", p)
        continue
    st = p.stat()
    try:
        data = json.loads(p.read_text(encoding="utf-8"))
    except Exception as e:
        print("BAD", p.name, type(e).__name__)
        continue
    names=[]
    if isinstance(data, list):
        names=[str(c.get("name")) for c in data if isinstance(c, dict)]
    elif isinstance(data, dict):
        names=list(data.keys())[:20]
    has = "fms_user_skey" in names or any("skey" in n for n in names)
    print(p.name, "mtime", st.st_mtime, "bytes", st.st_size, "n", len(names) if isinstance(data, list) else type(data).__name__, "has_skey", has)
