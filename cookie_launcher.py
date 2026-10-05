"""
Cookie launcher cho lm_hub_export.

Vong lap (mac dinh moi 10 phut):
  1) Doc han cookie fms_user_skey trong cookies\\cookies.json -> so gio con lai.
  2) Goi 1 API SPX read-only (chrome_cookie_import.validate) de chac cookie con chay.
  3) Cookie het han / API tu choi / con < 30 phut:
       - dong RIENG Chrome SPX debug (profile data\\chrome_debug_profile) - KHONG dong Chrome dang dung,
       - mo lai (port 9222), doc cookie qua CDP, validate, roi moi ghi cookies.json (co backup).
       - neu session SPX het han han -> popup + beep, doi login toi da 10 phut.
  4) Moi lan cookie OK -> chay `export_lm_hubs.py --apis all` (tat ca API), log vao output\\cookie_launcher.log.

KHONG in gia tri cookie. Ctrl+C de thoat.

  py -3.14 cookie_launcher.py                 # chay vong lap
  py -3.14 cookie_launcher.py --once --no-export
"""
from __future__ import annotations

import argparse
import contextlib
import datetime as _dt
import io
import json
import os
import re
import subprocess
import sys
import threading
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

import chrome_cookie_import as cci  # noqa: E402

COOKIE_FILE = cci.PACK_COOKIE
DEBUG_PROFILE = cci.DEBUG_PROFILE
LOG_FILE = ROOT / "output" / "cookie_launcher.log"
LOCK_FILE = ROOT / "output" / "cookie_launcher.lock"
EXPORT_SCRIPT = ROOT / "export_lm_hubs.py"
LOG_MAX_BYTES = 20 * 1024 * 1024
NO_WINDOW = getattr(subprocess, "CREATE_NO_WINDOW", 0)


# ----------------------------------------------------------------- console / log

def setup_console() -> None:
    for stream in (sys.stdout, sys.stderr):
        try:
            stream.reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            pass


def _now() -> _dt.datetime:
    return _dt.datetime.now()


def _rotate_log() -> None:
    try:
        if LOG_FILE.exists() and LOG_FILE.stat().st_size > LOG_MAX_BYTES:
            old = LOG_FILE.with_suffix(".log.1")
            if old.exists():
                old.unlink()
            LOG_FILE.replace(old)
    except Exception:
        pass


def log_file_only(lines) -> None:
    try:
        LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
        stamp = _now().strftime("%Y-%m-%d %H:%M:%S")
        with LOG_FILE.open("a", encoding="utf-8", errors="replace") as fh:
            for line in lines:
                fh.write(f"{stamp} {line}\n")
    except Exception:
        pass


def log(msg: str) -> None:
    print(msg, flush=True)
    log_file_only(str(msg).splitlines() or [""])


def quiet(func, *args, **kwargs):
    """Goi ham cua chrome_cookie_import, gom print cua no vao log (thut le)."""
    buf = io.StringIO()
    try:
        with contextlib.redirect_stdout(buf):
            return func(*args, **kwargs)
    finally:
        for line in buf.getvalue().splitlines():
            if line.strip():
                log("    " + line.strip())


# ----------------------------------------------------------------- cookie helpers

def load_cookies(path: Path = COOKIE_FILE) -> list[dict]:
    try:
        data = json.loads(path.read_text(encoding="utf-8-sig"))
    except FileNotFoundError:
        return []
    except Exception as exc:
        log(f"  Khong doc duoc {path.name}: {exc}")
        return []
    if isinstance(data, dict):
        data = data.get("cookies") or []
    return [c for c in data if isinstance(c, dict)]


def session_expiry(cookies) -> float | None:
    """Epoch giay het han cua fms_user_skey (None neu khong co / session cookie)."""
    best = None
    for c in cookies or []:
        if str(c.get("name")) != cci.SESSION_COOKIE:
            continue
        exp = c.get("expiry", c.get("expires", c.get("expirationDate")))
        try:
            exp = float(exp)
        except (TypeError, ValueError):
            continue
        if exp <= 0:
            continue
        best = exp if best is None else max(best, exp)
    return best


def hours_left(cookies, now: float | None = None) -> float | None:
    """So gio con lai cua fms_user_skey (am = da het han). None = khong ro han."""
    exp = session_expiry(cookies)
    if exp is None:
        return None
    return (exp - (time.time() if now is None else now)) / 3600.0


def hours_text(hours: float | None) -> str:
    if hours is None:
        return "khong ro han"
    if hours <= 0:
        return "da het han"
    return f"con {hours:.1f} gio"


def too_short(hours: float | None, refresh_before_min: float) -> bool:
    return hours is not None and hours * 60.0 < refresh_before_min


def is_network_error(msg: str) -> bool:
    return str(msg or "").startswith("loi mang")


def check_cookies(cookies) -> tuple[bool, str]:
    if not cookies:
        return False, "khong co cookies.json"
    if not cci.has_session(cookies):
        return False, f"thieu {cci.SESSION_COOKIE}"
    try:
        return cci.validate(cookies)
    except Exception as exc:  # pragma: no cover
        return False, f"loi mang: {exc}"


# ----------------------------------------------------------------- process helpers (Windows)

def list_processes(where: str) -> list[dict]:
    """Win32_Process (ProcessId, ParentProcessId, CommandLine) qua PowerShell CIM."""
    ps = (f"Get-CimInstance Win32_Process -Filter \"{where}\" | "
          "Select-Object ProcessId,ParentProcessId,CommandLine | ConvertTo-Json -Compress")
    try:
        out = subprocess.run(["powershell", "-NoProfile", "-NonInteractive", "-Command", ps],
                             capture_output=True, text=True, timeout=60,
                             creationflags=NO_WINDOW).stdout.strip()
    except Exception as exc:
        log(f"  Khong liet ke duoc process: {exc}")
        return []
    if not out:
        return []
    try:
        data = json.loads(out)
    except Exception:
        return []
    return [data] if isinstance(data, dict) else list(data or [])


_UDD_RE = re.compile(r'--user-data-dir=(?:"([^"]+)"|(\S+))', re.IGNORECASE)


def _norm(p: str) -> str:
    return os.path.normcase(os.path.normpath(str(p).strip().strip('"')))


def is_debug_profile_cmdline(cmdline: str | None, profile: Path | str = DEBUG_PROFILE) -> bool:
    """True CHI KHI command line co --user-data-dir= tro dung profile SPX rieng."""
    if not cmdline:
        return False
    m = _UDD_RE.search(cmdline)
    if not m:
        return False
    return _norm(m.group(1) or m.group(2)) == _norm(str(profile))


def debug_chrome_pids() -> list[int]:
    procs = list_processes("Name='chrome.exe'")
    return [int(p["ProcessId"]) for p in procs if is_debug_profile_cmdline(p.get("CommandLine"))]


def close_debug_chrome(port: int) -> int:
    """Dong RIENG Chrome SPX debug. Chrome thuong cua user KHONG bi dong."""
    pids = debug_chrome_pids()
    if not pids:
        log("  Khong co Chrome SPX rieng dang mo.")
        return 0
    log(f"  Dong Chrome SPX rieng: {len(pids)} process (profile {DEBUG_PROFILE.name})")
    for pid in pids:  # dong nhe truoc (khong /F)
        subprocess.run(["taskkill", "/PID", str(pid)], capture_output=True, creationflags=NO_WINDOW)
    end = time.time() + 8
    while time.time() < end and debug_chrome_pids():
        time.sleep(1)
    left = debug_chrome_pids()
    for pid in left:  # con sot -> force, van chi cac pid profile rieng
        subprocess.run(["taskkill", "/PID", str(pid), "/T", "/F"], capture_output=True, creationflags=NO_WINDOW)
    end = time.time() + 10
    while time.time() < end and cci.cdp_version(port):
        time.sleep(0.5)
    return len(pids)


def other_export_running(exclude_pid: int | None = None) -> bool:
    procs = list_processes("Name like 'python%' or Name='py.exe'")
    for p in procs:
        if exclude_pid and int(p.get("ProcessId") or 0) == exclude_pid:
            continue
        if "export_lm_hubs.py" in str(p.get("CommandLine") or ""):
            return True
    return False


# ----------------------------------------------------------------- popup / beep

def alert(title: str, text: str) -> None:
    """Popup Windows (thread rieng, khong chan vong lap) + beep."""
    def _box():
        try:
            import ctypes
            # MB_OK | MB_ICONWARNING | MB_SYSTEMMODAL | MB_SETFOREGROUND | MB_TOPMOST
            ctypes.windll.user32.MessageBoxW(0, text, title, 0x0 | 0x30 | 0x1000 | 0x10000 | 0x40000)
        except Exception:
            pass

    threading.Thread(target=_box, daemon=True).start()
    try:
        import winsound
        for _ in range(3):
            winsound.Beep(1200, 350)
            time.sleep(0.15)
    except Exception:
        print("\a", end="", flush=True)


# ----------------------------------------------------------------- refresh

def read_cdp_cookies(port: int) -> list[dict] | None:
    try:
        return quiet(cci.read_via_cdp, port)
    except cci.ImportFail as exc:
        log(f"  CDP: {str(exc).splitlines()[0]}")
    except Exception as exc:
        log(f"  CDP loi: {exc}")
    return None


def try_save(cookies, args, label: str, need_long: bool) -> bool:
    """Validate + (neu du han) ghi cookies.json. need_long=True: bo qua neu van sap het han."""
    if not cookies or not cci.has_session(cookies):
        return False
    h = hours_left(cookies)
    if need_long and too_short(h, args.refresh_before_min):
        return False
    ok, msg = check_cookies(cookies)
    if not ok:
        log(f"  {label}: cookie chua hop le ({msg})")
        return False
    out = quiet(cci.save, cookies)
    log(f"  {label}: cookie hop le, {hours_text(h)} -> da ghi {out.name}")
    return True


def wait_for_login(args, reason: str) -> bool:
    secs = max(0, int(args.wait_login_sec))
    log(f"  !! {reason} -> can login SPX trong cua so Chrome SPX vua mo (doi toi da {secs // 60} phut).")
    alert("SPX cookie launcher",
          ("Cookie SPX sắp hết hạn." if "sap het" in reason else "Phiên đăng nhập SPX đã hết hạn.") + "\n\n"
          "Hãy đăng nhập https://spx.shopee.vn trong cửa sổ Chrome SPX vừa mở "
          f"(launcher tự lấy cookie trong {secs // 60} phút).\n\n"
          "Không cần bấm OK, launcher vẫn đang chạy.")
    end = time.time() + secs
    while time.time() < end:
        time.sleep(min(15, max(1, end - time.time())))
        if not cci.cdp_version(args.port):
            log("  Cua so Chrome SPX da bi dong -> mo lai.")
            try:
                quiet(cci.launch_debug_chrome, args.port)
            except Exception as exc:
                log(f"  Mo Chrome that bai: {exc}")
                continue
        cookies = read_cdp_cookies(args.port)
        if try_save(cookies, args, "Login", need_long=True):
            return True
        log(f"  Chua co session SPX moi... con {int(max(0, end - time.time()))}s")
    log("  Het thoi gian doi login. Thu lai o lan kiem tra sau.")
    return False


def refresh_cookie(args) -> bool:
    """True neu cookies.json da co cookie hop le moi."""
    # 0) Chrome SPX rieng dang mo san -> thu lay cookie moi ma khong dong
    if cci.cdp_version(args.port):
        log("  Chrome SPX rieng dang mo -> thu doc cookie qua CDP truoc")
        if try_save(read_cdp_cookies(args.port), args, "CDP", need_long=True):
            return True
    # 1) dong RIENG Chrome SPX debug + mo lai
    close_debug_chrome(args.port)
    try:
        quiet(cci.launch_debug_chrome, args.port)
    except cci.ImportFail as exc:
        log(f"  Mo Chrome SPX that bai: {exc}")
        return False
    saved_short = False
    for _ in range(4):  # cho trang SPX load / cookie set
        time.sleep(5)
        cookies = read_cdp_cookies(args.port)
        if try_save(cookies, args, "Chrome moi", need_long=True):
            return True
        if not saved_short and cookies and too_short(hours_left(cookies), args.refresh_before_min):
            # Cookie con chay nhung sap het: ghi tam de export van chay, roi xin login lai
            saved_short = try_save(cookies, args, "Chrome moi (sap het han)", need_long=False)
            if saved_short:
                break
    reason = ("Cookie van sap het han sau khi mo lai Chrome" if saved_short
              else "Session SPX het han (mo lai Chrome van bi ra trang login)")
    if wait_for_login(args, reason):
        return True
    return saved_short


# ----------------------------------------------------------------- export

def run_export(args) -> int:
    if other_export_running():
        log("  Export khac dang chay -> bo qua lan nay.")
        return -1
    cmd = [sys.executable, "-u", str(EXPORT_SCRIPT), "--apis", "all"]
    env = dict(os.environ, PYTHONIOENCODING="utf-8", PYTHONUTF8="1")
    t0 = time.time()
    log(f"[{_now():%H:%M}] Export bat dau: export_lm_hubs.py --apis all (log: output\\{LOG_FILE.name})")
    proc = subprocess.Popen(cmd, cwd=str(ROOT), stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
                            env=env, text=True, encoding="utf-8", errors="replace", bufsize=1)
    try:
        assert proc.stdout is not None
        for line in proc.stdout:
            line = line.rstrip("\r\n")
            log_file_only(["  [export] " + line])
            if args.show_export_output:
                print("  [export] " + line, flush=True)
        rc = proc.wait()
    except KeyboardInterrupt:
        proc.terminate()
        raise
    dur = int(time.time() - t0)
    log(f"[{_now():%H:%M}] Export xong | exit={rc} | {dur // 60}m{dur % 60:02d}s")
    return rc


# ----------------------------------------------------------------- loop

def one_cycle(args, next_at: _dt.datetime) -> bool:
    """1 lan kiem tra (+ refresh neu can, + export neu OK). True = cookie OK."""
    _rotate_log()
    cookies = load_cookies()
    h = hours_left(cookies)
    ok, msg = check_cookies(cookies)
    stamp = f"[{_now():%H:%M}]"
    if ok and not too_short(h, args.refresh_before_min):
        log(f"{stamp} Cookie OK | {hours_text(h)} | next check {next_at:%H:%M}")
    elif not ok and is_network_error(msg):
        log(f"{stamp} Cookie ? | {hours_text(h)} | loi mang, khong refresh: {msg[:120]} | next check {next_at:%H:%M}")
        return False
    else:
        why = msg if not ok else f"con duoi {args.refresh_before_min:g} phut"
        log(f"{stamp} Cookie CAN REFRESH | {hours_text(h)} | {why}")
        if not refresh_cookie(args):
            log(f"[{_now():%H:%M}] Refresh that bai | next check {next_at:%H:%M}")
            return False
        h = hours_left(load_cookies())
        log(f"[{_now():%H:%M}] Cookie OK (sau refresh) | {hours_text(h)} | next check {next_at:%H:%M}")
    if not args.no_export:
        run_export(args)
    return True


def acquire_lock():
    LOCK_FILE.parent.mkdir(parents=True, exist_ok=True)
    fh = open(LOCK_FILE, "a+")
    try:
        import msvcrt
        fh.seek(0)
        msvcrt.locking(fh.fileno(), msvcrt.LK_NBLCK, 1)
    except ImportError:
        pass
    except OSError:
        fh.close()
        return None
    return fh


def main(argv=None) -> int:
    setup_console()
    ap = argparse.ArgumentParser(description="Kiem tra cookie SPX dinh ky, tu refresh, chay export_lm_hubs.py --apis all")
    ap.add_argument("--interval-min", type=float, default=10, help="Phut giua 2 lan kiem tra (mac dinh 10)")
    ap.add_argument("--refresh-before-min", type=float, default=30,
                    help="Refresh khi cookie con duoi N phut (mac dinh 30)")
    ap.add_argument("--wait-login-sec", type=int, default=600, help="Doi login SPX toi da N giay (mac dinh 600)")
    ap.add_argument("--port", type=int, default=cci.DEFAULT_PORT, help="CDP port Chrome SPX rieng (9222)")
    ap.add_argument("--no-export", action="store_true", help="Chi kiem tra/refresh cookie, khong chay export")
    ap.add_argument("--once", action="store_true", help="Chay 1 lan roi thoat (test)")
    ap.add_argument("--show-export-output", action="store_true", help="In log export ra man hinh (mac dinh chi ghi file)")
    args = ap.parse_args(argv)

    lock = acquire_lock()
    if lock is None:
        print("Cookie launcher dang chay o cua so khac -> thoat.")
        return 3
    interval = max(1.0, args.interval_min) * 60
    log(f"=== Cookie launcher start {_now():%Y-%m-%d %H:%M} | moi {args.interval_min:g} phut | "
        f"refresh khi < {args.refresh_before_min:g} phut | export={'OFF' if args.no_export else 'all APIs'} ===")
    try:
        while True:
            t0 = time.time()
            next_at = _dt.datetime.fromtimestamp(t0 + interval)
            try:
                ok = one_cycle(args, next_at)
            except KeyboardInterrupt:
                raise
            except Exception as exc:
                ok = False
                log(f"[{_now():%H:%M}] Loi vong lap: {exc!r}")
            if args.once:
                return 0 if ok else 1
            wait = t0 + interval - time.time()
            if wait > 0:
                time.sleep(wait)
            else:
                log(f"  (chu ky vuot {args.interval_min:g} phut -> kiem tra ngay)")
    except KeyboardInterrupt:
        log("Da dung cookie launcher (Ctrl+C).")
        return 130
    finally:
        try:
            lock.close()
        except Exception:
            pass


if __name__ == "__main__":
    raise SystemExit(main())
