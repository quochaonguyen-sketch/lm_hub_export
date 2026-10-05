@echo off
REM Khong tham so: mo giao dien. Co tham so: giu che do console (hoac them --gui).
cd /d "%~dp0"
if "%~1"=="" (
  start "" /b pyw -3.14 cookie_launcher.py --gui
  exit /b
)
py -3.14 cookie_launcher.py %*
pause
