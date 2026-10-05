"""Native, dependency-free control panel for the SPX cookie launcher."""
from __future__ import annotations

import argparse
import math
import os
import queue
import threading
import time
import tkinter as tk
from tkinter import ttk

import cookie_launcher as cl

BG = "#eef2f4"
SURFACE = "#ffffff"
INK = "#182b35"
MUTED = "#647680"
ACCENT = "#137c70"


def duration(seconds):
    seconds = max(0, math.ceil(seconds))
    hours, remainder = divmod(seconds, 3600)
    minutes, seconds = divmod(remainder, 60)
    return f"{hours:02d}:{minutes:02d}:{seconds:02d}"


def cookie_summary(cookies, now):
    """Local metadata only; session validity still requires an API check."""
    active = expired = unknown = 0
    for cookie in cookies:
        expiry = cookie.get("expiry", cookie.get("expires", cookie.get("expirationDate")))
        try:
            expiry = float(expiry)
        except (TypeError, ValueError):
            expiry = 0
        if not math.isfinite(expiry) or expiry <= 0:
            unknown += 1
        elif expiry > now:
            active += 1
        else:
            expired += 1
    return active, expired, unknown


class LauncherWindow:
    def __init__(self, root, defaults):
        self.root = root
        self.defaults = defaults
        self.events = queue.Queue()
        self.worker = None
        self.stop_event = threading.Event()
        self.run_now_event = threading.Event()
        self.due = None
        self.phase = "idle"
        self.closing = False
        self.cookies = []
        self.cookie_stamp = object()
        self.controls = []
        self.root.title("SPX · Cookie launcher")
        self.root.geometry("1120x820")
        self.root.minsize(1000, 760)
        self.root.configure(bg=BG)
        self.root.protocol("WM_DELETE_WINDOW", self.close)
        self.interval = tk.StringVar(value=f"{defaults.interval_min:g}")
        self.refresh = tk.StringVar(value=f"{defaults.refresh_before_min:g}")
        self.mode = tk.StringVar(value="once" if defaults.once else "repeat")
        self.immediate = tk.BooleanVar(value=not defaults.start_delayed)
        self.no_export = tk.BooleanVar(value=defaults.no_export)
        self.apis = {key: tk.BooleanVar(value=key in cl.parse_apis(defaults.apis).split(","))
                     for key in cl.API_OPTIONS}
        self.state_text = tk.StringVar(value="Sẵn sàng")
        self.error_text = tk.StringVar()
        self.last_text = tk.StringVar(value="Chưa chạy lần nào")
        self.next_text = tk.StringVar(value="Chưa đặt lịch")
        self.session_text = tk.StringVar(value="—")
        self.session_detail = tk.StringVar()
        self.count_text = tk.StringVar(value="—")
        self.count_detail = tk.StringVar()
        self.selection_text = tk.StringVar()
        self._styles()
        self._layout()
        for variable in [self.no_export, *self.apis.values()]:
            variable.trace_add("write", lambda *_: self.selection_changed())
        self.selection_changed()
        cl.LOG_LISTENER = lambda line: self.events.put(("log", line))
        self.tick()

    def _styles(self):
        style = ttk.Style(self.root)
        style.theme_use("clam")
        style.configure("TFrame", background=SURFACE)
        style.configure("TLabel", background=SURFACE, foreground=INK, font=("Segoe UI", 10))
        style.configure("Muted.TLabel", foreground=MUTED)
        style.configure("Title.TLabel", font=("Segoe UI", 12, "bold"))
        style.configure("TCheckbutton", background=SURFACE, foreground=INK,
                        font=("Segoe UI", 10), padding=2)
        style.map("TCheckbutton", background=[("active", "#edf6f4")])
        style.configure("TRadiobutton", background=SURFACE, font=("Segoe UI", 10), padding=3)
        style.configure("TEntry", padding=7, font=("Segoe UI", 11))
        style.configure("TButton", font=("Segoe UI", 10, "bold"), padding=(14, 9),
                        background="#e7edef", foreground=INK, borderwidth=0)
        style.map("TButton", background=[("active", "#d7e3e6")],
                  foreground=[("disabled", "#8b999f")])
        style.configure("Primary.TButton", background=ACCENT, foreground="white")
        style.map("Primary.TButton", background=[("disabled", "#a9c9c4"), ("active", "#0b665c")],
                  foreground=[("disabled", "#ffffff")])

    def panel(self, parent, row, column, **grid):
        panel = ttk.Frame(parent, padding=16)
        panel.grid(row=row, column=column, sticky="nsew", **grid)
        return panel

    def _layout(self):
        outer = tk.Frame(self.root, bg=BG)
        outer.pack(fill="both", expand=True, padx=24, pady=18)
        header = tk.Frame(outer, bg=BG)
        header.pack(fill="x", pady=(0, 12))
        tk.Label(header, text="SPX  /  VẬN HÀNH DỮ LIỆU", bg=BG, fg=ACCENT,
                 font=("Segoe UI", 10, "bold")).pack(anchor="w")
        tk.Label(header, text="Cookie launcher", bg=BG, fg=INK,
                 font=("Segoe UI", 24, "bold")).pack(side="left")
        tk.Label(header, textvariable=self.state_text, bg="#dcece8", fg=ACCENT,
                 font=("Segoe UI", 11, "bold"), padx=16, pady=9).pack(side="right", pady=6)

        metrics = tk.Frame(outer, bg=BG)
        metrics.pack(fill="x", pady=(0, 12))
        for i in range(3):
            metrics.columnconfigure(i, weight=1, uniform="metrics")
        cards = [("Cookie còn hạn", self.count_text, self.count_detail),
                 ("Phiên SPX còn lại", self.session_text, self.session_detail),
                 ("Lần chạy tiếp theo", self.next_text, self.last_text)]
        for i, (title, value, detail) in enumerate(cards):
            card = self.panel(metrics, 0, i, padx=(0 if i == 0 else 8, 0))
            ttk.Label(card, text=title, style="Muted.TLabel").pack(anchor="w")
            ttk.Label(card, textvariable=value, font=("Consolas", 22, "bold")).pack(anchor="w", pady=(7, 5))
            ttk.Label(card, textvariable=detail, style="Muted.TLabel", wraplength=285).pack(anchor="w")

        settings = tk.Frame(outer, bg=BG)
        settings.pack(fill="x", pady=(0, 8))
        settings.columnconfigure(0, weight=1, uniform="settings")
        settings.columnconfigure(1, weight=1, uniform="settings")
        schedule = self.panel(settings, 0, 0, padx=(0, 8))
        ttk.Label(schedule, text="01  Lịch chạy", style="Title.TLabel").pack(anchor="w", pady=(0, 8))
        modes = ttk.Frame(schedule)
        modes.pack(fill="x")
        for value, label in [("once", "Chạy một lần"), ("repeat", "Chạy lặp")]:
            widget = ttk.Radiobutton(modes, text=label, value=value, variable=self.mode)
            widget.pack(side="left", padx=(0, 16))
            self.controls.append(widget)
        self.check(schedule, "Chạy ngay khi bấm bắt đầu", self.immediate).pack(anchor="w", pady=(6, 8))
        fields = ttk.Frame(schedule)
        fields.pack(fill="x")
        for row, (label, variable) in enumerate([
                ("Lặp mỗi (phút)", self.interval), ("Làm mới khi còn dưới (phút)", self.refresh)]):
            ttk.Label(fields, text=label).grid(row=row, column=0, sticky="w", pady=5)
            entry = ttk.Entry(fields, textvariable=variable, width=8)
            entry.grid(row=row, column=1, padx=(18, 0), pady=5)
            self.controls.append(entry)
        ttk.Label(schedule, text="Bỏ chọn chạy ngay để đợi đủ chu kỳ trước lượt đầu.\n"
                  "Chu kỳ tính từ lúc bắt đầu mỗi lượt; các lượt không chồng nhau.",
                  style="Muted.TLabel", font=("Segoe UI", 9), wraplength=440).pack(anchor="w", pady=(8, 0))
        api_panel = self.panel(settings, 0, 1)
        api_header = ttk.Frame(api_panel)
        api_header.pack(fill="x", pady=(0, 8))
        ttk.Label(api_header, text="02  API cần chạy", style="Title.TLabel").pack(side="left")
        select = ttk.Button(api_header, text="Chọn tất cả", command=self.select_all)
        select.pack(side="right")
        self.controls.append(select)
        for key, (label, description) in cl.API_OPTIONS.items():
            self.check(api_panel, f"{label}   ·   {key}", self.apis[key]).pack(anchor="w")
        self.check(api_panel, "Chỉ kiểm tra / làm mới cookie", self.no_export).pack(anchor="w", pady=(8, 0))
        ttk.Label(api_panel, textvariable=self.selection_text, style="Muted.TLabel").pack(anchor="w", pady=(5, 0))

        actions = tk.Frame(outer, bg=BG)
        actions.pack(fill="x", pady=(0, 6))
        self.start_button = ttk.Button(actions, text="Bắt đầu", style="Primary.TButton", command=self.start)
        self.start_button.pack(side="left")
        self.now_button = ttk.Button(actions, text="Chạy ngay lượt kế", command=self.run_now, state="disabled")
        self.now_button.pack(side="left", padx=8)
        self.stop_button = ttk.Button(actions, text="Dừng", command=self.stop, state="disabled")
        self.stop_button.pack(side="left")
        ttk.Button(actions, text="Mở output", command=lambda: self.open_path(cl.LOG_FILE.parent)).pack(side="right")
        ttk.Button(actions, text="Mở log", command=lambda: self.open_path(cl.LOG_FILE)).pack(side="right", padx=8)
        tk.Label(outer, textvariable=self.error_text, bg=BG, fg="#ad4535",
                 anchor="w", font=("Segoe UI", 10), wraplength=1020).pack(fill="x", pady=(0, 6))
        tk.Label(outer, text="Hạn cookie lấy từ file; hiệu lực phiên được xác nhận khi kiểm tra API."
                 "  •  Cookie tự làm mới qua Chrome SPX riêng.", bg=BG, fg=MUTED,
                 font=("Segoe UI", 9)).pack(side="bottom", anchor="w", pady=(10, 0))
        log_panel = ttk.Frame(outer, padding=12)
        log_panel.pack(fill="both", expand=True)
        log_header = ttk.Frame(log_panel)
        log_header.pack(fill="x", pady=(0, 9))
        ttk.Label(log_header, text="Nhật ký hoạt động", style="Title.TLabel").pack(side="left")
        ttk.Label(log_header, text="Cập nhật trực tiếp", style="Muted.TLabel").pack(side="right")
        log_body = ttk.Frame(log_panel)
        log_body.pack(fill="both", expand=True)
        self.log_text = tk.Text(log_body, height=7, bg="#f5f8f9", fg=INK, relief="flat",
                                font=("Consolas", 10), wrap="word", padx=10, pady=8,
                                state="disabled", highlightthickness=1, highlightbackground="#dee7ea")
        scroll = ttk.Scrollbar(log_body, command=self.log_text.yview)
        self.log_text.configure(yscrollcommand=scroll.set)
        scroll.pack(side="right", fill="y")
        self.log_text.pack(fill="both", expand=True)

    def check(self, parent, text, variable):
        widget = ttk.Checkbutton(parent, text=text, variable=variable)
        self.controls.append(widget)
        return widget

    def selection_changed(self):
        count = sum(v.get() for v in self.apis.values())
        self.selection_text.set("Không xuất dữ liệu; vẫn kiểm tra phiên SPX qua API."
                                if self.no_export.get() else f"Đã chọn {count}/{len(self.apis)} API")

    def select_all(self):
        for variable in self.apis.values():
            variable.set(True)

    def start(self):
        if self.worker and self.worker.is_alive():
            return
        try:
            interval = cl.positive_minutes(self.interval.get())
            refresh = float(self.refresh.get())
            if not math.isfinite(refresh) or refresh < 0:
                raise ValueError("Ngưỡng làm mới phải là số không âm.")
            chosen = ",".join(key for key, variable in self.apis.items() if variable.get())
            if not self.no_export.get() and not chosen:
                raise ValueError("Chọn ít nhất một API hoặc chọn chỉ kiểm tra cookie.")
        except (ValueError, argparse.ArgumentTypeError):
            self.error_text.set("Kiểm tra cấu hình: chu kỳ từ 1 phút, ngưỡng làm mới không âm và chọn ít nhất một API.")
            return
        args = argparse.Namespace(**vars(self.defaults))
        args.interval_min = interval
        args.refresh_before_min = refresh
        args.apis = chosen or "all"
        args.no_export = self.no_export.get()
        args.once = self.mode.get() == "once"
        args.start_delayed = not self.immediate.get()
        self.stop_event.clear()
        self.run_now_event.clear()
        args.stop_event = self.stop_event
        args.run_now_event = self.run_now_event
        args.status_callback = lambda phase, details: self.events.put((phase, details))
        self.error_text.set("")
        self.state_text.set("Đang khởi động")
        self.start_button.configure(state="disabled")
        self.stop_button.configure(state="normal")
        for control in self.controls:
            control.configure(state="disabled")
        def work():
            try:
                code = cl.run_loop(args)
            except Exception as exc:
                self.events.put(("error", str(exc)))
                code = 1
            self.events.put(("done", code))
        self.worker = threading.Thread(target=work, daemon=True)
        self.worker.start()

    def run_now(self):
        if self.phase == "waiting" and not self.stop_event.is_set():
            self.run_now_event.set()
            self.now_button.configure(state="disabled")

    def stop(self):
        self.stop_event.set()
        self.state_text.set("Đang dừng…")
        self.stop_button.configure(state="disabled")
        self.now_button.configure(state="disabled")

    def close(self):
        if self.worker and self.worker.is_alive():
            self.closing = True
            self.stop()
            self.error_text.set("Đang dừng tác vụ và chờ thao tác hiện tại hoàn tất…")
        else:
            cl.LOG_LISTENER = None
            self.root.destroy()

    def open_path(self, path):
        try:
            path.parent.mkdir(parents=True, exist_ok=True)
            if not path.exists():
                self.error_text.set("Chưa có log. Bấm Bắt đầu để tạo nhật ký.")
                return
            os.startfile(str(path))
        except OSError as exc:
            self.error_text.set(f"Không mở được {path.name}: {exc}")

    def handle_event(self, phase, data):
        if phase == "log":
            at_bottom = self.log_text.yview()[1] >= 0.99
            self.log_text.configure(state="normal")
            self.log_text.insert("end", data + "\n")
            if int(self.log_text.index("end-1c").split(".")[0]) > 2500:
                self.log_text.delete("1.0", "250.0")
            if at_bottom:
                self.log_text.see("end")
            self.log_text.configure(state="disabled")
        elif phase == "finished":
            self.last_text.set(f"Lượt {data['at']} · " + ("Thành công" if data["ok"] else "Chưa hoàn tất"))
            if not data["ok"]:
                self.error_text.set("Lượt chạy chưa hoàn tất. Xem nhật ký để biết lỗi cookie, mạng hoặc export.")
        elif phase == "error":
            self.error_text.set(data)
        elif phase == "done":
            self.phase = "idle"
            self.due = None
            self.state_text.set({0: "Hoàn tất", 130: "Đã dừng", 3: "Launcher khác đang chạy"}.get(data, "Cần kiểm tra"))
            if data == 3:
                self.error_text.set("Một launcher khác đang chạy. Dừng cửa sổ đó trước khi bắt đầu tại đây.")
            self.start_button.configure(state="normal")
            self.stop_button.configure(state="disabled")
            self.now_button.configure(state="disabled")
            for control in self.controls:
                control.configure(state="normal")
        else:
            self.phase = phase
            self.due = data.get("due")
            labels = {"waiting": "Đang chờ lịch", "check": "Đang kiểm tra cookie",
                      "refresh": "Đang làm mới cookie", "login": "Cần đăng nhập SPX",
                      "export": "Đang xuất dữ liệu"}
            if not self.stop_event.is_set():
                self.state_text.set(labels.get(phase, phase))
            self.now_button.configure(state="normal" if phase == "waiting" and not self.stop_event.is_set() else "disabled")

    def tick(self):
        for _ in range(250):
            try:
                self.handle_event(*self.events.get_nowait())
            except queue.Empty:
                break
        if self.closing and (not self.worker or not self.worker.is_alive()):
            cl.LOG_LISTENER = None
            self.root.destroy()
            return
        try:
            stat = cl.COOKIE_FILE.stat()
            stamp = (stat.st_mtime_ns, stat.st_size)
        except OSError:
            stamp = None
        if stamp != self.cookie_stamp:
            self.cookie_stamp = stamp
            self.cookies = cl.load_cookies()
        now = time.time()
        active, expired, unknown = cookie_summary(self.cookies, now)
        self.count_text.set(f"{active} / {len(self.cookies)}")
        self.count_detail.set(f"{expired} hết hạn · {unknown} không có hạn cụ thể")
        expiry = cl.session_expiry(self.cookies)
        if not cl.cci.has_session(self.cookies):
            self.session_text.set("Chưa có phiên")
            self.session_detail.set("Cần cookie fms_user_skey")
        elif expiry is None:
            self.session_text.set("Không rõ hạn")
            self.session_detail.set("Cookie phiên không có thời điểm hết hạn")
        else:
            self.session_text.set(duration(expiry - now) if expiry > now else "Đã hết hạn")
            self.session_detail.set("Hết hạn " + cl._dt.datetime.fromtimestamp(expiry).strftime("%d/%m · %H:%M:%S"))
        self.next_text.set(duration(self.due - time.monotonic()) if self.due is not None
                           else "Đang chạy" if self.phase != "idle" else "Chưa đặt lịch")
        self.root.after(200, self.tick)


def launch(defaults):
    root = tk.Tk()
    LauncherWindow(root, defaults)
    root.mainloop()
    return 0
