from pathlib import Path
path = Path(r"C:\lm_hub_export\export_lm_hubs.py")
src = path.read_text(encoding="utf-8")
old = '''        matched0 = [
            r
            for r in rows
            if _row_has_event_station(r, station_id)
            or _calendar_row_match(r, station_id, day_start, False)[0]
        ]'''
new = '''        matched0 = [
            r
            for r in rows
            if _calendar_row_match(r, station_id, day_start, False)[0]
        ]'''
if old not in src:
    raise SystemExit('matched0 block missing')
path.write_text(src.replace(old, new, 1), encoding='utf-8')
print('matched0 fixed')
