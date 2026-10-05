@echo off
REM Cookie launcher: kiem tra cookie SPX moi 10 phut, tu refresh, chay export tat ca API.
REM Them --no-export / --once / --interval-min N ... (xem README)
cd /d "%~dp0"
py -3.14 cookie_launcher.py %*
pause
