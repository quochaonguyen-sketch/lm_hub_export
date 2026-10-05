# -*- coding: utf-8 -*-
"""Diagnose hub 2011 FTE/OS/BPO vs scheduled."""
from __future__ import annotations
import json
import sys
from pathlib import Path

ROOT = Path(r"C:\lm_hub_export")
sys.path.insert(0, str(ROOT))
import export_lm_hubs as m

d_from, d_to = m.default_roster_date_range()
m._ROSTER_DATE_FROM = int(d_from)
m._ROSTER_DATE_TO = int(d_to)
m._ROSTER_AGENCY_ID = 0
m._COOKIE_FILE = str(m.resolve_cookie_file())

SID = 2011
SNAME = "51-HCM Binh Chanh/Vinh Loc A Hub"
OUT = ROOT / "output" / "roster" / "_diag_hub2011.json"

sess, headers = m._thread_session()
print("cookie:", m._COOKIE_FILE)
print("day_from:", m._ROSTER_DATE_FROM, m._unix_to_iso_saigon(m._ROSTER_DATE_FROM))
print("day_to:", m._ROSTER_DATE_TO, m._unix_to_iso_saigon(m._ROSTER_DATE_TO))

cal_rows, cal_err, allow_att, cal_labor_rows = m._fetch_ops_calendar(sess, headers, SID)
att_rows, att_err = m._fetch_attendance_stats(sess, headers, SID)
print("cal_err:", cal_err)
print("att_err:", att_err)
print("allow_att_without_esid:", allow_att)
print("cal_rows:", len(cal_rows or []), "cal_labor_rows:", len(cal_labor_rows or []), "att_rows:", len(att_rows or []))

day_start = int(m._ROSTER_DATE_FROM)

def person_label(row):
    agency, contract = m._row_agency_contract(row)
    labor = m._map_labor_type(agency, contract)
    return {
        "ops_id": row.get("ops_id") or row.get("biz_staff_id") or row.get("staff_id") or row.get("employee_id"),
        "name": row.get("ops_name") or row.get("staff_name") or row.get("employee_name"),
        "agency": agency,
        "contract": contract,
        "labor": labor,
        "department": row.get("event_department_name") or row.get("department_name") or row.get("profile_department_name"),
        "staff_type": row.get("staff_type"),
        "staff_type_name": row.get("staff_type_name"),
        "tokens": sorted(m._row_identity_tokens(row)),
        "is_ops_fm_lm": m._is_ops_fm_lm_row(row),
        "is_part_time": m._is_part_time_row(row) if hasattr(m, "_is_part_time_row") else None,
        "list_empty": not m._list_has_content(row.get("list")) if hasattr(m, "_list_has_content") else None,
    }

kept = []
dropped = []
for row in cal_rows or []:
    if not isinstance(row, dict):
        continue
    info = person_label(row)
    keep, present = (False, False)
    if info["is_ops_fm_lm"]:
        keep, present = m._calendar_row_match(row, SID, day_start, bool(allow_att))
    info["keep"] = keep
    info["present"] = present
    if keep:
        kept.append(info)
    else:
        dropped.append(info)

cal_tokens = set()
for row in cal_rows or []:
    if isinstance(row, dict) and m._is_ops_fm_lm_row(row):
        cal_tokens.update(m._row_identity_tokens(row))

# Note: cook builds cal_tokens from ALL ops_fm_lm cal_rows, not only kept
# That matters for att_extra dedup!

supp = []
for row in cal_labor_rows or []:
    if not m._is_ops_fm_lm_row(row) or not m._is_part_time_row(row):
        continue
    if m._row_identity_tokens(row) & cal_tokens:
        continue
    info = person_label(row)
    info["source"] = "supplemental_os"
    supp.append(info)

# cal_labeled
cal_labeled = 0
for row in cal_rows or []:
    if not isinstance(row, dict) or not m._is_ops_fm_lm_row(row):
        continue
    keep, _ = m._calendar_row_match(row, SID, day_start, bool(allow_att))
    if not keep:
        continue
    agency, contract = m._row_agency_contract(row)
    if str(agency or "").strip() or str(contract or "").strip():
        cal_labeled += 1

att_people = []
att_extra = []
for row in att_rows or []:
    if not isinstance(row, dict) or not m._is_ops_fm_lm_row(row):
        continue
    info = person_label(row)
    info["late"] = m._is_late_attendance_row(row) if hasattr(m, "_is_late_attendance_row") else None
    tokens = m._row_identity_tokens(row)
    info["overlap_cal"] = bool(tokens & cal_tokens)
    att_people.append(info)
    agency, contract = m._row_agency_contract(row)
    if not str(agency or "").strip() and not str(contract or "").strip():
        continue
    if cal_labeled > 0 and not (tokens & cal_tokens):
        info2 = dict(info)
        info2["source"] = "att_extra"
        att_extra.append(info2)

cooked = m._cook_roster_hub_summary(
    cal_rows, att_rows, SID, SNAME, None, att_err,
    allow_att_without_esid=bool(allow_att),
    cal_labor_rows=cal_labor_rows,
)

# Also compute cal labor from kept only
from collections import Counter
cal_lab = Counter(p["labor"] for p in kept)
print("\n=== COOKED ===")
print(json.dumps(cooked, ensure_ascii=False, indent=2))
print("\n=== KEPT CALENDAR (scheduled labor) n=%d ===" % len(kept))
for p in kept:
    print("  [{labor}] {name} | agency={agency!r} contract={contract!r} present={present} ops_id={ops_id}".format(**p))
print("\n=== CAL LABOR COUNTS FROM KEPT ===", dict(cal_lab))
print("cal_labeled:", cal_labeled)
print("\n=== SUPPLEMENTAL OS n=%d ===" % len(supp))
for p in supp:
    print("  [{labor}] {name} | agency={agency!r} contract={contract!r} ops_id={ops_id}".format(**p))
print("\n=== ATT EXTRA (unmatched) n=%d ===" % len(att_extra))
for p in att_extra:
    print("  [{labor}] {name} | agency={agency!r} contract={contract!r} ops_id={ops_id} tokens={tokens}".format(**p))
print("\n=== ALL ATT OPS FM/LM n=%d ===" % len(att_people))
for p in att_people:
    print("  [{labor}] {name} | agency={agency!r} contract={contract!r} overlap_cal={overlap_cal} late={late} ops_id={ops_id}".format(**p))

# Dropped but ops with labels - interesting?
print("\n=== DROPPED cal ops_fm_lm with content? sample ===")
interesting_drop = [p for p in dropped if p["is_ops_fm_lm"]]
print("dropped ops_fm_lm count:", len(interesting_drop))
for p in interesting_drop[:30]:
    print("  [{labor}] {name} | empty_list={list_empty} agency={agency!r} contract={contract!r} ops_id={ops_id}".format(**p))

payload = {
    "cooked": cooked,
    "kept": kept,
    "supplemental_os": supp,
    "att_extra": att_extra,
    "att_people": att_people,
    "dropped_ops_fm_lm": interesting_drop,
    "cal_err": cal_err,
    "att_err": att_err,
    "allow_att": allow_att,
    "cal_labeled": cal_labeled,
    "counts": {
        "cal_raw": len(cal_rows or []),
        "cal_labor_raw": len(cal_labor_rows or []),
        "att_raw": len(att_rows or []),
        "kept": len(kept),
        "supp": len(supp),
        "att_extra": len(att_extra),
    },
}
OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2, default=str), encoding="utf-8")
print("\nWrote", OUT)
