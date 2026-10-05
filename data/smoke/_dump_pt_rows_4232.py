import json
from pathlib import Path
d=json.loads(Path('data/smoke/raw_4232_calendar_attendance_20261002.json').read_text(encoding='utf-8'))
for r in d['calendar_agency_0']['rows']:
  if 'part-time' in str(r.get('contract_type_name','')).lower():
    print(json.dumps(r,ensure_ascii=False,sort_keys=True))
