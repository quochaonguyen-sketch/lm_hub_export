from pathlib import Path

path = Path(r"C:\lm_hub_export\export_lm_hubs.py")
src = path.read_text(encoding="utf-8")

old = '''        # Prefetch attendance once (global) before hub workers to avoid N maintenance hits.
        try:
            sess, headers = _thread_session()
            att_all, att_pre_err = _get_attendance_cache(sess, headers)
            print(
                "  attendance prefetch rows=%d err=%s"
                % (len(att_all or []), att_pre_err or "-"),
                flush=True,
            )
        except Exception as exc:
            print("  attendance prefetch failed: %s" % exc, flush=True)
'''

new = '''        # Prefetch attendance once (global), with hard timeout so hub loop
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

if old not in src:
    raise SystemExit("prefetch block not found")
src = src.replace(old, new, 1)
path.write_text(src, encoding="utf-8")
print("prefetch patched")
