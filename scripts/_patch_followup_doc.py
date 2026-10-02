from pathlib import Path
path = Path(r"C:\lm_hub_export\export_lm_hubs.py")
src = path.read_text(encoding="utf-8")
old = '''                     Keep calendar people with non-empty list for today + event_station_id==hub
                     (or attendance_list for today). Labor PRIMARY from calendar
                     agency_name/contract_type_name (Part-time->OS, Inhouse->FTE,
                     else Part-time->OS / Full-time->BPO); attendance late/labor secondary.'''
new = '''                     Keep calendar people with non-empty list for today + Event Station
                     (event_station_id) only — never Profile Station. Labor PRIMARY from
                     calendar (Part-time->OS first, else Inhouse->FTE, Full-time->BPO);
                     attendance late/labor secondary. Maintenance hubs get a second pass.'''
if old not in src:
    print('doc skip')
else:
    path.write_text(src.replace(old, new, 1), encoding='utf-8')
    print('doc ok')
