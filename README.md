# LM Hub Export (standalone)

Thu muc **doc lap** - **khong** dung cookie / `paths` / `cookie_login` cua `C:\SPX_Launcher`
(tru khi ban bat `--launcher-cookie`, OFF mac dinh).

## Cau truc

```
C:\lm_hub_export\
  export_lm_hubs.py              # entry
  google_sheets_export.py        # API CSVs -> Google Sheet named tabs
  requirements-sheets.txt        # optional: gspread + google-auth
  secrets\                       # LOCAL ONLY: google_service_account.json
  spx_cookies.py                 # doc cookie JSON + headers SPX
  chrome_cookie_import.py / .bat # lay cookie tu Chrome
  Huong_dan_cai_dat_va_chay.xlsx
  README.md
  run_test.bat                   # wrapper -> scripts\run_test.bat
  data\
    hubs.csv                     # danh sach station_id (mac dinh --hubs)
    chrome_debug_profile\        # Chrome debug profile (cookie import)
    smoke\                       # hub CSV nho cho smoke test
  cookies\
    README.txt
    cookies.json                 # BAN TU COPY / import VAO DAY
  output\                        # CSV API thuong (mac dinh --out-dir)
    roster\                       # roster_today_export*.csv (mac dinh cua roster API)
  scripts\
    run_test.bat
  archive\                       # bak script, _js_scan, CDP capture
    roster\                       # roster smoke CSV, backup, guide cu
```

## Cookie (khac launcher)

| | Launcher | Pack nay |
|--|----------|----------|
| Path | `C:\SPX_Launcher\config\cookies\cookies_assign_pick.json` | `C:\lm_hub_export\cookies\cookies.json` |
| Loader | `core/cookie_login.py` | `spx_cookies.py` (minimal) |
| Refresh | Launcher **LAM MOI COOKIE** | Copy file cookie moi vao `cookies\cookies.json` |

Format `cookies.json`: JSON **array** `[{name,value,domain,...}, ...]`, can co **`fms_user_skey`**.

Vi du copy 1 lan (thu cong):

```bat
copy C:\SPX_Launcher\config\cookies\cookies_assign_pick.json C:\lm_hub_export\cookies\cookies.json
```

Hoac: `set LM_HUB_COOKIE_FILE=D:\path\cookies.json` / `--cookie-file ...`

## Chay

```bat
cd /d C:\lm_hub_export
run_test.bat
```

```bat
py -3.14 export_lm_hubs.py --apis order_volume,backlog --out-suffix _full
```

Mac dinh: `--hubs data\hubs.csv`, `--out-dir output` (API thuong ghi vao `output\`; roster ghi vao `output\roster\` neu khong truyen `--out-dir`).

## Parallel API execution

Khi `--apis` co nhieu API, cac API chay dong thoi. `--workers` van la so worker cho tung API (va tung worker xu ly cac hub); vi vay toi da co the la `so_API * workers` request workers. Moi API van ghi dung file output rieng, dung cookie hien tai va giu nguyen column allowlists.

**Mac dinh `--workers 2`.** Cho **roster**, hub pool auto-cap o 2 (ke ca khi ban truyen `--workers 8`); ops_calendar POSTs con bi **global rate-limit** (~2 concurrent, ~3 req/s) de tranh retcode `-100409` soft maintenance. Cac API khac (order_volume / backlog / ...) van dung dung so `--workers` ban truyen.

Khuyen nghi roster: `--workers 2` (hoac bo trong --workers). Tranh `--workers 8` cho roster â€" flag van hop le nhung calendar path se rate-limit / cap.

Vi du: `py -3.14 export_lm_hubs.py --apis order_volume,backlog,delivery_progress,fm_order_volume,roster --workers 2`.


## API (mac dinh)

Mac dinh van la `order_volume,backlog`; FM / delivery_progress / roster chi chay khi them vao `--apis` (hoac `--apis all`).


- **order_volume** -> `operation__lm_order_volume__10m_v4`
  - body `{"station_id": int}`
  - inbound = `lm_hub_inbounded_order_qty_eod`
  - delivered = `lm_hub_delivered_order_qty_eod`
- **backlog** -> `operation__lm_backlog__10m_v3`
  - body `{"is_all": 0, "station_id": int}` (thieu is_all -> retcode -21001)

Backlog CSV columns (in order): `station_id`, `station_name`, the nine allowlisted metrics below, and `fetched_at`.

- `lm_hub_backlog_gte_1d_order_qty_td`
- `lm_hub_leg_backlog_gte_1d_order_qty_td`
- `lm_hub_to_deliver_backlog_eq_1d_order_qty_td` through `lm_hub_to_deliver_backlog_eq_6d_order_qty_td`
- `lm_hub_to_deliver_backlog_gte_7d_order_qty_td`

## API (FM order volume)

- **fm_order_volume** -> `operation__fm_order_volume_hub__10m`
  - body first tries `{"station_id": int}`
  - if the response is `retcode=-21001`, retries with `{"is_all": 0, "station_id": int}`
  - `data` is a **single object**, not a list
  - CSV: **1 dong / hub** (`output\fm_order_volume_hubs_export.csv`)
  - columns: `station_id`, `station_name`, `data_from_time`, `sla_flag`, `total_inbounded_order_qty_eoh`, `total_outbounded_order_qty_eoh`, `total_picked_order_qty_eoh`, `update_at_timestamp`, `fetched_at`

Smoke test:

```bat
py -3.14 export_lm_hubs.py --apis fm_order_volume --hubs data\smoke\_hubs_smoke_fm.csv --out-suffix _smoke
```

## API (them)

- **delivery_progress** -> `operation__lm_delivery_progress_all_fleets__10m_v3`
  - body `{"station_id": int}` (giong order_volume)
  - CSV: **1 dong / driver** (`data.list[]`), khong 1 dong / hub
  - output: `output\lm_delivery_progress_export.csv` (+ `--out-suffix`)
  - cot (allowlist, theo thu tu): `station_id`, `station_name`, `agency_name`, `contract_type`, `driver_id`, `driver_name`, `lm_hub_fleet_assigned_order_qty_td`, `lm_hub_fleet_delivered_order_qty_eod`, `lm_hub_fleet_delivered_pct_eod`, `lm_hub_fleet_delivering_in_system_order_qty_eod`, `lm_hub_fleet_failed_delivery_order_qty_eod`, `fetched_at`

```bat
py -3.14 export_lm_hubs.py --apis delivery_progress --hubs data\smoke\_hubs_smoke_dp.csv --out-suffix _smoke
py -3.14 export_lm_hubs.py --apis order_volume,backlog,delivery_progress
py -3.14 export_lm_hubs.py --apis fm_order_volume
```

## API (roster / event_list) â€" TODAY ONLY hub summary

- **roster** (alias **event_list**) combines 2 WFM APIs (path `/api/wfm/...`, **KHONG** data_api mart).
- Auth: cung cookie pack (`cookies\cookies.json` / `spx_cookies.py`) â€" `fms_user_skey` + `csrftoken`.
- **Khong** con dung `event_list_v2` / `event_add_staff_search`.

### 1) Ops calendar (scheduled / present)

- `POST https://spx.shopee.vn/api/wfm/admin/ops_calendar/ops_calendar_list`
- body: `{"pageno":1,"count":100,"station_id": int, "agency_id": 0, "range_start_time": unix, "range_end_time": unix}`
- **Mac dinh TODAY ONLY** (Asia/Saigon): `range_start_time = range_end_time = today_00:00` (vd `1790874000`).
- Paginate khi `total > count`.
- `agency_id` mac dinh **0** (all agencies, includes OS/BPO); use `--agency-id 9` for in-house only (matches SPX UI).
- **Important SPX quirk:** even with `station_id` and `range_start_time = range_end_time = today_00:00`, `data.total` can be the full agency roster (for example `1388`), not today's count. The exporter never uses that value as the cooked total: it filters returned rows by today's Event Station and logs the result as `today_kept`. For large agency-0 totals it reads only a bounded five-page sample, then merges the today-scoped agency-9 query, rather than walking hundreds of pages.

**Filter KEEP** (chi `list.event_list` co gia tri):

- Chi dem nguoi FM/LM co `list.event_list` **non-empty** cho hub hom nay:
  - `event_list[]` item voi `event_station_id == station_id`
  - va `event_date`/`attendance_date` = today khi co
- **Khong** dem nguoi chi co `attendance_list` (khong co `event_list`).
- `scheduled_count` = so nguoi KEEP; `present_count` = KEEP co `clock_in_time` != 0/empty.
- Labor FTE/OS/BPO van uu tien attendance khi day du label (khong doi).

### 2) Attendance stats (late)

- `GET https://spx.shopee.vn/api/wfm/admin/attendance/clock/statistic_data_list?pageno&count=50&staff_type=2&start_time=TODAY_MIDNIGHT&end_time=END_OF_TODAY` (today-only; **current-station scoped** ? exporter POSTs `/api/admin/basicserver/change_station/` per hub first, then GETs this list; a bare `station_id` query for another hub returns empty; cookie user must include that hub in `current_user/station_list`). Paginate until list empty or `total` reached; cached per hub. Soft maintenance retries capped at **3** (1-3s backoff). On change_station fail, roster continues calendar-only for that hub (`late=0` from attendance).
- Calendar keep filter for scheduled/present uses **today + Event Station only** via non-empty `event_list[].event_station_id` (never Profile Station; never attendance_list-only).
- Retry noise is collapsed to one `recovered retries=N` line; final failures print `SKIPPED` / `FINAL SKIPPED` with `hub_ok` / `hub_skip` in the end summary. Hubs with `data:null` are tagged `skip_reason=data:null`.
- `end_time` = `today 23:59:59` VN (vd `1790960399`). Paginate.
- Filter client: `event_station_id` / `station_id` == hub, and `date` / `operation_date` is today when those fields are present.
- `late_count`: `clock_in_status_name == "Late In"` **hoac** `clock_in_status == 3`.
- The same filtered attendance rows are the source of the labor mix; this is independent of the calendar `agency_id`.

### Labor type FTE / OS / BPO

**Prefer attendance** for `fte_count` / `os_count` / `bpo_count` when every ops FM/LM
attendance row for the hub has agency/contract labels (complete + labeled).
Otherwise use kept `ops_calendar` labor (+ unmatched attendance extras / supplemental
Part-time OS shells). Fall back to attendance when calendar has no labels.
`scheduled_count` / `present_count` always come from calendar; `late_count` prefers
attendance (calendar fills gaps). `late_count` only counts `clock_in_status_name == "Late In"` (or status `3`); Early In is on-time.

Classify order:

1. If **agency** is `in-house` / `inhouse` â†' **FTE**
2. Else look **contract_type**: `Part-time` â†' **OS**; `Full-time` â†' **BPO**

Calendar scheduled/present uses `--agency-id` (default **0** = all agencies including OS/BPO; `9` = in-house). Calendar soft retries: throttle `-100409` up to **3** tries; other soft up to **2** tries, plus one quiet maintenance pass. Recommend `--workers 2` for roster.


### Cooked metrics

| Metric | Cong thuc |
|--------|-----------|
| `scheduled_count` | so nguoi co event_list KEEP (khong dem attendance_list-only) |
| `present_count` | KEEP co clock-in |
| `late_count` | so dong attendance Late In (status 3) |
| `fte_count` / `os_count` / `bpo_count` | prefer attendance khi day du label; else calendar (+ att extras); fallback attendance |
| `attendance_pct` | `100 * present / scheduled` (blank neu scheduled=0) |

`off_count` **da drop** (khong con `event_add_staff_search`).

### CSV

- Output: `output\roster\roster_today_export.csv` (+ `--out-suffix`)
- **1 dong / hub** (khong con grain=event / slot).
- Cot: `station_id`, `station_name`, `event_date_iso`, `scheduled_count`, `present_count`, `late_count`, `fte_count`, `os_count`, `bpo_count`, `attendance_pct`, `fetched_at`
- Da drop (API cu): `grain`, `slot_code`, `labor_type`, `agency_name`, `scheduled_headcount`, `actual_headcount`, `planned_headcount`, `off_count`, `event_department_name`, ...

Smoke:

The default roster run uses `agency_id=0` (all agencies on calendar, so OS/BPO appear). Pass `--agency-id 9` for in-house only. For a one-hub check:

```bat
py -3.14 export_lm_hubs.py --apis roster --hubs data\smoke\_hubs_smoke_roster_912.csv --out-suffix _smoke_912
```

```bat
py -3.14 export_lm_hubs.py --apis roster --hubs data\smoke\_hubs_smoke_roster.csv --out-suffix _smoke
py -3.14 export_lm_hubs.py --apis roster --hubs data\smoke\_hubs_smoke_roster_58_25.csv --out-suffix _58_25
py -3.14 export_lm_hubs.py --apis roster --hubs data\smoke\_hubs_smoke_roster.csv --out-suffix _smoke_allag
# 2026-10-02 smoke (hub 912): scheduled=14, present=13, late=0, FTE=10, OS=2, BPO=2
py -3.14 export_lm_hubs.py --apis event_list --hubs data\smoke\_hubs_smoke_roster.csv --out-suffix _smoke
```


Hub fail -> SKIP. Exit 0 neu >=1 OK. `--strict` = fail neu co skip.


## Roster throttle / logging

- Soft Shopee maintenance on calendar is often `retcode -100409` under high parallel POSTs.
- Retry noise is collapsed to one `recovered retries=N` line; final failures print `SKIPPED` / `FINAL SKIPPED`.
- Final skip lines: `SKIPPED` / `FINAL SKIPPED` with `skip_reason=...` (e.g. `data:null`, `soft_throttle`).
- End of each API: `=== hub_ok=N | hub_skip=M | ... ===` then `======== SUMMARY (hub_ok / hub_skip) ========`.
- Recommend: `py -3.14 export_lm_hubs.py --apis roster --workers 2`

## Luu y

- Can `requests` (`py -3.14 -m pip install requests`).
- Khong sua cookie flow trong SPX_Launcher.

## Google Sheets export (multi-tab)

After selected APIs finish writing local CSVs, the exporter **sequentially** overwrites
**named tabs** on a fixed Google Spreadsheet. Local CSVs are **always** kept.

Fixed sheet (default):

- URL: https://docs.google.com/spreadsheets/d/1_tgFNXYfbNoz3OF8sqD9QIwazwvjT6Va_OpxmbdZFEQ/edit
- Spreadsheet ID: `1_tgFNXYfbNoz3OF8sqD9QIwazwvjT6Va_OpxmbdZFEQ`
- Does **not** delete the spreadsheet.

### Tab map

| API (`--apis`) | Worksheet title |
|----------------|-----------------|
| `roster` | `Roster D0` |
| `backlog` | `Backlog D0` |
| `delivery_progress` | `Delivery Progress D0` |
| `order_volume` + `fm_order_volume` | `Order Volume D0` (one shared tab) |

`order_volume` and `fm_order_volume` are **not** written to separate tabs. After either
(or both) runs, the exporter outer-joins the two local CSVs on `station_id` (a hub only
on one side is kept; the other side is blank) and writes
`output\order_volume_fm_combined.csv` (same `--out-suffix`). If only one API is selected,
the other CSV is still read when that file already exists from a previous run.

Combined columns, in order:

- `station_id`, `station_name`
- Order Volume inbound `lm_hub_inbounded_order_qty_eod` (this API has no column named total inbound)
- Order Volume delivered `lm_hub_delivered_order_qty_eod`
- FM outbound `total_outbounded_order_qty_eoh`
- FM total picked `total_picked_order_qty_eoh`

**D0 rename:** existing tabs `Roster`, `Backlog`, `Delivery Progress`, and `Order Volume`
are renamed in place to the ` D0` titles (no duplicate). `FM Order Volume` is removed
once `Order Volume D0` exists (or renamed to it if `Order Volume` was missing).
`Backlog Hub` and `FM_Ontime` are left alone. `Sheet1` / `Sheet2` is renamed to
`Roster D0` only when that title is still missing.

Flags `--google-sheet-id`, `--google-credentials`, `--no-google-sheet` apply to **all**
selected APIs (not roster-only). Soft-fail per tab: a Sheets error prints FAILED and
keeps the local CSV.

### One-time setup (service account - recommended on Windows)

1. Install deps:

```bat
cd /d C:\lm_hub_export
py -3.14 -m pip install -r requirements-sheets.txt
```

2. In Google Cloud Console: create a project (or reuse one) -> enable **Google Sheets API**
   (and Drive API if prompted) -> create a **Service Account** -> create a JSON key ->
   download it.

3. Save the JSON key locally (do **not** commit):

```bat
mkdir secrets
copy %USERPROFILE%\Downloads\your-sa-key.json C:\lm_hub_export\secrets\google_service_account.json
```

   Or set env:

```bat
setx GOOGLE_APPLICATION_CREDENTIALS C:\lm_hub_export\secrets\google_service_account.json
```

4. Open the spreadsheet -> **Share** -> add the service account email
   (`client_email` inside the JSON, looks like `...@....iam.gserviceaccount.com`)
   as **Editor**.

5. (Optional) Override sheet ID via env / flag:

```bat
setx LM_HUB_GOOGLE_SHEET_ID 1_tgFNXYfbNoz3OF8sqD9QIwazwvjT6Va_OpxmbdZFEQ
```

### Re-run commands

Normal multi-API run (local CSVs **and** named Sheet tabs when creds exist):

```bat
cd /d C:\lm_hub_export
py -3.14 export_lm_hubs.py --apis order_volume,backlog,delivery_progress,fm_order_volume,roster --workers 2
```

Roster only:

```bat
py -3.14 export_lm_hubs.py --apis roster --workers 2
```

Skip Sheets (local CSV only):

```bat
py -3.14 export_lm_hubs.py --apis roster --no-google-sheet
```

Custom sheet / credentials:

```bat
py -3.14 export_lm_hubs.py --apis order_volume,roster --google-sheet-id 1_tgFNXYfbNoz3OF8sqD9QIwazwvjT6Va_OpxmbdZFEQ --google-credentials secrets\google_service_account.json
```

Push an **existing** local CSV without re-fetching Shopee:

```bat
py -3.14 google_sheets_export.py --csv output\roster\roster_today_export.csv --api roster
py -3.14 google_sheets_export.py --csv output\order_volume_fm_combined.csv --sheet-tab "Order Volume D0"
py -3.14 google_sheets_export.py --csv output\roster\roster_today_export.csv --check-auth
```

### OAuth fallback

If you already have an authorized-user token JSON (`type: authorized_user` with
`refresh_token`), place it at `secrets\google_oauth_token.json` or pass
`--google-credentials`. Prefer the service-account path for unattended Windows runs.

Đổi sheet nhanh: copy `.env.example` rồi `set` / `setx` biến (script **không** tự đọc file `.env`). Không set thì vẫn dùng spreadsheet mặc định `1_tgFNXYfbNoz3OF8sqD9QIwazwvjT6Va_OpxmbdZFEQ`.

### Flags / env

| Flag / env | Meaning |
|------------|---------|
| `--google-sheet-id` / `LM_HUB_GOOGLE_SHEET_ID` / `GOOGLE_SHEET_ID` | Spreadsheet ID chung (default = fixed sheet above) |
| `LM_HUB_ROSTER_SHEET_ID` / `ROSTER_SHEET_ID` | Spreadsheet riêng tab Roster D0 (trống = ID chung) |
| `LM_HUB_BACKLOG_SHEET_ID` / `BACKLOG_SHEET_ID` | Spreadsheet riêng tab Backlog D0 (trống = ID chung) |
| `LM_HUB_DELIVERY_PROGRESS_SHEET_ID` / `DELIVERY_PROGRESS_SHEET_ID` | Spreadsheet riêng tab Delivery Progress D0 |
| `LM_HUB_ORDER_VOLUME_SHEET_ID` / `ORDER_VOLUME_SHEET_ID` | Spreadsheet riêng tab Order Volume D0 |
| `--google-credentials` / `LM_HUB_GOOGLE_CREDENTIALS` / `GOOGLE_APPLICATION_CREDENTIALS` | Path to SA or OAuth JSON |
| `--no-google-sheet` | Skip Sheets for all selected APIs; still write local CSV |

If credentials are missing, export continues and prints
`Google Sheet SKIP: no credentials...`.


## Cookie import (Chrome)

spx_cookies.py = **loader** (doc cookie cho export).  
chrome_cookie_import.py = **importer** (lay cookie tu Chrome).

Refresh:

```bat
cd /d C:\lm_hub_export
chrome_cookie_import.bat
```

Lenh khac: --cdp, --import-json FILE, --status, --dry-run.

Ghi **chi** cookies\cookies.json. Khong sua cookie SPX_Launcher.

