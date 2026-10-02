from pathlib import Path

path = Path(r"C:\lm_hub_export\export_lm_hubs.py")
src = path.read_text(encoding="utf-8")

# --- 1) Split HTTP tries: attendance stays capped; calendar gets stronger retries ---
old = """_ROSTER_HTTP_TRIES = 3  # hard cap; never hang forever on maintenance
_ATTENDANCE_PAGE_SIZE = 50  # match browser (24/50/100); API paginates by count
_ATTENDANCE_LOOKBACK_DAYS = 30  # browser-style wide start (e.g. 1788282000)
_ATTENDANCE_PREFETCH_TIMEOUT_S = 90  # fail fast; hubs continue calendar-only
_ATTENDANCE_WAIT_TIMEOUT_S = 60  # per-hub wait for in-flight prefetch"""

new = """_ROSTER_HTTP_TRIES = 3  # attendance hard cap; never hang forever
_ROSTER_CAL_HTTP_TRIES = 6  # calendar: stronger maintenance retries
_ATTENDANCE_PAGE_SIZE = 50  # match browser (24/50/100); API paginates by count
_ATTENDANCE_LOOKBACK_DAYS = 30  # browser-style wide start (e.g. 1788282000)
_ATTENDANCE_PREFETCH_TIMEOUT_S = 90  # fail fast; hubs continue calendar-only
_ATTENDANCE_WAIT_TIMEOUT_S = 60  # per-hub wait for in-flight prefetch
_CALENDAR_UNSCOPED_TOTAL = 1500  # agency_id=0 totals above this are not station-scoped
_MAINTENANCE_SECOND_PASS_TRIES = 4  # extra pass for hubs that hit maintenance"""

if old not in src:
    raise SystemExit("globals block not found")
src = src.replace(old, new, 1)

# --- 2) Part-time -> OS first ---
old = '''def _map_labor_type(agency, contract):
    """Map agency / contract strings -> FTE | OS | BPO.

    Order (user rule):
      1) agency in-house / inhouse -> FTE
      2) else contract_type: Part-time -> OS; Full-time -> BPO
    """
    agency_s = str(agency or "").strip().lower()
    contract_s = str(contract or "").strip().lower()
    if "in-house" in agency_s or "inhouse" in agency_s:
        return "FTE"
    if "part-time" in contract_s or "part time" in contract_s:
        return "OS"
    if "full-time" in contract_s or "full time" in contract_s:
        return "BPO"
    return "FTE"'''

new = '''def _map_labor_type(agency, contract):
    """Map agency / contract strings -> FTE | OS | BPO.

    Order (user rule):
      1) Part-time (contract or agency) -> OS  (do not drop OS for in-house label)
      2) agency in-house / inhouse -> FTE
      3) else contract Full-time -> BPO
    """
    agency_s = str(agency or "").strip().lower()
    contract_s = str(contract or "").strip().lower()
    if (
        "part-time" in contract_s
        or "part time" in contract_s
        or "part-time" in agency_s
        or "part time" in agency_s
    ):
        return "OS"
    if "in-house" in agency_s or "inhouse" in agency_s:
        return "FTE"
    if "full-time" in contract_s or "full time" in contract_s:
        return "BPO"
    return "FTE"'''

if old not in src:
    raise SystemExit("map_labor not found")
src = src.replace(old, new, 1)

path.write_text(src, encoding="utf-8")
print("pass A ok")
