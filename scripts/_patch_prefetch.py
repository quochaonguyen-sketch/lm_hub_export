from pathlib import Path

path = Path(r"C:\lm_hub_export\export_lm_hubs.py")
src = path.read_text(encoding="utf-8")

start = src.index("def _get_attendance_page(sess, headers, params):")
end = src.index("def _filter_attendance_for_station(all_rows, station_id):")

new_block = r'''def _attendance_query_window():
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


'''

src2 = src[:start] + new_block + src[end:]
path.write_text(src2, encoding="utf-8")
print("replaced attendance block", start, end, "newlen", len(src2))
