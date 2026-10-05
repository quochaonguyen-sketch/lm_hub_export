import json, sys, inspect
from pathlib import Path
from collections import Counter

sys.path.insert(0, r"C:\lm_hub_export")
import export_lm_hubs as m

# Inspect attendance helpers
for name in dir(m):
    if "attend" in name.lower() or "change_station" in name.lower():
        print(name)

print("--- change_station src ---")
print(inspect.getsource(m._change_station)[:1500])
print("--- fetch attendance for hub ---")
# find function that does change+fetch
for name in ["_fetch_attendance_for_hub","_get_attendance_for_station","_roster_attendance_for_hub","_load_attendance_for_hub"]:
    if hasattr(m, name):
        print("FOUND", name, inspect.signature(getattr(m, name)))
