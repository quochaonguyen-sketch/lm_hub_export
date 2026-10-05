from pathlib import Path

path = Path("export_lm_hubs.py")
text = path.read_text(encoding="utf-8")

def repl_once(src, old, new, label):
    if old not in src:
        raise SystemExit("missing: %s" % label)
    return src.replace(old, new, 1)

text = repl_once(
    text,
    "_ATTENDANCE_PAGE_SIZE = 100  # match requested UI page size; API paginates by count",
    "_ATTENDANCE_PAGE_SIZE = 50  # match UI statistic_data_list count; paginate until total",
    "PAGE_SIZE",
)

text = repl_once(
    text,
    "Uses count=100, pageno until list empty or total reached.",
    "Uses count=50 (UI default), pageno until list empty or total reached.",
    "docstring",
)

text = repl_once(
    text,
    "    page_size = max(1, int(_ATTENDANCE_PAGE_SIZE))\n\n    all_rows = []\n\n    response_total = None\n",
    "    page_size = max(1, int(_ATTENDANCE_PAGE_SIZE))\n\n    all_rows = []\n\n    seen_ids = set()\n\n    response_total = None\n",
    "seen_ids init",
)

old_ext = (
    '        page_rows = [x for x in lst if isinstance(x, dict)]\n\n'
    '        all_rows.extend(page_rows)\n\n'
    '        print(\n\n'
    '            "  attendance page=%s got=%s total=%s acc=%s"\n'
)
new_ext = (
    '        page_rows = [x for x in lst if isinstance(x, dict)]\n\n'
    '        for row in page_rows:\n\n'
    '            rid = row.get("id")\n\n'
    '            if rid in (None, ""):\n\n'
    '                all_rows.append(row)\n\n'
    '                continue\n\n'
    '            if rid in seen_ids:\n\n'
    '                continue\n\n'
    '            seen_ids.add(rid)\n\n'
    '            all_rows.append(row)\n\n'
    '        print(\n\n'
    '            "  attendance page=%s got=%s total=%s acc=%s"\n'
)
text = repl_once(text, old_ext, new_ext, "dedupe extend")

old_ret = (
    '            "  attendance hit max_pages=%s acc=%s total=%s"\n\n'
    '            % (max_pages, len(all_rows), response_total),\n\n'
    '            flush=True,\n\n'
    '        )\n\n'
    '    return all_rows, None\n'
)
new_ret = (
    '            "  attendance hit max_pages=%s acc=%s total=%s"\n\n'
    '            % (max_pages, len(all_rows), response_total),\n\n'
    '            flush=True,\n\n'
    '        )\n\n'
    '    if response_total is not None and len(all_rows) < int(response_total):\n\n'
    '        print(\n\n'
    '            "  attendance INCOMPLETE acc=%s total=%s "\n\n'
    '            "(need more pages or station access)"\n\n'
    '            % (len(all_rows), response_total),\n\n'
    '            flush=True,\n\n'
    '        )\n\n'
    '    return all_rows, None\n'
)
text = repl_once(text, old_ret, new_ret, "incomplete warn")

text = text.replace(
    "count=100, paginate until empty/total.",
    "count=50 (UI), paginate until empty/total.",
)

path.write_text(text, encoding="utf-8")

readme = Path("README.md")
rt = readme.read_text(encoding="utf-8")
rt2 = rt.replace(
    "statistic_data_list?pageno&count=100&staff_type=2",
    "statistic_data_list?pageno&count=50&staff_type=2",
    1,
)
if rt2 != rt:
    readme.write_text(rt2, encoding="utf-8")
    print("README updated")
else:
    print("README already ok or pattern missing")

t2 = path.read_text(encoding="utf-8")
assert "_ATTENDANCE_PAGE_SIZE = 50" in t2
assert "seen_ids = set()" in t2
assert "attendance INCOMPLETE" in t2
assert 'rid = row.get("id")' in t2
print("OK patched")
