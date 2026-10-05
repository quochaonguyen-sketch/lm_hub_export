p = r"C:\lm_hub_export\data\smoke\_probe_backlog_d0_station.py"
t = open(p, encoding="utf-8-sig").read()
t = t.replace('str(cookie_path).name', 'str(cookie_path).replace("/", "\\\\").split("\\\\")[-1]')
open(p, "w", encoding="utf-8").write(t)
print("ok", "str(cookie_path).name" in open(p, encoding="utf-8").read())
