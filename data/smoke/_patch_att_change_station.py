"""Patch attendance to change_station per hub (API is current-station scoped)."""
from pathlib import Path
import re

path = Path("export_lm_hubs.py")
text = path.read_text(encoding="utf-8")

old_urls = '''ROSTER_ATTENDANCE_URL = (
    "https://spx.shopee.vn/api/wfm/admin/attendance/clock/statistic_data_list"
)
'''
new_urls = '''ROSTER_ATTENDANCE_URL = (
    "https://spx.shopee.vn/api/wfm/admin/attendance/clock/statistic_data_list"
)
ROSTER_CHANGE_STATION_URL = (
    "https://spx.shopee.vn/api/admin/basicserver/change_station/"
)
'''
if "ROSTER_CHANGE_STATION_URL" not in text:
    if old_urls not in text:
        raise SystemExit("URL block not found")
    text = text.replace(old_urls, new_urls, 1)

old_globals = '''_ATTENDANCE_CACHE_LOCK = threading.Lock()
_ATTENDANCE_CACHE_ROWS = None  # list | None (None = not fetched yet)
_ATTENDANCE_CACHE_ERR = None
_ATTENDANCE_CACHE_DONE = threading.Event()
_ATTENDANCE_FETCHING = False
'''
new_globals = '''_ATTENDANCE_CACHE_LOCK = threading.Lock()  # serializes change_station + fetch
_ATTENDANCE_BY_STATION = {}  # station_id -> (rows_list, err_or_None)
_ATTENDANCE_CACHE_ROWS = None  # legacy unused; kept for safe resets
_ATTENDANCE_CACHE_ERR = None
_ATTENDANCE_CACHE_DONE = threading.Event()
_ATTENDANCE_FETCHING = False
_ATTENDANCE_ORIGINAL_STATION = None  # restore after roster run when set
'''
if "_ATTENDANCE_BY_STATION" not in text:
    if old_globals not in text:
        raise SystemExit("globals block not found")
    text = text.replace(old_globals, new_globals, 1)

# Replace from _reset_attendance_cache through _fetch_attendance_stats (exclusive of _is_late)
old_cache_block_start = "def _reset_attendance_cache():"
old_late_start = "def _is_late_attendance_row(row):"
idx0 = text.find(old_cache_block_start)
idx1 = text.find(old_late_start)
if idx0 < 0 or idx1 < 0 or idx1 <= idx0:
    raise SystemExit("cache block markers not found: %s %s" % (idx0, idx1))

new_cache = '''def _reset_attendance_cache():
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


'''

text = text[:idx0] + new_cache + text[idx1:]

# Replace prefetch block to skip global fetch; restore station at end of roster section
# Find the prefetch comment block and simplify
old_prefetch = '''        # Prefetch attendance once (global), with hard timeout so hub loop
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
'''
new_prefetch = '''        # Attendance is current-station scoped: each hub calls change_station
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
'''
if old_prefetch not in text:
    raise SystemExit("prefetch block not found")
text = text.replace(old_prefetch, new_prefetch, 1)

# After hub pool finishes for roster, restore station. Find a good insertion point:
# look for "if api_key == \"roster\":" maintenance second-pass or results writing.
# Insert restore before return of run_api / after the with ThreadPoolExecutor block for roster.
# Safer: hook into end of run_one_api by searching unique string after pool.

marker = "    results = []\n    with ThreadPoolExecutor(max_workers=hub_workers) as pool:"
if marker not in text:
    raise SystemExit("results pool marker not found")

# Add restore after the pool section ends - find "return results" near end of that function is hard.
# Instead wrap: after gathering results in roster case. Search for maintenance second-pass.
# Simplest: call restore at the start of CSV write for roster - or after futs complete.

# Find this pattern after pool:
old_pool_tail_hint = None
# We'll add restore in fetch path is wrong. Add after:
# `if api_key == "roster" and int(workers)` - no.
# Look for "_reset_attendance_cache()" only at start - add function call at end of run_api.

# Insert after the ThreadPoolExecutor with-block by finding the next "ok = sum" or similar.
m = re.search(
    r"(    with ThreadPoolExecutor\(max_workers=hub_workers\) as pool:\n"
    r"        futs = \{[\s\S]*?\n"
    r"        \}\n"
    r"        for fut in as_completed\(futs\):[\s\S]*?\n"
    r"            results\.append\([^\n]+\n"
    r"(?:                [^\n]+\n)*)",
    text,
)
# Fallback simpler: after roster run, in main after apis loop - too late for session.
# Add explicit restore call right before `return results` inside the function that has the pool.

# Find function containing the pool - search backwards for def 
pool_idx = text.find(marker)
# find next "    return results" or "    return (" after pool
ret_idx = text.find("\n    return results\n", pool_idx)
if ret_idx < 0:
    # maybe different return
    ret_idx = text.find("\n    return (", pool_idx)
if ret_idx < 0:
    raise SystemExit("return after pool not found")

restore_snip = '''
    if api_key == "roster":
        try:
            sess, headers = _thread_session()
            _restore_original_station(sess, headers)
        except Exception as exc:
            print("  attendance restore failed: %s" % exc, flush=True)

'''
# Only insert once
if "_restore_original_station(sess, headers)" not in text[pool_idx:ret_idx+50]:
    text = text[:ret_idx] + restore_snip + text[ret_idx:]

# Update module docstring attendance bullet if present
text2 = text.replace(
    "Do not send station_id: station-scoped requests return empty.",
    "Attendance is current-station scoped: POST change_station(hub) then GET "
    "statistic_data_list (no station_id). station_id=<other hub> returns empty.",
)
text = text2

path.write_text(text, encoding="utf-8")
print("patched", path, "len", len(text))
# syntax check
import py_compile
py_compile.compile(str(path), doraise=True)
print("syntax OK")
