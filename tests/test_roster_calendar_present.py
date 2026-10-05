# -*- coding: utf-8 -*-
"""Calendar day / scheduled / present / hub-2011 roster cook unit tests."""
import unittest
from datetime import datetime, timedelta

import export_lm_hubs as m


class RosterCalendarDayTests(unittest.TestCase):
    """Calendar range must be TODAY ICT midnight for both start and end."""

    def test_default_roster_date_range_is_today_ict(self):
        mid, end = m.default_roster_date_range()
        now = datetime.now(m.TZ)
        expect_mid = now.replace(hour=0, minute=0, second=0, microsecond=0)
        expect_end = expect_mid + timedelta(days=1) - timedelta(seconds=1)
        self.assertEqual(mid, int(expect_mid.timestamp()))
        self.assertEqual(end, int(expect_end.timestamp()))
        # Sample Code cares about: 2026-10-02 ICT midnight == 1790874000
        if expect_mid.year == 2026 and expect_mid.month == 10 and expect_mid.day == 2:
            self.assertEqual(mid, 1790874000)

    def test_build_request_body_calendar_uses_today_midnight_both_ends(self):
        mid, end = m.default_roster_date_range()
        m._ROSTER_DATE_FROM = mid
        m._ROSTER_DATE_TO = end
        m._ROSTER_AGENCY_ID = 0
        body = m.build_request_body("roster", 166)
        self.assertEqual(body["agency_id"], 0)
        self.assertEqual(body["station_id"], 166)
        self.assertEqual(body["range_start_time"], mid)
        self.assertEqual(body["range_end_time"], mid)  # midnight, NOT end-of-day
        self.assertNotEqual(body["range_end_time"], end)
        if mid != 1790874000:
            self.assertNotEqual(body["range_start_time"], 1790874000)


class RosterScheduledPresentTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        m._ROSTER_DATE_FROM, m._ROSTER_DATE_TO = m.default_roster_date_range()

    def _ev(self, sid, clock_in=None, status=1):
        day = m._ROSTER_DATE_FROM
        ev = {"event_station_id": sid, "event_date": day}
        if clock_in is not None:
            ev["clock_in_time"] = clock_in
            ev["clock_in_status"] = status
        return ev

    def test_empty_event_list_excluded_from_scheduled(self):
        empty_list = {
            "ops_id": "A", "ops_name": "Alice",
            "agency_name": "in-house", "department_name": "FM/LM",
            "contract_type_name": "Inhouse-Full-time",
            "list": {"event_list": []},
        }
        no_list = {
            "ops_id": "B", "ops_name": "Bob",
            "agency_name": "in-house", "department_name": "FM/LM",
            "contract_type_name": "Inhouse-Full-time",
            "list": {},
        }
        kept = {
            "ops_id": "C", "ops_name": "Carol",
            "agency_name": "in-house", "department_name": "FM/LM",
            "contract_type_name": "Inhouse-Full-time",
            "list": {"event_list": [self._ev(166)]},
        }
        row = m._cook_roster_hub_summary(
            [empty_list, no_list, kept], [], 166, "Hub"
        )[0]
        self.assertEqual(row["scheduled_count"], 1)
        self.assertEqual(row["present_count"], 0)

    def test_nonempty_event_list_counts_as_scheduled(self):
        kept = {
            "ops_id": "C", "ops_name": "Carol",
            "agency_name": "in-house", "department_name": "FM/LM",
            "contract_type_name": "Inhouse-Full-time",
            "list": {"event_list": [self._ev(166)]},
        }
        keep, present = m._calendar_row_match(kept, 166, m._ROSTER_DATE_FROM)
        self.assertTrue(keep)
        self.assertFalse(present)

    def test_present_from_event_clock_in(self):
        kept = {
            "ops_id": "C", "ops_name": "Carol",
            "agency_name": "in-house", "department_name": "FM/LM",
            "contract_type_name": "Inhouse-Full-time",
            "list": {"event_list": [self._ev(166, clock_in=12345)]},
        }
        row = m._cook_roster_hub_summary([kept], [], 166, "Hub")[0]
        self.assertEqual(row["scheduled_count"], 1)
        self.assertEqual(row["present_count"], 1)

    def test_attendance_list_clock_in_does_not_make_present(self):
        """Present is event_list clock_in only; attendance_list alone is not present."""
        day = m._ROSTER_DATE_FROM
        kept = {
            "ops_id": "D", "ops_name": "Dan",
            "agency_name": "in-house", "department_name": "FM/LM",
            "contract_type_name": "Inhouse-Full-time",
            "list": {
                "event_list": [self._ev(166)],
                "attendance_list": [{
                    "event_station_id": 166,
                    "attendance_date": day,
                    "clock_in_time": 999,
                    "clock_in_status": 1,
                }],
            },
        }
        row = m._cook_roster_hub_summary([kept], [], 166, "Hub")[0]
        self.assertEqual(row["scheduled_count"], 1)
        self.assertEqual(row["present_count"], 0)

    def test_wrong_station_event_not_scheduled(self):
        kept = {
            "ops_id": "E", "ops_name": "Eve",
            "agency_name": "in-house", "department_name": "FM/LM",
            "contract_type_name": "Inhouse-Full-time",
            "list": {"event_list": [self._ev(999, clock_in=1)]},
        }
        row = m._cook_roster_hub_summary([kept], [], 166, "Hub")[0]
        self.assertEqual(row["scheduled_count"], 0)
        self.assertEqual(row["present_count"], 0)


class RosterHub2011LaborRegression(unittest.TestCase):
    """Hub 2011: complete labeled attendance -> 6 FTE / 1 OS / 1 BPO."""

    @classmethod
    def setUpClass(cls):
        m._ROSTER_DATE_FROM, m._ROSTER_DATE_TO = m.default_roster_date_range()

    def test_hub_2011_prefers_attendance_6_fte_1_os_1_bpo(self):
        day = m._ROSTER_DATE_FROM
        cal_rows = []
        for i in range(3):
            cin = 100 + i if i < 2 else None
            ev = {"event_station_id": 2011, "event_date": day}
            if cin is not None:
                ev["clock_in_time"] = cin
                ev["clock_in_status"] = 1
            cal_rows.append({
                "ops_id": "Cal%d" % i, "ops_name": "Cal Person %d" % i,
                "agency_name": "in-house", "department_name": "FM/LM",
                "contract_type_name": "Inhouse-Full-time",
                "list": {"event_list": [ev]},
            })
        att_rows = []
        for i in range(6):
            att_rows.append({
                "biz_staff_id": "FTE%d" % i, "staff_name": "FTE %d" % i,
                "agency": "in-house", "staff_type": 2, "staff_type_name": "Ops",
                "department_name": "FM/LM",
                "contract_type": "Inhouse-Full-time",
                "event_station_id": 2011, "date": "2026-10-02",
                "clock_in_status": 1,
            })
        att_rows.append({
            "biz_staff_id": "OS1", "staff_name": "OS One",
            "agency": "GRG", "staff_type": 2, "staff_type_name": "Ops",
            "department_name": "FM/LM",
            "contract_type": "Agency Part-time",
            "event_station_id": 2011, "date": "2026-10-02",
            "clock_in_status": 1,
        })
        att_rows.append({
            "biz_staff_id": "BPO1", "staff_name": "BPO One",
            "agency": "GRG", "staff_type": 2, "staff_type_name": "Ops",
            "department_name": "FM/LM",
            "contract_type": "Agency Full-time Skilled",
            "event_station_id": 2011, "date": "2026-10-02",
            "clock_in_status": 1,
        })
        row = m._cook_roster_hub_summary(cal_rows, att_rows, 2011, "Hub2011")[0]
        self.assertEqual(row["scheduled_count"], 3)
        self.assertEqual(row["present_count"], 2)
        self.assertEqual(row["fte_count"], 6)
        self.assertEqual(row["os_count"], 1)
        self.assertEqual(row["bpo_count"], 1)
        self.assertIn("labor_source=attendance", row["metric_notes"])


if __name__ == "__main__":
    unittest.main()
