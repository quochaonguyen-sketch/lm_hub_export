# -*- coding: utf-8 -*-
"""Backlog D0: data.total only. One tracking_list/search body, no pagination, no network."""
from export_lm_hubs import backlog_d0_total, build_backlog_d0_body

ORDER_STATUS = (
    "333,1,42,2,5,409,410,43,44,210,211,72,67,10,581,575,124"
)


def test_backlog_d0_total_is_data_total_not_list_length():
    """Page list can be shorter than total (count=24). D0 is data.total only."""
    payload = {
        "retcode": 0,
        "message": "success",
        "data": {
            "total": 58,
            "list": [{"shipment_id": "S%d" % i} for i in range(3)],
        },
    }
    assert backlog_d0_total(payload) == 58


def test_backlog_d0_total_zero_when_total_is_zero():
    payload = {"data": {"total": 0, "list": [{"shipment_id": "still-here"}]}}
    assert backlog_d0_total(payload) == 0


def test_backlog_d0_total_ignores_top_level_total():
    """Only data.total counts. A sibling total must not win."""
    payload = {"total": 999, "data": {"total": 12, "list": []}}
    assert backlog_d0_total(payload) == 12


def test_build_backlog_d0_body_is_single_page():
    body = build_backlog_d0_body(4232)
    assert isinstance(body, dict)
    assert body["page_no"] == 1
    assert body["count"] == 24
    assert body["current_station_ids"] == "4232"
    assert isinstance(body["current_station_ids"], str)
    assert body["order_status"] == ORDER_STATUS
    # one request body — no multi-page fields
    for key in ("page_no_list", "pages", "pageno", "next_page"):
        assert key not in body


def test_build_backlog_d0_body_does_not_advance_page():
    """Calling the builder again must stay on page 1 / count 24 (no pagination)."""
    first = build_backlog_d0_body(166)
    second = build_backlog_d0_body("93")
    assert first["page_no"] == 1 and first["count"] == 24
    assert second["page_no"] == 1 and second["count"] == 24
    assert first["current_station_ids"] == "166"
    assert second["current_station_ids"] == "93"
    assert first["order_status"] == ORDER_STATUS
    assert second["order_status"] == ORDER_STATUS
    assert first is not second
