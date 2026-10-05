# -*- coding: utf-8 -*-
"""One-off diagnose hub 2011 labor counts. Read-only dump."""
from __future__ import annotations
import json
import sys
from pathlib import Path

ROOT = Path(r"C:\lm_hub_export")
sys.path.insert(0, str(ROOT))

import export_lm_hubs as m

# Init roster day window like main
d_from, d_to = m.default_roster_date_range()
m._ROSTER_DATE_FROM = int(d_from)
m._ROSTER_DATE_TO = int(d_to)
m._ROSTER_AGENCY_ID = 0

cookie_path = ROOT / "cookies" / "cookies.json"
cookie_header = m.load_cookie_header(cookie_path) if hasattr(m, "load_cookie_header") else None

# Try common cookie helpers
if cookie_header is None:
    for name in ("read_cookie_header", "cookie_header_from_file", "build_headers", "make_session"):
        if hasattr(m, name):
            print("helper:", name)

# Inspect how fetch path builds session
src = Path(m.__file__).read_text(encoding="utf-8", errors="replace")
for needle in ["def load_", "def build_", "def make_", "Cookie", "SESSION", "def _session", "def open_session", "def create_session"]:
    pass

# Find session/header construction by reading symbols
names = [n for n in dir(m) if "cookie" in n.lower() or "session" in n.lower() or "header" in n.lower()]
print("symbols:", names)
