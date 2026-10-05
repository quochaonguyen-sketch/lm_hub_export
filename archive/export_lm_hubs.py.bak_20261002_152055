"""Standalone export SPX LM hub metrics (order_volume / backlog / delivery_progress / fm_order_volume / roster) -> CSV.

Khong phu thuoc SPX_Launcher. Cookie: cookies/cookies.json (hoac --cookie-file /
LM_HUB_COOKIE_FILE). Tuy chon --launcher-cookie de doc cookie launcher (OFF mac dinh).

USAGE:
  py -3.14 export_lm_hubs.py
  py -3.14 export_lm_hubs.py --apis order_volume,backlog --out-suffix _test
  py -3.14 export_lm_hubs.py --apis fm_order_volume --hubs data/smoke/_hubs_smoke_fm.csv --out-suffix _smoke
  py -3.14 export_lm_hubs.py --apis roster --hubs data/smoke/_hubs_smoke_roster.csv --out-suffix _smoke
  py -3.14 export_lm_hubs.py --apis roster   # today-only cooked CSV
  py -3.14 export_lm_hubs.py --hubs data/hubs.csv --workers 4
  py -3.14 export_lm_hubs.py --cookie-file cookies\\cookies.json
  py -3.14 export_lm_hubs.py --launcher-cookie   # optional, OFF by default
  scripts/run_test.bat

APIs:
  order_volume       operation__lm_order_volume__10m_v4
                     body: {"station_id": int}
                     inbound  = lm_hub_inbounded_order_qty_eod
                     delivered= lm_hub_delivered_order_qty_eod
  backlog            operation__lm_backlog__10m_v3
                     body: {"is_all": 0, "station_id": int}   # is_all BAT BUOC (thieu -> retcode -21001)
                     lm_hub_to_deliver_backlog_eq_1d..eq_6d / gte_7d, lm_hub_backlog_gte_1d, ...
  delivery_progress  operation__lm_delivery_progress_all_fleets__10m_v3
                     body: {"station_id": int}   # like order_volume
                     CSV: ONE ROW PER DRIVER (data.list[]), not per hub
  fm_order_volume     operation__fm_order_volume_hub__10m
                     body: {"station_id": int}; retry {"is_all": 0, "station_id": int} on -21001
                     data is one object; CSV is ONE ROW PER HUB
  roster (alias: event_list)  TODAY-ONLY hub summary (Asia/Saigon)
                     1) POST /api/wfm/admin/ops_calendar/ops_calendar_list
                        body: {pageno, count, station_id, agency_id (default 0),
                               range_start_time, range_end_time}  # both = today midnight VN
                     2) GET  /api/wfm/admin/attendance/clock/statistic_data_list
                        ?pageno&count=50&staff_type=2&start_time=day-30d&end_time=end_of_today
                        (paginate until empty/total; day-filter client-side)
                     Keep calendar people with non-empty list for today + Event Station
                     (event_station_id) only — never Profile Station. Labor PRIMARY from
                     calendar (Part-time->OS first, else Inhouse->FTE, Full-time->BPO);
                     attendance late/labor secondary. Maintenance hubs get a second pass.
                     CSV: one hub row - scheduled/present/late + FTE/OS/BPO + attendance_pct

Hub fail -> SKIP (khong ghi CSV). Exit 0 neu >=1 OK; exit 1 neu ALL fail.
--strict: exit 1 neu co skip.
"""
from __future__ import annotations

import argparse
import csv
import io
import os
import sys
import threading
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timedelta, timezone
from pathlib import Path

from spx_cookies import CookieError, build_session, resolve_cookie_file

PACK_ROOT = Path(__file__).resolve().parent
API_BASE = (
    "https://spx.shopee.vn/mgmt/api/pc/forward/data/api_mart/mgmt_app/data_api/"
)
# Roster / WFM uses a different path (NOT data_api mart).
ROSTER_CALENDAR_URL = (
    "https://spx.shopee.vn/api/wfm/admin/ops_calendar/ops_calendar_list"
)
ROSTER_ATTENDANCE_URL = (
    "https://spx.shopee.vn/api/wfm/admin/attendance/clock/statistic_data_list"
)
# (endpoint_or_marker, default_csv_name, extract_mode, request_body_builder_name)
API_SPECS = {
    "order_volume": (
        "operation__lm_order_volume__10m_v4",
        "lm_order_volume_hubs_export.csv",
        "list0",
        "station_only",
    ),
    "backlog": (
        "operation__lm_backlog__10m_v3",
        "lm_backlog_hubs_export.csv",
        "list0",
        "backlog_is_all",
    ),
    "delivery_progress": (
        "operation__lm_delivery_progress_all_fleets__10m_v3",
        "lm_delivery_progress_export.csv",
        "list_all",  # one CSV row per driver in data.list
        "station_only",
    ),
    "fm_order_volume": (
        "operation__fm_order_volume_hub__10m",
        "fm_order_volume_hubs_export.csv",
        "dict",  # one object directly under data
        "fm_order_volume_probe",
    ),
    "roster": (
        "ops_calendar_list",  # marker; real URLs are ROSTER_*_URL
        "roster_today_export.csv",
        "roster_hub",
        "roster_calendar",
    ),
}
API_ALIASES = {
    "event_list": "roster",
}
DEFAULT_APIS = ("order_volume", "backlog")
DEFAULT_HUBS = PACK_ROOT / "data" / "hubs.csv"
DEFAULT_OUT_DIR = PACK_ROOT / "output"
DEFAULT_ROSTER_OUT_DIR = PACK_ROOT / "output" / "roster"
LAUNCHER_COOKIE = Path(
    r"C:\SPX_Launcher\config\cookies\cookies_assign_pick.json"
)
TZ = timezone(timedelta(hours=7))

ORDER_VOLUME_KEY_METRICS = (
    "lm_hub_inbounded_order_qty_eod",
    "lm_hub_delivered_order_qty_eod",
)
# Exact backlog CSV allowlist. Keep identity columns and fetched_at in write_csv.
BACKLOG_KEY_METRICS = (
    "lm_hub_backlog_gte_1d_order_qty_td",
    "lm_hub_leg_backlog_gte_1d_order_qty_td",
    "lm_hub_to_deliver_backlog_eq_1d_order_qty_td",
    "lm_hub_to_deliver_backlog_eq_2d_order_qty_td",
    "lm_hub_to_deliver_backlog_eq_3d_order_qty_td",
    "lm_hub_to_deliver_backlog_eq_4d_order_qty_td",
    "lm_hub_to_deliver_backlog_eq_5d_order_qty_td",
    "lm_hub_to_deliver_backlog_eq_6d_order_qty_td",
    "lm_hub_to_deliver_backlog_gte_7d_order_qty_td",
)


# Exact delivery_progress CSV allowlist. Keep identity columns, metrics, and fetched_at in write_csv.
DELIVERY_PROGRESS_KEY_METRICS = (
    "agency_name",
    "contract_type",
    "driver_id",
    "driver_name",
    "lm_hub_fleet_assigned_order_qty_td",
    "lm_hub_fleet_delivered_order_qty_eod",
    "lm_hub_fleet_delivered_pct_eod",
    "lm_hub_fleet_delivering_in_system_order_qty_eod",
    "lm_hub_fleet_failed_delivery_order_qty_eod",
)

FM_ORDER_VOLUME_KEY_METRICS = (
    "data_from_time",
    "sla_flag",
    "total_inbounded_order_qty_eoh",
    "total_outbounded_order_qty_eoh",
    "total_picked_order_qty_eoh",
    "update_at_timestamp",
)

# Roster today hub-summary CSV allowlist (identity + fetched_at added in write_csv).
# Dropped old event_list_v2 / staff_search cols: grain, slot_code, labor_type, agency_name,
# scheduled/actual/planned_headcount, off_count, event_department_name, ...
ROSTER_KEY_METRICS = (
    "event_date_iso",
    "scheduled_count",
    "present_count",
    "late_count",
    "fte_count",
    "os_count",
    "bpo_count",
    "attendance_pct",
)


def default_roster_date_range():
    """Today-only roster window in Asia/Saigon unix seconds.

    Returns (today_00:00, today_23:59:59).
    - ops_calendar_list uses midnight for BOTH range_start_time and range_end_time.
    - statistic_data_list uses start=midnight-30d (browser-style), end=end_of_today;
      rows are day-filtered client-side. count=50, paginate until empty/total.
    Override day with --date-from (unix midnight). --date-to overrides attendance end.
    """
    now = datetime.now(TZ)
    mid = now.replace(hour=0, minute=0, second=0, microsecond=0)
    end = mid + timedelta(days=1) - timedelta(seconds=1)
    return int(mid.timestamp()), int(end.timestamp())


def _unix_to_iso_saigon(ts):
    try:
        return datetime.fromtimestamp(int(ts), TZ).strftime("%Y-%m-%d")
    except Exception:
        return ""


def build_request_body(api_key, station_id):
    """Return JSON body for API POST.

    backlog REQUIRES is_all (browser sends {"is_all": 0}); station_id alone -> -21001.
    roster uses ops_calendar_list body (agency_id + range midnight..midnight).
    """
    _ep, _name, _mode, body_kind = API_SPECS[api_key]
    sid = int(station_id)
    if body_kind == "backlog_is_all":
        return {"is_all": 0, "station_id": sid}
    if body_kind == "roster_calendar":
        # Calendar range_end_time = midnight (same as start), NOT end-of-day.
        day_start = int(_ROSTER_DATE_FROM)
        return {
            "pageno": 1,
            "count": 100,
            "station_id": sid,
            "agency_id": int(_ROSTER_AGENCY_ID),
            "range_start_time": day_start,
            "range_end_time": day_start,
        }
    # station_only and fm_order_volume_probe start with station_id only.
    return {"station_id": sid}


def load_hubs(path):
    text_lines = []
    with open(path, "r", encoding="utf-8-sig") as handle:
        for line in handle:
            stripped = line.strip()
            if not stripped or stripped.startswith("#"):
                continue
            if all(ch in ",;\t " for ch in stripped):
                continue
            text_lines.append(stripped)
    if not text_lines:
        raise SystemExit("Hubs CSV rong: %s" % path)

    header_idx = None
    for idx, line in enumerate(text_lines):
        cols = [c.strip().lower() for c in next(csv.reader([line]))]
        if "station_id" in cols:
            header_idx = idx
            break
    if header_idx is None:
        raise SystemExit("Hubs CSV thieu cot station_id: %s" % path)
    text_lines = text_lines[header_idx:]

    reader = csv.DictReader(io.StringIO("\n".join(text_lines)))
    field_map = {name.strip().lower(): name for name in (reader.fieldnames or [])}
    if "station_id" not in field_map:
        raise SystemExit("Hubs CSV thieu cot station_id: %s" % path)
    sid_key = field_map["station_id"]
    name_key = field_map.get("station_name")

    hubs = []
    for row in reader:
        raw = str(row.get(sid_key) or "").strip()
        if not raw:
            continue
        try:
            station_id = int(raw)
        except ValueError:
            print("Bo qua station_id khong hop le: %r" % raw, flush=True)
            continue
        station_name = str(row.get(name_key) or "").strip() if name_key else ""
        hubs.append({"station_id": station_id, "station_name": station_name})
    if not hubs:
        raise SystemExit("Khong co station_id hop le trong: %s" % path)
    return hubs


def parse_apis(value):
    raw = (value or "").strip()
    if not raw or raw.lower() == "all":
        chosen = list(API_SPECS.keys()) if raw.lower() == "all" else list(DEFAULT_APIS)
    else:
        chosen = []
        for part in raw.split(","):
            key = part.strip().lower()
            if not key:
                continue
            key = API_ALIASES.get(key, key)
            if key not in API_SPECS:
                raise SystemExit(
                    "API khong hop le: %r. Chon: %s | all (alias: event_list=roster)"
                    % (part.strip(), ", ".join(API_SPECS))
                )
            if key not in chosen:
                chosen.append(key)
    if not chosen:
        chosen = list(DEFAULT_APIS)
    order = {k: i for i, k in enumerate(API_SPECS)}
    chosen.sort(key=lambda k: order[k])
    return tuple(chosen)


_tls = threading.local()
_COOKIE_FILE = None
_ROSTER_DATE_FROM = None  # today midnight VN unix
_ROSTER_DATE_TO = None  # end of today VN unix (attendance end_time)
_ROSTER_AGENCY_ID = 0
_ATTENDANCE_CACHE_LOCK = threading.Lock()
_ATTENDANCE_CACHE_ROWS = None  # list | None (None = not fetched yet)
_ATTENDANCE_CACHE_ERR = None
_ATTENDANCE_CACHE_DONE = threading.Event()
_ATTENDANCE_FETCHING = False
_ROSTER_HTTP_TRIES = 3  # attendance hard cap; never hang forever
_ROSTER_CAL_HTTP_TRIES = 6  # calendar: stronger maintenance retries
_ATTENDANCE_PAGE_SIZE = 50  # match browser (24/50/100); API paginates by count
_ATTENDANCE_LOOKBACK_DAYS = 30  # browser-style wide start (e.g. 1788282000)
_ATTENDANCE_PREFETCH_TIMEOUT_S = 90  # fail fast; hubs continue calendar-only
_ATTENDANCE_WAIT_TIMEOUT_S = 60  # per-hub wait for in-flight prefetch
_CALENDAR_UNSCOPED_TOTAL = 1500  # agency_id=0 totals above this are not station-scoped
_MAINTENANCE_SECOND_PASS_TRIES = 4  # extra pass for hubs that hit maintenance


def _thread_session():
    if getattr(_tls, "sess", None) is None:
        sess, headers, _path = build_session(_COOKIE_FILE)
        _tls.sess = sess
        _tls.headers = headers
    return _tls.sess, _tls.headers


def _as_int(value, default=0):
    try:
        if value is None or value == "":
            return default
        return int(value)
    except (TypeError, ValueError):
        return default


import re
import time


def _map_labor_type(agency, contract):
    """Map agency / contract strings -> FTE | OS | BPO.

    Order (user rule):
      1) Part-time (contract or agency) -> OS  (do not drop OS for in-house label)
      2) agency in-house / inhouse -> FTE
      3) else contract Full-time -> BPO
    """
    agency_s = str(agency or "").strip().lower()
    contract_s = str(contract or "").strip().lower()
    if (
        "part-time" in contract_s
        or "part time" in contract_s
        or "part-time" in agency_s
        or "part time" in agency_s
    ):
        return "OS"
    if "in-house" in agency_s or "inhouse" in agency_s:
        return "FTE"
    if "full-time" in contract_s or "full time" in contract_s:
        return "BPO"
    return "FTE"


def _row_agency_contract(row):
    """Return (agency, contract) from calendar or attendance field names."""
    if not isinstance(row, dict):
        return "", ""
    agency = row.get("agency_name")
    if agency in (None, ""):
        agency = row.get("agency")
    contract = row.get("contract_type_name")
    if contract in (None, ""):
        contract = row.get("contract_type")
    return agency, contract


def _soft_api_message(msg):
    low = str(msg or "").lower()
    return "maintenance" in low or "try again" in low


def _sleep_backoff(attempt):
    """Sleep 1..3s between soft retries (attempt is 0-based)."""
    time.sleep(min(3.0, 1.0 + float(attempt)))


def _list_has_content(list_field):
    """True if calendar row.list is a non-empty dict/list with meaningful keys."""
    if list_field is None or list_field == {} or list_field == []:
        return False
    if isinstance(list_field, dict):
        return any(bool(v) for v in list_field.values())
    if isinstance(list_field, list):
        return len(list_field) > 0
    return bool(list_field)


def _calendar_row_match(row, station_id, day_start, allow_att_without_esid=False):
    """Return (keep, present) for one ops_calendar person row.

    KEEP when list is non-empty and has today content for this hub:
    - event_list item with event_station_id == hub (date == today when present)
    - OR attendance_list item for today with event_station_id == hub
    - OR attendance_list item for today with NO event_station_id when
      allow_att_without_esid (station-scoped calendar responses only)

    Station filter uses Event Station ONLY (event_station_id). Never profile
    station / station_id / profile_station_id.
    present = any matching item has non-zero clock_in_time.
    """
    lf = row.get("list")
    if not _list_has_content(lf):
        return False, False
    if not isinstance(lf, dict):
        return False, False
    keep = False
    present = False
    sid_i = int(station_id)
    day_i = int(day_start)

    for ev in lf.get("event_list") or []:
        if not isinstance(ev, dict):
            continue
        raw_esid = ev.get("event_station_id")
        if raw_esid in (None, ""):
            continue  # Event Station required; do not fall back to profile
        try:
            if int(raw_esid) != sid_i:
                continue
        except (TypeError, ValueError):
            continue
        ed = ev.get("event_date")
        if ed is None:
            ed = ev.get("attendance_date")
        if ed is not None:
            try:
                if int(ed) != day_i:
                    continue
            except (TypeError, ValueError):
                continue
        keep = True
        cin = ev.get("clock_in_time")
        if cin not in (None, "", 0, "0"):
            present = True

    for at in lf.get("attendance_list") or []:
        if not isinstance(at, dict):
            continue
        ad = at.get("attendance_date")
        if ad is None:
            ad = at.get("event_date")
        if ad is not None:
            try:
                if int(ad) != day_i:
                    continue
            except (TypeError, ValueError):
                continue
        raw_esid = at.get("event_station_id")
        if raw_esid not in (None, ""):
            try:
                if int(raw_esid) != sid_i:
                    continue
            except (TypeError, ValueError):
                continue
        elif not allow_att_without_esid:
            # Unscoped agency_id=0 dumps: skip att rows with no Event Station.
            continue
        keep = True
        cin = at.get("clock_in_time")
        if cin not in (None, "", 0, "0"):
            present = True

    return keep, present


def _post_ops_calendar_page(sess, headers, body):
    """POST one ops_calendar page with soft maintenance retries.

    Returns (payload_dict_or_None, error_or_None).
    """
    last_err = None
    tries = max(1, int(_ROSTER_CAL_HTTP_TRIES))
    for attempt in range(tries):
        try:
            resp = sess.post(
                ROSTER_CALENDAR_URL, headers=headers, json=body, timeout=45
            )
            payload = resp.json()
        except Exception as exc:
            last_err = "%s: %s" % (type(exc).__name__, exc)
            if attempt < tries - 1:
                _sleep_backoff(attempt)
                continue
            return None, last_err
        msg = ""
        if isinstance(payload, dict):
            msg = str(payload.get("message") or "")
        soft = _soft_api_message(msg)
        bad = resp.status_code != 200 or (
            isinstance(payload, dict)
            and payload.get("retcode") not in (0, "0", None)
        )
        if bad and soft and attempt < tries - 1:
            last_err = msg or ("http=%s" % resp.status_code)
            print(
                "  calendar station=%s page=%s attempt=%s/%s soft=%s"
                % (
                    body.get("station_id"),
                    body.get("pageno"),
                    attempt + 1,
                    tries,
                    last_err,
                ),
                flush=True,
            )
            time.sleep(min(5.0, 1.5 + float(attempt) * 1.2))
            continue
        if bad:
            last_err = (
                msg
                or (
                    str(payload.get("retcode"))
                    if isinstance(payload, dict)
                    else ""
                )
                or ("http=%s" % resp.status_code)
            )
            return None, last_err
        if not isinstance(payload, dict):
            return None, "ops_calendar non-dict payload"
        return payload, None
    return None, last_err or "ops_calendar_list failed"


def _fetch_ops_calendar_agency(
    sess, headers, station_id, agency_id, max_pages=None, stop_if_unscoped=False
):
    """POST ops_calendar_list paginated for one agency_id.

    Returns (rows, error, response_total).
    On soft maintenance after partial pages, return partial rows + soft err
    so caller can continue rather than skip the hub entirely.

    stop_if_unscoped: after page 1, if total > _CALENDAR_UNSCOPED_TOTAL, return
    early so caller can switch to agency9 merge (avoid 50 pages of empty shells).
    """
    page_size = 100
    all_rows = []
    response_total = None
    pageno = 1
    if max_pages is None:
        max_pages = 50
    day_start = int(_ROSTER_DATE_FROM)
    last_soft_err = None
    while pageno <= max_pages:
        body = {
            "pageno": pageno,
            "count": page_size,
            "station_id": int(station_id),
            "agency_id": int(agency_id),
            "range_start_time": day_start,
            "range_end_time": day_start,
        }
        payload, err = _post_ops_calendar_page(sess, headers, body)
        if err:
            if all_rows and _soft_api_message(err):
                last_soft_err = err
                print(
                    "  calendar station=%s agency=%s partial=%s soft_stop=%s"
                    % (station_id, agency_id, len(all_rows), err),
                    flush=True,
                )
                break
            return all_rows, err, response_total
        data = payload.get("data") if isinstance(payload, dict) else None
        if not isinstance(data, dict):
            if all_rows:
                break
            return [], "empty ops_calendar data", response_total
        raw_total = data.get("total")
        if raw_total not in (None, ""):
            response_total = max(0, _as_int(raw_total))
        lst = data.get("list") or []
        if not isinstance(lst, list):
            lst = []
        page_rows = [x for x in lst if isinstance(x, dict)]
        all_rows.extend(page_rows)
        if (
            stop_if_unscoped
            and response_total is not None
            and int(response_total) > int(_CALENDAR_UNSCOPED_TOTAL)
        ):
            print(
                "  calendar station=%s agency=%s total=%s unscoped-early-stop pages=%s"
                % (station_id, agency_id, response_total, pageno),
                flush=True,
            )
            break
        if response_total is not None and len(all_rows) >= response_total:
            break
        if not page_rows or len(page_rows) < page_size:
            break
        pageno += 1
    return all_rows, last_soft_err, response_total


def _row_has_event_station(row, station_id):
    """True if event_list has an item with event_station_id == hub."""
    lf = row.get("list")
    if not isinstance(lf, dict):
        return False
    sid_i = int(station_id)
    for ev in lf.get("event_list") or []:
        if not isinstance(ev, dict):
            continue
        raw = ev.get("event_station_id")
        if raw in (None, ""):
            continue
        try:
            if int(raw) == sid_i:
                return True
        except (TypeError, ValueError):
            continue
    return False


def _merge_calendar_rows(primary, extra):
    """Merge calendar person rows by ops_id (fallback: identity tuple)."""
    out = []
    seen = set()

    def key(row):
        oid = row.get("ops_id")
        if oid not in (None, ""):
            return ("ops", str(oid))
        return (
            "fallback",
            str(row.get("ops_name") or ""),
            str(row.get("agency_name") or ""),
            str(row.get("contract_type_name") or ""),
        )

    for row in list(primary or []) + list(extra or []):
        if not isinstance(row, dict):
            continue
        k = key(row)
        if k in seen:
            continue
        seen.add(k)
        out.append(row)
    return out


def _fetch_ops_calendar(sess, headers, station_id):
    """POST ops_calendar_list paginated. Returns (rows, error, allow_att_without_esid).

    agency_id=0 sometimes returns a huge unscoped dump (thousands of empty
    Part-time shells). When total looks unscoped, also fetch agency_id=9
    (in-house) and keep agency0 rows that have matching Event Station events.
    """
    agency_id = int(_ROSTER_AGENCY_ID)
    rows, err, total = _fetch_ops_calendar_agency(
        sess,
        headers,
        station_id,
        agency_id,
        stop_if_unscoped=(agency_id == 0),
    )
    allow_att_without_esid = True
    if total is not None and int(total) > int(_CALENDAR_UNSCOPED_TOTAL):
        allow_att_without_esid = False

    if agency_id == 0 and total is not None and int(total) > int(
        _CALENDAR_UNSCOPED_TOTAL
    ):
        print(
            "  calendar station=%s agency0 total=%s unscoped; merge agency9 + event-matched"
            % (station_id, total),
            flush=True,
        )
        # Re-scan a bounded slice of agency0 for explicit Event Station matches,
        # then merge with full agency9 (in-house) which is station-scoped.
        day_start = int(_ROSTER_DATE_FROM)
        rows0, err0, _total0 = _fetch_ops_calendar_agency(
            sess, headers, station_id, 0, max_pages=8, stop_if_unscoped=False
        )
        matched0 = [
            r
            for r in (rows0 or [])
            if _calendar_row_match(r, station_id, day_start, False)[0]
        ]
        rows9, err9, total9 = _fetch_ops_calendar_agency(
            sess, headers, station_id, 9
        )
        rows = _merge_calendar_rows(matched0, rows9)
        if err0 and not matched0:
            err = err or err0
        # Prefer hard err only when both fetches failed with no rows.
        if err and err9 and not rows:
            return [], err or err9, False
        if err9 and not rows9 and not matched0:
            # agency9 failed but we may still have matched0
            pass
        print(
            "  calendar station=%s merged rows=%s (matched0=%s agency9=%s total9=%s)"
            % (
                station_id,
                len(rows),
                len(matched0),
                len(rows9 or []),
                total9,
            ),
            flush=True,
        )
        return rows, None, False

    if err and not rows:
        return [], err, allow_att_without_esid
    # Soft partial success: continue with rows we have.
    return rows, None if rows else err, allow_att_without_esid


def _attendance_query_window():
    """Return (start_time, end_time) for statistic_data_list.

    Browser uses a wide start (~30d lookback) through end-of-day; we day-filter
    client-side. --date-from/--date-to still bound the roster day / end.
    """
    day_start = int(_ROSTER_DATE_FROM)
    day_end = int(_ROSTER_DATE_TO)
    lookback = max(0, int(_ATTENDANCE_LOOKBACK_DAYS)) * 86400
    return day_start - lookback, day_end


def _get_attendance_page(sess, headers, params):
    """GET one attendance page with capped soft maintenance retries.

    Returns (payload_dict_or_None, error_or_None). Never retries forever.
    """
    last_err = None
    tries = max(1, int(_ROSTER_HTTP_TRIES))
    for attempt in range(tries):
        try:
            resp = sess.get(
                ROSTER_ATTENDANCE_URL,
                headers=headers,
                params=params,
                timeout=45,
            )
            payload = resp.json()
        except Exception as exc:
            last_err = "%s: %s" % (type(exc).__name__, exc)
            print(
                "  attendance page=%s attempt=%s/%s exc=%s"
                % (params.get("pageno"), attempt + 1, tries, last_err),
                flush=True,
            )
            if attempt < tries - 1:
                _sleep_backoff(attempt)
                continue
            return None, last_err
        msg = ""
        if isinstance(payload, dict):
            msg = str(payload.get("message") or "")
        soft = _soft_api_message(msg)
        bad = resp.status_code != 200 or (
            isinstance(payload, dict)
            and payload.get("retcode") not in (0, "0", None)
        )
        if bad and soft and attempt < tries - 1:
            last_err = msg or ("http=%s" % resp.status_code)
            print(
                "  attendance page=%s attempt=%s/%s soft=%s"
                % (params.get("pageno"), attempt + 1, tries, last_err),
                flush=True,
            )
            _sleep_backoff(attempt)
            continue
        if bad:
            last_err = (
                msg
                or (
                    str(payload.get("retcode"))
                    if isinstance(payload, dict)
                    else ""
                )
                or ("http=%s" % resp.status_code)
            )
            return None, last_err
        if not isinstance(payload, dict):
            return None, "attendance non-dict payload"
        return payload, None
    return None, last_err or "statistic_data_list failed"


def _fetch_attendance_all_pages(sess, headers):
    """GET attendance once (no station filter). Returns (rows, error).

    Matches browser: count=50, pageno until list empty or total reached.
    Wide start_time lookback; day-filter happens in _filter_attendance_for_station.
    """
    page_size = max(1, int(_ATTENDANCE_PAGE_SIZE))
    all_rows = []
    response_total = None
    pageno = 1
    max_pages = 100
    att_start, att_end = _attendance_query_window()
    print(
        "  attendance fetch start=%s (%s) end=%s (%s) count=%s"
        % (
            att_start,
            _unix_to_iso_saigon(att_start),
            att_end,
            _unix_to_iso_saigon(att_end),
            page_size,
        ),
        flush=True,
    )
    while pageno <= max_pages:
        params = {
            "pageno": pageno,
            "count": page_size,
            "staff_type": 2,
            "start_time": att_start,
            "end_time": att_end,
            # Do not send station_id: station-scoped requests return empty.
        }
        payload, err = _get_attendance_page(sess, headers, params)
        if err:
            print(
                "  attendance page=%s FAIL acc=%s err=%s"
                % (pageno, len(all_rows), err),
                flush=True,
            )
            return all_rows, err
        data = payload.get("data") if isinstance(payload, dict) else None
        if not isinstance(data, dict):
            print(
                "  attendance page=%s empty-data acc=%s" % (pageno, len(all_rows)),
                flush=True,
            )
            break
        raw_total = data.get("total")
        if raw_total not in (None, ""):
            response_total = max(0, _as_int(raw_total))
        lst = data.get("list") or []
        if not isinstance(lst, list):
            lst = []
        page_rows = [x for x in lst if isinstance(x, dict)]
        all_rows.extend(page_rows)
        print(
            "  attendance page=%s got=%s total=%s acc=%s"
            % (
                pageno,
                len(page_rows),
                response_total if response_total is not None else "?",
                len(all_rows),
            ),
            flush=True,
        )
        # Stop when list empty, or accumulated >= total.
        if not page_rows:
            break
        if response_total is not None and len(all_rows) >= response_total:
            break
        # If API returns fewer than count but total says more, keep going
        # (silent page-size caps). Only treat short page as last when total unknown.
        if response_total is None and len(page_rows) < page_size:
            break
        pageno += 1
    else:
        print(
            "  attendance hit max_pages=%s acc=%s total=%s"
            % (max_pages, len(all_rows), response_total),
            flush=True,
        )
    return all_rows, None


def _reset_attendance_cache():
    global _ATTENDANCE_CACHE_ROWS, _ATTENDANCE_CACHE_ERR
    global _ATTENDANCE_FETCHING
    with _ATTENDANCE_CACHE_LOCK:
        _ATTENDANCE_CACHE_ROWS = None
        _ATTENDANCE_CACHE_ERR = None
        _ATTENDANCE_FETCHING = False
        _ATTENDANCE_CACHE_DONE.clear()


def _set_attendance_cache(rows, err):
    """Publish attendance cache and wake any waiters (always sets a list)."""
    global _ATTENDANCE_CACHE_ROWS, _ATTENDANCE_CACHE_ERR, _ATTENDANCE_FETCHING
    with _ATTENDANCE_CACHE_LOCK:
        _ATTENDANCE_CACHE_ROWS = rows if isinstance(rows, list) else []
        _ATTENDANCE_CACHE_ERR = err
        _ATTENDANCE_FETCHING = False
        _ATTENDANCE_CACHE_DONE.set()
        return _ATTENDANCE_CACHE_ROWS, _ATTENDANCE_CACHE_ERR


def _get_attendance_cache(sess, headers, wait=True):
    """Fetch attendance once per roster run; single-flight across hub workers.

    wait=True: wait up to _ATTENDANCE_WAIT_TIMEOUT_S for in-flight prefetch.
    On timeout/failure returns ([], err) so roster continues calendar-only.
    """
    global _ATTENDANCE_FETCHING
    with _ATTENDANCE_CACHE_LOCK:
        if _ATTENDANCE_CACHE_ROWS is not None:
            return _ATTENDANCE_CACHE_ROWS, _ATTENDANCE_CACHE_ERR
        if _ATTENDANCE_FETCHING:
            is_fetcher = False
        else:
            _ATTENDANCE_FETCHING = True
            is_fetcher = True
    if is_fetcher:
        try:
            rows, err = _fetch_attendance_all_pages(sess, headers)
        except Exception as exc:
            rows, err = [], "%s: %s" % (type(exc).__name__, exc)
            print("  attendance fetch crashed: %s" % err, flush=True)
        return _set_attendance_cache(rows, err)
    if not wait:
        return [], "attendance still loading"
    if not _ATTENDANCE_CACHE_DONE.wait(timeout=float(_ATTENDANCE_WAIT_TIMEOUT_S)):
        print(
            "  attendance wait timeout=%ss; calendar-only late=0"
            % _ATTENDANCE_WAIT_TIMEOUT_S,
            flush=True,
        )
        return [], "attendance prefetch timeout"
    with _ATTENDANCE_CACHE_LOCK:
        rows = _ATTENDANCE_CACHE_ROWS
        err = _ATTENDANCE_CACHE_ERR
    if rows is None:
        return [], err or "attendance cache unset"
    return rows, err


def _filter_attendance_for_station(all_rows, station_id):
    """Filter attendance rows by Event Station only (event_station_id).

    Never match profile_station_id / station_id. Rows without event_station_id
    are dropped (cannot attribute to a hub).
    """
    day_start = int(_ROSTER_DATE_FROM)
    sid_i = int(station_id)
    filtered = []
    for row in all_rows or []:
        if not isinstance(row, dict):
            continue
        raw_sid = row.get("event_station_id")
        if raw_sid in (None, ""):
            continue
        try:
            if int(raw_sid) == sid_i and _attendance_row_matches_day(row, day_start):
                filtered.append(row)
        except (TypeError, ValueError):
            continue
    return filtered


def _fetch_attendance_stats(sess, headers, station_id):
    """Return hub-filtered attendance rows from the once-per-run global fetch."""
    all_rows, err = _get_attendance_cache(sess, headers)
    filtered = _filter_attendance_for_station(all_rows, station_id)
    # Soft-fail: still return filtered rows even when a later page hit maintenance
    # after partial success; only surface err when nothing usable arrived.
    if err and not all_rows:
        return [], err
    return filtered, err


def _is_late_attendance_row(row):
    """Late only: clock_in_status_name == 'Late In' or clock_in_status == 3.
    Early In / on-time are NOT late.
    """
    if not isinstance(row, dict):
        return False
    if row.get("clock_in_status_name") == "Late In":
        return True
    try:
        return int(row.get("clock_in_status")) == 3
    except (TypeError, ValueError):
        return False


def _attendance_date_matches(value, day_start):
    """Return True/False for a date-like attendance value, or None if unknown."""
    if value is None or value == "":
        return None
    target = datetime.fromtimestamp(int(day_start), TZ).date()
    if isinstance(value, (int, float)):
        number = float(value)
        if number.is_integer() and len(str(abs(int(number)))) == 8:
            try:
                return datetime.strptime(str(int(number)), "%Y%m%d").date() == target
            except ValueError:
                return None
        if number > 100000000000:  # milliseconds since epoch
            number /= 1000.0
        if number >= 100000000:  # seconds since epoch
            try:
                return datetime.fromtimestamp(int(number), TZ).date() == target
            except (OverflowError, OSError, ValueError):
                return None
        return int(number) == int(day_start)
    text = str(value).strip()
    if not text:
        return None
    if text.replace(".", "", 1).isdigit() and len(text) != 8:
        try:
            number = float(text)
            if number > 100000000000:
                number /= 1000.0
            if number >= 100000000:
                return datetime.fromtimestamp(int(number), TZ).date() == target
            return int(number) == int(day_start)
        except (OverflowError, OSError, ValueError):
            return None
    if text.isdigit() and len(text) == 8:
        try:
            return datetime.strptime(text, "%Y%m%d").date() == target
        except ValueError:
            return None
    try:
        # Handles YYYY-MM-DD and the API's ISO datetime variants.
        return datetime.fromisoformat(text.replace("Z", "+00:00")).date() == target
    except ValueError:
        try:
            return datetime.strptime(text[:10], "%Y-%m-%d").date() == target
        except ValueError:
            return None


def _attendance_row_matches_day(row, day_start):
    """Keep today's attendance rows; the API may expose date/operation_date."""
    values = [
        row.get(key)
        for key in ("date", "operation_date", "attendance_date", "event_date")
        if row.get(key) not in (None, "")
    ]
    if not values:
        # The request is already bounded to the roster day; retain older payloads
        # that do not return a date field.
        return True
    parsed = [_attendance_date_matches(value, day_start) for value in values]
    if any(result is True for result in parsed):
        return True
    if any(result is False for result in parsed):
        return False
    return True


def _cook_roster_hub_summary(
    cal_rows,
    att_rows,
    station_id,
    station_name_hint,
    cal_err=None,
    att_err=None,
    allow_att_without_esid=False,
):
    """Cook one hub-summary row from calendar + attendance.

    Labor PRIMARY: kept ops_calendar rows via agency_name/contract_type_name.
    Labor SECONDARY: attendance agency/contract_type when those fields exist.
    Late always from attendance when available.
    """
    day_start = int(_ROSTER_DATE_FROM)
    scheduled = 0
    present = 0
    cal_fte = cal_os = cal_bpo = 0
    station_name = station_name_hint or ""

    for row in cal_rows or []:
        if not isinstance(row, dict):
            continue
        keep, is_present = _calendar_row_match(
            row, station_id, day_start, allow_att_without_esid
        )
        if not keep:
            continue
        scheduled += 1
        if is_present:
            present += 1
        labor = _map_labor_type(*_row_agency_contract(row))
        if labor == "OS":
            cal_os += 1
        elif labor == "BPO":
            cal_bpo += 1
        else:
            cal_fte += 1

    # Detect whether kept calendar rows actually expose agency/contract labels.
    cal_labeled = 0
    for row in cal_rows or []:
        if not isinstance(row, dict):
            continue
        keep, _is_present = _calendar_row_match(
            row, station_id, day_start, allow_att_without_esid
        )
        if not keep:
            continue
        agency, contract = _row_agency_contract(row)
        if str(agency or "").strip() or str(contract or "").strip():
            cal_labeled += 1

    att_fte = att_os = att_bpo = 0
    att_labor_n = 0
    for row in att_rows or []:
        if not isinstance(row, dict):
            continue
        agency, contract = _row_agency_contract(row)
        if not str(agency or "").strip() and not str(contract or "").strip():
            continue
        att_labor_n += 1
        labor = _map_labor_type(agency, contract)
        if labor == "OS":
            att_os += 1
        elif labor == "BPO":
            att_bpo += 1
        else:
            att_fte += 1

    # Primary = calendar kept rows. Secondary = attendance only when calendar
    # has no agency/contract labels (attendance mix is often incomplete).
    if cal_labeled > 0 or att_labor_n == 0:
        fte, os_n, bpo = cal_fte, cal_os, cal_bpo
        labor_source = "calendar"
    else:
        fte, os_n, bpo = att_fte, att_os, att_bpo
        labor_source = "attendance"

    late_count = sum(1 for r in (att_rows or []) if _is_late_attendance_row(r))

    if scheduled > 0:
        pct = round(100.0 * present / scheduled, 2)
    else:
        pct = ""

    notes = []
    if cal_err:
        notes.append("cal_err=" + str(cal_err))
    if att_err:
        notes.append("att_err=" + str(att_err))
    notes.append("agency_id=%s" % _ROSTER_AGENCY_ID)
    notes.append("cal_raw=%d" % len(cal_rows or []))
    notes.append("att_raw=%d" % len(att_rows or []))
    notes.append("labor_source=%s" % labor_source)

    return [
        {
            "station_id": station_id,
            "station_name": station_name,
            "event_date_iso": _unix_to_iso_saigon(day_start),
            "scheduled_count": scheduled,
            "present_count": present,
            "late_count": late_count,
            "fte_count": fte,
            "os_count": os_n,
            "bpo_count": bpo,
            "attendance_pct": pct,
            "metric_notes": ";".join(notes),
        }
    ]


def _extract_rows(body, mode):
    if not isinstance(body, dict):
        return []
    data = body.get("data")
    if mode in ("list0", "dict"):
        if isinstance(data, dict):
            lst = data.get("list")
            if isinstance(lst, list) and lst and isinstance(lst[0], dict):
                return [dict(lst[0])]
            row = {k: v for k, v in data.items() if k != "list"}
            if row:
                return [row]
        if isinstance(data, list) and data and isinstance(data[0], dict):
            return [dict(data[0])]
        return []
    if mode == "list_all":
        if isinstance(data, dict) and isinstance(data.get("list"), list):
            return [dict(x) for x in data["list"] if isinstance(x, dict)]
        if isinstance(data, list):
            return [dict(x) for x in data if isinstance(x, dict)]
        return []
    return []


def fetch_one(api_key, station_id, station_name_hint=""):
    endpoint, _name, mode, body_kind = API_SPECS[api_key]
    sess, headers = _thread_session()
    fetched_at = datetime.now(TZ).strftime("%Y-%m-%d %H:%M:%S")

    # Roster: two WFM APIs (calendar + attendance), not data_api mart.
    if api_key == "roster":
        t0 = time.perf_counter()
        req_body = build_request_body(api_key, station_id)
        cal_rows, cal_err, allow_att = _fetch_ops_calendar(
            sess, headers, station_id
        )
        att_rows, att_err = _fetch_attendance_stats(sess, headers, station_id)
        ms = (time.perf_counter() - t0) * 1000
        if cal_err:
            return {
                "ok": False,
                "station_id": station_id,
                "station_name": station_name_hint,
                "fetched_at": fetched_at,
                "http": None,
                "retcode": None,
                "request_body": req_body,
                "ms": ms,
                "error": cal_err,
                "rows": [],
            }
        rows = _cook_roster_hub_summary(
            cal_rows,
            att_rows,
            station_id,
            station_name_hint,
            None,
            att_err,
            allow_att_without_esid=bool(allow_att),
        )
        return {
            "ok": True,
            "station_id": station_id,
            "station_name": station_name_hint
            or ((rows[0].get("station_name") if rows else "") or ""),
            "fetched_at": fetched_at,
            "http": 200,
            "retcode": 0,
            "request_body": req_body,
            "ms": ms,
            "error": None,
            "rows": rows,
        }

    url = API_BASE + endpoint
    req_body = build_request_body(api_key, station_id)
    request_bodies = [req_body]
    if body_kind == "fm_order_volume_probe":
        # Probe the documented station-only body, then use the backlog-style
        # is_all body only when the API explicitly requests it.
        request_bodies.append({"is_all": 0, "station_id": int(station_id)})
    t0 = time.perf_counter()
    body = None
    resp = None
    try:
        for attempt_body in request_bodies:
            req_body = attempt_body
            resp = sess.post(url, headers=headers, json=req_body, timeout=60)
            body = resp.json()
            retcode = body.get("retcode") if isinstance(body, dict) else None
            if not (body_kind == "fm_order_volume_probe" and str(retcode) == "-21001" and attempt_body != request_bodies[-1]):
                break
    except Exception as exc:
        return {
            "ok": False,
            "station_id": station_id,
            "station_name": station_name_hint,
            "fetched_at": fetched_at,
            "http": None,
            "retcode": None,
            "request_body": req_body,
            "ms": (time.perf_counter() - t0) * 1000,
            "error": "%s: %s" % (type(exc).__name__, exc),
            "rows": [],
        }
    ms = (time.perf_counter() - t0) * 1000
    retcode = body.get("retcode") if isinstance(body, dict) else None
    rows = _extract_rows(body, mode)
    ok = resp.status_code == 200 and retcode == 0 and bool(rows)
    for row in rows:
        row.setdefault("station_id", station_id)
        if not row.get("station_name") and station_name_hint:
            row.setdefault("station_name", station_name_hint)
    msg = str((body.get("message") if isinstance(body, dict) else None) or "")
    return {
        "ok": ok,
        "station_id": station_id,
        "station_name": station_name_hint
        or ((rows[0].get("station_name") if rows else "") or ""),
        "fetched_at": fetched_at,
        "http": resp.status_code,
        "retcode": retcode,
        "request_body": req_body,
        "ms": ms,
        "error": None if ok else (msg or "empty/fail"),
        "rows": rows,
    }


def write_csv(path, results, allowed_metrics=None):
    flat = []
    for item in results:
        if not item.get("ok"):
            continue
        fetched_at = item.get("fetched_at") or ""
        station_id = item.get("station_id")
        station_name = item.get("station_name") or ""
        for row in item.get("rows") or []:
            out = dict(row)
            out.setdefault("station_id", station_id)
            if "station_name" not in out and station_name:
                out["station_name"] = station_name
            out["fetched_at"] = fetched_at
            flat.append(out)

    field_keys = []
    seen = set()
    for row in flat:
        for key in row:
            if key in ("station_id", "station_name", "fetched_at"):
                continue
            if allowed_metrics is not None and key not in allowed_metrics:
                continue
            if key not in seen:
                seen.add(key)
                field_keys.append(key)
    prefer = (
        list(allowed_metrics)
        if allowed_metrics is not None
        else list(ORDER_VOLUME_KEY_METRICS) + list(BACKLOG_KEY_METRICS)
    )
    if allowed_metrics is not None:
        # Keep the header stable even when an API response omits a metric.
        ordered = list(allowed_metrics)
    else:
        ordered = [k for k in prefer if k in seen] + [
            k for k in field_keys if k not in prefer
        ]
    columns = ["station_id", "station_name"] + ordered + ["fetched_at"]

    out_path = Path(path)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    tmp_path = out_path.with_suffix(out_path.suffix + ".tmp")
    with tmp_path.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=columns, extrasaction="ignore")
        writer.writeheader()
        for row in flat:
            out = {col: "" for col in columns}
            for key, value in row.items():
                if key in out:
                    out[key] = "" if value is None else value
            writer.writerow(out)
    try:
        os.replace(str(tmp_path), str(out_path))
    except PermissionError:
        try:
            if tmp_path.exists():
                tmp_path.unlink()
        except Exception:
            pass
        raise SystemExit(
            "Khong ghi duoc %s (dang mo Excel?). Dong file roi chay lai." % out_path
        )
    return columns, len(flat)


def run_api(api_key, hubs, workers, out_path):
    endpoint, _name, mode, _bk = API_SPECS[api_key]
    ep_show = ROSTER_CALENDAR_URL if api_key == "roster" else endpoint
    print(
        "[%s] endpoint=%s hubs=%d workers=%d -> %s"
        % (api_key, ep_show, len(hubs), workers, out_path),
        flush=True,
    )
    if api_key == "roster":
        _reset_attendance_cache()
        print(
            "  roster today agency_id=%s cal_range=%s (%s)..same att_end=%s (%s)"
            % (
                _ROSTER_AGENCY_ID,
                _ROSTER_DATE_FROM,
                _unix_to_iso_saigon(_ROSTER_DATE_FROM),
                _ROSTER_DATE_TO,
                _unix_to_iso_saigon(_ROSTER_DATE_TO),
            ),
            flush=True,
        )
        # Prefetch attendance once (global), with hard timeout so hub loop
        # is never blocked forever. On fail/timeout: cache=[] and continue
        # calendar-only (late=0 / labor from calendar).
        try:
            sess, headers = _thread_session()
            prefetch_pool = ThreadPoolExecutor(max_workers=1)
            try:
                fut = prefetch_pool.submit(_get_attendance_cache, sess, headers)
                try:
                    att_all, att_pre_err = fut.result(
                        timeout=float(_ATTENDANCE_PREFETCH_TIMEOUT_S)
                    )
                except Exception as exc:
                    # TimeoutError / crash: publish empty cache so workers
                    # do not stampede or wait forever.
                    msg = "%s: %s" % (type(exc).__name__, exc)
                    if "Timeout" in type(exc).__name__ or "timeout" in str(exc).lower():
                        msg = "prefetch timeout>%ss" % _ATTENDANCE_PREFETCH_TIMEOUT_S
                    print(
                        "  attendance prefetch aborted: %s; continuing calendar-only"
                        % msg,
                        flush=True,
                    )
                    _set_attendance_cache([], msg)
                    att_all, att_pre_err = [], msg
            finally:
                prefetch_pool.shutdown(wait=False, cancel_futures=True)
            day_start = int(_ROSTER_DATE_FROM)
            today_n = sum(
                1
                for r in (att_all or [])
                if isinstance(r, dict) and _attendance_row_matches_day(r, day_start)
            )
            print(
                "  attendance prefetch rows=%d today=%d err=%s"
                % (len(att_all or []), today_n, att_pre_err or "-"),
                flush=True,
            )
        except Exception as exc:
            msg = "%s: %s" % (type(exc).__name__, exc)
            print("  attendance prefetch failed: %s; continuing calendar-only" % msg, flush=True)
            try:
                _set_attendance_cache([], msg)
            except Exception:
                pass
    results = []
    with ThreadPoolExecutor(max_workers=workers) as pool:
        futs = {
            pool.submit(
                fetch_one, api_key, h["station_id"], h.get("station_name") or ""
            ): h["station_id"]
            for h in hubs
        }
        for fut in as_completed(futs):
            results.append(fut.result())
    order = {h["station_id"]: i for i, h in enumerate(hubs)}
    results.sort(key=lambda x: order.get(x["station_id"], 10**9))

    # Second pass: retry hubs skipped for maintenance / try-again.
    if api_key == "roster":
        hub_by_id = {h["station_id"]: h for h in hubs}
        for pass_i in range(max(0, int(_MAINTENANCE_SECOND_PASS_TRIES))):
            maint = [
                r
                for r in results
                if (not r.get("ok")) and _soft_api_message(r.get("error"))
            ]
            if not maint:
                break
            print(
                "  roster maintenance second-pass %s/%s retrying %d hub(s)"
                % (
                    pass_i + 1,
                    _MAINTENANCE_SECOND_PASS_TRIES,
                    len(maint),
                ),
                flush=True,
            )
            time.sleep(min(6.0, 2.0 + float(pass_i) * 1.5))
            retry_ids = [r["station_id"] for r in maint]
            with ThreadPoolExecutor(max_workers=max(1, min(workers, 2))) as pool:
                futs = {
                    pool.submit(
                        fetch_one,
                        api_key,
                        sid,
                        (hub_by_id.get(sid) or {}).get("station_name") or "",
                    ): sid
                    for sid in retry_ids
                }
                retried = {futs[fut]: fut.result() for fut in as_completed(futs)}
            new_results = []
            for r in results:
                sid = r["station_id"]
                if sid in retried:
                    new_results.append(retried[sid])
                else:
                    new_results.append(r)
            results = new_results
            results.sort(key=lambda x: order.get(x["station_id"], 10**9))

    ok_items = [r for r in results if r["ok"]]
    skip_items = [r for r in results if not r["ok"]]
    for item in ok_items:
        extra = ""
        rows = item.get("rows") or []
        if rows and api_key == "order_volume":
            r0 = rows[0]
            extra = " inbound=%s delivered=%s" % (
                r0.get("lm_hub_inbounded_order_qty_eod"),
                r0.get("lm_hub_delivered_order_qty_eod"),
            )
        elif rows and api_key == "backlog":
            r0 = rows[0]
            extra = " gte_1d=%s to_deliver_eq_1d=%s" % (
                r0.get("lm_hub_backlog_gte_1d_order_qty_td"),
                r0.get("lm_hub_to_deliver_backlog_eq_1d_order_qty_td"),
            )
        elif rows and api_key == "delivery_progress":
            r0 = rows[0]
            extra = " drivers=%d sample_driver=%s assigned=%s" % (
                len(rows),
                r0.get("driver_id"),
                r0.get("lm_hub_fleet_assigned_order_qty_td"),
            )
        elif rows and api_key == "fm_order_volume":
            r0 = rows[0]
            extra = " body=%s inbound=%s outbound=%s picked=%s" % (
                item.get("request_body"),
                r0.get("total_inbounded_order_qty_eoh"),
                r0.get("total_outbounded_order_qty_eoh"),
                r0.get("total_picked_order_qty_eoh"),
            )
        elif rows and api_key == "roster":
            r0 = rows[0]
            extra = (
                " scheduled=%s present=%s late=%s FTE=%s OS=%s BPO=%s att_pct=%s"
                % (
                    r0.get("scheduled_count"),
                    r0.get("present_count"),
                    r0.get("late_count"),
                    r0.get("fte_count"),
                    r0.get("os_count"),
                    r0.get("bpo_count"),
                    r0.get("attendance_pct"),
                )
            )
        print(
            "  %s OK station_id=%s name=%s rows=%d ms=%.0f%s"
            % (
                api_key,
                item["station_id"],
                item.get("station_name") or "",
                len(rows),
                item.get("ms") or 0,
                extra,
            ),
            flush=True,
        )
    if skip_items:
        print("  %s SKIPPED %d hub(s):" % (api_key, len(skip_items)), flush=True)
        for item in skip_items[:30]:
            print(
                "    skip station_id=%s http=%s ret=%s err=%s"
                % (
                    item["station_id"],
                    item.get("http"),
                    item.get("retcode"),
                    item.get("error") or "",
                ),
                flush=True,
            )
        if len(skip_items) > 30:
            print("    ... va %d hub khac" % (len(skip_items) - 30), flush=True)

    # backlog and delivery_progress: exact allowlists; order_volume keeps response fields.
    if api_key == "backlog":
        allowed_metrics = BACKLOG_KEY_METRICS
    elif api_key == "delivery_progress":
        allowed_metrics = DELIVERY_PROGRESS_KEY_METRICS
    elif api_key == "fm_order_volume":
        allowed_metrics = FM_ORDER_VOLUME_KEY_METRICS
    elif api_key == "roster":
        allowed_metrics = ROSTER_KEY_METRICS
    else:
        allowed_metrics = None
    _cols, row_n = write_csv(out_path, results, allowed_metrics=allowed_metrics)
    print(
        "  Wrote %s | hub_ok=%d hub_skip=%d csv_rows=%d"
        % (out_path, len(ok_items), len(skip_items), row_n),
        flush=True,
    )
    return len(ok_items), len(skip_items), row_n


def resolve_out_path(api_key, out_dir, out_suffix=""):
    _ep, default_name, _mode, _bk = API_SPECS[api_key]
    name = default_name
    if out_suffix:
        stem, ext = os.path.splitext(default_name)
        name = "%s%s%s" % (stem, out_suffix, ext or ".csv")
    return str(Path(out_dir) / name)


def parse_args(argv=None):
    p = argparse.ArgumentParser(
        description=(
            "Standalone export LM hub order_volume/backlog/delivery_progress/"
            "fm_order_volume/roster -> CSV"
        )
    )
    p.add_argument("--hubs", default=str(DEFAULT_HUBS), help="CSV hub (station_id)")
    p.add_argument(
        "--apis",
        default=",".join(DEFAULT_APIS),
        help=(
            "order_volume,backlog,delivery_progress,fm_order_volume,roster "
            "| all (mac dinh: order_volume,backlog). Alias: event_list=roster"
        ),
    )
    p.add_argument(
        "--out-dir",
        default=None,
        help="Thu muc CSV; mac dinh output, rieng roster mac dinh output/roster",
    )
    p.add_argument("--out-suffix", default="", help="Hau to ten file (_test/_full)")
    p.add_argument("--workers", type=int, default=4)
    p.add_argument(
        "--strict",
        action="store_true",
        help="Exit 1 neu co hub skip (mac dinh: exit 0 neu >=1 OK)",
    )
    p.add_argument(
        "--cookie-file",
        default="",
        help="Path cookie JSON (mac dinh: cookies/cookies.json)",
    )
    p.add_argument(
        "--launcher-cookie",
        action="store_true",
        help="OPTIONAL: dung cookie SPX_Launcher (OFF mac dinh). "
        "Khong khuyen nghi — pack nay doc lap.",
    )
    p.add_argument(
        "--date-from",
        type=int,
        default=None,
        help=(
            "roster only: day start unix (Asia/Saigon midnight). "
            "Default: TODAY midnight. Calendar uses from=to=this value."
        ),
    )
    p.add_argument(
        "--date-to",
        type=int,
        default=None,
        help=(
            "roster only: attendance end_time unix. "
            "Default: end of TODAY (23:59:59 Asia/Saigon)."
        ),
    )
    p.add_argument(
        "--agency-id",
        type=int,
        default=0,
        help="roster only: ops_calendar_list agency_id (mac dinh 0 = all agencies; 9 = in-house)",
    )
    return p.parse_args(argv)


def main(argv=None):
    global _COOKIE_FILE, _ROSTER_DATE_FROM, _ROSTER_DATE_TO, _ROSTER_AGENCY_ID
    args = parse_args(argv)
    workers = max(1, int(args.workers or 4))
    apis = parse_apis(args.apis)
    hubs = load_hubs(args.hubs)

    d_from, d_to = default_roster_date_range()
    _ROSTER_DATE_FROM = int(args.date_from) if args.date_from is not None else d_from
    if args.date_to is not None:
        _ROSTER_DATE_TO = int(args.date_to)
    elif args.date_from is not None:
        mid = datetime.fromtimestamp(int(args.date_from), TZ).replace(
            hour=0, minute=0, second=0, microsecond=0
        )
        _ROSTER_DATE_TO = int(
            (mid + timedelta(days=1) - timedelta(seconds=1)).timestamp()
        )
    else:
        _ROSTER_DATE_TO = d_to
    _ROSTER_AGENCY_ID = int(args.agency_id if args.agency_id is not None else 0)

    if args.launcher_cookie:
        _COOKIE_FILE = str(LAUNCHER_COOKIE)
        print(
            "WARN: --launcher-cookie ON -> %s (khong phai mac dinh pack)"
            % _COOKIE_FILE,
            flush=True,
        )
    elif args.cookie_file:
        _COOKIE_FILE = args.cookie_file
    else:
        _COOKIE_FILE = str(resolve_cookie_file())

    try:
        # validate cookie early (khong in value)
        _sess, _hdrs, cookie_path = build_session(_COOKIE_FILE)
        print(
            "Cookie OK path=%s csrf=%s (values masked)"
            % (cookie_path, bool(_hdrs.get("x-csrftoken"))),
            flush=True,
        )
        del _sess
    except CookieError as exc:
        print(str(exc), flush=True)
        return 2

    out_dir = Path(args.out_dir) if args.out_dir else DEFAULT_OUT_DIR
    roster_out_dir = Path(args.out_dir) if args.out_dir else DEFAULT_ROSTER_OUT_DIR

    print(
        "Hubs: %d | apis=%s | workers=%d | out_dir=%s | strict=%s"
        % (len(hubs), ",".join(apis), workers, out_dir, bool(args.strict)),
        flush=True,
    )
    if "roster" in apis:
        print(
            "Roster window: agency_id=%s day=%s (%s) att_end=%s (%s) "
            "[override: --date-from/--date-to/--agency-id]"
            % (
                _ROSTER_AGENCY_ID,
                _ROSTER_DATE_FROM,
                _unix_to_iso_saigon(_ROSTER_DATE_FROM),
                _ROSTER_DATE_TO,
                _unix_to_iso_saigon(_ROSTER_DATE_TO),
            ),
            flush=True,
        )

    total_ok = 0
    total_fail = 0
    summary = []
    # Run selected APIs concurrently. Each run_api() keeps its own
    # per-hub ThreadPoolExecutor(max_workers=workers).
    out_paths = {
        api_key: resolve_out_path(
            api_key,
            roster_out_dir if api_key == "roster" else out_dir,
            args.out_suffix or "",
        )
        for api_key in apis
    }
    print(
        "API parallelism: %d API task(s), %d per-hub worker(s) each"
        % (len(apis), workers),
        flush=True,
    )
    api_results = {}
    with ThreadPoolExecutor(max_workers=len(apis), thread_name_prefix="api") as api_pool:
        future_to_api = {
            api_pool.submit(run_api, api_key, hubs, workers, out_paths[api_key]): api_key
            for api_key in apis
        }
        for future in as_completed(future_to_api):
            api_key = future_to_api[future]
            api_results[api_key] = future.result()

    # Keep summary output in the requested/API-spec order, not completion order.
    for api_key in apis:
        ok_n, fail_n, row_n = api_results[api_key]
        out_path = out_paths[api_key]
        total_ok += ok_n
        total_fail += fail_n
        summary.append((api_key, ok_n, fail_n, row_n, out_path))
    print("===SUMMARY===", flush=True)
    for api_key, ok_n, fail_n, row_n, out_path in summary:
        print(
            "%s ok=%d skip=%d rows=%d -> %s"
            % (api_key, ok_n, fail_n, row_n, out_path),
            flush=True,
        )

    if args.strict:
        return 1 if total_fail else 0
    return 0 if total_ok > 0 else 1


if __name__ == "__main__":
    sys.exit(main())
