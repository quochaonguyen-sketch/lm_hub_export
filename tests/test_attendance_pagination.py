# -*- coding: utf-8 -*-
"""Attendance statistic_data_list pagination must not stop early."""
import unittest
from unittest import mock

import export_lm_hubs as m


def _row(i):
    return {"biz_staff_id": "S%s" % i, "ops_name": "Ops%s" % i}


def _page_payload(rows, total):
    return {"retcode": 0, "data": {"list": rows, "total": total}}


class AttendancePaginationTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        m._ROSTER_DATE_FROM, m._ROSTER_DATE_TO = m.default_roster_date_range()

    def setUp(self):
        self._orig_page_size = m._ATTENDANCE_PAGE_SIZE

    def tearDown(self):
        m._ATTENDANCE_PAGE_SIZE = self._orig_page_size

    def _run_fetch(self, pages_by_pageno, page_size):
        """pages_by_pageno: dict pageno -> (rows, total)."""
        m._ATTENDANCE_PAGE_SIZE = page_size
        calls = []

        def fake_get(sess, headers, params):
            pageno = int(params["pageno"])
            count = int(params["count"])
            calls.append({"pageno": pageno, "count": count})
            self.assertEqual(count, page_size)
            if pageno not in pages_by_pageno:
                return _page_payload([], pages_by_pageno[1][1]), None
            rows, total = pages_by_pageno[pageno]
            return _page_payload(rows, total), None

        with mock.patch.object(m, "_get_attendance_page", side_effect=fake_get):
            rows, err = m._fetch_attendance_all_pages(object(), {})
        return rows, err, calls

    def test_multi_page_when_total_gt_count_yields_all_58(self):
        """Hub 4232 style: count=50, api total=58 -> must fetch page 2 (8 rows)."""
        page1 = [_row(i) for i in range(1, 51)]
        page2 = [_row(i) for i in range(51, 59)]
        rows, err, calls = self._run_fetch(
            {1: (page1, 58), 2: (page2, 58)},
            page_size=50,
        )
        self.assertIsNone(err)
        self.assertEqual(len(rows), 58)
        self.assertEqual([c["pageno"] for c in calls], [1, 2])
        self.assertTrue(all(c["count"] == 50 for c in calls))
        ids = [r["biz_staff_id"] for r in rows]
        self.assertEqual(ids[0], "S1")
        self.assertEqual(ids[-1], "S58")

    def test_fails_if_stop_after_first_page_when_total_gt_count(self):
        """Regression guard: accumulated 50 with total 58 must not be final."""
        page1 = [_row(i) for i in range(1, 51)]
        page2 = [_row(i) for i in range(51, 59)]
        rows, err, calls = self._run_fetch(
            {1: (page1, 58), 2: (page2, 58)},
            page_size=50,
        )
        self.assertIsNone(err)
        self.assertNotEqual(
            len(rows),
            50,
            "fetcher stopped at one page while total=58 > count=50",
        )
        self.assertGreaterEqual(len(calls), 2)
        self.assertEqual(len(rows), 58)

    def test_single_page_when_total_le_count(self):
        """When total fits in one page, do not request page 2."""
        page1 = [_row(i) for i in range(1, 41)]
        rows, err, calls = self._run_fetch(
            {1: (page1, 40)},
            page_size=50,
        )
        self.assertIsNone(err)
        self.assertEqual(len(rows), 40)
        self.assertEqual([c["pageno"] for c in calls], [1])

    def test_keep_going_when_api_silently_caps_below_requested_count(self):
        """count=100 but API returns 50/page with total=58 -> still get 58."""
        page1 = [_row(i) for i in range(1, 51)]
        page2 = [_row(i) for i in range(51, 59)]
        rows, err, calls = self._run_fetch(
            {1: (page1, 58), 2: (page2, 58)},
            page_size=100,
        )
        self.assertIsNone(err)
        self.assertEqual(len(rows), 58)
        self.assertEqual([c["pageno"] for c in calls], [1, 2])
        # Short first page must NOT terminate when total says more remain.
        self.assertLess(len(page1), 100)
        self.assertEqual(calls[0]["count"], 100)

    def test_empty_second_page_stops_even_if_total_inflated(self):
        """Safety: empty list stops the loop (do not spin forever)."""
        page1 = [_row(i) for i in range(1, 51)]
        rows, err, calls = self._run_fetch(
            {1: (page1, 999), 2: ([], 999)},
            page_size=50,
        )
        self.assertIsNone(err)
        self.assertEqual(len(rows), 50)
        self.assertEqual([c["pageno"] for c in calls], [1, 2])


if __name__ == "__main__":
    unittest.main()
