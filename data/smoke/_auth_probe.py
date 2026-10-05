import sys
sys.path.insert(0, r"C:\lm_hub_export")
from spx_cookies import build_session, resolve_cookie_file
import requests
cookie = str(resolve_cookie_file())
sess, headers, path = build_session(cookie)
print("jar", sorted({c.name for c in sess.cookies}))
url = "https://spx.shopee.vn/mgmt/api/pc/forward/data/api_mart/mgmt_app/data_api/"
# minimal probe: do not invent a huge query; just see auth
resp = sess.post(url, headers=headers, json={"api_name": "ping"}, timeout=30)
text = resp.text[:180].replace("\n"," ")
print("data_api", resp.status_code, text)
# cookie header length only
req = requests.Request("POST", url, headers=headers)
prep = sess.prepare_request(req)
clen = len(prep.headers.get("Cookie") or "")
print("cookie_header_len", clen, "csrf_len", len(headers.get("x-csrftoken") or ""))
