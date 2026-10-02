@echo off
REM Lay cookie SPX tu Chrome -> C:\lm_hub_export\cookies\cookies.json
REM DOC LAP: KHONG ghi SPX_Launcher config\cookies\cookies_assign_pick.json
REM Mo Chrome SPX RIENG (profile trong data\chrome_debug_profile + port 9222).
REM Login https://spx.shopee.vn trong cua so do; script doi toi da 10 phut, validate API, roi ghi.
REM Them --dry-run de chi kiem tra, khong ghi.
cd /d "%~dp0"
py -3.14 chrome_cookie_import.py --launch-debug --wait-login 600 %*
pause
