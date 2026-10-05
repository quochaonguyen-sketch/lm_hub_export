import json, sys
from collections import Counter
from pathlib import Path

sys.path.insert(0, r"C:\lm_hub_export")
import export_lm_hubs as m
from spx_cookies import resolve_cookie_file

m._COOKIE_FILE = resolve_cookie_file(None)
m._ROSTER_DATE_FROM, m._ROSTER_DATE_TO = m.default_roster_date_range()
m._ROSTER_AGENCY_ID = 0
m._reset_attendance_cache()

print("cookie", m._COOKIE_FILE)
print("day", m._ROSTER_DATE_FROM, m._unix_to_iso_saigon(m._ROSTER_DATE_FROM), "..", m._ROSTER_DATE_TO)

sess, headers = m._thread_session()
sid = 4232

ok, err = m._change_station(sess, headers, sid)
print("change_station_ok", ok, "err", err)

rows, aerr = m._fetch_attendance_all_pages(sess, headers)
print("att_raw", len(rows or []), "err", aerr)
filt = m._filter_attendance_for_station(rows, sid)
print("att_kept", len(filt))

lab_all = Counter()
lab_ops = Counter()
agencies = Counter()
contracts = Counter()
staff_types = Counter()
depts = Counter()
os_people = []
ops_n = 0
labeled = 0
for r in filt:
    ag, ct = m._row_agency_contract(r)
    labor = m._map_labor_type(ag, ct)
    lab_all[labor] += 1
    agencies[str(ag)] += 1
    contracts[str(ct)] += 1
    staff_types[str(r.get("staff_type_name"))] += 1
    depts[str(r.get("department_name") or r.get("event_department_name"))] += 1
    is_ops = m._is_ops_fm_lm_row(r)
    if is_ops:
        ops_n += 1
        if str(ag or "").strip() or str(ct or "").strip():
            labeled += 1
        lab_ops[labor] += 1
        if labor == "OS":
            os_people.append(
                {
                    "name": r.get("staff_name"),
                    "agency": ag,
                    "contract": ct,
                    "id": r.get("biz_staff_id") or r.get("staff_id"),
                    "event_station_id": r.get("event_station_id"),
                }
            )

print("ops_fm_lm", ops_n, "labeled", labeled, "complete", ops_n > 0 and labeled == ops_n)
print("labor_all", dict(lab_all))
print("labor_ops_fm_lm", dict(lab_ops))
print("agencies", dict(agencies))
print("contracts", dict(contracts))
print("staff_types", dict(staff_types))
print("depts", dict(depts))
print("OS_from_attendance", len(os_people))
for p in os_people:
    print(" ", p)

# Via module cache path too
m._reset_attendance_cache()
att_rows2, att_err2 = m._fetch_attendance_stats(sess, headers, sid)
print("via_fetch_stats kept", len(att_rows2 or []), "err", att_err2)

cal_rows, cal_err, allow_att, cal_labor = m._fetch_ops_calendar(sess, headers, sid)
print("cal_err", cal_err, "cal_rows", len(cal_rows or []), "cal_labor", len(cal_labor or []), "allow_att", allow_att)

cal_lab = Counter()
cal_os = []
for row in cal_rows or []:
    if not m._is_ops_fm_lm_row(row):
        continue
    keep, present = m._calendar_row_match(row, sid, m._ROSTER_DATE_FROM, allow_att)
    if not keep:
        continue
    ag, ct = m._row_agency_contract(row)
    labor = m._map_labor_type(ag, ct)
    cal_lab[labor] += 1
    if labor == "OS":
        cal_os.append((row.get("ops_name"), ag, ct, row.get("ops_id")))
print("cal_labor_scheduled", dict(cal_lab), "n", sum(cal_lab.values()))
print("cal_OS_event_list", cal_os)

sup_os = []
for row in cal_labor or []:
    if not m._is_ops_fm_lm_row(row):
        continue
    ag, ct = m._row_agency_contract(row)
    if m._map_labor_type(ag, ct) == "OS":
        # only shells not already in scheduled?
        keep, _ = m._calendar_row_match(row, sid, m._ROSTER_DATE_FROM, allow_att)
        sup_os.append((row.get("ops_name"), ag, ct, row.get("ops_id"), "kept" if keep else "shell"))
print("cal_labor_rows_OS", len(sup_os))
for p in sup_os[:30]:
    print(" ", p)

cooked_rows = m._cook_roster_hub_summary(
    cal_rows,
    att_rows2,
    sid,
    "52-HCM SDD-01 Hub",
    cal_err=cal_err,
    att_err=att_err2,
    allow_att_without_esid=allow_att,
    cal_labor_rows=cal_labor,
)
row = cooked_rows[0]
print(
    "COOKED",
    {
        k: row.get(k)
        for k in [
            "scheduled_count",
            "present_count",
            "late_count",
            "fte_count",
            "os_count",
            "bpo_count",
            "attendance_pct",
        ]
    },
)
# notes are appended in a field? check
print("row_keys", sorted(row.keys()))
# extract notes from how cook builds - looking at code notes go into a notes list that's joined?
# From earlier grep: notes.append labor_source - need to see if stored
for k,v in row.items():
    if "note" in k.lower() or "labor" in k.lower() or "source" in k.lower():
        print(k, v)

out = Path(r"C:\lm_hub_export\output\roster\_diag_hub4232_att.json")
out.write_text(
    json.dumps(
        {
            "change_station": {"ok": ok, "err": err},
            "att_raw": len(rows or []),
            "att_kept": len(filt),
            "att_err": aerr,
            "labor_ops": dict(lab_ops),
            "os_people": os_people,
            "cal_labor_scheduled": dict(cal_lab),
            "cal_OS": cal_os,
            "cooked": {
                k: row.get(k)
                for k in [
                    "scheduled_count",
                    "present_count",
                    "late_count",
                    "fte_count",
                    "os_count",
                    "bpo_count",
                    "attendance_pct",
                ]
            },
        },
        ensure_ascii=False,
        indent=2,
    ),
    encoding="utf-8",
)
print("wrote", out)
