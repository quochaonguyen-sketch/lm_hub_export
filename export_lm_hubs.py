"""Standalone export SPX LM hub metrics (order_volume / backlog / delivery_progress / fm_order_volume / roster) -> CSV.



Khong phu thuoc SPX_Launcher. Cookie: cookies/cookies.json (hoac --cookie-file /

LM_HUB_COOKIE_FILE). Tuy chon --launcher-cookie de doc cookie launcher (OFF mac dinh).



USAGE:

  py -3.14 export_lm_hubs.py

  py -3.14 export_lm_hubs.py --apis order_volume,backlog --out-suffix _test

  py -3.14 export_lm_hubs.py --apis fm_order_volume --hubs data/smoke/_hubs_smoke_fm.csv --out-suffix _smoke

  py -3.14 export_lm_hubs.py --apis roster --hubs data/smoke/_hubs_smoke_roster.csv --out-suffix _smoke

  py -3.14 export_lm_hubs.py --apis roster   # today-only cooked CSV

  py -3.14 export_lm_hubs.py --apis roster --google-sheet-id ID

  py -3.14 export_lm_hubs.py --apis order_volume,backlog,roster  # roster/backlog/delivery -> D0 tabs; order_volume+fm share Order Volume D0

  py -3.14 export_lm_hubs.py --apis roster --no-google-sheet

  py -3.14 google_sheets_export.py --csv output
oster
oster_today_export.csv --api roster

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

                     backlog_d0 = POST tracking_list/search data.total (one page, count=24)

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

                     2) POST /api/admin/basicserver/change_station/ {station_id}

                        then GET statistic_data_list

                        ?pageno&count=100&staff_type=2&start_time=today_midnight&end_time=end_of_today

                        (API is current-station scoped; station_id query alone returns empty;

                        paginate with a bounded page budget; data.total is often

                     the agency roster total, not today's count; day-filter client-side)

                     Keep calendar people with non-empty event_list for today + Event Station

                     (event_station_id) only â€” never Profile Station. Labor: prefer attendance FTE/OS/BPO when attendance is complete &
                     labeled; else calendar (Part-time->OS first, else Inhouse->FTE,
                     Full-time->BPO) with attendance late/labor fallback. Maintenance hubs get a second pass.

                     CSV: one hub row - scheduled/present/late + FTE/OS/BPO + attendance_pct



Hub fail -> SKIP (khong ghi CSV). Exit 0 neu >=1 OK; exit 1 neu ALL fail.

--strict: exit 1 neu co skip.

"""

from __future__ import annotations



import argparse

import csv

import random

import re

import io

import os

import sys

import threading

import time

from concurrent.futures import ThreadPoolExecutor, as_completed

from datetime import datetime, timedelta, timezone

from pathlib import Path



from spx_cookies import CookieError, build_session, resolve_cookie_file



from google_sheets_export import (

    API_TAB_NAMES,

    COMBINED_VOLUME_TAB,

    DEFAULT_GOOGLE_SHEET_ID,

    GoogleSheetsError,

    VOLUME_API_KEYS,

    combined_volume_csv_path,

    push_api_csv,

    push_csv_to_tab,

    resolve_credentials_path,

    write_combined_order_volume_csv,

)



def _configure_stdio():
    """Keep Vietnamese hub names from crashing a cp1252 Windows console."""
    for stream in (sys.stdout, sys.stderr):
        reconfigure = getattr(stream, "reconfigure", None)
        if not callable(reconfigure):
            continue
        try:
            reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            try:
                reconfigure(errors="replace")
            except Exception:
                pass


def _safe_console(text):
    """String safe to print on the current stdout (unencodable chars replaced)."""
    s = "" if text is None else str(text)
    enc = getattr(sys.stdout, "encoding", None) or "utf-8"
    try:
        s.encode(enc)
    except UnicodeEncodeError:
        s = s.encode(enc, errors="replace").decode(enc, errors="replace")
    return s


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

ROSTER_CHANGE_STATION_URL = (

    "https://spx.shopee.vn/api/admin/basicserver/change_station/"

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

    "backlog_d0",

    "lm_hub_backlog_gte_1d_order_qty_td",

    "lm_hub_to_deliver_backlog_eq_1d_order_qty_td",

    "lm_hub_to_deliver_backlog_eq_2d_order_qty_td",

    "lm_hub_to_deliver_backlog_eq_3d_order_qty_td",

    "lm_hub_to_deliver_backlog_eq_4d_order_qty_td",

    "lm_hub_to_deliver_backlog_eq_5d_order_qty_td",

    "lm_hub_to_deliver_backlog_eq_6d_order_qty_td",

    "lm_hub_to_deliver_backlog_gte_7d_order_qty_td",

)


# Display headers for the backlog CSV and Backlog D0 sheet only.
# Row dicts keep the API keys; this map is applied at write time.

BACKLOG_CSV_HEADERS = {

    "station_id": "station_id",

    "station_name": "station_name",

    "backlog_d0": "backlog_d0",

    "lm_hub_backlog_gte_1d_order_qty_td": "total_backlog D-1",

    "lm_hub_to_deliver_backlog_eq_1d_order_qty_td": "to_deliver_1d",

    "lm_hub_to_deliver_backlog_eq_2d_order_qty_td": "to_deliver_2d",

    "lm_hub_to_deliver_backlog_eq_3d_order_qty_td": "to_deliver_3d",

    "lm_hub_to_deliver_backlog_eq_4d_order_qty_td": "to_deliver_4d",

    "lm_hub_to_deliver_backlog_eq_5d_order_qty_td": "to_deliver_5d",

    "lm_hub_to_deliver_backlog_eq_6d_order_qty_td": "to_deliver_6d",

    "lm_hub_to_deliver_backlog_gte_7d_order_qty_td": "to_deliver_gte_7d",

    "fetched_at": "fetched_at",

}





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

    - statistic_data_list uses start=midnight, end=end_of_today; rows are

      day-filtered client-side. count=50 (UI), paginate until empty/total.

    - ops_calendar_list's data.total is frequently the full agency roster even

      when the station and midnight range are supplied; it is not today's row

      count. Calendar pages therefore have a hard bound and today's rows are

      counted only after _filter_calendar_today_rows().

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

_ATTENDANCE_CACHE_LOCK = threading.Lock()  # serializes change_station + fetch

_ATTENDANCE_BY_STATION = {}  # station_id -> (rows_list, err_or_None)

_ATTENDANCE_CACHE_ROWS = None  # legacy unused; kept for safe resets

_ATTENDANCE_CACHE_ERR = None

_ATTENDANCE_CACHE_DONE = threading.Event()

_ATTENDANCE_FETCHING = False

_ATTENDANCE_ORIGINAL_STATION = None  # restore after roster run when set

_ROSTER_HTTP_TRIES = 3  # attendance hard cap; never hang forever

_ROSTER_CAL_HTTP_TRIES = 2  # calendar: keep retries bounded and quiet

_ROSTER_CAL_THROTTLE_TRIES = 3  # calendar: short cap for retcode -100409

_ATTENDANCE_PAGE_SIZE = 50  # match UI statistic_data_list count; paginate until total

_ATTENDANCE_LOOKBACK_DAYS = 0  # roster is strictly today-only

_ATTENDANCE_PREFETCH_TIMEOUT_S = 90  # fail fast; hubs continue calendar-only

_ATTENDANCE_WAIT_TIMEOUT_S = 60  # per-hub wait for in-flight prefetch

_CALENDAR_PAGE_SIZE = 100

_CALENDAR_MAX_PAGES = 20  # absolute guard; never follow an inflated total for 500 pages

_CALENDAR_UNSCOPED_TOTAL = 1500  # agency_id=0 totals above this are usually unscoped

_CALENDAR_UNSCOPED_MAX_PAGES = 5  # bounded agency_id=0 sample before agency9 merge

_CALENDAR_PARTTIME_SHELL_MAX = 100  # retain station roster OS shells across UI pages

_MAINTENANCE_SECOND_PASS_TRIES = 1  # one quiet recovery pass

# Global calendar POST rate limit (independent of --workers).

_CALENDAR_MAX_CONCURRENT = 4  # up to 4 concurrent ops_calendar POSTs

_CALENDAR_MIN_INTERVAL_S = 0.3  # ~3 req/s floor spacing between POSTs

_CALENDAR_SEM = threading.Semaphore(_CALENDAR_MAX_CONCURRENT)

_CALENDAR_RATE_LOCK = threading.Lock()

_CALENDAR_LAST_POST_TS = 0.0

_CALENDAR_UNSCOPED_LOCK = threading.Lock()  # serialize fat unscoped merges

_ROSTER_WORKER_CAP = 4  # roster hub pool honors the 4-worker default

_THROTTLE_RETCODES = (-100409, "-100409")





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







def _map_labor_type(agency, contract):

    """Map agency / contract strings -> FTE | OS | BPO.



    Part-time is authoritative and maps to OS before agency (GRG/AGR/SKT)

    or in-house labels are considered.

    """

    def normalize(value):

        text = str(value or "").strip().lower()

        # APIs/UI can use several Unicode dash characters.

        return re.sub(r"[\u2010-\u2015\u2212]", "-", text)



    agency_s = normalize(agency)

    contract_s = normalize(contract)

    blob = "%s %s" % (agency_s, contract_s)

    if (

        "part-time" in blob

        or "part time" in blob

        or "parttime" in blob

        or "rider os" in blob

        or re.search(r"\bos\b", contract_s)

    ):

        return "OS"

    if "in-house" in agency_s or "inhouse" in agency_s:

        return "FTE"

    if "full-time" in contract_s or "full time" in contract_s:

        return "BPO"

    return "FTE"





def _is_part_time_row(row):

    """True when a calendar/attendance row explicitly identifies OS labor."""

    if not isinstance(row, dict):

        return False

    agency, contract = _row_agency_contract(row)

    return _map_labor_type(agency, contract) == "OS" and (

        "part" in str(agency or "").lower()

        or "part" in str(contract or "").lower()

        or "rider os" in str(contract or "").lower()

        or re.search(r"\bos\b", str(contract or "").lower()) is not None

    )





def _row_identity_tokens(row):

    """Return stable staff tokens for de-duplicating calendar/attendance rows."""

    if not isinstance(row, dict):

        return set()

    tokens = set()

    for key in ("ops_id", "biz_staff_id", "staff_id", "employee_id"):

        value = row.get(key)

        if value not in (None, ""):

            tokens.add("id:" + str(value).strip().lower())

    for key in ("ops_name", "staff_name", "employee_name"):

        value = str(row.get(key) or "").strip().lower()

        if value:

            tokens.add("name:" + value)

    return tokens





def _is_ops_fm_lm_row(row):
    """Keep only Ops staff assigned to the FM/LM department.

    Calendar rows currently omit staff_type, so an absent staff_type is
    accepted there and the department field is authoritative. Attendance
    rows expose staff_type/staff_type_name and must explicitly be Ops.
    Rider, Security, Office, and other departments are never roster labor.

    When the event/department name is the catch-all "All" (or
    event_department_id == 999999), fall back to profile_department_name
    so Ops whose profile is FM/LM still count as roster labor.
    """
    if not isinstance(row, dict):
        return False

    staff_type = row.get("staff_type")
    staff_type_name = str(row.get("staff_type_name") or "").strip().lower()
    if staff_type_name and staff_type_name != "ops":
        return False
    if staff_type not in (None, ""):
        try:
            if int(staff_type) != 2:
                return False
        except (TypeError, ValueError):
            return False

    # Attendance uses department_name for the event department; calendar
    # uses the same field. Prefer event department when a payload supplies it.
    department = row.get("event_department_name")
    if department in (None, ""):
        department = row.get("department_name")

    department_s = str(department or "").strip().lower()
    fm_lm_names = ("fm/lm", "fm/lm ops", "fm lm", "fm-lm")

    # Catch-all event dept "All" / id 999999 -> use profile FM/LM.
    is_all_dept = False
    if department_s in ("all",):
        is_all_dept = True
    else:
        try:
            dept_id = row.get("event_department_id", row.get("department_id"))
            if dept_id not in (None, "") and int(dept_id) == 999999:
                is_all_dept = True
        except (TypeError, ValueError):
            pass

    if is_all_dept:
        profile = str(row.get("profile_department_name") or "").strip().lower()
        return profile in fm_lm_names

    if department_s:
        return department_s in fm_lm_names

    # No event/dept name: fall through to profile then id 44.
    profile = row.get("profile_department_name")
    if profile not in (None, ""):
        return str(profile).strip().lower() in fm_lm_names

    try:
        return int(row.get("event_department_id", row.get("department_id"))) == 44
    except (TypeError, ValueError):
        return False


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

    return (

        "maintenance" in low

        or "try again" in low

        or "soft throttle" in low

        or "-100409" in low

        or "soft_throttle" in low

    )





def _is_throttle_retcode(retcode):

    """True for Shopee soft-throttle retcode -100409."""

    if retcode in _THROTTLE_RETCODES:

        return True

    try:

        return int(retcode) == -100409

    except (TypeError, ValueError):

        return str(retcode) == "-100409"





def _sleep_backoff(attempt):

    """Sleep 1..3s between soft retries (attempt is 0-based)."""

    time.sleep(min(3.0, 1.0 + float(attempt)))





def _sleep_soft_calendar_backoff(attempt):

    """Short backoff for non-throttle soft calendar errors (1.5..5s)."""

    time.sleep(min(5.0, 1.5 + float(attempt) * 1.2))





def _sleep_throttle_calendar_backoff(attempt):

    """Exponential + jitter for -100409: ~2s -> 30-60s (attempt 0-based)."""

    base = min(60.0, 2.0 * (2 ** int(attempt)))

    jitter = random.uniform(0.0, min(8.0, base * 0.3))

    wait_s = min(60.0, max(2.0, base + jitter))

    time.sleep(wait_s)

    return wait_s





def _acquire_calendar_slot():

    """Block until a calendar POST slot is free and min-interval elapsed."""

    global _CALENDAR_LAST_POST_TS

    _CALENDAR_SEM.acquire()

    try:

        with _CALENDAR_RATE_LOCK:

            now = time.monotonic()

            gap = float(_CALENDAR_MIN_INTERVAL_S) - (now - float(_CALENDAR_LAST_POST_TS))

            if gap > 0:

                time.sleep(gap)

            _CALENDAR_LAST_POST_TS = time.monotonic()

    except Exception:

        _CALENDAR_SEM.release()

        raise





def _release_calendar_slot():

    _CALENDAR_SEM.release()





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

    KEEP only when list.event_list has at least one item for this hub today:
    - event_station_id == hub
    - event_date/attendance_date == today when those fields are present

    attendance_list alone NEVER keeps a row (scheduled/present are
    event_list-only). allow_att_without_esid is retained for call-site
    compatibility but ignored.

    Station filter uses Event Station ONLY (event_station_id). Never profile
    station / station_id / profile_station_id.
    present = any matching event_list item has non-zero clock_in_time.
    """
    lf = row.get("list")
    if not isinstance(lf, dict):
        return False, False
    events = lf.get("event_list") or []
    if not events:
        return False, False

    keep = False
    present = False
    sid_i = int(station_id)
    day_i = int(day_start)

    for ev in events:
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
            day_match = _attendance_date_matches(ed, day_i)
            if day_match is False:
                continue
        keep = True
        cin = ev.get("clock_in_time")
        if cin not in (None, "", 0, "0"):
            present = True

    return keep, present



def _post_ops_calendar_page(sess, headers, body):

    """POST one ops_calendar page with global rate limit + soft retries.



    Soft throttle (retcode -100409 / maintenance): more tries + exponential

    backoff with jitter (~2s -> 30-60s). Other soft errors keep short backoff.

    Concurrent POSTs are capped by _CALENDAR_SEM regardless of --workers.



    Returns (payload_dict_or_None, error_or_None).

    """

    last_err = None

    retry_count = 0

    base_tries = max(1, int(_ROSTER_CAL_HTTP_TRIES))

    throttle_tries = max(base_tries, int(_ROSTER_CAL_THROTTLE_TRIES))

    # Start with base; expand to throttle_tries once -100409 is seen.

    tries = base_tries

    attempt = 0

    while attempt < tries:

        _acquire_calendar_slot()

        try:

            try:

                resp = sess.post(

                    ROSTER_CALENDAR_URL, headers=headers, json=body, timeout=45

                )

                payload = resp.json()

            except Exception as exc:

                last_err = "%s: %s" % (type(exc).__name__, exc)

                if attempt < tries - 1:

                    retry_count += 1

                    _sleep_soft_calendar_backoff(attempt)

                    attempt += 1

                    continue

                print(

                    "  calendar station=%s page=%s SKIPPED after %s tries: %s"

                    % (

                        body.get("station_id"),

                        body.get("pageno"),

                        tries,

                        last_err,

                    ),

                    flush=True,

                )

                return None, last_err

        finally:

            _release_calendar_slot()



        msg = ""

        retcode = None

        if isinstance(payload, dict):

            msg = str(payload.get("message") or "")

            retcode = payload.get("retcode")

        throttle = _is_throttle_retcode(retcode)

        soft = _soft_api_message(msg) or throttle

        bad = resp.status_code != 200 or (

            isinstance(payload, dict)

            and payload.get("retcode") not in (0, "0", None)

        )

        if throttle:

            tries = throttle_tries

        if bad and soft and attempt < tries - 1:

            last_err = msg or ("retcode=%s" % retcode) or (

                "http=%s" % resp.status_code

            )

            if throttle:

                retry_count += 1

                _sleep_throttle_calendar_backoff(attempt)

            else:

                retry_count += 1

                _sleep_soft_calendar_backoff(attempt)

            attempt += 1

            continue

        if bad:

            last_err = (

                msg

                or (

                    "retcode=%s" % retcode

                    if retcode not in (None, "")

                    else ""

                )

                or ("http=%s" % resp.status_code)

            )

            # Tag soft-throttle exhausted clearly vs hard fail.

            if soft:

                tag = "soft throttle exhausted" if throttle else "soft error exhausted"

                last_err = "%s (%s)" % (last_err, tag)

                print(

                    "  calendar station=%s page=%s SKIPPED after %s tries: %s"

                    % (

                        body.get("station_id"),

                        body.get("pageno"),

                        attempt + 1,

                        last_err,

                    ),

                    flush=True,

                )

            return None, last_err

        if not isinstance(payload, dict):

            return None, "ops_calendar non-dict payload"

        if retry_count:

            print(

                "  calendar station=%s page=%s recovered retries=%s"

                % (body.get("station_id"), body.get("pageno"), retry_count),

                flush=True,

            )

        return payload, None

    return None, last_err or "ops_calendar_list failed"





def _fetch_ops_calendar_agency(

    sess, headers, station_id, agency_id, max_pages=None, stop_if_unscoped=False

):

    """POST ops_calendar_list paginated for one agency_id.



    Returns (rows, error, response_total, pages_fetched).

    On soft maintenance after partial pages, return partial rows + soft err

    so caller can continue rather than skip the hub entirely.



    stop_if_unscoped: after page 1, if total > _CALENDAR_UNSCOPED_TOTAL, return

    early so caller can switch to agency9 merge (avoid walking empty shells).

    response_total is diagnostic only: SPX commonly reports the full agency

    roster for this endpoint even when range_start_time == range_end_time.

    """

    page_size = _CALENDAR_PAGE_SIZE

    all_rows = []

    response_total = None

    pageno = 1

    pages_fetched = 0

    if max_pages is None:

        max_pages = _CALENDAR_MAX_PAGES

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

            return all_rows, err, response_total, pages_fetched

        pages_fetched += 1

        data = payload.get("data") if isinstance(payload, dict) else None

        if not isinstance(data, dict):

            if all_rows:

                break

            # data:null / missing â€” tag clearly (hubs like 6479/5815 style)

            reason = "empty ops_calendar data (data:null)"

            if data is None:

                reason = "empty ops_calendar data (data:null)"

            else:

                reason = "empty ops_calendar data (data type=%s)" % type(data).__name__

            print(

                "  calendar station=%s agency=%s SKIPPED: %s"

                % (station_id, agency_id, reason),

                flush=True,

            )

            return [], reason, response_total, pages_fetched

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

                "  calendar station=%s agency=%s api_total=%s "

                "unscoped-early-stop pages=%s (total is agency roster, not today)"

                % (station_id, agency_id, response_total, pageno),

                flush=True,

            )

            break

        if response_total is not None and len(all_rows) >= response_total:

            break

        if not page_rows or len(page_rows) < page_size:

            break

        pageno += 1

    if pageno > max_pages and pages_fetched >= max_pages:

        print(

            "  calendar station=%s agency=%s page-cap-stop pages=%s "

            "api_total=%s (today_kept is computed after filtering)"

            % (station_id, agency_id, pages_fetched,

               response_total if response_total is not None else "?"),

            flush=True,

        )

    return all_rows, last_soft_err, response_total, pages_fetched





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





def _filter_calendar_today_rows(rows, station_id, allow_att_without_esid):

    """Keep only rows with today's event_list Event Station for this hub."""

    day_start = int(_ROSTER_DATE_FROM)

    return [

        row

        for row in (rows or [])

        if isinstance(row, dict)

        and _calendar_row_match(

            row, station_id, day_start, allow_att_without_esid

        )[0]

    ]





def _calendar_part_time_labor_rows(rows, station_id, allow_att_without_esid):

    """Return a bounded set of empty-list OS labor shells.



    Station responses can contain OS roster shells with no event list.

    Keep a bounded number so a clearly global roster dump is not counted.

    """

    day_start = int(_ROSTER_DATE_FROM)

    candidates = [

        row

        for row in (rows or [])

        if _is_ops_fm_lm_row(row)

        and _is_part_time_row(row)

        and not _calendar_row_match(

            row, station_id, day_start, allow_att_without_esid

        )[0]

    ]

    if len(candidates) > int(_CALENDAR_PARTTIME_SHELL_MAX):

        return []

    return candidates





def _fetch_ops_calendar(sess, headers, station_id):

    """POST ops_calendar_list paginated.



    Returns ``(kept_rows, error, allow_att_without_esid, labor_only_rows)``.

    Some agency-0 responses contain today's OS roster people as empty ``list``

    shells. They cannot contribute scheduled/present counts, but their explicit

    Part-time label is retained for the labor mix (the UI attendance table does

    the same). Attendance rows are merged separately when they carry a station.

    """



    agency_id = int(_ROSTER_AGENCY_ID)

    rows, err, total, pages = _fetch_ops_calendar_agency(

        sess,

        headers,

        station_id,

        agency_id,

        # Start normally, but stop immediately after page 1 when agency 0

        # advertises an inflated roster total. The branch below then takes a

        # bounded sample and merges the today-scoped agency-9 query.

        max_pages=None,

        stop_if_unscoped=(agency_id == 0),

    )

    allow_att_without_esid = True

    if total is not None and int(total) > int(_CALENDAR_UNSCOPED_TOTAL):

        allow_att_without_esid = False



    if agency_id == 0 and total is not None and int(total) > int(

        _CALENDAR_UNSCOPED_TOTAL

    ):

        # Serialize unscoped merges so one fat hub cannot storm the shared

        # calendar rate budget under the hub worker pool.

        with _CALENDAR_UNSCOPED_LOCK:

            print(

                "  calendar station=%s agency0 api_total=%s unscoped; "

                "serialize merge agency9 + event-matched (range is today; "

                "total is still full agency roster)"

                % (station_id, total),

                flush=True,

            )

            # Re-scan only a bounded agency0 slice for explicit Event

            # Station matches, then merge with full agency9 (in-house), whose

            # result is normally today-scoped.

            day_start = int(_ROSTER_DATE_FROM)

            rows0, err0, _total0, pages0 = _fetch_ops_calendar_agency(

                sess, headers, station_id, 0,

                max_pages=_CALENDAR_UNSCOPED_MAX_PAGES,

                stop_if_unscoped=False,

            )

            matched0 = [

                r

                for r in (rows0 or [])

                if _calendar_row_match(r, station_id, day_start, False)[0]

            ]

            rows9, err9, total9, pages9 = _fetch_ops_calendar_agency(

                sess, headers, station_id, 9

            )

            rows = _merge_calendar_rows(matched0, rows9)

            if err0 and not matched0:

                err = err or err0

            # Prefer hard err only when both fetches failed with no rows.

            if err and err9 and not rows:

                return [], err or err9, False, []

            if err9 and not rows9 and not matched0:

                # agency9 failed but we may still have matched0

                pass

            labor_only_rows = _calendar_part_time_labor_rows(

                rows, station_id, False

            )

            rows = _filter_calendar_today_rows(rows, station_id, False)

            print(

                "  calendar station=%s merged today_kept=%s "

                "(agency0_api_total=%s agency0_pages=%s agency0_fetched=%s "

                "matched0=%s agency9_fetched=%s agency9_pages=%s "

                "agency9_api_total=%s)"

                % (

                    station_id,

                    len(rows),

                    total if total is not None else "?",

                    pages0,

                    len(rows0 or []),

                    len(matched0),

                    len(rows9 or []),

                    pages9,

                    total9,

                ),

                flush=True,

            )

            return rows, None, False, labor_only_rows



    if err and not rows:

        return [], err, allow_att_without_esid, []

    # Keep explicit OS shells for labor only; do not change schedule

    # counts because an empty list has no station/date attendance evidence.

    labor_only_rows = _calendar_part_time_labor_rows(

        rows, station_id, allow_att_without_esid

    )

    # Drop old/future/other-hub shells immediately after fetch.

    filtered_rows = _filter_calendar_today_rows(

        rows, station_id, allow_att_without_esid

    )

    print(

        "  calendar station=%s agency=%s api_total=%s fetched_rows=%s "

        "today_kept=%s pages=%s/%s (api_total is not treated as today "

        "count; range_start=end=%s)"

        % (

            station_id,

            agency_id,

            total if total is not None else "?",

            len(rows or []),

            len(filtered_rows),

            pages,

            _CALENDAR_MAX_PAGES,

            _unix_to_iso_saigon(_ROSTER_DATE_FROM),

        ),

        flush=True,

    )

    # Soft partial success: continue with filtered rows we have.

    return (

        filtered_rows,

        None if filtered_rows or not err else err,

        allow_att_without_esid,

        labor_only_rows,

    )





def _attendance_query_window():

    """Return a today-only attendance window in Asia/Saigon."""

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



    Uses count=50 (UI default), pageno until list empty or total reached.

    Today-only start_time/end_time. Caller must change_station first; day+hub

    filter still applied in _filter_attendance_for_station as a safety net.

    """

    page_size = max(1, int(_ATTENDANCE_PAGE_SIZE))

    all_rows = []

    seen_ids = set()

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

    if response_total is not None and len(all_rows) < int(response_total):

        print(

            "  attendance INCOMPLETE acc=%s total=%s "

            "(need more pages or station access)"

            % (len(all_rows), response_total),

            flush=True,

        )

    return all_rows, None





def _reset_attendance_cache():

    global _ATTENDANCE_CACHE_ROWS, _ATTENDANCE_CACHE_ERR

    global _ATTENDANCE_FETCHING, _ATTENDANCE_BY_STATION

    global _ATTENDANCE_ORIGINAL_STATION

    with _ATTENDANCE_CACHE_LOCK:

        _ATTENDANCE_BY_STATION = {}

        _ATTENDANCE_CACHE_ROWS = None

        _ATTENDANCE_CACHE_ERR = None

        _ATTENDANCE_FETCHING = False

        _ATTENDANCE_ORIGINAL_STATION = None

        _ATTENDANCE_CACHE_DONE.clear()





def _set_attendance_cache(rows, err):

    """Legacy no-op publisher (prefetch disabled). Kept for call-site safety."""

    global _ATTENDANCE_CACHE_ROWS, _ATTENDANCE_CACHE_ERR, _ATTENDANCE_FETCHING

    with _ATTENDANCE_CACHE_LOCK:

        _ATTENDANCE_CACHE_ROWS = rows if isinstance(rows, list) else []

        _ATTENDANCE_CACHE_ERR = err

        _ATTENDANCE_FETCHING = False

        _ATTENDANCE_CACHE_DONE.set()

        return _ATTENDANCE_CACHE_ROWS, _ATTENDANCE_CACHE_ERR





def _change_station(sess, headers, station_id):

    """POST change_station so attendance scopes to this hub.



    statistic_data_list is current-station scoped: without switching, unscoped

    GETs only return the session's current hub, and station_id=<other> is empty.

    Returns (ok: bool, error_or_None).

    """

    sid_i = int(station_id)

    last_err = None

    tries = max(1, int(_ROSTER_HTTP_TRIES))

    for attempt in range(tries):

        try:

            resp = sess.post(

                ROSTER_CHANGE_STATION_URL,

                headers=headers,

                json={"station_id": sid_i},

                timeout=30,

            )

            payload = resp.json()

        except Exception as exc:

            last_err = "%s: %s" % (type(exc).__name__, exc)

            if attempt < tries - 1:

                _sleep_backoff(attempt)

                continue

            return False, last_err

        if not isinstance(payload, dict):

            return False, "change_station non-dict payload"

        ret = payload.get("retcode")

        if ret in (0, "0", None):

            return True, None

        msg = str(payload.get("message") or ret or "change_station failed")

        # Permanent denial (invalid / unauthorized station): do not retry.

        if ret in (100102059, "100102059") or "invalid station" in msg.lower():

            return False, msg

        soft = _soft_api_message(msg)

        if soft and attempt < tries - 1:

            last_err = msg

            _sleep_backoff(attempt)

            continue

        return False, msg

    return False, last_err or "change_station failed"





def _remember_original_station(sess, headers):

    """Best-effort read of current_station_id for restore after roster."""

    global _ATTENDANCE_ORIGINAL_STATION

    if _ATTENDANCE_ORIGINAL_STATION is not None:

        return _ATTENDANCE_ORIGINAL_STATION

    try:

        resp = sess.get(

            "https://spx.shopee.vn/api/admin/basicserver/current_user/station_list/",

            headers=headers,

            params={"count": 1, "status_list": 0},

            timeout=20,

        )

        payload = resp.json()

        data = payload.get("data") if isinstance(payload, dict) else None

        if isinstance(data, dict) and data.get("current_station_id") not in (None, ""):

            _ATTENDANCE_ORIGINAL_STATION = int(data.get("current_station_id"))

    except Exception:

        pass

    return _ATTENDANCE_ORIGINAL_STATION





def _restore_original_station(sess, headers):

    """Switch back to the station active at roster start (best effort)."""

    orig = _ATTENDANCE_ORIGINAL_STATION

    if orig in (None, ""):

        return

    ok, err = _change_station(sess, headers, orig)

    print(

        "  attendance restore station=%s ok=%s err=%s"

        % (orig, ok, err or "-"),

        flush=True,

    )





def _get_attendance_cache(sess, headers, wait=True):

    """Deprecated global prefetch entrypoint.



    Attendance is current-station scoped; use per-hub fetch via

    _fetch_attendance_stats. This stub returns empty so old prefetch

    call sites stay harmless.

    """

    return [], None





def _filter_attendance_for_station(all_rows, station_id):

    """Filter attendance rows by Event Station only (event_station_id).



    Never match profile_station_id / station_id. Rows without event_station_id

    are dropped (cannot attribute to a hub). Still applied after per-hub fetch

    as a safety net when the API returns mixed rows.

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

    """Return today's attendance rows for one hub.



    Flow (session-global, locked):

      1) POST change_station(station_id)

      2) GET statistic_data_list today-only, staff_type=2, paginated

      3) Keep rows whose event_station_id matches the hub



    Cached per station_id for the roster run. If change_station fails

    (e.g. cookie user lacks that hub), returns ([], err) so cook falls

    back to calendar labor / late.

    """

    sid_i = int(station_id)

    with _ATTENDANCE_CACHE_LOCK:

        cached = _ATTENDANCE_BY_STATION.get(sid_i)

        if cached is not None:

            return cached

        _remember_original_station(sess, headers)

        ok, switch_err = _change_station(sess, headers, sid_i)

        if not ok:

            result = ([], "change_station: %s" % (switch_err or "failed"))

            _ATTENDANCE_BY_STATION[sid_i] = result

            print(

                "  attendance station=%s SKIP switch_err=%s"

                % (sid_i, switch_err),

                flush=True,

            )

            return result

        rows, err = _fetch_attendance_all_pages(sess, headers)

        filtered = _filter_attendance_for_station(rows, sid_i)

        # Soft-fail: keep filtered rows even if a later page errored.

        if err and not filtered:

            result = ([], err)

        else:

            result = (filtered, err)

        _ATTENDANCE_BY_STATION[sid_i] = result

        print(

            "  attendance station=%s raw=%s kept=%s err=%s"

            % (sid_i, len(rows or []), len(filtered), err or "-"),

            flush=True,

        )

        return result





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

    cal_labor_rows=None,

):

    """Cook one hub-summary row from calendar + attendance.

    Scheduled/present: kept ops_calendar rows with non-empty event_list only.
    Labor (FTE/OS/BPO): prefer attendance when every ops FM/LM attendance
    row for the hub carries agency/contract labels (complete + labeled).
    Otherwise calendar labor (+ unmatched attendance extras / supplemental OS);
    fall back to attendance when calendar has no labels.
    Late: attendance preferred, calendar fills gaps.
    """

    day_start = int(_ROSTER_DATE_FROM)

    scheduled = 0

    present = 0

    cal_fte = cal_os = cal_bpo = 0

    station_name = station_name_hint or ""



    for row in cal_rows or []:

        if not isinstance(row, dict) or not _is_ops_fm_lm_row(row):

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



    # Empty-list OS shells are intentionally excluded from schedule

    # counts, but remain valid OS labor evidence from the station calendar.

    cal_tokens = set()

    for row in cal_rows or []:

        if isinstance(row, dict) and _is_ops_fm_lm_row(row):

            cal_tokens.update(_row_identity_tokens(row))

    supplemental_os = 0

    for row in cal_labor_rows or []:

        if not _is_ops_fm_lm_row(row) or not _is_part_time_row(row):

            continue

        if _row_identity_tokens(row) & cal_tokens:

            continue

        supplemental_os += 1



    # Detect whether kept calendar rows actually expose agency/contract labels.

    cal_labeled = 0

    for row in cal_rows or []:

        if not isinstance(row, dict) or not _is_ops_fm_lm_row(row):

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

    att_ops_n = 0

    for row in att_rows or []:

        if not isinstance(row, dict) or not _is_ops_fm_lm_row(row):

            continue

        att_ops_n += 1

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

    # Attendance is "complete & labeled" when every ops FM/LM attendance row

    # for this hub has agency/contract. Prefer that mix for FTE/OS/BPO so

    # calendar-only absentees and attendance-only staff are not double-merged.

    att_complete = att_ops_n > 0 and att_labor_n == att_ops_n

    # Calendar path: add unmatched attendance rows (notably Part-time) without

    # double-counting staff present in both payloads.

    att_extra_fte = att_extra_os = att_extra_bpo = 0

    if cal_labeled > 0 and not att_complete:

        for row in att_rows or []:

            if not isinstance(row, dict) or not _is_ops_fm_lm_row(row):

                continue

            agency, contract = _row_agency_contract(row)

            if not str(agency or "").strip() and not str(contract or "").strip():

                continue

            if _row_identity_tokens(row) & cal_tokens:

                continue

            labor = _map_labor_type(agency, contract)

            if labor == "OS":

                att_extra_os += 1

            elif labor == "BPO":

                att_extra_bpo += 1

            else:

                att_extra_fte += 1

    if att_complete:

        fte, os_n, bpo = att_fte, att_os, att_bpo

        labor_source = "attendance"

    elif cal_labeled > 0:

        fte = cal_fte + att_extra_fte

        os_n = cal_os + supplemental_os + att_extra_os

        bpo = cal_bpo + att_extra_bpo

        labor_source = (

            "calendar+attendance"

            if (supplemental_os or att_extra_fte or att_extra_os or att_extra_bpo)

            else "calendar"

        )

    elif att_labor_n > 0:

        fte, os_n, bpo = att_fte, att_os, att_bpo

        labor_source = "attendance"

    else:

        fte = cal_fte

        os_n = cal_os + supplemental_os

        bpo = cal_bpo

        labor_source = "calendar" if not supplemental_os else "calendar+attendance"

    # Attendance is preferred for late status. Calendar event statuses fill

    # the gap when the attendance endpoint returns another station/page.

    att_tokens = set()

    late_count = 0

    for row in att_rows or []:

        if not _is_ops_fm_lm_row(row):

            continue

        # Any matching attendance status is authoritative over a calendar

        # status for that staff member; only Late In increments the metric.

        att_tokens.update(_row_identity_tokens(row))

        if _is_late_attendance_row(row):

            late_count += 1

    for row in cal_rows or []:

        if not isinstance(row, dict) or not _is_ops_fm_lm_row(row):

            continue

        if _row_identity_tokens(row) & att_tokens:

            continue

        keep, _present = _calendar_row_match(row, station_id, day_start, allow_att_without_esid)

        if not keep or not isinstance(row.get("list"), dict):

            continue

        late_here = False

        for entries in (row["list"].get("event_list") or [], row["list"].get("attendance_list") or []):

            for entry in entries:

                if not isinstance(entry, dict):

                    continue

                if _is_late_attendance_row(entry):

                    late_here = True

                    break

            if late_here:

                break

        if late_here:

            late_count += 1



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






TRACKING_LIST_SEARCH_URL = (
    "https://spx.shopee.vn/api/fleet_order/order/tracking_list/search"
)
BACKLOG_D0_ORDER_STATUS = (
    "333,1,42,2,5,409,410,43,44,210,211,72,67,10,581,575,124"
)
BACKLOG_D0_PAGE_COUNT = 24


def backlog_d0_total(payload):
    """Return tracking_list data.total as int.

    Ignores list length and any top-level total. 0 stays 0.
    """
    data = payload.get("data") if isinstance(payload, dict) else None
    if not isinstance(data, dict) or "total" not in data:
        raise ValueError("tracking_list response missing data.total")
    total = data["total"]
    if isinstance(total, bool) or total is None:
        raise ValueError("tracking_list data.total is not an integer")
    return int(total)


def build_backlog_d0_body(station_id):
    """Single-page tracking_list/search body. New dict every call. No pagination."""
    return {
        "current_station_ids": str(station_id),
        "order_status": BACKLOG_D0_ORDER_STATUS,
        "page_no": 1,
        "count": BACKLOG_D0_PAGE_COUNT,
    }


def fetch_backlog_d0_total(sess, headers, station_id):
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
    if not isinstance(payload, dict):
        raise ValueError("tracking_list non-dict http=%s" % getattr(resp, "status_code", None))
    ret = payload.get("retcode")
    if ret not in (0, "0"):
        raise ValueError(
            "tracking_list http=%s retcode=%s message=%s"
            % (getattr(resp, "status_code", None), ret, payload.get("message") or "")
        )
    return backlog_d0_total(payload)


def fetch_one(api_key, station_id, station_name_hint=""):

    endpoint, _name, mode, body_kind = API_SPECS[api_key]

    sess, headers = _thread_session()

    fetched_at = datetime.now(TZ).strftime("%Y-%m-%d %H:%M:%S")



    # Roster: two WFM APIs (calendar + attendance), not data_api mart.

    if api_key == "roster":

        t0 = time.perf_counter()

        req_body = build_request_body(api_key, station_id)

        cal_rows, cal_err, allow_att, cal_labor_rows = _fetch_ops_calendar(

            sess, headers, station_id

        )

        att_rows, att_err = _fetch_attendance_stats(sess, headers, station_id)

        ms = (time.perf_counter() - t0) * 1000

        if cal_err:

            err_out = str(cal_err)

            if "data:null" in err_out.lower() or "empty ops_calendar" in err_out.lower():

                err_out = "skip_reason=data:null | %s" % err_out

            elif _soft_api_message(err_out) or "soft throttle" in err_out.lower():

                err_out = "skip_reason=soft_throttle | %s" % err_out

            return {

                "ok": False,

                "station_id": station_id,

                "station_name": station_name_hint,

                "fetched_at": fetched_at,

                "http": None,

                "retcode": None,

                "request_body": req_body,

                "ms": ms,

                "error": err_out,

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

            cal_labor_rows=cal_labor_rows,

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

    backlog_d0_error = None

    if api_key == "backlog" and ok and rows:

        try:

            rows[0]["backlog_d0"] = fetch_backlog_d0_total(

                sess, headers, station_id

            )

        except Exception as exc:

            backlog_d0_error = "%s: %s" % (type(exc).__name__, exc)

            rows[0]["backlog_d0"] = ""

        ms = (time.perf_counter() - t0) * 1000

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

        "backlog_d0_error": backlog_d0_error,

        "rows": rows,

    }





def write_csv(path, results, allowed_metrics=None, header_map=None):

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

    if header_map:

        headers = [header_map.get(col, col) for col in columns]

    else:

        headers = list(columns)



    out_path = Path(path)

    out_path.parent.mkdir(parents=True, exist_ok=True)

    tmp_path = out_path.with_suffix(out_path.suffix + ".tmp")

    with tmp_path.open("w", encoding="utf-8-sig", newline="") as handle:

        writer = csv.DictWriter(handle, fieldnames=headers, extrasaction="ignore")

        writer.writeheader()

        for row in flat:

            out = {}

            for col, header in zip(columns, headers):

                value = row.get(col, "")

                out[header] = "" if value is None else value

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

    return headers, len(flat)





def run_api(api_key, hubs, workers, out_path):

    endpoint, _name, mode, _bk = API_SPECS[api_key]

    ep_show = ROSTER_CALENDAR_URL if api_key == "roster" else endpoint

    hub_workers = max(1, int(workers))

    if api_key == "roster":

        # Auto-cap roster hub concurrency; calendar POSTs also rate-limited.

        hub_workers = max(1, min(hub_workers, int(_ROSTER_WORKER_CAP)))

    print(

        "[%s] endpoint=%s hubs=%d workers=%d -> %s"

        % (api_key, ep_show, len(hubs), hub_workers, out_path),

        flush=True,

    )

    if api_key == "roster" and int(workers) > int(hub_workers):

        print(

            "  roster workers capped %s -> %s "

            "(calendar global limit concurrent=%s interval=%.2fs); "

            "--workers still accepted for other APIs"

            % (

                workers,

                hub_workers,

                _CALENDAR_MAX_CONCURRENT,

                _CALENDAR_MIN_INTERVAL_S,

            ),

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

        # Attendance is current-station scoped: each hub calls change_station

        # then GETs statistic_data_list under a process lock (see

        # _fetch_attendance_stats). No global prefetch.

        print(

            "  attendance mode=per-hub change_station+statistic_data_list",

            flush=True,

        )

        try:

            sess, headers = _thread_session()

            _remember_original_station(sess, headers)

            print(

                "  attendance original_station=%s"

                % (_ATTENDANCE_ORIGINAL_STATION,),

                flush=True,

            )

        except Exception as exc:

            print(

                "  attendance original_station lookup failed: %s"

                % exc,

                flush=True,

            )

    results = []

    with ThreadPoolExecutor(max_workers=hub_workers) as pool:

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

            with ThreadPoolExecutor(max_workers=hub_workers) as pool:

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



    if api_key == "roster":

        try:

            sess, headers = _thread_session()

            _restore_original_station(sess, headers)

        except Exception as exc:

            print("  attendance restore failed: %s" % exc, flush=True)



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

            d0_note = ""

            if item.get("backlog_d0_error"):

                d0_note = " d0_err=%s" % _safe_console(item.get("backlog_d0_error"))

            extra = " backlog_d0=%s gte_1d=%s to_deliver_eq_1d=%s%s" % (

                r0.get("backlog_d0"),

                r0.get("lm_hub_backlog_gte_1d_order_qty_td"),

                r0.get("lm_hub_to_deliver_backlog_eq_1d_order_qty_td"),

                d0_note,

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

                _safe_console(item.get("station_name") or ""),

                len(rows),

                item.get("ms") or 0,

                extra,

            ),

            flush=True,

        )

    if skip_items:

        print(

            "  %s FINAL SKIPPED %d hub(s) (not mid-retry):"

            % (api_key, len(skip_items)),

            flush=True,

        )

        for item in skip_items[:30]:

            print(

                "    SKIPPED station_id=%s http=%s ret=%s reason=%s"

                % (

                    item["station_id"],

                    item.get("http"),

                    item.get("retcode"),

                    _safe_console(item.get("error") or ""),

                ),

                flush=True,

            )

        if len(skip_items) > 30:

            print("    ... va %d hub khac" % (len(skip_items) - 30), flush=True)



    # backlog and delivery_progress: exact allowlists; order_volume keeps response fields.

    header_map = None

    if api_key == "backlog":

        allowed_metrics = BACKLOG_KEY_METRICS

        header_map = BACKLOG_CSV_HEADERS

    elif api_key == "delivery_progress":

        allowed_metrics = DELIVERY_PROGRESS_KEY_METRICS

    elif api_key == "fm_order_volume":

        allowed_metrics = FM_ORDER_VOLUME_KEY_METRICS

    elif api_key == "roster":

        allowed_metrics = ROSTER_KEY_METRICS

    else:

        allowed_metrics = None

    _cols, row_n = write_csv(

        out_path, results, allowed_metrics=allowed_metrics, header_map=header_map

    )

    print(

        "=== hub_ok=%d | hub_skip=%d | csv_rows=%d | file=%s ==="

        % (len(ok_items), len(skip_items), row_n, out_path),

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

    p.add_argument(

        "--workers",

        type=int,

        default=4,

        help=(

            "Per-API hub workers (default 4). Roster uses up to %s workers and "

            "calendar POSTs are globally rate-limited; higher values are accepted "

            "for non-roster APIs."

            % _ROSTER_WORKER_CAP

        ),

    )

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

        "Khong khuyen nghi â€” pack nay doc lap.",

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

    p.add_argument(

        "--google-sheet-id",

        default=None,

        help=(

            "Overwrite this Google Spreadsheet ID after selected API CSV writes "

            "(named D0 tabs; order_volume and fm_order_volume share Order Volume D0). "

            "Default: env LM_HUB_GOOGLE_SHEET_ID / GOOGLE_SHEET_ID or "

            "pack fixed ID (%s)."

            % DEFAULT_GOOGLE_SHEET_ID

        ),

    )

    p.add_argument(

        "--google-credentials",

        default=None,

        help=(

            "Path to Google service-account JSON (or OAuth token JSON). "

            "Default: env LM_HUB_GOOGLE_CREDENTIALS / "

            "GOOGLE_APPLICATION_CREDENTIALS or "

            "secrets/google_service_account.json"

        ),

    )

    p.add_argument(

        "--no-google-sheet",

        action="store_true",

        help=(

            "Skip Google Sheets overwrite for all selected APIs "

            "(local CSV still written)"

        ),

    )

    return p.parse_args(argv)





def main(argv=None):

    _configure_stdio()

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

    print("======== SUMMARY (hub_ok / hub_skip) ========", flush=True)

    for api_key, ok_n, fail_n, row_n, out_path in summary:

        print(

            "  %s  hub_ok=%d  hub_skip=%d  csv_rows=%d  -> %s"

            % (api_key, ok_n, fail_n, row_n, out_path),

            flush=True,

        )

    print("=============================================", flush=True)



    # After all API CSVs exist: overwrite named Google Sheet tabs sequentially.
    # order_volume and fm_order_volume share one combined tab (Order Volume D0).
    # Local CSV always remains. Soft-fail per API so a creds/share issue does
    # not discard a successful export.
    if not bool(getattr(args, "no_google_sheet", False)):
        sheet_id = args.google_sheet_id or None
        creds = args.google_credentials or None
        cred_resolved = resolve_credentials_path(creds)
        apis_with_csv = [
            api_key
            for api_key in apis
            if api_key in API_TAB_NAMES
            and api_results.get(api_key, (0, 0, 0))[2] > 0
            and Path(out_paths[api_key]).is_file()
        ]
        volume_selected = any(api_key in VOLUME_API_KEYS for api_key in apis)
        combined_path = None
        if volume_selected:
            suffix = args.out_suffix or ""
            ov_path = Path(
                out_paths.get("order_volume")
                or resolve_out_path("order_volume", out_dir, suffix)
            )
            fm_path = Path(
                out_paths.get("fm_order_volume")
                or resolve_out_path("fm_order_volume", out_dir, suffix)
            )
            dest = combined_volume_csv_path(out_dir, suffix)
            if ov_path.is_file() or fm_path.is_file():
                try:
                    combined_rows = write_combined_order_volume_csv(
                        ov_path if ov_path.is_file() else None,
                        fm_path if fm_path.is_file() else None,
                        dest,
                    )
                    combined_path = dest
                    print(
                        "Combined order volume: rows=%d -> %s (ov=%s fm=%s)"
                        % (
                            combined_rows,
                            dest,
                            ov_path if ov_path.is_file() else "missing",
                            fm_path if fm_path.is_file() else "missing",
                        ),
                        flush=True,
                    )
                except Exception as exc:
                    combined_path = None
                    print(
                        "Combined order volume CSV FAILED "
                        "(volume sheet skip): %s" % exc,
                        flush=True,
                    )
            else:
                print(
                    "Combined order volume SKIP: neither CSV exists (%s, %s)"
                    % (ov_path, fm_path),
                    flush=True,
                )
        sheet_targets = list(apis_with_csv)
        if combined_path is not None and Path(combined_path).is_file():
            sheet_targets.append("order_volume+fm_order_volume")
        if sheet_targets and cred_resolved is None:
            print(
                "Google Sheet SKIP: no credentials JSON found "
                "(place secrets/google_service_account.json or pass "
                "--google-credentials). Local CSVs kept for: %s"
                % ", ".join(sheet_targets),
                flush=True,
            )
        elif sheet_targets:
            for api_key in apis_with_csv:
                csv_path = Path(out_paths[api_key])
                tab = API_TAB_NAMES[api_key]
                try:
                    push_api_csv(
                        csv_path,
                        api_key=api_key,
                        spreadsheet_id=sheet_id,
                        credentials_path=creds,
                    )
                except GoogleSheetsError as exc:
                    print(
                        "Google Sheet FAILED tab=%r api=%s (local CSV kept): %s"
                        % (tab, api_key, exc),
                        flush=True,
                    )
                except Exception as exc:
                    print(
                        "Google Sheet FAILED unexpected tab=%r api=%s "
                        "(local CSV kept): %s" % (tab, api_key, exc),
                        flush=True,
                    )
            if combined_path is not None and Path(combined_path).is_file():
                try:
                    push_csv_to_tab(
                        combined_path,
                        tab_title=COMBINED_VOLUME_TAB,
                        spreadsheet_id=sheet_id,
                        credentials_path=creds,
                    )
                except GoogleSheetsError as exc:
                    print(
                        "Google Sheet FAILED tab=%r api=%s (local CSV kept): %s"
                        % (COMBINED_VOLUME_TAB, "order_volume+fm_order_volume", exc),
                        flush=True,
                    )
                except Exception as exc:
                    print(
                        "Google Sheet FAILED unexpected tab=%r api=%s "
                        "(local CSV kept): %s"
                        % (COMBINED_VOLUME_TAB, "order_volume+fm_order_volume", exc),
                        flush=True,
                    )
        else:
            wanted = [
                k for k in apis if k in API_TAB_NAMES or k in VOLUME_API_KEYS
            ]
            if wanted:
                print(
                    "Google Sheet SKIP: no selected API CSV with rows "
                    "(apis=%s)" % ", ".join(wanted),
                    flush=True,
                )

    if args.strict:

        return 1 if total_fail else 0

    return 0 if total_ok > 0 else 1





if __name__ == "__main__":

    sys.exit(main())







