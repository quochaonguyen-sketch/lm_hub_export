"""
Lay cookie SPX tu Google Chrome -> C:\\lm_hub_export\\cookies\\cookies.json
(dinh dang: list {domain,name,value,path,secure,httpOnly,sameSite,expiry}).

DOC LAP voi SPX_Launcher — KHONG ghi config/cookies/cookies_assign_pick.json.
KHONG dong / kill Chrome dang dung. KHONG in gia tri cookie (chi ten + do dai).
Chi ghi file SAU KHI goi thu 1 API SPX read-only OK.

CACH DUNG (tu C:\\lm_hub_export):
  1) Lan dau / het session:  chrome_cookie_import.bat
       = py -3.14 chrome_cookie_import.py --launch-debug --wait-login 600
  2) Cua so SPX rieng van mo: py -3.14 chrome_cookie_import.py --cdp
  3) Cookie extension:        py -3.14 chrome_cookie_import.py --import-json cookies.json
  4) --status / --dry-run / --port 9222

Loader (doc cookie cho export): spx_cookies.py
Importer (lay cookie tu Chrome): chrome_cookie_import.py  <-- file nay
"""
from __future__ import annotations

import argparse
import base64
import datetime as _dt
import json
import os
import shutil
import sqlite3
import subprocess
import sys
import tempfile
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PACK_COOKIE = ROOT / "cookies" / "cookies.json"
DEBUG_PROFILE = ROOT / "data" / "chrome_debug_profile"

SPX_HOST = "spx.shopee.vn"
SPX_BASE = "https://spx.shopee.vn"
SESSION_COOKIE = "fms_user_skey"
CDP_HOST = "127.0.0.1"
DEFAULT_PORT = 9222
VALIDATE_PATH = "/api/admin/pickup/pickup_point_group/search"  # read-only, job pickup48h dung
_CHROME_EPOCH_OFFSET = 11644473600


class ImportFail(RuntimeError):
    pass


# ----------------------------------------------------------------- helpers

def mask(value) -> str:
    return f"****(len={len(str(value or ''))})"


def local_appdata() -> Path:
    return Path(os.environ.get("LOCALAPPDATA") or (Path.home() / "AppData" / "Local"))


def cookie_file() -> Path:
    """CHI ghi cookies/cookies.json trong pack — khong dung path launcher."""
    return PACK_COOKIE


def debug_profile_dir() -> Path:
    """Profile Chrome RIENG cho pack (khong dung profile launcher)."""
    return DEBUG_PROFILE


def find_chrome_exe() -> Path | None:
    for p in (
        Path(os.environ.get("PROGRAMFILES", r"C:\Program Files")) / "Google/Chrome/Application/chrome.exe",
        Path(os.environ.get("PROGRAMFILES(X86)", r"C:\Program Files (x86)")) / "Google/Chrome/Application/chrome.exe",
        local_appdata() / "Google/Chrome/Application/chrome.exe",
    ):
        if p.is_file():
            return p
    return None


def chrome_user_data() -> Path | None:
    p = local_appdata() / "Google" / "Chrome" / "User Data"
    return p if (p / "Local State").is_file() else None


def chrome_version(user_data: Path | None) -> str:
    if user_data and (user_data / "Last Version").is_file():
        return (user_data / "Last Version").read_text(encoding="utf-8", errors="replace").strip()
    return "?"


def chrome_major(user_data: Path | None) -> int:
    try:
        return int(chrome_version(user_data).split(".")[0])
    except Exception:
        return 0


def chrome_process_count() -> int:
    try:
        out = subprocess.run(["tasklist", "/FI", "IMAGENAME eq chrome.exe", "/FO", "CSV", "/NH"],
                             capture_output=True, text=True, timeout=15).stdout or ""
        return sum(1 for line in out.splitlines() if line.lower().startswith('"chrome.exe"'))
    except Exception:
        return 0


def sent_to_spx(domain: str) -> bool:
    """Cookie co duoc trinh duyet gui toi https://spx.shopee.vn khong (domain-match)."""
    d = (domain or "").strip().lower().lstrip(".")
    if not d or "." not in d:
        return False
    return SPX_HOST == d or SPX_HOST.endswith("." + d)


def has_session(cookies) -> bool:
    return any(str(c.get("name")) == SESSION_COOKIE and len(str(c.get("value") or "").strip()) >= 10
               for c in cookies or [])


def normalize_samesite(value) -> str:
    v = str(value or "").strip().lower()
    if v in ("strict",):
        return "Strict"
    if v in ("none", "no_restriction"):
        return "None"
    return "Lax"  # lax / unspecified / rong (giong selenium get_cookies)


def to_launcher(name, value, domain, path="/", secure=False, http_only=False, same_site=None, expiry=None) -> dict:
    item = {
        "domain": str(domain or SPX_HOST),
        "name": str(name),
        "value": str(value or ""),
        "path": str(path or "/"),
        "secure": bool(secure),
        "httpOnly": bool(http_only),
        "sameSite": normalize_samesite(same_site),
    }
    try:
        exp = int(float(expiry))
        if exp > 0:
            item["expiry"] = exp
    except (TypeError, ValueError):
        pass
    return item


def filter_and_dedupe(cookies: list[dict]) -> list[dict]:
    out, seen = [], {}
    for c in cookies:
        if not c.get("name") or not sent_to_spx(c.get("domain", "")):
            continue
        key = (c["domain"], c["name"], c.get("path", "/"))
        if key in seen:
            out[seen[key]] = c
        else:
            seen[key] = len(out)
            out.append(c)
    return out


def describe(cookies: list[dict]) -> None:
    now = time.time()
    for c in sorted(cookies, key=lambda x: (x["name"], x["domain"])):
        exp = c.get("expiry")
        left = f"{(exp - now) / 3600:.1f}h" if isinstance(exp, int) else "session"
        print(f"    {c['domain']:<18} {c['name']:<24} {mask(c['value'])}  het han sau {left}")


# ----------------------------------------------------------------- CDP

def cdp_version(port: int) -> dict | None:
    try:
        with urllib.request.urlopen(f"http://{CDP_HOST}:{port}/json/version", timeout=2) as resp:
            return json.loads(resp.read().decode("utf-8", errors="replace"))
    except Exception:
        return None


def cdp_call(ws_url: str, method: str, params: dict | None = None, timeout: float = 15):
    import websocket  # websocket-client
    ws = websocket.create_connection(ws_url, timeout=timeout, suppress_origin=True)
    try:
        ws.send(json.dumps({"id": 1, "method": method, "params": params or {}}))
        end = time.time() + timeout
        while time.time() < end:
            msg = json.loads(ws.recv())
            if msg.get("id") == 1:
                if "error" in msg:
                    raise ImportFail(f"CDP {method}: {msg['error']}")
                return msg.get("result") or {}
        raise ImportFail(f"CDP {method}: timeout")
    finally:
        ws.close()


def read_via_cdp(port: int) -> list[dict]:
    info = cdp_version(port)
    if not info or not info.get("webSocketDebuggerUrl"):
        raise ImportFail(
            f"Khong co Chrome remote-debugging tai {CDP_HOST}:{port}.\n"
            "  Chay (trong C:\\lm_hub_export): chrome_cookie_import.bat  (hoac --launch-debug --wait-login 600)")
    raw = cdp_call(info["webSocketDebuggerUrl"], "Storage.getCookies").get("cookies") or []
    out = [to_launcher(c.get("name"), c.get("value"), c.get("domain"), c.get("path"), c.get("secure"),
                       c.get("httpOnly"), c.get("sameSite"),
                       None if c.get("session") else c.get("expires"))
           for c in raw]
    print(f"  CDP {info.get('Browser', '?')} -> {len(raw)} cookie tong, loc domain SPX...")
    return filter_and_dedupe(out)


def launch_debug_chrome(port: int, url: str = SPX_BASE + "/#/index") -> None:
    """Mo Chrome RIENG (user-data-dir rieng + debug port). Chrome dang dung KHONG bi dong."""
    if cdp_version(port):
        print(f"  CDP {CDP_HOST}:{port} da san sang (Chrome debug dang mo).")
        return
    exe = find_chrome_exe()
    if not exe:
        raise ImportFail("Khong tim thay chrome.exe")
    prof = debug_profile_dir()
    prof.mkdir(parents=True, exist_ok=True)
    cmd = [str(exe), f"--remote-debugging-port={port}", f"--user-data-dir={prof}",
           "--no-first-run", "--no-default-browser-check", "--new-window", url]
    print(f"  Mo Chrome SPX rieng: profile={prof} port={port}")
    subprocess.Popen(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
                     creationflags=getattr(subprocess, "DETACHED_PROCESS", 0))
    end = time.time() + 30
    while time.time() < end:
        if cdp_version(port):
            print(f"  CDP OK tai {CDP_HOST}:{port}")
            return
        time.sleep(0.5)
    raise ImportFail(
        f"Chrome da mo nhung port {port} khong len. Co the profile {prof} dang mo san "
        "KHONG co debug port (dong rieng cua so do roi chay lai), hoac port bi chiem.")


# ----------------------------------------------------------------- SQLite (v10/v11 only)

def _dpapi_unprotect(data: bytes) -> bytes:
    import ctypes
    from ctypes import wintypes

    class BLOB(ctypes.Structure):
        _fields_ = [("cbData", wintypes.DWORD), ("pbData", ctypes.POINTER(ctypes.c_byte))]

    buf = ctypes.create_string_buffer(data, len(data))
    blob_in = BLOB(len(data), ctypes.cast(buf, ctypes.POINTER(ctypes.c_byte)))
    blob_out = BLOB()
    if not ctypes.windll.crypt32.CryptUnprotectData(ctypes.byref(blob_in), None, None, None, None, 0,
                                                     ctypes.byref(blob_out)):
        raise ctypes.WinError()
    try:
        return ctypes.string_at(blob_out.pbData, blob_out.cbData)
    finally:
        ctypes.windll.kernel32.LocalFree(blob_out.pbData)


def profile_names(user_data: Path) -> dict:
    try:
        info = json.loads((user_data / "Local State").read_text(encoding="utf-8"))
        cache = (info.get("profile") or {}).get("info_cache") or {}
        return {k: str((v or {}).get("name") or k) for k, v in cache.items()}
    except Exception:
        return {}


def _copy_db(profile_dir: Path) -> Path:
    db = profile_dir / "Network" / "Cookies"
    if not db.is_file():
        db = profile_dir / "Cookies"
    if not db.is_file():
        raise ImportFail(f"{profile_dir.name}: khong co file Cookies")
    tmp = Path(tempfile.mkdtemp(prefix="spx_ck_")) / "Cookies"
    try:
        shutil.copy2(db, tmp)
    except PermissionError:
        shutil.rmtree(tmp.parent, ignore_errors=True)
        raise ImportFail(f"{profile_dir.name}: Cookies DB dang bi Chrome khoa (profile dang mo)")
    return tmp


def scan_profile(profile_dir: Path) -> dict:
    tmp = _copy_db(profile_dir)
    try:
        con = sqlite3.connect(str(tmp))
        rows = con.execute("SELECT host_key, name, substr(encrypted_value,1,3) FROM cookies").fetchall()
        con.close()
    finally:
        shutil.rmtree(tmp.parent, ignore_errors=True)
    spx = [(h, n, bytes(v or b"")) for h, n, v in rows if sent_to_spx(h)]
    prefixes: dict[str, int] = {}
    for _h, _n, v in spx:
        k = v.decode("ascii", "replace") if v[:1] == b"v" else ("plain" if not v else "dpapi")
        prefixes[k] = prefixes.get(k, 0) + 1
    return {"count": len(spx), "prefixes": prefixes, "session_name": any(n == SESSION_COOKIE for _h, n, _v in spx)}


def read_via_sqlite(user_data: Path, profile: str) -> list[dict]:
    prof = user_data / profile
    tmp = _copy_db(prof)
    try:
        con = sqlite3.connect(str(tmp))
        con.row_factory = sqlite3.Row
        rows = [r for r in con.execute(
            "SELECT host_key,name,value,encrypted_value,path,expires_utc,is_secure,is_httponly,samesite "
            "FROM cookies") if sent_to_spx(r["host_key"])]
        try:
            db_version = int(con.execute("SELECT value FROM meta WHERE key='version'").fetchone()[0])
        except Exception:
            db_version = 0
        con.close()
    finally:
        shutil.rmtree(tmp.parent, ignore_errors=True)
    if not rows:
        raise ImportFail(f"{profile}: khong co cookie SPX")
    v20 = sum(1 for r in rows if bytes(r["encrypted_value"] or b"")[:3] == b"v20")
    if v20:
        raise ImportFail(
            f"{profile}: {v20}/{len(rows)} cookie SPX ma hoa v20 (App-Bound Encryption, Chrome 127+). "
            "Khong giai ma truc tiep duoc va script KHONG dung trick nang quyen/SYSTEM. "
            "Dung --launch-debug / --cdp hoac --import-json.")
    from cryptography.hazmat.primitives.ciphers.aead import AESGCM
    state = json.loads((user_data / "Local State").read_text(encoding="utf-8"))
    key_raw = base64.b64decode(((state.get("os_crypt") or {}).get("encrypted_key") or ""))
    key = _dpapi_unprotect(key_raw[5:] if key_raw.startswith(b"DPAPI") else key_raw)
    out, errors = [], 0
    for r in rows:
        value = r["value"] or ""
        enc = bytes(r["encrypted_value"] or b"")
        if not value and enc:
            try:
                if enc[:3] in (b"v10", b"v11"):
                    plain = AESGCM(key).decrypt(enc[3:15], enc[15:], None)
                    # Cookies DB version >= 24 (Chrome 130+): 32 byte SHA256(host_key) dung truoc gia tri
                    value = (plain[32:] if db_version >= 24 else plain).decode("utf-8", "replace")
                else:
                    value = _dpapi_unprotect(enc).decode("utf-8", "replace")
            except Exception:
                errors += 1
                continue
        exp = int(r["expires_utc"] or 0)
        unix = int(exp / 1_000_000 - _CHROME_EPOCH_OFFSET) if exp > 0 else None
        out.append(to_launcher(r["name"], value, r["host_key"], r["path"], r["is_secure"], r["is_httponly"],
                               {0: "None", 1: "Lax", 2: "Strict"}.get(r["samesite"], "Lax"), unix))
    if errors and not out:
        raise ImportFail(f"{profile}: giai ma that bai ({errors} cookie)")
    return filter_and_dedupe(out)


# ----------------------------------------------------------------- extension export

def read_export_file(path: Path) -> list[dict]:
    text = path.read_text(encoding="utf-8-sig").strip()
    out: list[dict] = []
    if text.startswith("[") or text.startswith("{"):
        data = json.loads(text)
        if isinstance(data, dict):
            data = data.get("cookies") or data.get("data") or []
        for c in data:
            if not isinstance(c, dict) or not c.get("name"):
                continue
            domain = str(c.get("domain") or c.get("host") or SPX_HOST)
            if c.get("hostOnly") is True:
                domain = domain.lstrip(".")
            if c.get("session") is True:
                exp = None
            else:
                exp = c.get("expirationDate", c.get("expiry", c.get("expires")))
            out.append(to_launcher(c["name"], c.get("value"), domain, c.get("path"), c.get("secure"),
                                   c.get("httpOnly"), c.get("sameSite"), exp))
    else:  # Netscape cookies.txt
        for line in text.splitlines():
            http_only = line.startswith("#HttpOnly_")
            if http_only:
                line = line[len("#HttpOnly_"):]
            if not line.strip() or line.startswith("#"):
                continue
            parts = line.split("\t")
            if len(parts) < 7:
                continue
            domain, _sub, cpath, secure, exp, name, value = parts[:7]
            out.append(to_launcher(name, value, domain, cpath, secure.upper() == "TRUE", http_only, None,
                                   exp if exp not in ("0", "") else None))
    print(f"  File {path.name}: {len(out)} cookie, loc domain SPX...")
    return filter_and_dedupe(out)


# ----------------------------------------------------------------- validate + save

def _station_id() -> str:
    # Standalone: khong doc hub_helper launcher. Station bat ky du cho API read-only.
    return "4232"


def _is_auth_failure_body(body) -> bool:
    if not isinstance(body, dict):
        return False
    ret = body.get("retcode")
    if ret in (90309999, "90309999", 993000161, "993000161"):
        return True
    data = body.get("data")
    if isinstance(data, dict) and data.get("is_login") is False:
        return True
    msg = str(body.get("message") or "").lower()
    return any(x in msg for x in ("unauthorized", "forbidden", "login", "xac thuc", "auth"))


def _build_headers(sess) -> dict:
    csrf = ""
    try:
        csrf = sess.cookies.get("csrftoken", "") or ""
    except Exception:
        csrf = ""
    return {
        "accept": "application/json, text/plain, */*",
        "content-type": "application/json;charset=UTF-8",
        "user-agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/120.0.0.0 Safari/537.36"
        ),
        "app": "FMS Portal",
        "origin": "https://spx.shopee.vn",
        "referer": "https://spx.shopee.vn/",
        "x-csrftoken": csrf,
        "af-ac-enc-dat": "",
        "x-api-source": "pc",
    }


def validate(cookies: list[dict]) -> tuple[bool, str]:
    """1 GET read-only SPX bang requests (khong dung cookie_login launcher)."""
    import requests
    sess = requests.Session()
    for c in cookies:
        try:
            sess.cookies.set(
                c["name"], c["value"], domain=c.get("domain"), path=c.get("path") or "/"
            )
        except Exception:
            try:
                sess.cookies.set(c["name"], c["value"])
            except Exception:
                pass
    params = {
        "pageno": 1,
        "count": 1,
        "group_type": 4,
        "station_id": _station_id(),
        "is_filter": 1,
    }
    try:
        resp = sess.get(
            SPX_BASE + VALIDATE_PATH,
            params=params,
            headers=_build_headers(sess),
            timeout=30,
            allow_redirects=False,
        )
    except Exception as exc:
        return False, f"loi mang: {exc}"
    try:
        body = resp.json()
    except Exception:
        return False, f"HTTP {resp.status_code}, khong phai JSON (co the trang login)"
    ret = body.get("retcode") if isinstance(body, dict) else None
    msg = str((body or {}).get("message") or "")[:80] if isinstance(body, dict) else ""
    total = ((body or {}).get("data") or {}).get("total") if isinstance(body, dict) else None
    summary = f"HTTP {resp.status_code}, retcode={ret}, message={msg!r}, total_groups={total}"
    if resp.status_code == 200 and ret in (0, "0") and not _is_auth_failure_body(body):
        return True, summary
    return False, summary


def save(cookies: list[dict]) -> Path:
    out = cookie_file()
    # An toan: chi cho phep ghi trong pack/cookies/
    out = out.resolve()
    allowed = (ROOT / "cookies").resolve()
    if allowed not in out.parents and out.parent != allowed:
        raise ImportFail(f"Tu choi ghi ngoai pack cookies/: {out}")
    if out.exists():
        bak = out.with_name(
            out.name + ".pre_chromeimport_" + _dt.datetime.now().strftime("%Y%m%d_%H%M%S")
        )
        shutil.copy2(out, bak)
        print(f"  Backup: {bak}")
    out.parent.mkdir(parents=True, exist_ok=True)
    tmp = out.with_suffix(".json.tmp")
    tmp.write_text(json.dumps(cookies, ensure_ascii=False, indent=2), encoding="utf-8")
    tmp.replace(out)
    return out


def finish(cookies: list[dict], dry_run: bool) -> int:
    if not cookies:
        print("FAIL: khong co cookie SPX nao.")
        return 1
    print(f"  {len(cookies)} cookie SPX:")
    describe(cookies)
    if not has_session(cookies):
        print(f"FAIL: thieu {SESSION_COOKIE} -> chua login SPX trong Chrome nay. File cookie KHONG doi.")
        return 1
    ok, summary = validate(cookies)
    print(f"  Kiem tra API {VALIDATE_PATH}: {summary}")
    if not ok:
        print("FAIL: SPX tu choi cookie (het han / chua login). File cookie KHONG doi.")
        return 1
    if dry_run:
        print("OK (dry-run): cookie hop le, KHONG ghi file.")
        return 0
    out = save(cookies)
    print(f"OK: da ghi {out} ({len(cookies)} cookie). (values masked; dung spx_cookies.py de load)")
    return 0


# ----------------------------------------------------------------- commands

def cmd_status(port: int) -> int:
    ud = chrome_user_data()
    print(f"Chrome: {find_chrome_exe() or '(khong thay)'}  version {chrome_version(ud)}")
    print(f"chrome.exe dang chay: {chrome_process_count()} process")
    info = cdp_version(port)
    print(f"CDP {CDP_HOST}:{port}: {'ON - ' + str(info.get('Browser')) if info else 'OFF'}")
    print(f"Profile SPX rieng (debug): {debug_profile_dir()}  ton tai={debug_profile_dir().is_dir()}")
    print(f"Cookie pack (lm_hub_export): {cookie_file()}  ton tai={cookie_file().exists()}")
    print("  (KHONG ghi SPX_Launcher config/cookies/cookies_assign_pick.json)")
    if not ud:
        return 0
    try:
        state = json.loads((ud / "Local State").read_text(encoding="utf-8"))
        prof = state.get("profile") or {}
        print(f"User Data: {ud}  last_used={prof.get('last_used')}  "
              f"app_bound_key={'app_bound_encrypted_key' in (state.get('os_crypt') or {})}")
    except Exception:
        pass
    if chrome_major(ud) >= 136:
        print("  Luu y: Chrome >= 136 bo qua --remote-debugging-port tren User Data mac dinh -> dung profile rieng.")
    names = profile_names(ud)
    for d in sorted(p.name for p in ud.iterdir() if p.is_dir() and (p.name == "Default" or p.name.startswith("Profile "))):
        try:
            s = scan_profile(ud / d)
            print(f"  - {d} ({names.get(d, d)}): {s['count']} cookie SPX, ma hoa={s['prefixes']}, "
                  f"co {SESSION_COOKIE}={s['session_name']}")
        except ImportFail as exc:
            print(f"  - {d} ({names.get(d, d)}): {exc}")
    return 0


def cmd_auto(args) -> int:
    if cdp_version(args.port):
        print(f"1) CDP {CDP_HOST}:{args.port} dang mo -> doc cookie qua CDP")
        return finish(read_via_cdp(args.port), args.dry_run)
    print(f"1) CDP {CDP_HOST}:{args.port}: OFF")
    ud = chrome_user_data()
    if ud:
        print("2) Thu doc SQLite cac profile Chrome...")
        for d in sorted(p.name for p in ud.iterdir() if p.is_dir() and (p.name == "Default" or p.name.startswith("Profile "))):
            try:
                cookies = read_via_sqlite(ud, d)
            except ImportFail as exc:
                print(f"   - {exc}")
                continue
            if has_session(cookies):
                return finish(cookies, args.dry_run)
            print(f"   - {d}: khong co {SESSION_COOKIE}")
    print("FAIL: Khong lay duoc cookie tu Chrome dang mo (khong co debug port, cookie v20).\n"
          "  -> Chay chrome_cookie_import.bat (Chrome SPX rieng + CDP), hoac\n"
          "  -> export cookie spx.shopee.vn bang Cookie-Editor roi: --import-json <file>")
    return 2


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description="Lay cookie SPX tu Chrome -> C:\\lm_hub_export\\cookies\\cookies.json")
    g = ap.add_mutually_exclusive_group()
    g.add_argument("--status", "--list", action="store_true", help="Thong tin Chrome / profile / CDP")
    g.add_argument("--cdp", action="store_true", help="Doc cookie tu Chrome co debug port")
    g.add_argument("--launch-debug", action="store_true", help="Mo Chrome SPX rieng (debug port) roi doc cookie")
    g.add_argument("--sqlite", action="store_true", help="Thu doc SQLite (bi chan neu v20)")
    g.add_argument("--import-json", metavar="FILE", help="Cookie-Editor/EditThisCookie JSON hoac cookies.txt")
    ap.add_argument("--profile", default=None, help="Cho --sqlite: Default | Profile 1 ...")
    ap.add_argument("--wait-login", type=int, default=0, metavar="SEC",
                    help="Cho --launch-debug/--cdp: doi toi da SEC giay den khi co fms_user_skey hop le")
    ap.add_argument("--port", type=int, default=DEFAULT_PORT)
    ap.add_argument("--dry-run", action="store_true", help="Kiem tra nhung khong ghi file")
    args = ap.parse_args(argv)
    try:
        if args.status:
            return cmd_status(args.port)
        if args.import_json:
            return finish(read_export_file(Path(args.import_json)), args.dry_run)
        if args.sqlite:
            ud = chrome_user_data()
            if not ud:
                raise ImportFail("Khong tim thay Chrome User Data")
            return finish(read_via_sqlite(ud, args.profile or "Default"), args.dry_run)
        if args.launch_debug or args.cdp:
            if args.launch_debug:
                launch_debug_chrome(args.port)
            end = time.time() + max(0, args.wait_login)
            while True:
                cookies = read_via_cdp(args.port)
                if has_session(cookies) and validate(cookies)[0]:
                    break
                if time.time() >= end:
                    break
                print(f"  Chua co session SPX hop le - hay login {SPX_BASE} trong cua so Chrome SPX... "
                      f"(con {int(end - time.time())}s)")
                time.sleep(5)
            return finish(cookies, args.dry_run)
        return cmd_auto(args)
    except ImportFail as exc:
        print(f"FAIL: {exc}")
        return 1
    except KeyboardInterrupt:
        print("Huy.")
        return 130


if __name__ == "__main__":
    raise SystemExit(main())
