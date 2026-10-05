# -*- coding: utf-8 -*-
from pathlib import Path
import shutil
from datetime import datetime

root = Path(r"C:\lm_hub_export")
src = root / "export_lm_hubs.py"
text = src.read_text(encoding="utf-8")
stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
bak = root / "archive" / ("export_lm_hubs.py.bak_att_labor_prefer_%s" % stamp)
bak.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(src, bak)
print("backup", bak)

old_doc = (
    '    """Cook one hub-summary row from calendar + attendance.\n'
    "\n"
    "    Labor PRIMARY: kept ops_calendar rows via agency_name/contract_type_name.\n"
    "    Labor SECONDARY: attendance agency/contract_type when those fields exist.\n"
    "    Late always from attendance when available.\n"
    '    """'
)

new_doc = (
    '    """Cook one hub-summary row from calendar + attendance.\n'
    "\n"
    "    Scheduled/present: always from kept ops_calendar rows.\n"
    "    Labor (FTE/OS/BPO): prefer attendance when every ops FM/LM attendance\n"
    "    row for the hub carries agency/contract labels (complete + labeled).\n"
    "    Otherwise calendar labor (+ unmatched attendance extras / supplemental OS);\n"
    "    fall back to attendance when calendar has no labels.\n"
    "    Late: attendance preferred, calendar fills gaps.\n"
    '    """'
)

# File may insert blank lines between statements (formatter). Match via markers.
def replace_between(text, start_marker, end_marker, replacement, after=None):
    search_from = 0
    if after:
        search_from = text.find(after)
        if search_from < 0:
            raise SystemExit("after marker not found: %r" % after)
    start = text.find(start_marker, search_from)
    if start < 0:
        raise SystemExit("start marker not found: %r" % start_marker)
    end = text.find(end_marker, start)
    if end < 0:
        raise SystemExit("end marker not found: %r" % end_marker)
    return text[:start] + replacement + text[end:]

# Docstring: find by unique first/last lines inside cook fn
cook_pos = text.find("def _cook_roster_hub_summary")
if cook_pos < 0:
    raise SystemExit("cook fn missing")
doc_start = text.find('"""Cook one hub-summary row from calendar + attendance.', cook_pos)
if doc_start < 0:
    raise SystemExit("cook docstring missing")
# include leading spaces before quotes
line_start = text.rfind("\n", 0, doc_start) + 1
doc_end = text.find('"""', doc_start + 3)
if doc_end < 0:
    raise SystemExit("cook docstring end missing")
doc_end = doc_end + 3
text = text[:line_start] + new_doc + text[doc_end:]
print("updated cook docstring")

new_labor = '''    att_fte = att_os = att_bpo = 0
    att_labor_n = 0
    att_ops_n = 0
    for row in att_rows or []:
        if not isinstance(row, dict) or not _is_ops_fm_lm_row(row):
            continue
        att_ops_n += 1
        agency, contract = _row_agency_contract(row)
        if not str(agency or "").strip() and not str(contract or "").strip():
            continue
        att_labor_n += 1
        labor = _map_labor_type(agency, contract)
        if labor == "OS":
            att_os += 1
        elif labor == "BPO":
            att_bpo += 1
        else:
            att_fte += 1

    # Attendance is "complete & labeled" when every ops FM/LM attendance row
    # for this hub has agency/contract. Prefer that mix for FTE/OS/BPO so
    # calendar-only absentees and attendance-only staff are not double-merged.
    att_complete = att_ops_n > 0 and att_labor_n == att_ops_n

    # Calendar path: add unmatched attendance rows (notably Part-time) without
    # double-counting staff present in both payloads.
    att_extra_fte = att_extra_os = att_extra_bpo = 0
    if cal_labeled > 0 and not att_complete:
        for row in att_rows or []:
            if not isinstance(row, dict) or not _is_ops_fm_lm_row(row):
                continue
            agency, contract = _row_agency_contract(row)
            if not str(agency or "").strip() and not str(contract or "").strip():
                continue
            if _row_identity_tokens(row) & cal_tokens:
                continue
            labor = _map_labor_type(agency, contract)
            if labor == "OS":
                att_extra_os += 1
            elif labor == "BPO":
                att_extra_bpo += 1
            else:
                att_extra_fte += 1

    if att_complete:
        fte, os_n, bpo = att_fte, att_os, att_bpo
        labor_source = "attendance"
    elif cal_labeled > 0:
        fte = cal_fte + att_extra_fte
        os_n = cal_os + supplemental_os + att_extra_os
        bpo = cal_bpo + att_extra_bpo
        labor_source = (
            "calendar+attendance"
            if (supplemental_os or att_extra_fte or att_extra_os or att_extra_bpo)
            else "calendar"
        )
    elif att_labor_n > 0:
        fte, os_n, bpo = att_fte, att_os, att_bpo
        labor_source = "attendance"
    else:
        fte = cal_fte
        os_n = cal_os + supplemental_os
        bpo = cal_bpo
        labor_source = "calendar" if not supplemental_os else "calendar+attendance"

'''

# Detect blank-line style by peeking at att_fte assignment region
att_marker = "    att_fte = att_os = att_bpo = 0"
late_marker = "    # Attendance is preferred for late status."
region = text[text.find(att_marker, cook_pos):text.find(att_marker, cook_pos)+80]
print("region sample:", repr(region[:60]))

# If file has blank lines between every line, expand new_labor similarly
sample_after = text[text.find(att_marker, cook_pos):text.find(att_marker, cook_pos)+200]
blank_style = "\n\n    att_labor_n" in sample_after or "\n\r\n    att_labor_n" in sample_after
# More reliable: count newlines between att_fte and next non-empty
idx0 = text.find(att_marker, cook_pos)
line1_end = text.find("\n", idx0)
next_nonempty = line1_end + 1
while next_nonempty < len(text) and text[next_nonempty] in "\r\n":
    next_nonempty += 1
blank_style = (next_nonempty - (line1_end + 1)) >= 1 and text[line1_end+1:next_nonempty].count("\n") >= 1
# Actually from earlier Read via Get-Content, every logical line was separated by blank line.
# Check: after att_fte line, is next line blank then att_labor?
peek = text[idx0:idx0+120]
print("peek:", repr(peek))
if "\n\n    att_labor_n" in peek or peek.count("\n\n") >= 1:
    # Expand new_labor to blank-line style
    expanded = []
    for line in new_labor.splitlines(True):
        expanded.append(line)
        if line.endswith("\n") and line.strip() != "":
            # add blank line after non-empty lines (but not after final trailing)
            pass
    # Simpler: insert blank line after each non-empty line
    lines = new_labor.split("\n")
    out_lines = []
    for i, line in enumerate(lines):
        out_lines.append(line)
        # add blank between non-empty lines (preserve existing blanks in new_labor)
        if i < len(lines) - 1:
            if line.strip() != "" and lines[i + 1].strip() != "":
                out_lines.append("")
    new_labor_out = "\n".join(out_lines)
    if not new_labor_out.endswith("\n"):
        new_labor_out += "\n"
    # Ensure trailing blank line before late comment like original
    if not new_labor_out.endswith("\n\n"):
        new_labor_out += "\n"
    new_labor = new_labor_out
    print("using blank-line style, new_labor lines", new_labor.count("\n"))

text = replace_between(
    text,
    att_marker,
    late_marker,
    new_labor,
    after="def _cook_roster_hub_summary",
)
print("replaced labor merge block")

# Module docstring labor blurb
mod_start = text.find("Labor PRIMARY from")
if mod_start >= 0:
    mod_end = text.find("Maintenance hubs get a second pass.", mod_start)
    if mod_end >= 0:
        text = (
            text[:mod_start]
            + "Labor: prefer attendance FTE/OS/BPO when attendance is complete &\n"
              "                     labeled; else calendar (Part-time->OS first, else Inhouse->FTE,\n"
              "                     Full-time->BPO) with attendance late/labor fallback. "
            + text[mod_end:]
        )
        print("updated module docstring")
else:
    print("WARN: Labor PRIMARY not found")

src.write_text(text, encoding="utf-8")
print("wrote", src)
print("ok compile check next")
