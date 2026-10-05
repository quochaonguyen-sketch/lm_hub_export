import json
from pathlib import Path
import export_lm_hubs as m
d=json.loads(Path('data/smoke/raw_4232_calendar_attendance_20261002.json').read_text(encoding='utf-8'))
for key in ('calendar_agency_0','calendar_agency_9'):
  rows=d[key]['rows'] or []
  print('\n',key,'total',len(rows))
  for i,r in enumerate(rows):
    vals=' | '.join(str(r.get(k) or '') for k in ('ops_id','ops_name','agency_name','contract_type_name'))
    if 'part' in vals.lower() or str(r.get('agency_name','')).upper() in ('GRG','AGR','SKT'):
      lf=r.get('list') or {}
      evs=lf.get('event_list') if isinstance(lf,dict) else []
      ats=lf.get('attendance_list') if isinstance(lf,dict) else []
      print(i, vals, 'keep=',m._calendar_row_match(r,4232,d['date_from'],False), 'event_n=',len(evs or []),'att_n=',len(ats or []))
      print(' events=',json.dumps(evs,ensure_ascii=False,sort_keys=True))
      print(' atts=',json.dumps(ats,ensure_ascii=False,sort_keys=True))
