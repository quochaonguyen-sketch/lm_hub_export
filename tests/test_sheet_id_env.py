"""Sheet ID env: per-tab override, shared env, hardcoded default."""

import google_sheets_export as gs


def _clear(monkeypatch):
    keys = [
        "LM_HUB_GOOGLE_SHEET_ID",
        "GOOGLE_SHEET_ID",
        "LM_HUB_ROSTER_SHEET_ID",
        "ROSTER_SHEET_ID",
        "LM_HUB_BACKLOG_SHEET_ID",
        "BACKLOG_SHEET_ID",
        "LM_HUB_DELIVERY_PROGRESS_SHEET_ID",
        "DELIVERY_PROGRESS_SHEET_ID",
        "LM_HUB_ORDER_VOLUME_SHEET_ID",
        "ORDER_VOLUME_SHEET_ID",
    ]
    for key in keys:
        monkeypatch.delenv(key, raising=False)


def test_unset_keeps_default(monkeypatch):
    _clear(monkeypatch)
    assert gs.resolve_sheet_id() == gs.DEFAULT_GOOGLE_SHEET_ID
    assert gs.resolve_sheet_id(tab_title="Backlog D0") == gs.DEFAULT_GOOGLE_SHEET_ID


def test_shared_env_applies_to_every_tab(monkeypatch):
    _clear(monkeypatch)
    monkeypatch.setenv("LM_HUB_GOOGLE_SHEET_ID", "shared-id")
    assert gs.resolve_sheet_id(tab_title="Roster D0") == "shared-id"
    assert gs.resolve_sheet_id(tab_title="Order Volume D0") == "shared-id"


def test_google_sheet_id_alias(monkeypatch):
    _clear(monkeypatch)
    monkeypatch.setenv("GOOGLE_SHEET_ID", "alias-id")
    assert gs.resolve_sheet_id() == "alias-id"


def test_per_tab_overrides_shared(monkeypatch):
    _clear(monkeypatch)
    monkeypatch.setenv("LM_HUB_GOOGLE_SHEET_ID", "shared-id")
    monkeypatch.setenv("BACKLOG_SHEET_ID", "backlog-id")
    monkeypatch.setenv("LM_HUB_ROSTER_SHEET_ID", "roster-id")
    assert gs.resolve_sheet_id(tab_title="Backlog D0") == "backlog-id"
    assert gs.resolve_sheet_id(tab_title="Roster D0") == "roster-id"
    assert gs.resolve_sheet_id(tab_title="Delivery Progress D0") == "shared-id"


def test_explicit_flag_wins(monkeypatch):
    _clear(monkeypatch)
    monkeypatch.setenv("ROSTER_SHEET_ID", "roster-id")
    assert gs.resolve_sheet_id("flag-id", tab_title="Roster D0") == "flag-id"


def test_empty_env_is_unset(monkeypatch):
    _clear(monkeypatch)
    monkeypatch.setenv("LM_HUB_GOOGLE_SHEET_ID", "   ")
    monkeypatch.setenv("ORDER_VOLUME_SHEET_ID", "")
    assert gs.resolve_sheet_id(tab_title="Order Volume D0") == gs.DEFAULT_GOOGLE_SHEET_ID
