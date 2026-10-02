@echo off
REM Standalone smoke: order_volume + backlog
REM Cookie: C:\lm_hub_export\cookies\cookies.json  (xem cookies\README.txt)
REM Hubs: data\hubs.csv | Output: output\
cd /d "%~dp0.."
if not exist "cookies\cookies.json" (
  echo THIEU cookies\cookies.json
  echo Copy cookie JSON vao cookies\cookies.json roi chay lai.
  echo Huong dan: cookies\README.txt
  pause
  exit /b 2
)
if not exist "data\hubs.csv" (
  echo THIEU data\hubs.csv
  pause
  exit /b 2
)
if not exist "output" mkdir output
py -3.14 export_lm_hubs.py --apis order_volume,backlog --hubs data\hubs.csv --out-dir output --out-suffix _test --workers 4
if errorlevel 1 (
  echo FAIL
  pause
  exit /b 1
)
echo OK - xem output\lm_order_volume_hubs_export_test.csv / output\lm_backlog_hubs_export_test.csv
pause
