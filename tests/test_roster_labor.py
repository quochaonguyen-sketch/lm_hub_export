# -*- coding: utf-8 -*-
"""Unit tests for roster labor mapping / cook merge."""
import unittest
import export_lm_hubs as m


class RosterLaborTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        m._ROSTER_DATE_FROM, m._ROSTER_DATE_TO = m.default_roster_date_range()

    def test_part_time_precedes_agency_name(self):
        for agency in ("GRG", "AGR", "SKT"):
            self.assertEqual(m._map_labor_type(agency, "Agency Part-time"), "OS")

    def test_empty_calendar_part_time_shell_is_labor_only(self):
        day = m._ROSTER_DATE_FROM
        kept = {
            "ops_id": "Ops1", "agency_name": "in-house",
            "department_name": "FM/LM",
            "contract_type_name": "Inhouse-Full-time",
            "list": {"event_list": [{"event_station_id": 4232,
                                      "event_date": day,
                                      "clock_in_status": 3,
                                      "clock_in_time": 123}]},
        }
        shell = {
            "ops_id": "Ops2", "agency_name": "GRG",
            "department_name": "FM/LM",
            "contract_type_name": "Agency Part-time", "list": {},
        }
        row = m._cook_roster_hub_summary(
            [kept], [], 4232, "SDD", cal_labor_rows=[shell]
        )[0]
        self.assertEqual(row["scheduled_count"], 1)
        self.assertEqual(row["os_count"], 1)
        self.assertEqual(row["fte_count"], 1)
        self.assertEqual(row["late_count"], 1)
        self.assertIn("labor_source=calendar", row["metric_notes"])

    def test_rider_is_excluded_from_all_roster_metrics(self):
        day = m._ROSTER_DATE_FROM
        rider = {
            "ops_id": "Rider1", "agency_name": "GRG",
            "department_name": "Rider", "contract_type_name": "Rider OS",
            "list": {"event_list": [{"event_station_id": 4232,
                                      "event_date": day,
                                      "clock_in_status": 3,
                                      "clock_in_time": 123}]},
        }
        rider_attendance = {
            "biz_staff_id": "Rider2", "agency": "GRG",
            "staff_type": 2, "staff_type_name": "Ops",
            "department_name": "Rider", "contract_type": "Agency Part-time",
            "event_station_id": 4232, "date": "2026-10-02",
            "clock_in_status": 3,
        }
        row = m._cook_roster_hub_summary(
            [rider], [rider_attendance], 4232, "SDD",
            cal_labor_rows=[rider],
        )[0]
        self.assertEqual(row["scheduled_count"], 0)
        self.assertEqual(row["present_count"], 0)
        self.assertEqual(row["late_count"], 0)
        self.assertEqual(row["fte_count"], 0)
        self.assertEqual(row["os_count"], 0)
        self.assertEqual(row["bpo_count"], 0)

    def test_complete_attendance_labels_prefer_attendance_labor(self):
        """Hub-2011 style: calendar has absent FTE; attendance has OS not on calendar.

        When every attendance ops row is labeled, FTE/OS/BPO come from attendance
        only. Scheduled/present stay on calendar.
        """
        day = m._ROSTER_DATE_FROM
        cal_present = {
            "ops_id": "Ops1", "agency_name": "in-house",
            "department_name": "FM/LM",
            "contract_type_name": "Inhouse-Full-time",
            "list": {"event_list": [{"event_station_id": 2011,
                                      "event_date": day,
                                      "clock_in_status": 1,
                                      "clock_in_time": 123}]},
        }
        cal_absent = {
            "ops_id": "OpsAbsent", "agency_name": "in-house",
            "department_name": "FM/LM",
            "contract_type_name": "Inhouse-Full-time",
            "list": {"event_list": [{"event_station_id": 2011,
                                      "event_date": day}]},
        }
        cal_bpo = {
            "ops_id": "OpsBpo", "agency_name": "GRG",
            "department_name": "FM/LM",
            "contract_type_name": "Agency Full-time Skilled",
            "list": {"event_list": [{"event_station_id": 2011,
                                      "event_date": day,
                                      "clock_in_status": 1,
                                      "clock_in_time": 123}]},
        }
        att_fte = {
            "biz_staff_id": "Ops1", "agency": "in-house",
            "staff_type": 2, "staff_type_name": "Ops",
            "department_name": "FM/LM",
            "contract_type": "Inhouse-Full-time",
            "event_station_id": 2011, "date": "2026-10-02",
            "clock_in_status": 1,
        }
        att_os = {
            "biz_staff_id": "OpsOs", "agency": "GRG",
            "staff_type": 2, "staff_type_name": "Ops",
            "department_name": "FM/LM",
            "contract_type": "Agency Part-time",
            "event_station_id": 2011, "date": "2026-10-02",
            "clock_in_status": 1,
        }
        att_bpo = {
            "biz_staff_id": "OpsBpo", "agency": "GRG",
            "staff_type": 2, "staff_type_name": "Ops",
            "department_name": "FM/LM",
            "contract_type": "Agency Full-time Skilled",
            "event_station_id": 2011, "date": "2026-10-02",
            "clock_in_status": 1,
        }
        row = m._cook_roster_hub_summary(
            [cal_present, cal_absent, cal_bpo],
            [att_fte, att_os, att_bpo],
            2011,
            "Hub",
        )[0]
        self.assertEqual(row["scheduled_count"], 3)
        self.assertEqual(row["present_count"], 2)
        self.assertEqual(row["fte_count"], 1)
        self.assertEqual(row["os_count"], 1)
        self.assertEqual(row["bpo_count"], 1)
        self.assertIn("labor_source=attendance", row["metric_notes"])

    def test_incomplete_attendance_falls_back_to_calendar_plus_extra(self):
        """If any attendance ops row lacks labels, keep calendar + unmatched extras."""
        day = m._ROSTER_DATE_FROM
        kept = {
            "ops_id": "Ops1", "agency_name": "in-house",
            "department_name": "FM/LM",
            "contract_type_name": "Inhouse-Full-time",
            "list": {"event_list": [{"event_station_id": 4232,
                                      "event_date": day,
                                      "clock_in_status": 1,
                                      "clock_in_time": 123}]},
        }
        att_labeled_os = {
            "biz_staff_id": "Ops2", "agency": "AGR",
            "staff_type": 2, "staff_type_name": "Ops",
            "department_name": "FM/LM",
            "contract_type": "Agency Part-time",
            "event_station_id": 4232, "date": "2026-10-02",
            "clock_in_status": 1,
        }
        att_unlabeled = {
            "biz_staff_id": "Ops3",
            "staff_type": 2, "staff_type_name": "Ops",
            "department_name": "FM/LM",
            "event_station_id": 4232, "date": "2026-10-02",
            "clock_in_status": 1,
        }
        row = m._cook_roster_hub_summary(
            [kept], [att_labeled_os, att_unlabeled], 4232, "SDD"
        )[0]
        self.assertEqual(row["fte_count"], 1)
        self.assertEqual(row["os_count"], 1)
        self.assertIn("labor_source=calendar+attendance", row["metric_notes"])

    def test_no_attendance_uses_calendar_labor(self):
        day = m._ROSTER_DATE_FROM
        kept = {
            "ops_id": "Ops1", "agency_name": "in-house",
            "department_name": "FM/LM",
            "contract_type_name": "Inhouse-Full-time",
            "list": {"event_list": [{"event_station_id": 4232,
                                      "event_date": day,
                                      "clock_in_status": 1,
                                      "clock_in_time": 123}]},
        }
        row = m._cook_roster_hub_summary([kept], [], 4232, "SDD")[0]
        self.assertEqual(row["fte_count"], 1)
        self.assertEqual(row["os_count"], 0)
        self.assertIn("labor_source=calendar", row["metric_notes"])



    def test_attendance_list_only_not_scheduled(self):
        """attendance_list alone must not increment scheduled/present."""
        day = m._ROSTER_DATE_FROM
        with_event = {
            "ops_id": "Ops1", "agency_name": "in-house",
            "department_name": "FM/LM",
            "contract_type_name": "Inhouse-Full-time",
            "list": {"event_list": [{"event_station_id": 166,
                                      "event_date": day,
                                      "clock_in_time": 123}]},
        }
        att_only = {
            "ops_id": "OpsAttOnly", "agency_name": "in-house",
            "department_name": "FM/LM",
            "contract_type_name": "Inhouse-Full-time",
            "list": {"attendance_list": [{"event_station_id": 166,
                                           "attendance_date": day,
                                           "clock_in_time": 456}]},
        }
        empty_list = {
            "ops_id": "OpsEmpty", "agency_name": "in-house",
            "department_name": "FM/LM",
            "contract_type_name": "Inhouse-Full-time",
            "list": {},
        }
        row = m._cook_roster_hub_summary(
            [with_event, att_only, empty_list], [], 166, "Hub166"
        )[0]
        self.assertEqual(row["scheduled_count"], 1)
        self.assertEqual(row["present_count"], 1)

    def test_event_list_no_clock_in_is_scheduled_not_present(self):
        day = m._ROSTER_DATE_FROM
        row = m._cook_roster_hub_summary(
            [{
                "ops_id": "Ops1", "agency_name": "in-house",
                "department_name": "FM/LM",
                "contract_type_name": "Inhouse-Full-time",
                "list": {"event_list": [{"event_station_id": 166,
                                          "event_date": day}]},
            }],
            [],
            166,
            "Hub166",
        )[0]
        self.assertEqual(row["scheduled_count"], 1)
        self.assertEqual(row["present_count"], 0)


if __name__ == "__main__":
    unittest.main()
