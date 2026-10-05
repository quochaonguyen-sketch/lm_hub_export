# -*- coding: utf-8 -*-
import sys, json, csv
from pathlib import Path
from collections import Counter

sys.path.insert(0, r"C:\lm_hub_export")
import export_lm_hubs as m

ROOT = Path(r"C:\lm_hub_export")
OUT = ROOT / "data" / "smoke" / "_gap_recheck_live.json"
CSV_PATH = ROOT / "output" / "roster" / "roster_today_export.csv"

with CSV_PATH.open(encoding="utf-8-sig", newline="") as f:
    csv_rows = {int(r["station_id"]): r for r in csv.DictReader(f)}

sess, headers, cookie_path = m.build_session(None)
d_from, d_to = m.default_roster_date_range()
m._ROSTER_DATE_FROM = d_from
m._ROSTER_DATE_TO = d_to
m._ROSTER_AGENCY_ID = 0
print("roster day", d_from, m._unix_to_iso_saigon(d_from), "->", d_to, m._unix_to_iso_saigon(d_to))
print("cookie", cookie_path)

# station_list
station_list = []
try:
    resp = sess.get(
        "https://spx.shopee.vn/api/admin/basicserver/current_user/station_list/",
        headers=headers,
        params={"count": 500, "status_list": 0},
        timeout=30,
    )
    payload = resp.json()
    data = payload.get("data") if isinstance(payload, dict) else None
    lst = (data or {}).get("list") or (data or {}).get("station_list") or []
    if isinstance(data, dict):
        print("current_station", data.get("current_station_id"), "keys", list(data.keys())[:20])
    for x in lst:
        if isinstance(x, dict):
            sid = x.get("station_id") or x.get("id")
            if sid not in (None, ""):
                station_list.append(int(sid))
    print("station_list n=", len(station_list), "sample", station_list[:15])
except Exception as e:
    print("station_list err", type(e).__name__, e)

m._reset_attendance_cache()
m._remember_original_station(sess, headers)

priority = [93, 10, 91, 168, 573, 26, 166, 2011, 58, 25, 912, 1047, 397, 370, 196, 393, 979, 919, 304, 384]
allowed = set(station_list) if station_list else set(csv_rows.keys())
ordered = []
seen = set()
for h in priority + sorted(csv_rows.keys()):
    if h in seen:
        continue
    if station_list and h not in allowed:
        continue
    seen.add(h)
    ordered.append(h)

print("will probe", len(ordered), "hubs")

FM = ("fm/lm", "fm/lm ops", "fm lm", "fm-lm")

def row_id(row):
    for k in ("employee_id", "staff_id", "ops_id", "account", "user_id", "staff_code"):
        v = row.get(k)
        if v not in (None, ""):
            return str(v)
    return "?"

def row_name(row):
    for k in ("staff_name", "employee_name", "name", "display_name"):
        v = row.get(k)
        if v not in (None, ""):
            return str(v)
    return ""

def classify_drop(row):
    stn = str(row.get("staff_type_name") or "").strip().lower()
    st = row.get("staff_type")
    dept = str(row.get("department_name") or row.get("event_department_name") or "").strip()
    profile = str(row.get("profile_department_name") or "").strip()
    agency, contract = m._row_agency_contract(row)
    kept = m._is_ops_fm_lm_row(row)
    sample = {
        "id": row_id(row),
        "name": row_name(row),
        "dept": dept,
        "profile": profile,
        "staff_type": stn or st,
        "agency": agency,
        "contract": contract,
        "event_station_id": row.get("event_station_id"),
    }
    if kept:
        return "KEPT", sample

    reasons = []
    if stn and stn != "ops":
        reasons.append("staff_type=" + stn)
    elif st not in (None, ""):
        try:
            if int(st) != 2:
                reasons.append("staff_type_id=" + str(st))
        except Exception:
            reasons.append("staff_type_bad=" + str(st))

    dl = dept.lower()
    pl = profile.lower()
    is_all = dl == "all"
    try:
        did = row.get("event_department_id", row.get("department_id"))
        if did not in (None, "") and int(did) == 999999:
            is_all = True
    except Exception:
        pass

    if is_all:
        if pl in FM:
            reasons.append("BUG_All_plus_profile_FM_LM_still_dropped")
        else:
            reasons.append("All+profile_not_FM_LM(" + (profile or "-") + ")")
    elif dl:
        if "security" in dl:
            reasons.append("Security")
        elif "tea" in dl or "lady" in dl:
            reasons.append("TeaLady")
        elif "rider" in dl:
            reasons.append("Rider")
        elif dl not in FM:
            reasons.append("dept=" + dept)
    else:
        if pl and pl not in FM:
            reasons.append("profile=" + profile)
        elif not pl:
            reasons.append("no_dept_no_profile")

    if not reasons:
        reasons.append("unknown_filter")
    return ";".join(reasons), sample

results = []
for hid in ordered:
    item = {"hub": hid}
    cr = csv_rows.get(hid)
    if cr:
        item["csv_labor"] = int(cr["fte_count"]) + int(cr["os_count"]) + int(cr["bpo_count"])
        item["csv_fte"] = int(cr["fte_count"])
        item["csv_os"] = int(cr["os_count"])
        item["csv_bpo"] = int(cr["bpo_count"])
        item["csv_present"] = int(cr["present_count"])
        item["csv_scheduled"] = int(cr["scheduled_count"])
        item["csv_name"] = cr.get("station_name")

    filtered, att_err = m._fetch_attendance_stats(sess, headers, hid)
    if att_err and not filtered:
        item["error"] = att_err
        results.append(item)
        print("HUB", hid, "ERR", att_err)
        continue

    att_n = len(filtered or [])
    drops = Counter()
    drop_samples = []
    kept_n = 0
    for row in filtered or []:
        reason, sample = classify_drop(row)
        if reason == "KEPT":
            kept_n += 1
        else:
            drops[reason] += 1
            if len(drop_samples) < 10:
                drop_samples.append(dict(sample, reason=reason))

    cooked = m._cook_roster_hub_summary(
        [],
        filtered or [],
        hid,
        (cr or {}).get("station_name") or "",
        None,
        att_err,
        allow_att_without_esid=False,
    )
    row0 = cooked[0] if cooked else {}
    cook_fte = int(row0.get("fte_count") or 0)
    cook_os = int(row0.get("os_count") or 0)
    cook_bpo = int(row0.get("bpo_count") or 0)
    cook_labor = cook_fte + cook_os + cook_bpo
    gap = att_n - kept_n

    item.update({
        "att_filtered": att_n,
        "ops_fm_lm_kept": kept_n,
        "cook_labor": cook_labor,
        "cook_fte": cook_fte,
        "cook_os": cook_os,
        "cook_bpo": cook_bpo,
        "cook_present": row0.get("present_count"),
        "cook_scheduled": row0.get("scheduled_count"),
        "metric_notes": row0.get("metric_notes"),
        "gap_att_vs_kept": gap,
        "gap_att_vs_cook_labor": att_n - cook_labor,
        "drop_reasons": dict(drops),
        "drop_samples": drop_samples,
        "csv_vs_cook_labor_delta": (item["csv_labor"] - cook_labor) if "csv_labor" in item else None,
        "att_err": att_err,
    })
    flag = ""
    if gap >= 2:
        flag = " ***GAP2+***"
    elif gap == 1:
        flag = " *gap1*"
    print(
        "HUB %s: att=%s kept=%s cook=%s csv=%s gap=%s drops=%s%s"
        % (hid, att_n, kept_n, cook_labor, item.get("csv_labor"), gap, dict(drops), flag)
    )
    results.append(item)

try:
    m._restore_original_station(sess, headers)
except Exception:
    pass

OUT.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
print("WROTE", OUT)

print("\n=== SUMMARY gaps >=1 ===")
for it in results:
    if it.get("error"):
        print("ERR", it["hub"], it["error"])
        continue
    g = it.get("gap_att_vs_kept") or 0
    if g >= 1:
        print(
            it["hub"],
            "att", it["att_filtered"],
            "kept", it["ops_fm_lm_kept"],
            "cook", it["cook_labor"],
            "csv", it.get("csv_labor"),
            "drops", it.get("drop_reasons"),
        )

print("\n=== gap==2 hubs ===")
for it in results:
    if (it.get("gap_att_vs_kept") or 0) == 2:
        print(json.dumps(it, ensure_ascii=False, indent=2)[:2000])
