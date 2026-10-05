import json, sys
sys.path.insert(0, r"C:\lm_hub_export")
import export_lm_hubs as m
from spx_cookies import build_session, resolve_cookie_file

STATION_LIST = "https://spx.shopee.vn/api/admin/basicserver/current_user/station_list/"

def station_bits(item):
    if not isinstance(item, dict):
        return {"keys": []}
    bits = {}
    for k, v in item.items():
        lk = k.lower()
        if "station" in lk or lk.endswith("_hub") or "hub_id" in lk or lk in ("current_station_id", "dest_station_id"):
            if isinstance(v, (str, int, float)) or v is None:
                bits[k] = v
            else:
                bits[k] = type(v).__name__
    return {"keys": sorted(item.keys()), "station_fields": bits}

def current_station(sess, headers):
    resp = sess.get(STATION_LIST, headers=headers, params={"count": 1, "status_list": 0}, timeout=20)
    payload = resp.json()
    data = payload.get("data") if isinstance(payload, dict) else {}
    return {
        "http": resp.status_code,
        "retcode": payload.get("retcode") if isinstance(payload, dict) else None,
        "current_station_id": (data or {}).get("current_station_id") if isinstance(data, dict) else None,
    }

def search(sess, headers, body):
    resp = sess.post(m.TRACKING_LIST_SEARCH_URL, headers=headers, json=body, timeout=60)
    payload = resp.json()
    data = payload.get("data") if isinstance(payload, dict) else None
    items = data.get("list") if isinstance(data, dict) else None
    items = items if isinstance(items, list) else []
    first = items[0] if items else {}
    return {
        "http": resp.status_code,
        "retcode": payload.get("retcode") if isinstance(payload, dict) else None,
        "message": (payload.get("message") if isinstance(payload, dict) else "") or "",
        "request_body": body,
        "total": data.get("total") if isinstance(data, dict) else None,
        "count": data.get("count") if isinstance(data, dict) else None,
        "list_len": len(items),
        "first": station_bits(first),
    }

def main():
    cookie = str(resolve_cookie_file())
    sess, headers, cookie_path = build_session(cookie)
    header_keys = sorted(headers.keys())
    out = {"header_keys": header_keys, "cookie_file_name": str(cookie_path).replace("/", "\\").split("\\")[-1]}
    before = current_station(sess, headers)
    out["before"] = before
    orig = before.get("current_station_id")
    try:
        out["unswitched_93"] = search(sess, headers, m.build_backlog_d0_body(93))
        out["unswitched_166"] = search(sess, headers, m.build_backlog_d0_body(166))
        # list form, still unswitched
        body_list = m.build_backlog_d0_body(166)
        body_list["current_station_ids"] = ["166"]
        out["unswitched_166_list"] = search(sess, headers, body_list)
        ok, err = m._change_station(sess, headers, 166)
        out["switch_166"] = {"ok": ok, "err": err, "current_after": current_station(sess, headers)}
        out["switched_166"] = search(sess, headers, m.build_backlog_d0_body(166))
        out["switched_to_166_query_93"] = search(sess, headers, m.build_backlog_d0_body(93))
    finally:
        if orig not in (None, ""):
            rok, rerr = m._change_station(sess, headers, orig)
            out["restored"] = {"ok": rok, "err": rerr, "target": orig, "current": current_station(sess, headers)}
        else:
            out["restored"] = {"skipped": True}
    path = r"C:\lm_hub_export\data\smoke\_backlog_d0_station_probe.json"
    with open(path, "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=2)
    print(path)
    print(json.dumps({k: out[k] for k in out if k != "header_keys"}, ensure_ascii=False, indent=2)[:8000])

if __name__ == "__main__":
    main()
