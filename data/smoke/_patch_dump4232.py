from pathlib import Path
p = Path(r"C:\lm_hub_export\data\smoke\_dump_raw_att_4232.py")
t = p.read_text(encoding="utf-8")
needle = "att_start, att_end = m._attendance_query_window()\n    m._ROSTER_DATE_FROM = att_start\n    m._ROSTER_DATE_TO = att_end"
repl = (
    "d_from, d_to = m.default_roster_date_range()\n"
    "    m._ROSTER_DATE_FROM = int(d_from)\n"
    "    m._ROSTER_DATE_TO = int(d_to)\n"
    "    print(\"roster_window from=%s to=%s\" % (m._ROSTER_DATE_FROM, m._ROSTER_DATE_TO), flush=True)"
)
if needle not in t:
    # show nearby context
    idx = t.find("_attendance_query_window")
    print("NEEDLE MISSING idx=", idx)
    print(repr(t[idx-80:idx+200] if idx>=0 else t[1800:2100]))
    raise SystemExit(1)
p.write_text(t.replace(needle, repl), encoding="utf-8")
print("patched ok")
