@echo off
cd /d "%~dp0"
py -3.14 export_attendance_history.py %*
pause
