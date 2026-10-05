import json
from datetime import datetime
from pathlib import Path
p = Path(r"C:\lm_hub_export\cookies\cookies.json")
data = json.loads(p.read_text(encoding="utf-8"))
print("file_mtime", datetime.fromtimestamp(p.stat().st_mtime).isoformat())
for c in data:
    if not isinstance(c, dict):
        continue
    name = str(c.get("name") or "")
    if name in ("fms_user_skey", "csrftoken", "spc_ec") or "skey" in name or "session" in name.lower():
        exp = c.get("expirationDate") or c.get("expires")
        exp_s = None
        if isinstance(exp, (int, float)) and exp > 0:
            exp_s = datetime.fromtimestamp(exp).isoformat()
        print(name, "domain", c.get("domain"), "exp", exp_s, "session", c.get("session"), "vlen", len(str(c.get("value") or "")))
