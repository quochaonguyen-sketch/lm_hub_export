# -*- coding: utf-8 -*-
"""cookie_launcher: tinh gio con lai + nhan dien Chrome SPX rieng. Khong goi mang."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

import cookie_launcher as cl  # noqa: E402

NOW = 1_800_000_000.0


def _ck(name="fms_user_skey", expiry=None):
    c = {"domain": "spx.shopee.vn", "name": name, "value": "x" * 20, "path": "/"}
    if expiry is not None:
        c["expiry"] = expiry
    return c


def test_expired():
    h = cl.hours_left([_ck(expiry=int(NOW - 3600))], now=NOW)
    assert h is not None and abs(h + 1.0) < 1e-6
    assert cl.hours_text(h) == "da het han"
    assert cl.too_short(h, 30)


def test_five_hours_left():
    h = cl.hours_left([_ck("csrftoken", int(NOW + 99999)), _ck(expiry=int(NOW + 5 * 3600))], now=NOW)
    assert abs(h - 5.0) < 1e-6
    assert cl.hours_text(h) == "con 5.0 gio"
    assert not cl.too_short(h, 30)


def test_twenty_minutes_is_too_short():
    h = cl.hours_left([_ck(expiry=int(NOW + 20 * 60))], now=NOW)
    assert cl.too_short(h, 30)


def test_missing_expiry_or_cookie():
    assert cl.hours_left([_ck()], now=NOW) is None
    assert cl.hours_left([_ck("csrftoken", int(NOW + 3600))], now=NOW) is None
    assert cl.hours_left([], now=NOW) is None
    assert cl.hours_text(None) == "khong ro han"
    assert not cl.too_short(None, 30)


def test_debug_profile_cmdline_only_matches_spx_profile():
    prof = Path(r"C:\lm_hub_export\data\chrome_debug_profile")
    assert cl.is_debug_profile_cmdline(
        r'"C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222 '
        r"--user-data-dir=C:\lm_hub_export\data\chrome_debug_profile --no-first-run", prof)
    assert cl.is_debug_profile_cmdline(
        r'chrome.exe --type=renderer --user-data-dir="C:\LM_HUB_EXPORT\data\chrome_debug_profile" --x', prof)
    # Chrome thuong cua user: KHONG duoc khop
    assert not cl.is_debug_profile_cmdline(r'"C:\Program Files\Google\Chrome\Application\chrome.exe"', prof)
    assert not cl.is_debug_profile_cmdline(
        r'chrome.exe --user-data-dir="C:\Users\me\AppData\Local\Google\Chrome\User Data"', prof)
    assert not cl.is_debug_profile_cmdline(
        r"chrome.exe --user-data-dir=C:\lm_hub_export\data\chrome_debug_profile_old", prof)
    assert not cl.is_debug_profile_cmdline(None, prof)
