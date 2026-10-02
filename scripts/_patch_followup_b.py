from pathlib import Path

path = Path(r"C:\lm_hub_export\export_lm_hubs.py")
src = path.read_text(encoding="utf-8")

start = src.index("def _calendar_row_match(row, station_id, day_start):")
end = src.index("def _post_ops_calendar_page(sess, headers, body):")

new_match = r'''def _calendar_row_match(row, station_id, day_start, allow_att_without_esid=False):
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


'''

src = src[:start] + new_match + src[end:]
path.write_text(src, encoding="utf-8")
print("calendar_row_match replaced")
