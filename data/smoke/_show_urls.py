import sys
sys.path.insert(0, r"C:\lm_hub_export")
import export_lm_hubs as m
print("DATA", getattr(m, "DATA_API_URL", None) or getattr(m, "SPX_DATA_URL", None))
# print constants containing http
src = open(r"C:\lm_hub_export\export_lm_hubs.py", encoding="utf-8").read().splitlines()
for i,l in enumerate(src,1):
    if "https://spx" in l and "URL" in src[max(0,i-3):i].__repr__() or ("https://spx" in l and i<250):
        if "https://" in l:
            print(i, l.strip()[:180])
