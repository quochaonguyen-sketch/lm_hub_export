import sys
sys.path.insert(0, r"C:\lm_hub_export")
import spx_cookies, inspect, os
print(inspect.getsource(spx_cookies.resolve_cookie_file))
print("--- names ---")
print([x for x in dir(spx_cookies) if "cookie" in x.lower() or "path" in x.lower() or "LAUNCH" in x])
