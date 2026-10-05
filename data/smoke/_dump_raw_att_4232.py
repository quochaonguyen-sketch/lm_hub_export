# -*- coding: utf-8 -*-
"""Dump FULL raw attendance for hub 4232 today: change_station + all pages."""
from __future__ import annotations

import csv
import json
import sys
from datetime import datetime, timedelta, timezone
from pathlib import Path

ROOT = Path(r"C:\lm_hub_export")
sys.path.insert(0, str(ROOT))

import export_lm_hubs as m
from spx_cookies import build_session, resolve_cookie_file

HUB = 4232
SAIGON = timezone(timedelta(hours=7))
NOW = datetime.now(SAIGON)
STAMP = NOW.strftime("%Y%m%d_%H%M%S")
OUT_DIR = ROOT / "data" / "smoke"
OUT_DIR.mkdir(parents=True, exist_ok=True)
JSON_PATH = OUT_DIR / f"raw_attendance_hub4232_{STAMP}.json"
CSV_PATH = OUT_DIR / f"raw_attendance_hub4232_{STAMP}_summary.csv"
META_PATH = OUT_DIR / f"raw_attendance_hub4232_{STAMP}_meta.txt"
JSON_LATEST = OUT_DIR / "raw_attendance_hub4232_latest.json"
CSV_LATEST = OUT_DIR / "raw_attendance_hub4232_latest_summary.csv"


def station_list_probe(sess, headers):
    info = {
        "ok": False,
        "error": None,
        "current_station_id": None,
        "in_station_list": False,
        "matched": None,
        "total_listed": 0,
        "sample_ids": [],
        "has_4232": False,
    }
    try:
        found = None
        all_ids = []
        current = None
        for pageno in range(1, 20):
            resp = sess.get(
                "https://spx.shopee.vn/api/admin/basicserver/current_user/station_list/",
                headers=headers,
                params={"count": 100, "pageno": pageno, "status_list": 0},
                timeout=30,
            )
            payload = resp.json()
            data = payload.get("data") if isinstance(payload, dict) else None
            if not isinstance(data, dict):
                info["error"] = "station_list non-dict data: %s" % type(data)
                break
            if current is None and data.get("current_station_id") not in (None, ""):
                current = int(data.get("current_station_id"))
            lst = data.get("list") or data.get("station_list") or []
            if not isinstance(lst, list):
                lst = []
            if not lst:
                break
            for st in lst:
                if not isinstance(st, dict):
                    continue
                sid = st.get("id") or st.get("station_id")
                try:
                    sid_i = int(sid)
                except Exception:
                    continue
                all_ids.append(sid_i)
                if sid_i == HUB:
                    found = {
                        "id": sid_i,
                        "station_name": st.get("station_name") or st.get("name"),
                        "keys": sorted(st.keys()),
                    }
            total = data.get("total")
            if total is not None:
                try:
                    if len(all_ids) >= int(total):
                        break
                except Exception:
                    pass
            if len(lst) < 100:
                break
        info["ok"] = True
        info["current_station_id"] = current
        info["in_station_list"] = found is not None
        info["matched"] = found
        info["total_listed"] = len(all_ids)
        info["sample_ids"] = all_ids[:20]
        info["has_4232"] = found is not None
    except Exception as exc:
        info["error"] = "%s: %s" % (type(exc).__name__, exc)
    return info


def fetch_raw_pages(sess, headers):
    page_size = 50
    att_start, att_end = m._attendance_query_window()
    pages = []
    all_rows = []
    seen = set()
    response_total = None
    last_err = None
    for pageno in range(1, 101):
        params = {
            "pageno": pageno,
            "count": page_size,
            "staff_type": 2,
            "start_time": att_start,
            "end_time": att_end,
        }
        payload, err = m._get_attendance_page(sess, headers, params)
        page_rec = {
            "pageno": pageno,
            "params": params,
            "error": err,
            "retcode": payload.get("retcode") if isinstance(payload, dict) else None,
            "message": payload.get("message") if isinstance(payload, dict) else None,
            "data_total": None,
            "data_count": None,
            "list_len": 0,
            "raw_payload": payload,
        }
        if err:
            last_err = err
            pages.append(page_rec)
            break
        data = payload.get("data") if isinstance(payload, dict) else None
        if not isinstance(data, dict):
            pages.append(page_rec)
            break
        lst = data.get("list") or []
        if not isinstance(lst, list):
            lst = []
        total = data.get("total")
        if total is not None:
            try:
                response_total = int(total)
            except Exception:
                response_total = total
        page_rec["data_total"] = response_total
        page_rec["data_count"] = data.get("count")
        page_rec["list_len"] = len(lst)
        pages.append(page_rec)
        for row in lst:
            rid = row.get("id") if isinstance(row, dict) else None
            key = rid if rid is not None else json.dumps(row, sort_keys=True, ensure_ascii=False)
            if key in seen:
                continue
            seen.add(key)
            all_rows.append(row)
        if not lst:
            break
        if response_total is not None and len(all_rows) >= int(response_total):
            break
        if len(lst) < page_size:
            break
    return {
        "att_start": att_start,
        "att_end": att_end,
        "att_start_iso": m._unix_to_iso_saigon(att_start),
        "att_end_iso": m._unix_to_iso_saigon(att_end),
        "page_size": page_size,
        "pages": pages,
        "page_count": len(pages),
        "rows": all_rows,
        "row_count": len(all_rows),
        "api_total": response_total,
        "error": last_err,
    }


def write_csv(rows, path: Path):
    cols = [
        "id", "date", "staff_id", "biz_staff_id", "staff_name", "staff_email",
        "staff_type", "staff_type_name", "department_name", "event_department_id",
        "profile_department_name", "profile_department_id", "station_id", "station_name",
        "event_station_id", "event_station_name", "profile_station_id", "profile_station_name",
        "clock_out_station_id", "clock_out_station_name", "agency", "contract_type",
        "slot_code", "planned_hours", "actual_hours", "fulfill_working_hours",
        "clock_in_time_str", "clock_out_time_str", "clock_in_status_name", "clock_out_status_name",
        "clock_in_matching_type_str", "clock_out_matching_type_str", "event_id",
        "out_of_event_name", "sick_or_leave",
    ]
    with path.open("w", encoding="utf-8-sig", newline="") as f:
        w = csv.DictWriter(f, fieldnames=cols, extrasaction="ignore")
        w.writeheader()
        for r in rows:
            if isinstance(r, dict):
                w.writerow({c: r.get(c) for c in cols})


def main():
    cookie_path = resolve_cookie_file()
    sess, headers, used = build_session(cookie_path)
    print("cookie=%s" % used, flush=True)

    d_from, d_to = m.default_roster_date_range()
    m._ROSTER_DATE_FROM = int(d_from)
    m._ROSTER_DATE_TO = int(d_to)
    print("roster_window from=%s to=%s" % (m._ROSTER_DATE_FROM, m._ROSTER_DATE_TO), flush=True)

    station_info = station_list_probe(sess, headers)
    print(
        "station_list ok=%s in_list=%s current=%s total_listed=%s err=%s"
        % (
            station_info["ok"],
            station_info.get("in_station_list"),
            station_info.get("current_station_id"),
            station_info.get("total_listed"),
            station_info.get("error"),
        ),
        flush=True,
    )

    ok, switch_err = m._change_station(sess, headers, HUB)
    print("change_station ok=%s err=%s" % (ok, switch_err), flush=True)

    if ok:
        fetch = fetch_raw_pages(sess, headers)
        print(
            "fetch rows=%s api_total=%s pages=%s err=%s"
            % (fetch["row_count"], fetch["api_total"], fetch["page_count"], fetch["error"]),
            flush=True,
        )
    else:
        fetch = {
            "skipped": True,
            "reason": "change_station failed",
            "rows": [],
            "row_count": 0,
            "api_total": None,
            "pages": [],
            "page_count": 0,
            "error": switch_err,
        }

    unscoped = None
    if not ok:
        try:
            att_start, att_end = m._attendance_query_window()
            payload, err = m._get_attendance_page(
                sess,
                headers,
                {
                    "pageno": 1,
                    "count": 50,
                    "staff_type": 2,
                    "start_time": att_start,
                    "end_time": att_end,
                },
            )
            data = payload.get("data") if isinstance(payload, dict) else None
            lst = (data.get("list") or []) if isinstance(data, dict) else []
            unscoped = {
                "error": err,
                "retcode": payload.get("retcode") if isinstance(payload, dict) else None,
                "message": payload.get("message") if isinstance(payload, dict) else None,
                "total": data.get("total") if isinstance(data, dict) else None,
                "list_len": len(lst) if isinstance(lst, list) else 0,
                "current_hub_hint": None,
            }
            if isinstance(lst, list) and lst:
                r0 = lst[0]
                unscoped["current_hub_hint"] = {
                    "event_station_id": r0.get("event_station_id"),
                    "event_station_name": r0.get("event_station_name"),
                    "station_id": r0.get("station_id"),
                    "station_name": r0.get("station_name"),
                }
        except Exception as exc:
            unscoped = {"error": "%s: %s" % (type(exc).__name__, exc)}

    doc = {
        "generated_at": NOW.isoformat(),
        "hub": HUB,
        "hub_name_expected": "52-HCM SDD-01 Hub",
        "cookie_path": str(used),
        "change_station": {"ok": ok, "error": switch_err},
        "station_list": station_info,
        "attendance": fetch,
        "unscoped_page1_when_switch_failed": unscoped,
        "note": (
            "RAW dump: all statistic_data_list pages after change_station(4232). "
            "No Ops/FM-LM/event_station filter applied to rows[]."
        ),
    }

    JSON_PATH.write_text(json.dumps(doc, ensure_ascii=False, indent=2), encoding="utf-8")
    JSON_LATEST.write_text(json.dumps(doc, ensure_ascii=False, indent=2), encoding="utf-8")
    write_csv(fetch.get("rows") or [], CSV_PATH)
    write_csv(fetch.get("rows") or [], CSV_LATEST)

    meta = [
        "hub=4232",
        "generated_at=%s" % NOW.isoformat(),
        "change_station_ok=%s" % ok,
        "change_station_error=%s" % switch_err,
        "in_station_list=%s" % station_info.get("in_station_list"),
        "station_list_total_listed=%s" % station_info.get("total_listed"),
        "current_station_id=%s" % station_info.get("current_station_id"),
        "row_count=%s" % fetch.get("row_count"),
        "api_total=%s" % fetch.get("api_total"),
        "page_count=%s" % fetch.get("page_count"),
        "json=%s" % JSON_PATH,
        "csv=%s" % CSV_PATH,
        "json_latest=%s" % JSON_LATEST,
        "csv_latest=%s" % CSV_LATEST,
    ]
    META_PATH.write_text("\n".join(meta) + "\n", encoding="utf-8")
    print("WROTE", JSON_PATH, flush=True)
    print("WROTE", CSV_PATH, flush=True)
    print("META", " | ".join(meta), flush=True)


if __name__ == "__main__":
    main()
