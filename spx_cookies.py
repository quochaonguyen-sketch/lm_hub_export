"""LOADER (khong phai importer) — Minimal SPX cookie JSON loader (standalone — khong phu thuoc SPX_Launcher).

Cookie file: list JSON [{name, value, domain, path, ...}, ...]
Mac dinh: <pack>/cookies/cookies.json
Override: env LM_HUB_COOKIE_FILE hoac --cookie-file

De LAY/REFRESH cookie tu Chrome: chrome_cookie_import.py / .bat
(ghi cookies/cookies.json). File nay chi DOC cookie da co.
"""
from __future__ import annotations

import json
import os
from pathlib import Path

import requests

PACK_ROOT = Path(__file__).resolve().parent
DEFAULT_COOKIE_FILE = PACK_ROOT / "cookies" / "cookies.json"


class CookieError(RuntimeError):
    pass


def resolve_cookie_file(explicit=None):
    if explicit:
        return Path(explicit)
    env = (os.environ.get("LM_HUB_COOKIE_FILE") or "").strip()
    if env:
        return Path(env)
    return DEFAULT_COOKIE_FILE


def load_cookies(path=None):
    cookie_path = resolve_cookie_file(path)
    if not cookie_path.is_file():
        raise CookieError(
            "Khong tim thay cookie file: %s\n"
            "Copy JSON cookie (list {name,value,domain,...}) vao cookies/cookies.json\n"
            "Hoac set LM_HUB_COOKIE_FILE / --cookie-file."
            % cookie_path
        )
    try:
        raw = json.loads(cookie_path.read_text(encoding="utf-8-sig"))
    except Exception as exc:
        raise CookieError("Doc cookie that bai (%s): %s" % (cookie_path, exc)) from exc
    if not isinstance(raw, list):
        raise CookieError("Cookie JSON phai la list cac object, khong phai %s" % type(raw).__name__)
    cookies = [c for c in raw if isinstance(c, dict) and c.get("name")]
    if not cookies:
        raise CookieError("Cookie file rong / khong co name: %s" % cookie_path)
    return cookies, cookie_path


def has_session_cookie(cookies):
    return any(str(c.get("name") or "") == "fms_user_skey" and c.get("value") for c in cookies)


def build_session(cookie_file=None):
    """requests.Session + anti-fraud headers (giong launcher build_spx_api_headers)."""
    cookies, cookie_path = load_cookies(cookie_file)
    if not has_session_cookie(cookies):
        raise CookieError(
            "Thieu cookie fms_user_skey trong %s — can session SPX hop le." % cookie_path
        )
    sess = requests.Session()
    for c in cookies:
        name = str(c.get("name") or "")
        value = str(c.get("value") or "")
        domain = c.get("domain")
        try:
            if domain:
                sess.cookies.set(name, value, domain=str(domain))
            else:
                sess.cookies.set(name, value)
        except Exception:
            try:
                sess.cookies.set(name, value)
            except Exception:
                pass
    csrf = ""
    try:
        csrf = sess.cookies.get("csrftoken", "") or ""
    except Exception:
        csrf = ""
    headers = {
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
    return sess, headers, cookie_path
