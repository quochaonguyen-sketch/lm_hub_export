# -*- coding: utf-8 -*-
r"""Push local API CSVs into a fixed Google Spreadsheet (named tabs).

Each API maps to a worksheet title (see API_TAB_NAMES). After an export run,
export_lm_hubs.py overwrites the matching tab(s). Local CSVs are always kept.

Auth (service account, preferred):
  1. Create a GCP service account with Sheets API enabled.
  2. Download the JSON key.
  3. Place it at secrets/google_service_account.json (or set
     GOOGLE_APPLICATION_CREDENTIALS / LM_HUB_GOOGLE_CREDENTIALS / --credentials).
  4. Share the target spreadsheet with the service account email as Editor.

Auth (OAuth, optional fallback):
  Put an authorized-user token JSON at secrets\google_oauth_token.json
  (or pass --credentials). Token must include spreadsheets scope.

This module does NOT delete the spreadsheet. It clears (or creates/renames)
the target named tab, then writes header + rows from the CSV.

Tab titles use a " D0" suffix. order_volume and fm_order_volume are not
separate tabs: they are outer-joined into one worksheet "Order Volume D0".

Legacy titles are renamed in place (gspread update_title) when the D0 title
is missing: Roster, Backlog, Delivery Progress, Order Volume, and Sheet1/Sheet2
(Sheet1/Sheet2 only when Roster D0 is missing). "FM Order Volume" is renamed
to "Order Volume D0" only if that tab does not exist yet; otherwise it is
deleted so the two volume tabs are not left behind. Tabs Backlog Hub and
FM_Ontime are left alone.
"""
from __future__ import annotations

import argparse
import csv
import os
import sys
from pathlib import Path

PACK_ROOT = Path(__file__).resolve().parent

DEFAULT_GOOGLE_SHEET_ID = "1VXYAZL6YfTbok7Ip-7q-hWRyXOatHd0TUINE2OmZ1QI"
DEFAULT_SHEET_URL = (
    "https://docs.google.com/spreadsheets/d/"
    + DEFAULT_GOOGLE_SHEET_ID
    + "/edit?gid=0#gid=0"
)

# api_key -> exact Google Sheets worksheet title.
# order_volume and fm_order_volume are NOT listed: they share COMBINED_VOLUME_TAB.
API_TAB_NAMES: dict[str, str] = {
    "roster": "Roster D0",
    "backlog": "Backlog D0",
    "delivery_progress": "Delivery Progress D0",
}

# One tab for LM order volume + FM order volume.
COMBINED_VOLUME_TAB = "Order Volume D0"
VOLUME_API_KEYS = ("order_volume", "fm_order_volume")

# Per-tab spreadsheet ID. Unset -> LM_HUB_GOOGLE_SHEET_ID / GOOGLE_SHEET_ID / default.
# Short aliases (ROSTER_SHEET_ID, ...) work the same as LM_HUB_*.
SHEET_ID_ENV_BY_TAB: dict[str, tuple[str, ...]] = {
    API_TAB_NAMES["roster"]: ("LM_HUB_ROSTER_SHEET_ID", "ROSTER_SHEET_ID"),
    API_TAB_NAMES["backlog"]: ("LM_HUB_BACKLOG_SHEET_ID", "BACKLOG_SHEET_ID"),
    API_TAB_NAMES["delivery_progress"]: (
        "LM_HUB_DELIVERY_PROGRESS_SHEET_ID",
        "DELIVERY_PROGRESS_SHEET_ID",
    ),
    COMBINED_VOLUME_TAB: (
        "LM_HUB_ORDER_VOLUME_SHEET_ID",
        "ORDER_VOLUME_SHEET_ID",
    ),
}
COMBINED_VOLUME_CSV_NAME = "order_volume_fm_combined.csv"

# Source CSV headers for the two APIs; preserved in the combined output.
# Source CSV files are unchanged.
OV_INBOUND_SOURCE_COL = "lm_hub_inbounded_order_qty_eod"
OV_DELIVERED_SOURCE_COL = "lm_hub_delivered_order_qty_eod"
FM_OUTBOUND_SOURCE_COL = "total_outbounded_order_qty_eoh"
FM_PICKED_SOURCE_COL = "total_picked_order_qty_eoh"

# Output headers for the combined Order Volume D0 CSV/worksheet.
OV_INBOUND_COL = OV_INBOUND_SOURCE_COL
OV_DELIVERED_COL = OV_DELIVERED_SOURCE_COL
FM_OUTBOUND_COL = FM_OUTBOUND_SOURCE_COL
FM_PICKED_COL = FM_PICKED_SOURCE_COL
COMBINED_VOLUME_COLUMNS = (
    "station_id",
    "station_name",
    OV_INBOUND_COL,
    OV_DELIVERED_COL,
    FM_OUTBOUND_COL,
    FM_PICKED_COL,
)

# Old title -> D0 title. Applied only when the old worksheet still exists.
LEGACY_TAB_RENAMES = (
    ("Roster", "Roster D0"),
    ("Backlog", "Backlog D0"),
    ("Delivery Progress", "Delivery Progress D0"),
    ("Order Volume", "Order Volume D0"),
)
LEGACY_FM_TAB = "FM Order Volume"

# Default first-tab names Google creates; used only for Roster migration.
_DEFAULT_TAB_TITLES = frozenset({"Sheet1", "Sheet2", "Sheet 1", "Sheet 2"})

# Look for SA / OAuth JSON in these places (first hit wins).
_DEFAULT_CREDENTIAL_CANDIDATES = (
    PACK_ROOT / "secrets" / "google_service_account.json",
    PACK_ROOT / "credentials" / "google_service_account.json",
    PACK_ROOT / "secrets" / "service_account.json",
    PACK_ROOT / "secrets" / "google_oauth_token.json",
    PACK_ROOT / "credentials" / "token.json",
)

SCOPES = (
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file",
)


class GoogleSheetsError(RuntimeError):
    """Raised when Sheets auth or write fails."""


def _env_sheet_id(*keys: str) -> str:
    """First non-empty env value among keys."""
    for key in keys:
        raw = (os.environ.get(key) or "").strip()
        if raw:
            return raw
    return ""


def resolve_sheet_id(
    explicit: str | None = None,
    tab_title: str | None = None,
) -> str:
    """Spreadsheet ID: flag, then per-tab env, then global env, then default.

    Per-tab env (LM_HUB_ROSTER_SHEET_ID / ROSTER_SHEET_ID, and the same pattern
    for backlog, delivery progress, order volume) only applies when the flag
    is empty. Unset env keeps DEFAULT_GOOGLE_SHEET_ID.
    """
    if explicit:
        return str(explicit).strip()
    title = str(tab_title or "").strip()
    if title:
        per_tab = _env_sheet_id(*SHEET_ID_ENV_BY_TAB.get(title, ()))
        if per_tab:
            return per_tab
    env_id = _env_sheet_id("LM_HUB_GOOGLE_SHEET_ID", "GOOGLE_SHEET_ID")
    return env_id or DEFAULT_GOOGLE_SHEET_ID


def resolve_credentials_path(explicit: str | None = None) -> Path | None:
    """Locate service-account or OAuth token JSON.

    Order:
      1. --credentials / explicit path
      2. LM_HUB_GOOGLE_CREDENTIALS
      3. GOOGLE_APPLICATION_CREDENTIALS
      4. pack-local default paths under secrets/ or credentials/
    """
    candidates: list[Path] = []
    if explicit:
        candidates.append(Path(explicit))
    for env_key in ("LM_HUB_GOOGLE_CREDENTIALS", "GOOGLE_APPLICATION_CREDENTIALS"):
        raw = (os.environ.get(env_key) or "").strip()
        if raw:
            candidates.append(Path(raw))
    candidates.extend(_DEFAULT_CREDENTIAL_CANDIDATES)
    seen: set[str] = set()
    for path in candidates:
        key = str(path.resolve()) if path.exists() else str(path)
        if key in seen:
            continue
        seen.add(key)
        if path.is_file():
            return path.resolve()
    return None


def tab_title_for_api(api_key: str) -> str:
    """Return exact worksheet title for an API key; raise if unknown."""
    key = str(api_key or "").strip()
    if key not in API_TAB_NAMES:
        raise GoogleSheetsError(
            "Unknown API key for Sheets tab map: %r (known: %s)"
            % (key, ", ".join(sorted(API_TAB_NAMES)))
        )
    return API_TAB_NAMES[key]


def combined_volume_csv_path(out_dir, out_suffix: str = "") -> Path:
    """Local CSV path for the joined order-volume + FM sheet."""
    name = COMBINED_VOLUME_CSV_NAME
    suffix = str(out_suffix or "")
    if suffix:
        stem, ext = name.rsplit(".", 1)
        name = "%s%s.%s" % (stem, suffix, ext)
    return Path(out_dir) / name


def _read_csv_dict_rows(csv_path: Path | None) -> list[dict]:
    if csv_path is None or not Path(csv_path).is_file():
        return []
    with Path(csv_path).open("r", encoding="utf-8-sig", newline="") as handle:
        return list(csv.DictReader(handle))


def _csv_cell(row: dict, key: str) -> str:
    val = row.get(key)
    if val is None:
        return ""
    return str(val).strip()


def build_combined_order_volume_rows(
    order_csv: str | Path | None,
    fm_csv: str | Path | None,
) -> list[dict]:
    """Outer-join hub rows on station_id.

    Order-volume columns: inbound + delivered.
    FM columns: outbound + total picked.
    A hub present on only one side is kept; the other metrics stay blank.
    Row order follows the order-volume file, then FM-only hubs.
    """
    merged: dict[str, dict] = {}
    order: list[str] = []

    def ensure(station_id: str) -> dict:
        if station_id not in merged:
            merged[station_id] = {col: "" for col in COMBINED_VOLUME_COLUMNS}
            merged[station_id]["station_id"] = station_id
            order.append(station_id)
        return merged[station_id]

    for row in _read_csv_dict_rows(Path(order_csv) if order_csv else None):
        station_id = _csv_cell(row, "station_id")
        if not station_id:
            continue
        rec = ensure(station_id)
        name = _csv_cell(row, "station_name")
        if name:
            rec["station_name"] = name
        rec[OV_INBOUND_COL] = _csv_cell(row, OV_INBOUND_SOURCE_COL)
        rec[OV_DELIVERED_COL] = _csv_cell(row, OV_DELIVERED_SOURCE_COL)

    for row in _read_csv_dict_rows(Path(fm_csv) if fm_csv else None):
        station_id = _csv_cell(row, "station_id")
        if not station_id:
            continue
        rec = ensure(station_id)
        if not rec["station_name"]:
            rec["station_name"] = _csv_cell(row, "station_name")
        rec[FM_OUTBOUND_COL] = _csv_cell(row, FM_OUTBOUND_SOURCE_COL)
        rec[FM_PICKED_COL] = _csv_cell(row, FM_PICKED_SOURCE_COL)

    return [merged[station_id] for station_id in order]


def write_combined_order_volume_csv(
    order_csv: str | Path | None,
    fm_csv: str | Path | None,
    dest_csv: str | Path,
) -> int:
    """Write the joined volume CSV. Returns data-row count (no header)."""
    rows = build_combined_order_volume_rows(order_csv, fm_csv)
    dest = Path(dest_csv)
    dest.parent.mkdir(parents=True, exist_ok=True)
    with dest.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(
            handle,
            fieldnames=list(COMBINED_VOLUME_COLUMNS),
            extrasaction="ignore",
            lineterminator="\n",
        )
        writer.writeheader()
        for row in rows:
            writer.writerow(row)
    return len(rows)


def migrate_legacy_worksheet_titles(spreadsheet) -> list[str]:
    """Rename pre-D0 tabs in place. Delete the extra FM tab once combined exists.

    Does not touch Backlog Hub or FM_Ontime.
    """
    notes: list[str] = []

    def by_title():
        return {ws.title: ws for ws in spreadsheet.worksheets()}

    for old, new in LEGACY_TAB_RENAMES:
        titles = by_title()
        if old not in titles:
            continue
        if new in titles and titles[old].id != titles[new].id:
            spreadsheet.del_worksheet(titles[old])
            notes.append("deleted leftover tab %r (kept %r)" % (old, new))
            continue
        titles[old].update_title(new)
        notes.append("renamed tab %r -> %r" % (old, new))

    titles = by_title()
    if LEGACY_FM_TAB in titles:
        if COMBINED_VOLUME_TAB in titles:
            spreadsheet.del_worksheet(titles[LEGACY_FM_TAB])
            notes.append("deleted tab %r" % (LEGACY_FM_TAB,))
        else:
            titles[LEGACY_FM_TAB].update_title(COMBINED_VOLUME_TAB)
            notes.append(
                "renamed tab %r -> %r" % (LEGACY_FM_TAB, COMBINED_VOLUME_TAB)
            )

    titles = by_title()
    roster_title = API_TAB_NAMES["roster"]
    if roster_title not in titles:
        for worksheet in spreadsheet.worksheets():
            if worksheet.title in _DEFAULT_TAB_TITLES:
                old_title = worksheet.title
                worksheet.update_title(roster_title)
                notes.append("renamed tab %r -> %r" % (old_title, roster_title))
                break
    return notes




def _load_csv_rows(csv_path: Path) -> list[list[str]]:
    """Read CSV as a list of rows (header first). Empty cells stay as ""."""
    if not csv_path.is_file():
        raise GoogleSheetsError("CSV not found: %s" % csv_path)
    rows: list[list[str]] = []
    with csv_path.open("r", encoding="utf-8-sig", newline="") as handle:
        reader = csv.reader(handle)
        for row in reader:
            rows.append(["" if cell is None else str(cell) for cell in row])
    if not rows:
        raise GoogleSheetsError("CSV is empty: %s" % csv_path)
    return rows


def _authorize_gspread(credentials_path: Path):
    """Return an authorized gspread client from SA or OAuth JSON."""
    try:
        import gspread
        from google.oauth2.service_account import Credentials as SACredentials
        from google.oauth2.credentials import Credentials as UserCredentials
    except ImportError as exc:
        raise GoogleSheetsError(
            "Missing Google Sheets deps. Install with:\n"
            "  py -3.14 -m pip install gspread google-auth\n"
            "(%s)" % exc
        ) from exc

    import json

    try:
        payload = json.loads(credentials_path.read_text(encoding="utf-8"))
    except Exception as exc:
        raise GoogleSheetsError(
            "Cannot read credentials JSON %s: %s" % (credentials_path, exc)
        ) from exc

    cred_type = str(payload.get("type") or "").strip().lower()
    if cred_type == "service_account" or "private_key" in payload:
        creds = SACredentials.from_service_account_file(
            str(credentials_path), scopes=list(SCOPES)
        )
        return gspread.authorize(creds), "service_account", payload.get("client_email")
    if cred_type == "authorized_user" or "refresh_token" in payload:
        creds = UserCredentials.from_authorized_user_file(
            str(credentials_path), scopes=list(SCOPES)
        )
        return gspread.authorize(creds), "oauth", payload.get("client_id")
    # Fall back: try service_account loader (gspread default).
    try:
        client = gspread.service_account(filename=str(credentials_path))
        return client, "service_account", payload.get("client_email")
    except Exception as exc:
        raise GoogleSheetsError(
            "Unrecognized credentials JSON at %s (need service_account or "
            "authorized_user). Error: %s" % (credentials_path, exc)
        ) from exc


def _find_worksheet_by_title(spreadsheet, title: str):
    """Return worksheet with exact title, or None."""
    try:
        return spreadsheet.worksheet(title)
    except Exception:
        # gspread raises WorksheetNotFound; treat any miss as None
        return None


def _resolve_or_create_worksheet(spreadsheet, tab_title: str, rows: list[list[str]]):
    """Find tab by title; migrate Sheet1->Roster once; else create new tab."""
    existing = _find_worksheet_by_title(spreadsheet, tab_title)
    if existing is not None:
        return existing, "existing"

    n_rows = max(len(rows) + 10, 100)
    n_cols = max(max((len(r) for r in rows), default=0), 26)

    # Migration: only for Roster Ã¢â‚¬â€ rename default first tab Sheet1/Sheet2.
    if tab_title == API_TAB_NAMES["roster"]:
        first = spreadsheet.get_worksheet(0)
        if first is not None and first.title in _DEFAULT_TAB_TITLES:
            # Avoid renaming if another known API title somehow conflicts (unlikely).
            used_titles = set(API_TAB_NAMES.values()) - {tab_title}
            if first.title not in used_titles:
                first.update_title(tab_title)
                return first, "renamed_default"

    worksheet = spreadsheet.add_worksheet(
        title=tab_title, rows=n_rows, cols=n_cols
    )
    return worksheet, "created"


def _sheet_url(sheet_id: str, worksheet=None) -> str:
    gid = 0
    if worksheet is not None:
        try:
            gid = int(worksheet.id)
        except Exception:
            gid = 0
    return "https://docs.google.com/spreadsheets/d/%s/edit#gid=%s" % (sheet_id, gid)


def overwrite_sheet_tab_from_csv(
    csv_path: str | Path,
    tab_title: str,
    spreadsheet_id: str | None = None,
    credentials_path: str | Path | None = None,
) -> dict:
    """Clear (or create/rename) the named tab, then write CSV header+rows.

    Returns a small result dict for logging. Does not delete the spreadsheet.
    """
    csv_file = Path(csv_path)
    title = str(tab_title or "").strip()
    if not title:
        raise GoogleSheetsError("tab_title is required")

    sheet_id = resolve_sheet_id(spreadsheet_id, tab_title=title)
    cred_path = resolve_credentials_path(
        str(credentials_path) if credentials_path else None
    )
    if cred_path is None:
        raise GoogleSheetsError(
            "No Google credentials found. Place a service-account JSON at\n"
            "  %s\n"
            "or set GOOGLE_APPLICATION_CREDENTIALS / LM_HUB_GOOGLE_CREDENTIALS\n"
            "or pass --google-credentials PATH.\n"
            "Then share the sheet with the service account email (Editor):\n"
            "  %s"
            % (
                _DEFAULT_CREDENTIAL_CANDIDATES[0],
                DEFAULT_SHEET_URL,
            )
        )

    rows = _load_csv_rows(csv_file)
    client, auth_kind, auth_id = _authorize_gspread(cred_path)

    try:
        spreadsheet = client.open_by_key(sheet_id)
    except Exception as exc:
        hint = ""
        if auth_kind == "service_account" and auth_id:
            hint = (
                " Share the spreadsheet with this service account as Editor: %s"
                % auth_id
            )
        raise GoogleSheetsError(
            "Cannot open spreadsheet %s with %s (%s): %s.%s"
            % (sheet_id, auth_kind, cred_path.name, exc, hint)
        ) from exc

    rename_notes: list[str] = []
    try:
        rename_notes = migrate_legacy_worksheet_titles(spreadsheet)
        worksheet, resolve_how = _resolve_or_create_worksheet(
            spreadsheet, title, rows
        )
        worksheet.clear()
        worksheet.update(
            range_name="A1", values=rows, value_input_option="USER_ENTERED"
        )
    except GoogleSheetsError:
        raise
    except Exception as exc:
        raise GoogleSheetsError(
            "Failed writing sheet tab %r of %s: %s" % (title, sheet_id, exc)
        ) from exc

    return {
        "spreadsheet_id": sheet_id,
        "spreadsheet_url": _sheet_url(sheet_id, worksheet),
        "worksheet_title": worksheet.title,
        "worksheet_gid": getattr(worksheet, "id", None),
        "resolve_how": resolve_how,
        "rows": len(rows),
        "cols": max((len(r) for r in rows), default=0),
        "credentials": str(cred_path),
        "auth_kind": auth_kind,
        "auth_id": auth_id,
        "csv_path": str(csv_file.resolve()),
        "rename_notes": rename_notes,
    }


def overwrite_first_sheet_from_csv(
    csv_path: str | Path,
    spreadsheet_id: str | None = None,
    credentials_path: str | Path | None = None,
) -> dict:
    """Backward-compat wrapper: write the Roster D0 tab (was: first worksheet)."""
    return overwrite_sheet_tab_from_csv(
        csv_path,
        tab_title=API_TAB_NAMES["roster"],
        spreadsheet_id=spreadsheet_id,
        credentials_path=credentials_path,
    )


def _print_push_ok(result: dict) -> None:
    print(
        "Google Sheet OK: wrote %d row(s) x %d col(s) to tab %r (%s) -> %s"
        % (
            result["rows"],
            result["cols"],
            result["worksheet_title"],
            result.get("resolve_how") or "write",
            result["spreadsheet_url"],
        ),
        flush=True,
    )
    for note in result.get("rename_notes") or []:
        print("  tab migrate: %s" % note, flush=True)
    if result.get("auth_kind") == "service_account" and result.get("auth_id"):
        print(
            "  auth=service_account email=%s creds=%s"
            % (result["auth_id"], result["credentials"]),
            flush=True,
        )
    else:
        print(
            "  auth=%s creds=%s"
            % (result.get("auth_kind"), result["credentials"]),
            flush=True,
        )


def push_csv_to_tab(
    csv_path: str | Path,
    tab_title: str,
    spreadsheet_id: str | None = None,
    credentials_path: str | Path | None = None,
    *,
    quiet: bool = False,
) -> dict:
    """Push CSV to an exact worksheet title (create/rename as needed)."""
    result = overwrite_sheet_tab_from_csv(
        csv_path,
        tab_title=tab_title,
        spreadsheet_id=spreadsheet_id,
        credentials_path=credentials_path,
    )
    if not quiet:
        _print_push_ok(result)
    return result


def push_api_csv(
    csv_path: str | Path,
    api_key: str,
    spreadsheet_id: str | None = None,
    credentials_path: str | Path | None = None,
    *,
    quiet: bool = False,
) -> dict:
    """Push CSV to the tab mapped for api_key (see API_TAB_NAMES)."""
    return push_csv_to_tab(
        csv_path,
        tab_title=tab_title_for_api(api_key),
        spreadsheet_id=spreadsheet_id,
        credentials_path=credentials_path,
        quiet=quiet,
    )


def push_roster_csv(
    csv_path: str | Path,
    spreadsheet_id: str | None = None,
    credentials_path: str | Path | None = None,
    *,
    quiet: bool = False,
) -> dict:
    """Public helper: push roster CSV to the Roster tab."""
    return push_api_csv(
        csv_path,
        api_key="roster",
        spreadsheet_id=spreadsheet_id,
        credentials_path=credentials_path,
        quiet=quiet,
    )


def _guess_tab_from_csv_path(csv_path: Path) -> str | None:
    """Best-effort tab title from CSV path/name (roster heuristic)."""
    name = csv_path.name.lower()
    parts = {p.lower() for p in csv_path.parts}
    if "order_volume_fm_combined" in name:
        return COMBINED_VOLUME_TAB
    if "roster" in name or "roster" in parts:
        return API_TAB_NAMES["roster"]
    for api_key, title in API_TAB_NAMES.items():
        if api_key in name:
            return title
    return None


def parse_args(argv=None):
    p = argparse.ArgumentParser(
        description=(
            "Overwrite a named Google Sheet tab with a local API CSV "
            "(see API_TAB_NAMES)"
        )
    )
    p.add_argument(
        "--csv",
        required=True,
        help="Path to CSV (e.g. output\\roster\\roster_today_export.csv)",
    )
    p.add_argument(
        "--api",
        default=None,
        choices=sorted(API_TAB_NAMES.keys()),
        help="API key -> tab title via API_TAB_NAMES (preferred)",
    )
    p.add_argument(
        "--sheet-tab",
        default=None,
        help="Exact worksheet title (overrides --api if both set)",
    )
    p.add_argument(
        "--google-sheet-id",
        default=None,
        help="Spreadsheet ID (default: pack fixed sheet / env)",
    )
    p.add_argument(
        "--credentials",
        "--google-credentials",
        dest="credentials",
        default=None,
        help="Service account or OAuth token JSON path",
    )
    p.add_argument(
        "--check-auth",
        action="store_true",
        help="Only resolve credentials and open the spreadsheet; do not write",
    )
    return p.parse_args(argv)


def main(argv=None) -> int:
    args = parse_args(argv)
    tab_title = (args.sheet_tab or "").strip() or None
    if tab_title is None and args.api:
        tab_title = tab_title_for_api(args.api)
    if tab_title is None and args.csv:
        tab_title = _guess_tab_from_csv_path(Path(args.csv))
    sheet_id = resolve_sheet_id(args.google_sheet_id, tab_title=tab_title)
    cred_path = resolve_credentials_path(args.credentials)
    if cred_path is None:
        print(
            "ERROR: no Google credentials found. See README (Google Sheets export).",
            flush=True,
        )
        print("  expected: %s" % _DEFAULT_CREDENTIAL_CANDIDATES[0], flush=True)
        return 2
    print("Credentials: %s" % cred_path, flush=True)
    print("Sheet ID: %s" % sheet_id, flush=True)
    if args.check_auth:
        try:
            client, auth_kind, auth_id = _authorize_gspread(cred_path)
            sh = client.open_by_key(sheet_id)
            titles = [ws.title for ws in sh.worksheets()]
            print(
                "Auth OK kind=%s id=%s title=%r tabs=%s"
                % (auth_kind, auth_id, sh.title, titles),
                flush=True,
            )
            return 0
        except Exception as exc:
            print("Auth/open FAILED: %s" % exc, flush=True)
            return 1

    if tab_title is None:
        print(
            "ERROR: pass --api KEY or --sheet-tab NAME "
            "(could not guess tab from CSV path).",
            flush=True,
        )
        return 2

    try:
        push_csv_to_tab(
            args.csv,
            tab_title=tab_title,
            spreadsheet_id=sheet_id,
            credentials_path=cred_path,
        )
        return 0
    except GoogleSheetsError as exc:
        print("ERROR: %s" % exc, flush=True)
        return 1


if __name__ == "__main__":
    sys.exit(main())
