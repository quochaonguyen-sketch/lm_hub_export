from pathlib import Path

path = Path(r"C:\lm_hub_export\export_lm_hubs.py")
src = path.read_text(encoding="utf-8")

# Update calendar POST to use stronger tries + slightly longer backoff
old = '''def _post_ops_calendar_page(sess, headers, body):
    """POST one ops_calendar page with soft maintenance retries.

    Returns (payload_dict_or_None, error_or_None).
    """
    last_err = None
    tries = int(_ROSTER_HTTP_TRIES)
    for attempt in range(tries):'''

new = '''def _post_ops_calendar_page(sess, headers, body):
    """POST one ops_calendar page with soft maintenance retries.

    Returns (payload_dict_or_None, error_or_None).
    """
    last_err = None
    tries = max(1, int(_ROSTER_CAL_HTTP_TRIES))
    for attempt in range(tries):'''

if old not in src:
    raise SystemExit("post_ops header not found")
src = src.replace(old, new, 1)

# Longer backoff for calendar soft retries: replace sleep in that function only by
# changing the call sites inside _post_ops_calendar_page to a local longer sleep.
# Safer: bump _sleep_backoff usage in calendar via inline sleep for soft path.
old_soft = '''        if bad and soft and attempt < tries - 1:
            last_err = msg or ("http=%s" % resp.status_code)
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
            return None, "ops_calendar non-dict payload"
        return payload, None
    return None, last_err or "ops_calendar_list failed"'''

new_soft = '''        if bad and soft and attempt < tries - 1:
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
    return None, last_err or "ops_calendar_list failed"'''

if old_soft not in src:
    raise SystemExit("post_ops soft block not found")
src = src.replace(old_soft, new_soft, 1)

path.write_text(src, encoding="utf-8")
print("pass C calendar post ok")
