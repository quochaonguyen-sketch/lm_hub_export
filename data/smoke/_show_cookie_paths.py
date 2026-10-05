import sys
sys.path.insert(0, r"C:\lm_hub_export")
import spx_cookies, export_lm_hubs as m
print("DEFAULT", spx_cookies.DEFAULT_COOKIE_FILE)
print("LAUNCHER", getattr(m, "LAUNCHER_COOKIE", None))
