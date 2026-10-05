from pathlib import Path
import shutil, datetime, re

root = Path(r"C:\lm_hub_export")
src = root / "export_lm_hubs.py"
readme = root / "README.md"
tests = root / "tests" / "test_roster_labor.py"
arch = root / "archive"
arch.mkdir(exist_ok=True)
ts = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
shutil.copy2(src, arch / f"export_lm_hubs.py.before_eventlist_only_{ts}")
shutil.copy2(readme, arch / f"README.md.before_eventlist_only_{ts}")
shutil.copy2(tests, arch / f"test_roster_labor.py.before_eventlist_only_{ts}")
print("backed up", ts)

text = src.read_text(encoding="utf-8")

NEW_FN = '''def _calendar_row_match(row, station_id, day_start, allow_att_without_esid=False):
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


'''

pat = re.compile(
    r"def _calendar_row_match\(row, station_id, day_start, allow_att_without_esid=False\):.*?(?=\ndef _post_ops_calendar_page\()",
    re.S,
)
m = pat.search(text)
if not m:
    raise SystemExit("FAIL: _calendar_row_match not found")
text2 = pat.sub(NEW_FN, text, count=1)
print("replaced _calendar_row_match len", m.end() - m.start(), "->", len(NEW_FN))

repls = [
    ("_ROSTER_AGENCY_ID = 0", "_ROSTER_AGENCY_ID = 9"),
    ("agency_id (default 0),", "agency_id (default 9),"),
    (
        'help="roster only: ops_calendar_list agency_id (mac dinh 0 = all; 9 = in-house)",',
        'help="roster only: ops_calendar_list agency_id (mac dinh 9 = in-house; 0 = all)",',
    ),
    ("default=0,\n        help=\"roster only:", "default=9,\n        help=\"roster only:"),
    ("default=0,\n\n        help=\"roster only:", "default=9,\n\n        help=\"roster only:"),
    (
        "_ROSTER_AGENCY_ID = int(args.agency_id if args.agency_id is not None else 0)",
        "_ROSTER_AGENCY_ID = int(args.agency_id if args.agency_id is not None else 9)",
    ),
    (
        "Keep calendar people with non-empty list for today + Event Station",
        "Keep calendar people with non-empty event_list for today + Event Station",
    ),
    (
        '"""Keep only rows carrying today\'s Event Station/attendance for this hub."""',
        '"""Keep only rows with today\'s event_list Event Station for this hub."""',
    ),
    (
        "Scheduled/present: always from kept ops_calendar rows.",
        "Scheduled/present: kept ops_calendar rows with non-empty event_list only.",
    ),
]
for a, b in repls:
    c = text2.count(a)
    text2 = text2.replace(a, b)
    print("repl", c, a[:50])

# verify agency-id argparse default
idx = text2.find("--agency-id")
chunk = text2[idx:idx + 500]
print("agency chunk default=9?", "default=9" in chunk, "default=0?" , "default=0" in chunk)

src.write_text(text2, encoding="utf-8")
print("wrote export", len(text2))

# --- README ---
rd = readme.read_text(encoding="utf-8")
rd2 = rd
rd2 = rd2.replace(
    'body: `{"pageno":1,"count":100,"station_id": int, "agency_id": 0, "range_start_time": unix, "range_end_time": unix}`',
    'body: `{"pageno":1,"count":100,"station_id": int, "agency_id": 9, "range_start_time": unix, "range_end_time": unix}`',
)
rd2 = rd2.replace(
    "`agency_id` mac dinh **0** (all agencies, includes OS/BPO); use `--agency-id 9` for in-house-only calendar rows.",
    "`agency_id` mac dinh **9** (in-house, matches SPX UI); use `--agency-id 0` for all agencies (includes OS/BPO).",
)
old_filter = """**Filter KEEP** (bo `list` rong `{}`):

- `list` non-empty **va** co noi dung hom nay cho hub dang kiem:
  - `event_list[]` co `event_station_id == station_id` (va `event_date`/`attendance_date` = today khi co), **hoac**
  - `attendance_list[]` cho ngay hom nay **va** `event_station_id`/`station_id` == hub (bo neu thieu station).
- `scheduled_count` = so nguoi KEEP; `present_count` = KEEP co `clock_in_time` != 0."""
new_filter = """**Filter KEEP** (chi `list.event_list` co gia tri):

- Chi dem nguoi FM/LM co `list.event_list` **non-empty** cho hub hom nay:
  - `event_list[]` item voi `event_station_id == station_id`
  - va `event_date`/`attendance_date` = today khi co
- **Khong** dem nguoi chi co `attendance_list` (khong co `event_list`).
- `scheduled_count` = so nguoi KEEP; `present_count` = KEEP co `clock_in_time` != 0/empty.
- Labor FTE/OS/BPO van uu tien attendance khi day du label (khong doi)."""
if old_filter not in rd2:
    # try flexible match
    print("WARN: exact README filter block not found; trying looser")
    import re as _re
    patf = _re.compile(r"\*\*Filter KEEP\*\*.*?(?=\n### 2\))", _re.S)
    mf = patf.search(rd2)
    if not mf:
        raise SystemExit("FAIL README filter block")
    rd2 = patf.sub(new_filter + "\n", rd2, count=1)
    print("replaced via regex")
else:
    rd2 = rd2.replace(old_filter, new_filter)
    print("replaced exact filter block")

rd2 = rd2.replace(
    "The default roster run uses `agency_id=0` so OS/BPO are included. For a one-hub check:",
    "The default roster run uses `agency_id=9` (in-house calendar, matches SPX UI). Pass `--agency-id 0` to include all agencies on calendar. For a one-hub check:",
)
rd2 = rd2.replace(
    "| `scheduled_count` | so nguoi calendar KEEP |",
    "| `scheduled_count` | so nguoi co event_list KEEP (khong dem attendance_list-only) |",
)
rd2 = rd2.replace(
    "Calendar scheduled/present uses `--agency-id` (default **0** = all, including OS/BPO; `9` = in-house-only).",
    "Calendar scheduled/present uses `--agency-id` (default **9** = in-house; `0` = all agencies including OS/BPO).",
)
# also catch variant with Calendar soft...
if "default **0**" in rd2:
    print("WARN still has default **0** somewhere")
    for i, line in enumerate(rd2.splitlines(), 1):
        if "default **0**" in line or "agency_id` mac dinh **0**" in line or "agency_id=0" in line and "default" in line.lower():
            print(i, line[:120])

readme.write_text(rd2, encoding="utf-8")
print("wrote README", len(rd2))

# --- TESTS ---
tt = tests.read_text(encoding="utf-8")
NEW_TEST = '''
    def test_attendance_list_only_not_scheduled(self):
        """attendance_list alone must not increment scheduled/present."""
        day = m._ROSTER_DATE_FROM
        with_event = {
            "ops_id": "Ops1", "agency_name": "in-house",
            "department_name": "FM/LM",
            "contract_type_name": "Inhouse-Full-time",
            "list": {"event_list": [{"event_station_id": 166,
                                      "event_date": day,
                                      "clock_in_time": 123}]},
        }
        att_only = {
            "ops_id": "OpsAttOnly", "agency_name": "in-house",
            "department_name": "FM/LM",
            "contract_type_name": "Inhouse-Full-time",
            "list": {"attendance_list": [{"event_station_id": 166,
                                           "attendance_date": day,
                                           "clock_in_time": 456}]},
        }
        empty_list = {
            "ops_id": "OpsEmpty", "agency_name": "in-house",
            "department_name": "FM/LM",
            "contract_type_name": "Inhouse-Full-time",
            "list": {},
        }
        row = m._cook_roster_hub_summary(
            [with_event, att_only, empty_list], [], 166, "Hub166"
        )[0]
        self.assertEqual(row["scheduled_count"], 1)
        self.assertEqual(row["present_count"], 1)

    def test_event_list_no_clock_in_is_scheduled_not_present(self):
        day = m._ROSTER_DATE_FROM
        row = m._cook_roster_hub_summary(
            [{
                "ops_id": "Ops1", "agency_name": "in-house",
                "department_name": "FM/LM",
                "contract_type_name": "Inhouse-Full-time",
                "list": {"event_list": [{"event_station_id": 166,
                                          "event_date": day}]},
            }],
            [],
            166,
            "Hub166",
        )[0]
        self.assertEqual(row["scheduled_count"], 1)
        self.assertEqual(row["present_count"], 0)

'''
# Insert before final if __name__
if "test_attendance_list_only_not_scheduled" not in tt:
    if 'if __name__ == "__main__":' in tt:
        tt = tt.replace(
            'if __name__ == "__main__":',
            NEW_TEST + '\nif __name__ == "__main__":',
            1,
        )
    else:
        # append before end of class - find last method end
        tt = tt.rstrip() + "\n" + NEW_TEST
        if not tt.endswith("\n"):
            tt += "\n"
        if 'if __name__' not in tt:
            tt += '\nif __name__ == "__main__":\n    unittest.main()\n'
    tests.write_text(tt, encoding="utf-8")
    print("wrote tests")
else:
    print("tests already have new cases")

print("DONE")
