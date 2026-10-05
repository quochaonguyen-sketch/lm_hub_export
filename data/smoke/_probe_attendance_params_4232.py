import export_lm_hubs as m
m._ROSTER_DATE_FROM,m._ROSTER_DATE_TO=m.default_roster_date_range()
sess,headers,_=m.build_session(m.resolve_cookie_file(None))
base={'pageno':1,'count':50,'staff_type':2,'start_time':m._ROSTER_DATE_FROM,'end_time':m._ROSTER_DATE_TO}
for extra in ({},{'station_id':4232},{'event_station_id':4232},{'whs_id':4232}):
 p=dict(base);p.update(extra)
 resp=sess.get(m.ROSTER_ATTENDANCE_URL,headers=headers,params=p,timeout=45)
 try: b=resp.json()
 except Exception: b={}
 data=b.get('data') if isinstance(b,dict) else None
 rows=data.get('list') if isinstance(data,dict) else []
 print('PARAMS',extra,'http',resp.status_code,'retcode',b.get('retcode') if isinstance(b,dict) else None,'total',data.get('total') if isinstance(data,dict) else None,'n',len(rows or []))
 for r in (rows or [])[:3]: print(' ',{k:r.get(k) for k in ('event_station_id','station_id','profile_station_id','agency','contract_type','staff_id','biz_staff_id','date','operation_date')})
