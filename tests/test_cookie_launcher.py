# -*- coding: utf-8 -*-
"""cookie_launcher: tinh gio con lai + nhan dien Chrome SPX rieng. Khong goi mang."""
import sys
import argparse
import io
import threading
from pathlib import Path

import pytest

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


def test_api_selection_matches_export_registry():
    import export_lm_hubs as exporter
    assert tuple(cl.API_OPTIONS) == tuple(exporter.API_SPECS)
    assert cl.parse_apis("backlog,event_list,backlog") == "backlog,roster"
    assert cl.parse_apis("ALL") == ",".join(exporter.API_SPECS)
    for value in ("", ",", "bad", "order_volume,bad"):
        with pytest.raises(argparse.ArgumentTypeError):
            cl.parse_apis(value)


@pytest.mark.parametrize("value", ["0", "-1", "nan", "inf"])
def test_invalid_interval(value):
    with pytest.raises(argparse.ArgumentTypeError):
        cl.positive_minutes(value)


def test_delayed_schedule_can_run_now_and_releases_lock(monkeypatch):
    args = cl.build_parser().parse_args(["--once", "--start-delayed", "--no-export"])
    args.stop_event = threading.Event()
    args.run_now_event = threading.Event()
    phases = []
    def status(phase, details):
        phases.append(phase)
        if phase == "waiting":
            assert details["due"] > cl.time.monotonic() + 3500
            args.run_now_event.set()
    args.status_callback = status
    lock = io.StringIO()
    monkeypatch.setattr(cl, "acquire_lock", lambda: lock)
    monkeypatch.setattr(cl, "log", lambda *a: None)
    calls = []
    monkeypatch.setattr(cl, "one_cycle", lambda *a: calls.append(a) or True)
    assert cl.run_loop(args) == 0
    assert len(calls) == 1
    assert phases == ["waiting", "finished"]
    assert lock.closed


def test_stop_during_schedule_does_not_start_cycle(monkeypatch):
    args = cl.build_parser().parse_args(["--start-delayed"])
    args.stop_event = threading.Event()
    args.status_callback = lambda *a: args.stop_event.set()
    lock = io.StringIO()
    monkeypatch.setattr(cl, "acquire_lock", lambda: lock)
    monkeypatch.setattr(cl, "log", lambda *a: None)
    monkeypatch.setattr(cl, "one_cycle", lambda *a: pytest.fail("must not start"))
    assert cl.run_loop(args) == 130
    assert lock.closed


def test_export_failure_is_not_reported_as_success(monkeypatch):
    args = cl.build_parser().parse_args([])
    monkeypatch.setattr(cl, "_rotate_log", lambda: None)
    monkeypatch.setattr(cl, "log", lambda *a: None)
    monkeypatch.setattr(cl, "load_cookies", lambda: [_ck(expiry=cl.time.time() + 7200)])
    monkeypatch.setattr(cl, "check_cookies", lambda cookies: (True, "OK"))
    monkeypatch.setattr(cl, "run_export", lambda args: 1)
    assert not cl.one_cycle(args, cl._now())


def test_export_command_uses_selected_apis_and_cancels(monkeypatch):
    args = cl.build_parser().parse_args(["--apis", "backlog,roster"])
    args.stop_event = threading.Event()
    commands = []
    class Process:
        stdout = io.StringIO("")
        returncode = None
        terminated = False
        def poll(self):
            args.stop_event.set()
            return None
        def terminate(self):
            self.terminated = True
        def wait(self, timeout=None):
            self.returncode = -1
            return -1
    process = Process()
    monkeypatch.setattr(cl, "other_export_running", lambda: False)
    monkeypatch.setattr(cl, "log", lambda *a: None)
    monkeypatch.setattr(cl.subprocess, "Popen", lambda cmd, **kw: commands.append(cmd) or process)
    with pytest.raises(cl.CycleCancelled):
        cl.run_export(args)
    assert commands[0][-2:] == ["--apis", "backlog,roster"]
    assert process.terminated


def test_cookie_counts_do_not_infer_validity_from_session_cookies():
    from cookie_launcher_ui import cookie_summary, duration
    cookies = [_ck(expiry=NOW + 100), _ck(expiry=NOW - 100), _ck(), _ck(expiry=float("nan"))]
    assert cookie_summary(cookies, NOW) == (1, 1, 2)
    assert duration(3661) == "01:01:01"
    assert duration(-10) == "00:00:00"
    assert cl.session_expiry([_ck(expiry=float("inf"))]) is None
