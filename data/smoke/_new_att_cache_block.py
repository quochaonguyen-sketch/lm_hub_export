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


