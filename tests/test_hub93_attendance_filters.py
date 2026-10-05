# -*- coding: utf-8 -*-
"""Hub 93: attendance API total=12 must cook labor 12 (All+profile FM/LM kept).

Live SPX (2026-10-02, station 93 Linh Trung): statistic_data_list returns
total=12. All 12 pass Event Station + today filters. Two rows have
``department_name == "All"`` (with ``event_department_id == 999999``) but
``profile_department_name`` is FM/LM and ``staff_type`` is Ops — those count
as Ops FM/LM labor. Rider / Security / Office still excluded.

Cook must yield labor_sum FTE+OS+BPO = 12.
"""
import unittest

import export_lm_hubs as m


def _att(
    sid,
    *,
    dept="FM/LM",
    profile_dept="FM/LM",
    event_dept_name=None,
    event_dept_id=44,
    staff_type=2,
    staff_type_name="Ops",
    agency="in-house",
    contract="Inhouse-Full-time",
    clock_in_status=1,
    date="2026-10-02",
    esid=93,
):
    """SPX statistic_data_list row shape (hub-93 fields)."""
    return {
        "biz_staff_id": sid,
        "staff_name": "Staff %s" % sid,
        "staff_type": staff_type,
        "staff_type_name": staff_type_name,
        "agency": agency,
        "contract_type": contract,
        "department_name": dept,
        "event_department_name": event_dept_name,
        "event_department_id": event_dept_id,
        "profile_department_name": profile_dept,
        "event_station_id": esid,
        "date": date,
        "clock_in_status": clock_in_status,
        "clock_in_status_name": "Early In" if clock_in_status == 1 else "Late In",
    }


class Hub93AttendanceFilterKeepTests(unittest.TestCase):
    """Hub 93: All+profile FM/LM kept so API 12 -> cook labor 12."""

    @classmethod
    def setUpClass(cls):
        m._ROSTER_DATE_FROM, m._ROSTER_DATE_TO = m.default_roster_date_range()

    def _hub93_twelve_rows(self):
        """12 rows: 8 FTE FM/LM + 2 OS FM/LM + 2 dept=All (kept via profile)."""
        rows = []
        for i in range(8):
            rows.append(
                _att(
                    "FTE%d" % i,
                    agency="in-house",
                    contract="Inhouse-Full-time",
                )
            )
        for i in range(2):
            rows.append(
                _att(
                    "OS%d" % i,
                    agency="GRG",
                    contract="Agency Part-time",
                )
            )
        # Live: Ops + Agency Part-time, department_name=All, profile FM/LM
        for i, sid in enumerate(("Ops74319", "Ops244880")):
            rows.append(
                _att(
                    sid,
                    dept="All",
                    profile_dept="FM/LM",
                    event_dept_name=None,
                    event_dept_id=999999,
                    agency="GRG",
                    contract="Agency Part-time",
                )
            )
        self.assertEqual(len(rows), 12)
        return rows

    def test_department_all_counts_when_profile_is_fm_lm(self):
        """department_name=All + profile FM/LM counts as Ops FM/LM labor."""
        row = _att(
            "Ops74319",
            dept="All",
            profile_dept="FM/LM",
            event_dept_id=999999,
            agency="GRG",
            contract="Agency Part-time",
        )
        self.assertTrue(
            m._is_ops_fm_lm_row(row),
            "department_name=All with profile FM/LM must count as labor",
        )
        # Control: All + non-FM/LM profile still dropped
        bad = dict(row)
        bad["profile_department_name"] = "Rider"
        self.assertFalse(m._is_ops_fm_lm_row(bad))

    def test_esid_and_day_filters_keep_all_12_for_hub_93(self):
        """Event Station + today keep all 12."""
        rows = self._hub93_twelve_rows()
        filtered = m._filter_attendance_for_station(rows, 93)
        self.assertEqual(len(filtered), 12)

    def test_ops_fm_lm_filter_keeps_department_all_with_profile_fm_lm(self):
        """All+profile FM/LM kept: 12/12 pass _is_ops_fm_lm_row."""
        rows = self._hub93_twelve_rows()
        kept = [r for r in rows if m._is_ops_fm_lm_row(r)]
        dropped = [r for r in rows if not m._is_ops_fm_lm_row(r)]
        self.assertEqual(len(kept), 12)
        self.assertEqual(len(dropped), 0)
        all_dept = [r for r in kept if r["department_name"] == "All"]
        self.assertEqual(
            {d["biz_staff_id"] for d in all_dept},
            {"Ops74319", "Ops244880"},
        )

    def test_cook_labor_sum_is_12_including_two_dept_all(self):
        """Cook labor FTE+OS+BPO = 12; All+profile FM/LM enter as OS."""
        rows = self._hub93_twelve_rows()
        filtered = m._filter_attendance_for_station(rows, 93)
        cooked = m._cook_roster_hub_summary([], filtered, 93, "Linh Trung")[0]
        labor = (
            cooked["fte_count"] + cooked["os_count"] + cooked["bpo_count"]
        )
        self.assertEqual(cooked["fte_count"], 8)
        self.assertEqual(cooked["os_count"], 4)
        self.assertEqual(cooked["bpo_count"], 0)
        self.assertEqual(labor, 12)
        self.assertIn("att_raw=12", cooked["metric_notes"])
        self.assertIn("labor_source=attendance", cooked["metric_notes"])

    def test_rider_also_dropped_by_same_ops_fm_lm_filter(self):
        """Same filter: Rider dept never counts (regression vs dept=All)."""
        rider = _att(
            "Rider1",
            dept="Rider",
            profile_dept="Rider",
            agency="GRG",
            contract="Agency Part-time",
        )
        self.assertFalse(m._is_ops_fm_lm_row(rider))

    def test_wrong_event_station_dropped_before_cook(self):
        """Separate filter: wrong esid never reaches cook for hub 93."""
        rows = self._hub93_twelve_rows()
        rows.append(
            _att("OtherHub", esid=4232, dept="FM/LM")
        )
        filtered = m._filter_attendance_for_station(rows, 93)
        self.assertEqual(len(filtered), 12)
        self.assertTrue(all(int(r["event_station_id"]) == 93 for r in filtered))

    def test_diagnostic_no_ops_fm_lm_drops_for_hub93(self):
        """No ops_fm_lm drops among the 12 (All+profile kept)."""
        rows = self._hub93_twelve_rows()
        day = int(m._ROSTER_DATE_FROM)
        reasons = []
        for row in rows:
            drop = []
            raw_sid = row.get("event_station_id")
            try:
                esid_ok = int(raw_sid) == 93
            except (TypeError, ValueError):
                esid_ok = False
            if not esid_ok:
                drop.append("wrong_or_missing_event_station_id")
            if not m._attendance_row_matches_day(row, day):
                drop.append("day_mismatch")
            if not m._is_ops_fm_lm_row(row):
                drop.append(
                    "ops_fm_lm: department_name=%r not in fm/lm allowlist"
                    % (row.get("department_name"),)
                )
            if drop:
                reasons.append(
                    {
                        "biz_staff_id": row["biz_staff_id"],
                        "drop": drop,
                    }
                )
        self.assertEqual(reasons, [])


if __name__ == "__main__":
    unittest.main()
