from pathlib import Path

path = Path(r"C:\lm_hub_export\export_lm_hubs.py")
src = path.read_text(encoding="utf-8")

old = '''    order = {h["station_id"]: i for i, h in enumerate(hubs)}
    results.sort(key=lambda x: order.get(x["station_id"], 10**9))

    ok_items = [r for r in results if r["ok"]]
    skip_items = [r for r in results if not r["ok"]]
'''

new = '''    order = {h["station_id"]: i for i, h in enumerate(hubs)}
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
'''

if old not in src:
    raise SystemExit("second-pass insert point not found")
src = src.replace(old, new, 1)
path.write_text(src, encoding="utf-8")
print("second pass inserted")
