import json
from pathlib import Path
import export_lm_hubs as m
m._ROSTER_DATE_FROM, m._ROSTER_DATE_TO = m.default_roster_date_range()
m._ROSTER_AGENCY_ID = 0
sess, headers, cookie_path = m.build_session(m.resolve_cookie_file(None))
base = Path('data/smoke')
base.mkdir(parents=True, exist_ok=True)
raw = {'station_id': 4232, 'date_from': m._ROSTER_DATE_FROM, 'date_to': m._ROSTER_DATE_TO, 'date_iso': m._unix_to_iso_saigon(m._ROSTER_DATE_FROM), 'cookie_path': str(cookie_path)}
for agency in (0, 9):
    rows, err, total, pages = m._fetch_ops_calendar_agency(sess, headers, 4232, agency, max_pages=20, stop_if_unscoped=False)
    raw[f'calendar_agency_{agency}'] = {'rows': rows, 'err': err, 'total': total, 'pages': pages}
    print('calendar agency', agency, 'rows', len(rows or []), 'total', total, 'pages', pages, 'err', err)
att_rows, att_err = m._fetch_attendance_all_pages(sess, headers)
raw['attendance'] = {'rows': att_rows, 'err': att_err, 'total_rows': len(att_rows or [])}
print('attendance rows', len(att_rows or []), 'err', att_err)
(base / 'raw_4232_calendar_attendance_20261002.json').write_text(json.dumps(raw, ensure_ascii=False, indent=2), encoding='utf-8')
# compact diagnostic by row + nested event/attendance entries relevant to hub and part-time-ish labels
def txt(v): return str(v or '').lower()
def is_pt(row):
    vals=[]
    if isinstance(row,dict):
        vals += [row.get(k) for k in ('agency_name','agency','contract_type_name','contract_type','staff_type_name','staff_type')]
        lf=row.get('list') or {}
        if isinstance(lf,dict):
            for k in ('event_list','attendance_list'):
                for x in lf.get(k) or []:
                    if isinstance(x,dict): vals += [x.get(z) for z in ('agency_name','agency','contract_type_name','contract_type','staff_type_name','staff_type')]
    return any('part' in txt(v) or txt(v) in ('grg','agr','skt') for v in vals)
def hub_att(row):
    try: return int(row.get('event_station_id'))==4232 and m._attendance_row_matches_day(row,m._ROSTER_DATE_FROM)
    except: return False
for key in ('calendar_agency_0','calendar_agency_9'):
    rows=raw[key]['rows'] or []
    print(key, 'hubmatch', sum(1 for r in rows if m._calendar_row_match(r,4232,m._ROSTER_DATE_FROM,False)[0]), 'ptish', sum(1 for r in rows if is_pt(r)))
for r in att_rows or []:
    if hub_att(r) and is_pt(r): print('ATT_PT', json.dumps(r, ensure_ascii=False, separators=(',',':')))
(base / 'raw_4232_pt_diagnostic.txt').write_text('written by raw pull\n',encoding='utf-8')
