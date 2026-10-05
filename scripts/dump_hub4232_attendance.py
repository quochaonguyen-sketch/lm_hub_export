# -*- coding: utf-8 -*-
"""One-shot raw attendance dump for hub 4232 (SDD).

Does NOT modify export_lm_hubs.py production cook.
Writes under data/smoke/:
  - hub4232_att_raw_pages.json
  - hub4232_att_all_rows.json
  - hub4232_att_summary.json
  - hub4232_att_diag.json  (station_list / switch status even on failure)
"""
from __future__ import annotations

import json
import sys
from collections import Counter
from datetime import datetime
from pathlib import Path

PACK = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(PACK))

import export_lm_hubs as m
from spx_cookies import build_session, resolve_cookie_file

HUB = 4232
STATION_LIST_URL = (
    "https://spx.shopee.vn/api/admin/basicserver/current_user/station_list/"
)
OUT = PACK / "data" / "smoke"
OUT.mkdir(parents=True, exist_ok=True)


def _counter_of(rows, key):
    c = Counter()
    for r in rows or []:
        if not isinstance(r, dict):
            continue
        v = r.get(key)
        if v in (None, ""):
            v = "(empty)"
        c[str(v)] += 1
    return dict(sorted(c.items(), key=lambda kv: (-kv[1], kv[0])))


def _drop_reason(row):
    """Explain why a row would be dropped by Ops FM/LM cook filter."""
    if not isinstance(row, dict):
        return "not_dict"
    stn = str(row.get("staff_type_name") or "").strip().lower()
    st = row.get("staff_type")
    if stn and stn != "ops":
        return "staff_type_name!=ops:%s" % stn
    if st not in (None, ""):
        try:
            if int(st) != 2:
                return "staff_type!=2:%s" % st
        except (TypeError, ValueError):
            return "staff_type_bad:%s" % st
    dept = row.get("event_department_name")
    if dept in (None, ""):
        dept = row.get("department_name")
    dept_s = str(dept or "").strip().lower()
    fm_lm = ("fm/lm", "fm/lm ops", "fm lm", "fm-lm")
    is_all = dept_s == "all"
    if not is_all:
        try:
            did = row.get("event_department_id", row.get("department_id"))
            if did not in (None, "") and int(did) == 999999:
                is_all = True
        except (TypeError, ValueError):
            pass
    if is_all:
        profile = str(row.get("profile_department_name") or "").strip().lower()
        if profile in fm_lm:
            return "KEEP:all+profile_fm_lm"
        return "drop:all+profile_not_fm_lm:%s" % (profile or "(empty)")
    if dept_s:
        if dept_s in fm_lm:
            return "KEEP:dept_fm_lm"
        return "drop:dept:%s" % dept_s
    profile = str(row.get("profile_department_name") or "").strip().lower()
    if profile in fm_lm:
        return "KEEP:profile_fm_lm"
    try:
        did = int(row.get("event_department_id", row.get("department_id")))
        if did == 44:
            return "KEEP:dept_id_44"
        return "drop:dept_id:%s" % did
    except (TypeError, ValueError):
        return "drop:no_dept"


def fetch_station_list(sess, headers, count=500):
    """Paginate station_list; return (stations, current_station_id, raw_pages, err)."""
    stations = []
    seen = set()
    current = None
    pages = []
    pageno = 1
    max_pages = 50
    last_err = None
    while pageno <= max_pages:
        try:
            resp = sess.get(
                STATION_LIST_URL,
                headers=headers,
                params={"count": count, "pageno": pageno, "status_list": 0},
                timeout=30,
            )
            payload = resp.json()
        except Exception as exc:
            last_err = "%s: %s" % (type(exc).__name__, exc)
            break
        pages.append({"pageno": pageno, "http": resp.status_code, "payload": payload})
        if not isinstance(payload, dict):
            last_err = "non-dict station_list"
            break
        if payload.get("retcode") not in (0, "0", None):
            last_err = str(payload.get("message") or payload.get("retcode"))
            break
        data = payload.get("data") or {}
        if not isinstance(data, dict):
            break
        if data.get("current_station_id") not in (None, "") and current is None:
            try:
                current = int(data.get("current_station_id"))
            except (TypeError, ValueError):
                pass
        lst = data.get("list") or data.get("station_list") or []
        if not isinstance(lst, list):
            lst = []
        if not lst:
            break
        for s in lst:
            if not isinstance(s, dict):
                continue
            sid = s.get("id", s.get("station_id"))
            try:
                sid_i = int(sid)
            except (TypeError, ValueError):
                continue
            if sid_i in seen:
                continue
            seen.add(sid_i)
            stations.append(
                {
                    "id": sid_i,
                    "name": s.get("station_name") or s.get("name") or s.get("title"),
                }
            )
        total = data.get("total")
        if total not in (None, "") and len(stations) >= int(total):
            break
        if len(lst) < count:
            break
        pageno += 1
    return stations, current, pages, last_err


def fetch_att_pages_raw(sess, headers):
    """Mirror cook pagination but keep every raw page payload."""
    page_size = max(1, int(m._ATTENDANCE_PAGE_SIZE))
    att_start, att_end = m._attendance_query_window()
    pages = []
    all_rows = []
    seen_ids = set()
    response_total = None
    pageno = 1
    max_pages = 100
    fetch_err = None
    while pageno <= max_pages:
        params = {
            "pageno": pageno,
            "count": page_size,
            "staff_type": 2,
            "start_time": att_start,
            "end_time": att_end,
        }
        payload, err = m._get_attendance_page(sess, headers, params)
        page_meta = {
            "pageno": pageno,
            "params": params,
            "err": err,
            "payload": payload,
        }
        pages.append(page_meta)
        if err:
            fetch_err = err
            break
        data = payload.get("data") if isinstance(payload, dict) else None
        if not isinstance(data, dict):
            break
        raw_total = data.get("total")
        if raw_total not in (None, ""):
            response_total = max(0, m._as_int(raw_total))
        lst = data.get("list") or []
        if not isinstance(lst, list):
            lst = []
        page_rows = [x for x in lst if isinstance(x, dict)]
        for row in page_rows:
            rid = row.get("id")
            if rid in (None, ""):
                all_rows.append(row)
                continue
            if rid in seen_ids:
                continue
            seen_ids.add(rid)
            all_rows.append(row)
        print(
            "  att page=%s got=%s total=%s acc=%s"
            % (pageno, len(page_rows), response_total if response_total is not None else "?", len(all_rows)),
            flush=True,
        )
        if not page_rows:
            break
        if response_total is not None and len(all_rows) >= response_total:
            break
        if response_total is None and len(page_rows) < page_size:
            break
        pageno += 1
    return {
        "pages": pages,
        "rows": all_rows,
        "response_total": response_total,
        "page_size": page_size,
        "att_start": att_start,
        "att_end": att_end,
        "err": fetch_err,
    }


def summarize(rows, hub, switch_ok, switch_err, stations, current_before, current_after, cookie_path, fetch_meta, alt_fetch=None):
    day_start = int(m._ROSTER_DATE_FROM)
    hub_match = []
    hub_mismatch = []
    no_event_station = []
    day_mismatch = []
    for r in rows or []:
        if not isinstance(r, dict):
            continue
        raw_sid = r.get("event_station_id")
        if raw_sid in (None, ""):
            no_event_station.append(r)
            continue
        try:
            sid_i = int(raw_sid)
        except (TypeError, ValueError):
            no_event_station.append(r)
            continue
        day_ok = m._attendance_row_matches_day(r, day_start)
        if sid_i == hub and day_ok:
            hub_match.append(r)
        elif sid_i == hub and not day_ok:
            day_mismatch.append(r)
        else:
            hub_mismatch.append(r)

    keep = []
    drop = []
    reasons = Counter()
    for r in hub_match:
        reason = _drop_reason(r)
        reasons[reason] += 1
        if reason.startswith("KEEP:"):
            keep.append(r)
        else:
            drop.append(r)

    all_plus = sum(
        1
        for r in hub_match
        if str(r.get("department_name") or r.get("event_department_name") or "").strip().lower()
        == "all"
        and str(r.get("profile_department_name") or "").strip().lower()
        in ("fm/lm", "fm/lm ops", "fm lm", "fm-lm")
    )

    def _mini(r):
        return {
            "id": r.get("id"),
            "display_name": r.get("display_name") or r.get("name") or r.get("ops_name"),
            "email": r.get("email"),
            "department_name": r.get("department_name"),
            "event_department_name": r.get("event_department_name"),
            "profile_department_name": r.get("profile_department_name"),
            "staff_type": r.get("staff_type"),
            "staff_type_name": r.get("staff_type_name"),
            "contract_type_name": r.get("contract_type_name") or r.get("contract_type"),
            "agency_name": r.get("agency_name") or r.get("agency"),
            "clock_in_status": r.get("clock_in_status"),
            "clock_in_status_name": r.get("clock_in_status_name"),
            "event_station_id": r.get("event_station_id"),
            "profile_station_id": r.get("profile_station_id"),
            "reason": _drop_reason(r),
        }

    hub_in_list = any(int(s["id"]) == hub for s in stations)
    return {
        "hub": hub,
        "generated_at_ict": datetime.now(m.TZ).isoformat(),
        "cookie_path": str(cookie_path),
        "date_from": m._ROSTER_DATE_FROM,
        "date_to": m._ROSTER_DATE_TO,
        "date_iso": m._unix_to_iso_saigon(m._ROSTER_DATE_FROM),
        "att_window": {
            "start": fetch_meta.get("att_start"),
            "end": fetch_meta.get("att_end"),
            "start_iso": m._unix_to_iso_saigon(fetch_meta.get("att_start")),
            "end_iso": m._unix_to_iso_saigon(fetch_meta.get("att_end")),
            "page_size": fetch_meta.get("page_size"),
        },
        "station_list": {
            "count": len(stations),
            "current_before": current_before,
            "current_after_switch": current_after,
            "hub_4232_in_list": hub_in_list,
            "sample_ids": [s["id"] for s in stations[:20]],
            "hub_entry": next((s for s in stations if s["id"] == hub), None),
        },
        "change_station": {
            "ok": switch_ok,
            "err": switch_err,
        },
        "fetch": {
            "response_total": fetch_meta.get("response_total"),
            "pages": len(fetch_meta.get("pages") or []),
            "raw_row_count": len(rows or []),
            "err": fetch_meta.get("err"),
        },
        "alternate_without_switch": alt_fetch,
        "counts": {
            "raw_rows": len(rows or []),
            "hub_event_station_day_match": len(hub_match),
            "hub_day_mismatch": len(day_mismatch),
            "other_event_station": len(hub_mismatch),
            "no_event_station": len(no_event_station),
            "ops_fm_lm_keep": len(keep),
            "ops_fm_lm_drop": len(drop),
            "all_plus_profile_fm_lm": all_plus,
        },
        "by_department_name": _counter_of(hub_match, "department_name"),
        "by_profile_department_name": _counter_of(hub_match, "profile_department_name"),
        "by_contract_type_name": _counter_of(
            hub_match,
            "contract_type_name"
            if any(r.get("contract_type_name") for r in hub_match)
            else "contract_type",
        ),
        "by_agency_name": _counter_of(
            hub_match,
            "agency_name" if any(r.get("agency_name") for r in hub_match) else "agency",
        ),
        "by_clock_in_status_name": _counter_of(hub_match, "clock_in_status_name"),
        "by_event_station_id_all_raw": _counter_of(rows, "event_station_id"),
        "keep_drop_reasons": dict(sorted(reasons.items(), key=lambda kv: (-kv[1], kv[0]))),
        "kept_rows_mini": [_mini(r) for r in keep],
        "dropped_rows_mini": [_mini(r) for r in drop],
        "blocker": None
        if switch_ok
        else (
            "change_station FAILED for hub %s: %s. "
            "hub_in_station_list=%s. statistic_data_list is current-station scoped; "
            "without a successful switch the dump is for the session's current hub "
            "(current_before=%s), not 4232."
            % (hub, switch_err, hub_in_list, current_before)
        ),
    }


def main():
    m._ROSTER_DATE_FROM, m._ROSTER_DATE_TO = m.default_roster_date_range()
    m._ROSTER_AGENCY_ID = 0
    m._reset_attendance_cache()

    cookie_path = resolve_cookie_file(None)
    sess, headers, cookie_path = build_session(cookie_path)
    print("cookie=%s date=%s" % (cookie_path, m._unix_to_iso_saigon(m._ROSTER_DATE_FROM)), flush=True)

    stations, current_before, sl_pages, sl_err = fetch_station_list(sess, headers)
    hub_in = any(int(s["id"]) == HUB for s in stations)
    print(
        "station_list count=%s current=%s hub4232_in=%s err=%s"
        % (len(stations), current_before, hub_in, sl_err or "-"),
        flush=True,
    )

    # Alternate: fetch WITHOUT switch (documents current-station scope).
    print("ALT fetch without change_station ...", flush=True)
    alt = fetch_att_pages_raw(sess, headers)
    alt_summary = {
        "response_total": alt["response_total"],
        "raw_row_count": len(alt["rows"]),
        "pages": len(alt["pages"]),
        "err": alt["err"],
        "by_event_station_id": _counter_of(alt["rows"], "event_station_id"),
        "note": "Fetched before change_station; reflects current hub scope only.",
    }

    print("change_station(%s) ..." % HUB, flush=True)
    switch_ok, switch_err = m._change_station(sess, headers, HUB)
    print("switch ok=%s err=%s" % (switch_ok, switch_err or "-"), flush=True)

    # Re-read current after switch attempt
    _, current_after, _, _ = fetch_station_list(sess, headers, count=1)

    fetch_meta = {"pages": [], "rows": [], "response_total": None, "page_size": None, "att_start": None, "att_end": None, "err": None}
    rows = []
    if switch_ok:
        print("FETCH after successful switch ...", flush=True)
        fetch_meta = fetch_att_pages_raw(sess, headers)
        rows = fetch_meta["rows"]
    else:
        print("SKIP primary fetch (switch failed); saving alt + diag only.", flush=True)
        # Still try once with station_id query param as alternate (known empty).
        print("ALT2: GET with station_id=4232 query param (expect empty) ...", flush=True)
        att_start, att_end = m._attendance_query_window()
        params = {
            "pageno": 1,
            "count": 50,
            "staff_type": 2,
            "start_time": att_start,
            "end_time": att_end,
            "station_id": HUB,
        }
        payload, err = m._get_attendance_page(sess, headers, params)
        alt_summary["with_station_id_param"] = {
            "params": params,
            "err": err,
            "retcode": payload.get("retcode") if isinstance(payload, dict) else None,
            "message": payload.get("message") if isinstance(payload, dict) else None,
            "total": (payload.get("data") or {}).get("total")
            if isinstance(payload, dict) and isinstance(payload.get("data"), dict)
            else None,
            "list_len": len((payload.get("data") or {}).get("list") or [])
            if isinstance(payload, dict) and isinstance(payload.get("data"), dict)
            else None,
        }
        # Keep alt pages as the only raw pages for inspection of current hub.
        fetch_meta = {
            "pages": alt["pages"],
            "rows": alt["rows"],
            "response_total": alt["response_total"],
            "page_size": alt["page_size"],
            "att_start": alt["att_start"],
            "att_end": alt["att_end"],
            "err": "switch_failed: %s; pages are PRE-SWITCH current-hub data" % switch_err,
        }
        rows = alt["rows"]

    # Best-effort restore
    if current_before not in (None, ""):
        try:
            m._change_station(sess, headers, current_before)
        except Exception:
            pass

    summary = summarize(
        rows,
        HUB,
        switch_ok,
        switch_err,
        stations,
        current_before,
        current_after,
        cookie_path,
        fetch_meta,
        alt_fetch=alt_summary,
    )

    pages_path = OUT / "hub4232_att_raw_pages.json"
    rows_path = OUT / "hub4232_att_all_rows.json"
    summary_path = OUT / "hub4232_att_summary.json"
    diag_path = OUT / "hub4232_att_diag.json"

    pages_path.write_text(
        json.dumps(
            {
                "hub": HUB,
                "switch_ok": switch_ok,
                "switch_err": switch_err,
                "note": summary.get("blocker"),
                "pages": fetch_meta.get("pages") or [],
            },
            ensure_ascii=False,
            indent=2,
            default=str,
        ),
        encoding="utf-8",
    )
    rows_path.write_text(
        json.dumps(
            {
                "hub": HUB,
                "switch_ok": switch_ok,
                "row_count": len(rows or []),
                "rows": rows or [],
            },
            ensure_ascii=False,
            indent=2,
            default=str,
        ),
        encoding="utf-8",
    )
    summary_path.write_text(
        json.dumps(summary, ensure_ascii=False, indent=2, default=str),
        encoding="utf-8",
    )
    diag_path.write_text(
        json.dumps(
            {
                "station_list_err": sl_err,
                "stations": stations,
                "station_list_page0_retcode": (
                    (sl_pages[0].get("payload") or {}).get("retcode") if sl_pages else None
                ),
                "hub_4232_in_list": hub_in,
                "change_station_ok": switch_ok,
                "change_station_err": switch_err,
                "blocker": summary.get("blocker"),
                "paths": {
                    "pages": str(pages_path),
                    "rows": str(rows_path),
                    "summary": str(summary_path),
                },
            },
            ensure_ascii=False,
            indent=2,
            default=str,
        ),
        encoding="utf-8",
    )

    print("WROTE", pages_path, flush=True)
    print("WROTE", rows_path, flush=True)
    print("WROTE", summary_path, flush=True)
    print("WROTE", diag_path, flush=True)
    print(
        "SUMMARY switch_ok=%s raw=%s hub_match=%s keep=%s drop=%s total_api=%s"
        % (
            switch_ok,
            summary["counts"]["raw_rows"],
            summary["counts"]["hub_event_station_day_match"],
            summary["counts"]["ops_fm_lm_keep"],
            summary["counts"]["ops_fm_lm_drop"],
            summary["fetch"]["response_total"],
        ),
        flush=True,
    )
    if summary.get("blocker"):
        print("BLOCKER:", summary["blocker"], flush=True)
    return 0 if switch_ok else 3


if __name__ == "__main__":
    raise SystemExit(main())
