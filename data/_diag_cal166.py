import json, sys
sys.path.insert(0, r"C:\lm_hub_export")
from export_lm_hubs import (
    build_session, resolve_cookie_file, default_roster_date_range,
    ROSTER_CALENDAR_URL, _unix_to_iso_saigon, _list_has_content,
    _calendar_row_match, _is_ops_fm_lm_row,
)

cookie = resolve_cookie_file()
sess, headers, path = build_session(cookie)
d_from, d_to = default_roster_date_range()
print("cookie", path)
print("date_from", d_from, _unix_to_iso_saigon(d_from))
print("date_to", d_to, _unix_to_iso_saigon(d_to))
print("user_ts", 1790874000, _unix_to_iso_saigon(1790874000))
print("match_today", d_from == 1790874000)

def summarize(label, body):
    r = sess.post(ROSTER_CALENDAR_URL, headers=headers, json=body, timeout=45)
    print("====", label, "status", r.status_code)
    js = r.json()
    print("retcode", js.get("retcode"), "message", js.get("message"))
    data = js.get("data")
    if not isinstance(data, dict):
        print("data", type(data).__name__, data)
        return
    rows = data.get("list") or []
    print("total", data.get("total"), "page_len", len(rows))
    empty_list = has_event = has_att_only = keep_n = present_n = fm_lm = 0
    for row in rows:
        if _is_ops_fm_lm_row(row):
            fm_lm += 1
        lf = row.get("list")
        if not _list_has_content(lf):
            empty_list += 1
        evs = (lf or {}).get("event_list") if isinstance(lf, dict) else None
        ats = (lf or {}).get("attendance_list") if isinstance(lf, dict) else None
        if evs:
            has_event += 1
        elif ats:
            has_att_only += 1
        keep, present = _calendar_row_match(row, body["station_id"], d_from, True)
        if keep:
            keep_n += 1
        if present:
            present_n += 1
    print("empty_list", empty_list, "has_event", has_event, "att_only", has_att_only,
          "keep", keep_n, "present", present_n, "fm_lm", fm_lm)
    for i, row in enumerate(rows[:8]):
        lf = row.get("list") or {}
        evs = lf.get("event_list") or []
        ats = lf.get("attendance_list") or []
        keep, present = _calendar_row_match(row, body["station_id"], d_from, True)
        print("  [%s] ops=%s name=%s agency=%s contract=%s dept=%s ev=%s att=%s keep=%s present=%s" % (
            i, row.get("ops_id"), row.get("ops_name"), row.get("agency_name"),
            row.get("contract_type_name"), row.get("department_name"),
            len(evs), len(ats), keep, present))
        if evs:
            e0 = evs[0]
            print("      ev0 date=%s esid=%s cin=%s cout=%s slot=%s" % (
                e0.get("event_date"), e0.get("event_station_id"),
                e0.get("clock_in_time"), e0.get("clock_out_time"), e0.get("slot_time")))

# agency 9 as user showed
summarize("agency9 count20", {
    "pageno": 1, "count": 20, "station_id": 166, "agency_id": 9,
    "range_start_time": d_from, "range_end_time": d_from,
})
# agency 0 default script
summarize("agency0 count20", {
    "pageno": 1, "count": 20, "station_id": 166, "agency_id": 0,
    "range_start_time": d_from, "range_end_time": d_from,
})
# full page size agency 9
summarize("agency9 count100", {
    "pageno": 1, "count": 100, "station_id": 166, "agency_id": 9,
    "range_start_time": d_from, "range_end_time": d_from,
})
