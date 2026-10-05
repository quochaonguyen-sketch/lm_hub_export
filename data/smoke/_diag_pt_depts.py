from collections import Counter
import export_lm_hubs as m
m._ROSTER_DATE_FROM,m._ROSTER_DATE_TO=m.default_roster_date_range()
sess,headers,_=m.build_session(m.resolve_cookie_file(None))
for sid in (912,4232):
 rows,err,total,pages=m._fetch_ops_calendar_agency(sess,headers,sid,0,max_pages=20,stop_if_unscoped=False)
 pts=[r for r in rows if m._is_part_time_row(r) and not m._calendar_row_match(r,sid,m._ROSTER_DATE_FROM,True)[0]]
 kept=[r for r in rows if m._calendar_row_match(r,sid,m._ROSTER_DATE_FROM,True)[0]]
 print('SID',sid,'rows',len(rows),'kept',len(kept),'pt_shells',len(pts),'kept_depts',Counter((r.get('department_id'),r.get('department_name')) for r in kept))
 print('pt_depts',Counter((r.get('department_id'),r.get('department_name')) for r in pts))
 print('pt_agencies',Counter(r.get('agency_name') for r in pts))
