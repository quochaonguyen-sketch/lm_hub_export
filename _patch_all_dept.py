from pathlib import Path

p = Path("export_lm_hubs.py")
text = p.read_text(encoding="utf-8")
old = (
    "    # Attendance uses department_name for the event department; calendar\n"
    "    # uses the same field. Prefer event department when a payload supplies it.\n"
    "    department = row.get(\"event_department_name\")\n"
    "    if department in (None, \"\"):\n"
    "        department = row.get(\"department_name\")\n"
    "    if department in (None, \"\"):\n"
    "        department = row.get(\"profile_department_name\")\n"
    "    department_s = str(department or \"\").strip().lower()\n"
    "    if department_s:\n"
    "        return department_s in (\"fm/lm\", \"fm/lm ops\", \"fm lm\", \"fm-lm\")\n"
)
new = (
    "    # Attendance uses department_name for the event department; calendar\n"
    "    # uses the same field. Prefer event department when a payload supplies it.\n"
    "    # SPX may set department_name/event_department_name to \"All\" (often with\n"
    "    # event_department_id=999999); treat that as unscoped and fall back to\n"
    "    # profile_department_name so Ops with profile FM/LM still count.\n"
    "    department = row.get(\"event_department_name\")\n"
    "    if department in (None, \"\"):\n"
    "        department = row.get(\"department_name\")\n"
    "    if department in (None, \"\") or str(department).strip().lower() == \"all\":\n"
    "        department = row.get(\"profile_department_name\")\n"
    "    department_s = str(department or \"\").strip().lower()\n"
    "    if department_s:\n"
    "        return department_s in (\"fm/lm\", \"fm/lm ops\", \"fm lm\", \"fm-lm\")\n"
)
if old not in text:
    raise SystemExit("export_lm_hubs.py: target block not found")
p.write_text(text.replace(old, new, 1), encoding="utf-8")
print("patched export_lm_hubs.py")

rp = Path("README.md")
rt = rp.read_text(encoding="utf-8")
needle = (
    "- Filter client: `event_station_id` / `station_id` == hub, and "
    "`date` / `operation_date` is today when those fields are present.\n"
)
add = (
    "- Ops FM/LM keep: `staff_type=Ops` and department FM/LM; if "
    "`department_name`/`event_department_name` is `All` (unscoped, often "
    "`event_department_id=999999`), fall back to `profile_department_name` "
    "FM/LM (e.g. hub 93 counts 12 not 10). Rider/Security/Office still excluded.\n"
)
if "fall back to `profile_department_name` FM/LM" not in rt:
    if needle not in rt:
        raise SystemExit("README needle not found")
    rp.write_text(rt.replace(needle, needle + add, 1), encoding="utf-8")
    print("patched README.md")
else:
    print("README already has All/profile note")
