# -*- coding: utf-8 -*-
from pathlib import Path
import shutil
from datetime import datetime

root = Path(r"C:\lm_hub_export")
readme = root / "README.md"
text = readme.read_text(encoding="utf-8")
stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
bak = root / "archive" / ("README.md.bak_att_labor_prefer_%s" % stamp)
shutil.copy2(readme, bak)

old = """### Labor type FTE / OS / BPO

**Primary** from kept `ops_calendar` rows (`agency_name` + `contract_type_name`).
**Secondary** from attendance when calendar has no agency/contract labels.
`late_count` only counts `clock_in_status_name == \"Late In\"` (or status `3`); Early In is on-time.
"""

# Flexible match - find section header and replace through Classify order
start = text.find("### Labor type FTE / OS / BPO")
if start < 0:
    raise SystemExit("labor section missing")
end = text.find("Classify order:", start)
if end < 0:
    raise SystemExit("Classify order missing")

new = """### Labor type FTE / OS / BPO

**Prefer attendance** for `fte_count` / `os_count` / `bpo_count` when every ops FM/LM
attendance row for the hub has agency/contract labels (complete + labeled).
Otherwise use kept `ops_calendar` labor (+ unmatched attendance extras / supplemental
Part-time OS shells). Fall back to attendance when calendar has no labels.
`scheduled_count` / `present_count` always come from calendar; `late_count` prefers
attendance (calendar fills gaps). `late_count` only counts `clock_in_status_name == \"Late In\"` (or status `3`); Early In is on-time.

"""
text = text[:start] + new + text[end:]

# Update cooked metrics table row
old_row = "| `fte_count` / `os_count` / `bpo_count` | dem labor tren calendar kept rows; attendance labor secondary khi co agency/contract |"
new_row = "| `fte_count` / `os_count` / `bpo_count` | prefer attendance khi day du label; else calendar (+ att extras); fallback attendance |"
if old_row in text:
    text = text.replace(old_row, new_row, 1)
    print("updated metrics table row")
else:
    print("WARN: metrics row not found exact")

readme.write_text(text, encoding="utf-8")
print("wrote README", bak)
