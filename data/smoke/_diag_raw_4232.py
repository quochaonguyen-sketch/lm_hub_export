import json
from pathlib import Path
p=Path('data/smoke/raw_4232_calendar_attendance_20261002.json')
d=json.loads(p.read_text(encoding='utf-8'))
print('TOP', {k:d[k] for k in ('station_id','date_iso')})
print('\nATTENDANCE ROWS')
for i,r in enumerate(d['attendance']['rows']):
    print(i, json.dumps(r,ensure_ascii=False,sort_keys=True))
print('\nCALENDAR MATCHED AGENCY0')
for i,r in enumerate(d['calendar_agency_0']['rows']):
    import export_lm_hubs as m
    if m._calendar_row_match(r,4232,d['date_from'],False)[0]:
        print(i, 'top=', {k:r.get(k) for k in r if any(t in k.lower() for t in ('agency','contract','staff','ops','name'))})
        print(json.dumps(r.get('list'),ensure_ascii=False,sort_keys=True))
