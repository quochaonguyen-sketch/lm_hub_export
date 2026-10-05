p = r"C:\lm_hub_export\export_lm_hubs.py"
t = open(p, encoding="utf-8").read()
old = '''def fetch_backlog_d0_total(sess, headers, station_id):
    """POST tracking_list/search once. data.total is backlog D0 for the hub."""
    body = build_backlog_d0_body(station_id)
    resp = sess.post(
        TRACKING_LIST_SEARCH_URL,
        headers=headers,
        json=body,
        timeout=60,
    )
    payload = resp.json()
'''
new = '''def fetch_backlog_d0_total(sess, headers, station_id):
    """POST tracking_list/search once. data.total is backlog D0 for the hub.

    tracking_list honors current_station_ids but still scopes to the
    session station: querying another hub while parked on 93 returns only
    the overlap. Switch first, search one page, then restore.
    Serialized with attendance change_station (same cookie session).
    """
    body = build_backlog_d0_body(station_id)
    with _ATTENDANCE_CACHE_LOCK:
        _remember_original_station(sess, headers)
        ok, err = _change_station(sess, headers, station_id)
        if not ok:
            raise ValueError("change_station: %s" % (err or "failed"))
        try:
            resp = sess.post(
                TRACKING_LIST_SEARCH_URL,
                headers=headers,
                json=body,
                timeout=60,
            )
        finally:
            orig = _ATTENDANCE_ORIGINAL_STATION
            if orig not in (None, "") and int(orig) != int(station_id):
                _change_station(sess, headers, orig)
    payload = resp.json()
'''
if old not in t:
    raise SystemExit("pattern missing")
open(p, "w", encoding="utf-8").write(t.replace(old, new, 1))
print("patched")
