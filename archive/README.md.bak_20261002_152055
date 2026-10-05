# LM Hub Export (standalone)

Thu muc **doc lap** - **khong** dung cookie / `paths` / `cookie_login` cua `C:\SPX_Launcher`
(tru khi ban bat `--launcher-cookie`, OFF mac dinh).

## Cau truc

```
C:\lm_hub_export\
  export_lm_hubs.py              # entry
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

Vi du: `py -3.14 export_lm_hubs.py --apis order_volume,backlog,delivery_progress,fm_order_volume,roster --workers 4`.


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

## API (roster / event_list) — TODAY ONLY hub summary

- **roster** (alias **event_list**) combines 2 WFM APIs (path `/api/wfm/...`, **KHONG** data_api mart).
- Auth: cung cookie pack (`cookies\cookies.json` / `spx_cookies.py`) — `fms_user_skey` + `csrftoken`.
- **Khong** con dung `event_list_v2` / `event_add_staff_search`.

### 1) Ops calendar (scheduled / present)

- `POST https://spx.shopee.vn/api/wfm/admin/ops_calendar/ops_calendar_list`
- body: `{"pageno":1,"count":100,"station_id": int, "agency_id": 0, "range_start_time": unix, "range_end_time": unix}`
- **Mac dinh TODAY ONLY** (Asia/Saigon): `range_start_time = range_end_time = today_00:00` (vd `1790874000`).
- Paginate khi `total > count`.
- `agency_id` mac dinh **0** (all agencies); override `--agency-id 9` for in-house calendar only.

**Filter KEEP** (bo `list` rong `{}`):

- `list` non-empty **va** co noi dung hom nay cho hub dang kiem:
  - `event_list[]` co `event_station_id == station_id` (va `event_date`/`attendance_date` = today khi co), **hoac**
  - `attendance_list[]` cho ngay hom nay **va** `event_station_id`/`station_id` == hub (bo neu thieu station).
- `scheduled_count` = so nguoi KEEP; `present_count` = KEEP co `clock_in_time` != 0.

### 2) Attendance stats (late)

- `GET https://spx.shopee.vn/api/wfm/admin/attendance/clock/statistic_data_list?pageno&count=50&staff_type=2&start_time=TODAY_MIDNIGHT-30d&end_time=END_OF_TODAY` (browser-style wide start; no station filter; paginate until list empty or `total` reached; fetched ONCE per roster run then day+station filter client-side). Soft maintenance retries capped at 3 (1-3s backoff). Prefetch has a 90s deadline - on timeout/fail roster continues calendar-only with `late=0`.
- Calendar keep filter uses **Event Station only** (`event_list[].event_station_id` / `attendance_list[].event_station_id`); never Profile Station. Part-time -> OS first. If `agency_id=0` returns a huge unscoped total, merge with `agency_id=9` + event-matched rows. Maintenance hubs get stronger retries + a second pass.
- `end_time` = `today 23:59:59` VN (vd `1790960399`). Paginate.
- Filter client: `event_station_id` / `station_id` == hub, and `date` / `operation_date` is today when those fields are present.
- `late_count`: `clock_in_status_name == "Late In"` **hoac** `clock_in_status == 3`.
- The same filtered attendance rows are the source of the labor mix; this is independent of the calendar `agency_id`.

### Labor type FTE / OS / BPO

**Primary** from kept `ops_calendar` rows (`agency_name` + `contract_type_name`).
**Secondary** from attendance when calendar has no agency/contract labels.
`late_count` only counts `clock_in_status_name == "Late In"` (or status `3`); Early In is on-time.

Classify order:

1. If **agency** is `in-house` / `inhouse` → **FTE**
2. Else look **contract_type**: `Part-time` → **OS**; `Full-time` → **BPO**

Calendar scheduled/present uses `--agency-id` (default 0 = all; 9 = in-house-only). Soft maintenance retries: up to 5 tries, 1–3s backoff.


### Cooked metrics

| Metric | Cong thuc |
|--------|-----------|
| `scheduled_count` | so nguoi calendar KEEP |
| `present_count` | KEEP co clock-in |
| `late_count` | so dong attendance Late In (status 3) |
| `fte_count` / `os_count` / `bpo_count` | dem labor tren calendar kept rows; attendance labor secondary khi co agency/contract |
| `attendance_pct` | `100 * present / scheduled` (blank neu scheduled=0) |

`off_count` **da drop** (khong con `event_add_staff_search`).

### CSV

- Output: `output\roster\roster_today_export.csv` (+ `--out-suffix`)
- **1 dong / hub** (khong con grain=event / slot).
- Cot: `station_id`, `station_name`, `event_date_iso`, `scheduled_count`, `present_count`, `late_count`, `fte_count`, `os_count`, `bpo_count`, `attendance_pct`, `fetched_at`
- Da drop (API cu): `grain`, `slot_code`, `labor_type`, `agency_name`, `scheduled_headcount`, `actual_headcount`, `planned_headcount`, `off_count`, `event_department_name`, ...

Smoke:

```bat
py -3.14 export_lm_hubs.py --apis roster --hubs data\smoke\_hubs_smoke_roster.csv --out-suffix _smoke
py -3.14 export_lm_hubs.py --apis roster --hubs data\smoke\_hubs_smoke_roster.csv --agency-id 0 --out-suffix _smoke_allag
# 2026-10-02 sample (hub 912): scheduled=11, present=6, late=3, FTE=6, OS=3, BPO=1
py -3.14 export_lm_hubs.py --apis event_list --hubs data\smoke\_hubs_smoke_roster.csv --out-suffix _smoke
```


Hub fail -> SKIP. Exit 0 neu >=1 OK. `--strict` = fail neu co skip.

## Luu y

- Can `requests` (`py -3.14 -m pip install requests`).
- Khong sua cookie flow trong SPX_Launcher.

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
#   l m _ h u b _ e x p o r t  
 