import json, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
sys.path.insert(0, r"C:\lm_hub_export")
from export_lm_hubs import (
    build_session, resolve_cookie_file, default_roster_date_range,
    ROSTER_CALENDAR_URL, _unix_to_iso_saigon, _list_has_content,
    _calendar_row_match, _is_ops_fm_lm_row, _map_labor_type, _row_agency_contract,
)

cookie = resolve_cookie_file()
sess, headers, path = build_session(cookie)
d_from, d_to = default_roster_date_range()

def fetch_all(agency_id, count=100, max_pages=20):
    all_rows = []
    total = None
    for pageno in range(1, max_pages+1):
        body = {
            "pageno": pageno, "count": count, "station_id": 166,
            "agency_id": agency_id,
            "range_start_time": d_from, "range_end_time": d_from,
        }
        r = sess.post(ROSTER_CALENDAR_URL, headers=headers, json=body, timeout=45)
        js = r.json()
        if js.get("retcode") not in (0, "0", None):
            print("FAIL agency", agency_id, "page", pageno, js.get("retcode"), js.get("message"))
            break
        data = js.get("data") or {}
        if not isinstance(data, dict):
            print("null data agency", agency_id, "page", pageno)
            break
        total = data.get("total", total)
        rows = data.get("list") or []
        all_rows.extend(rows)
        print("page", pageno, "got", len(rows), "cum", len(all_rows), "api_total", total)
        if not rows:
            break
        if total is not None and len(all_rows) >= int(total):
            break
        if len(rows) < count:
            break
    return all_rows, total

def analyze(label, rows):
    empty = has_ev = has_att_only = keep = present = fm = 0
    keep_no_ev = 0  # kept via attendance_list only
    scheduled_user_rule = 0  # has non-empty event_list AND station/date match
    present_user_rule = 0
    fte=os_=bpo=0
    samples_empty = []
    samples_kept_no_ev = []
    for row in rows:
        if not isinstance(row, dict):
            continue
        is_fm = _is_ops_fm_lm_row(row)
        if is_fm:
            fm += 1
        lf = row.get("list")
        if not _list_has_content(lf):
            empty += 1
            if len(samples_empty) < 3 and is_fm:
                samples_empty.append((row.get("ops_id"), row.get("ops_name"), row.get("contract_type_name")))
            continue
        evs = lf.get("event_list") if isinstance(lf, dict) else None
        ats = lf.get("attendance_list") if isinstance(lf, dict) else None
        if evs:
            has_ev += 1
        elif ats:
            has_att_only += 1
        k, p = _calendar_row_match(row, 166, d_from, True)
        if k:
            keep += 1
            if p:
                present += 1
            if not evs:
                keep_no_ev += 1
                if len(samples_kept_no_ev) < 3:
                    samples_kept_no_ev.append((row.get("ops_id"), row.get("ops_name")))
            if is_fm and evs:
                # user rule: only event_list counts for scheduled
                # still require station/date match like current match on event_list path
                matched = False
                is_pres = False
                for ev in evs:
                    if not isinstance(ev, dict):
                        continue
                    esid = ev.get("event_station_id")
                    try:
                        if esid in (None,"") or int(esid) != 166:
                            continue
                    except Exception:
                        continue
                    ed = ev.get("event_date")
                    if ed is None:
                        ed = ev.get("attendance_date")
                    # require date == today when present
                    if ed is not None:
                        from export_lm_hubs import _attendance_date_matches
                        dm = _attendance_date_matches(ed, d_from)
                        if dm is False:
                            continue
                    matched = True
                    cin = ev.get("clock_in_time")
                    if cin not in (None, "", 0, "0"):
                        is_pres = True
                if matched:
                    scheduled_user_rule += 1
                    if is_pres:
                        present_user_rule += 1
                    labor = _map_labor_type(*_row_agency_contract(row))
                    if labor == "OS": os_ += 1
                    elif labor == "BPO": bpo += 1
                    else: fte += 1
    print("====", label)
    print("rows", len(rows), "fm_lm", fm, "empty_list", empty, "has_event", has_ev, "att_only", has_att_only)
    print("CURRENT keep/present", keep, present, "keep_via_att_only", keep_no_ev)
    print("USER_RULE scheduled/present (event_list only, fm/lm)", scheduled_user_rule, present_user_rule)
    print("USER_RULE labor FTE/OS/BPO", fte, os_, bpo)
    print("samples_empty", samples_empty)
    print("samples_kept_no_ev", samples_kept_no_ev)

rows9, total9 = fetch_all(9)
analyze("agency9", rows9)
print("api_total9", total9)

rows0, total0 = fetch_all(0, max_pages=5)
analyze("agency0 first5pages", rows0)
print("api_total0", total0)

# dump raw first page sample structure keys
body = {"pageno":1,"count":5,"station_id":166,"agency_id":9,"range_start_time":d_from,"range_end_time":d_from}
js = sess.post(ROSTER_CALENDAR_URL, headers=headers, json=body, timeout=45).json()
with open(r"C:\lm_hub_export\data\_diag_cal166_sample.json","w",encoding="utf-8") as f:
    json.dump(js, f, ensure_ascii=False, indent=2)
print("wrote sample json")
# count how many list shapes
shapes = {}
for row in rows9:
    lf = row.get("list")
    if not isinstance(lf, dict):
        shapes[type(lf).__name__] = shapes.get(type(lf).__name__,0)+1
        continue
    key = "ev=%s att=%s empty=%s" % (bool(lf.get("event_list")), bool(lf.get("attendance_list")), not _list_has_content(lf))
    shapes[key] = shapes.get(key,0)+1
print("shapes", shapes)
