import json, sys
from pathlib import Path
from collections import Counter

sys.path.insert(0, r"C:\lm_hub_export")
import export_lm_hubs as m

m._ROSTER_DATE_FROM, m._ROSTER_DATE_TO = m.default_roster_date_range()
m._ROSTER_AGENCY_ID = 0
sess, headers, cookie_path = m.build_session(m.resolve_cookie_file(None))
print("cookie", cookie_path)
print("day", m._ROSTER_DATE_FROM, m._unix_to_iso_saigon(m._ROSTER_DATE_FROM))

# change station to 4232 then fetch attendance
ok, err = m._change_station(sess, headers, 4232)
print("change_station", ok, err)

att_rows, att_err = m._fetch_attendance_all_pages(sess, headers)
print("attendance raw pages rows", len(att_rows or []), "err", att_err)

# filter for hub today
att_hub = []
for r in att_rows or []:
    if not m._is_ops_fm_lm_row(r):
        continue
    # day + station
    if hasattr(m, "_attendance_row_matches_day"):
        if not m._attendance_row_matches_day(r, m._ROSTER_DATE_FROM):
            continue
    esid = r.get("event_station_id")
    if esid is not None:
        try:
            if int(esid) != 4232:
                continue
        except Exception:
            pass
    att_hub.append(r)
print("attendance ops FM/LM hub4232 today", len(att_hub))

# also fetch calendars
raw = {
    "station_id": 4232,
    "date_from": m._ROSTER_DATE_FROM,
    "date_to": m._ROSTER_DATE_TO,
    "date_iso": m._unix_to_iso_saigon(m._ROSTER_DATE_FROM),
}
for agency in (0, 9):
    rows, err, total, pages = m._fetch_ops_calendar_agency(
        sess, headers, 4232, agency, max_pages=20, stop_if_unscoped=False
    )
    raw[f"calendar_agency_{agency}"] = {"rows": rows, "err": err, "total": total, "pages": pages}
    print(f"calendar agency={agency} rows={len(rows or [])} total={total} pages={pages} err={err}")

raw["attendance"] = {"rows": att_rows, "err": att_err, "hub_ops_fm_lm": len(att_hub)}
outp = Path(r"C:\lm_hub_export\data\smoke\raw_4232_live_20261002_evening.json")
# store filtered att separately for smaller analysis; full att too
raw["attendance_hub_ops"] = att_hub
# Don't dump huge if needed - calendar is main; keep att full
outp.write_text(json.dumps(raw, ensure_ascii=False), encoding="utf-8")
print("wrote", outp, "bytes", outp.stat().st_size)
