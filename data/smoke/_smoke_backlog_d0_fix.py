import sys
sys.path.insert(0, r"C:\lm_hub_export")
import export_lm_hubs as m
from spx_cookies import build_session, resolve_cookie_file

STATION_LIST = "https://spx.shopee.vn/api/admin/basicserver/current_user/station_list/"

def current(sess, headers):
    resp = sess.get(STATION_LIST, headers=headers, params={"count": 1, "status_list": 0}, timeout=20)
    data = (resp.json() or {}).get("data") or {}
    return data.get("current_station_id")

sess, headers, _path = build_session(str(resolve_cookie_file()))
print("before", current(sess, headers))
t93 = m.fetch_backlog_d0_total(sess, headers, 93)
print("hub93", t93, "session", current(sess, headers))
t166 = m.fetch_backlog_d0_total(sess, headers, 166)
print("hub166", t166, "session", current(sess, headers))
