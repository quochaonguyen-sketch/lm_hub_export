# -*- coding: utf-8 -*-
"""Global: department_name=All + profile FM/LM must KEEP on every hub.

Not hub-93-only. Same rule for stations 93, 4232, 10, 166 (and any other).
All + Rider/Security still DROP. Cook/labor paths all use _is_ops_fm_lm_row.
"""
import unittest

import export_lm_hubs as m


MULTI_HUBS = (93, 4232, 10, 166)


def _att(
    sid,
    esid,
    *,
    dept="FM/LM",
    profile_dept="FM/LM",
    event_dept_id=44,
    staff_type=2,
    staff_type_name="Ops",
    agency="in-house",
    contract="Inhouse-Full-time",
    clock_in_status=1,
    date="2026-10-02",
):
    return {
        "biz_staff_id": sid,
        "staff_name": "Staff %s" % sid,
        "staff_type": staff_type,
        "staff_type_name": staff_type_name,
        "agency": agency,
        "contract_type": contract,
        "department_name": dept,
        "event_department_name": None,
        "event_department_id": event_dept_id,
        "profile_department_name": profile_dept,
        "event_station_id": esid,
        "date": date,
        "clock_in_status": clock_in_status,
        "clock_in_status_name": "Early In" if clock_in_status == 1 else "Late In",
    }


class GlobalAllDeptProfileKeepTests(unittest.TestCase):
    """All hubs: All+profile FM/LM keep; Rider/Security drop."""

    @classmethod
    def setUpClass(cls):
        m._ROSTER_DATE_FROM, m._ROSTER_DATE_TO = m.default_roster_date_range()

    def test_no_hub_id_93_special_case_in_filter(self):
        """_is_ops_fm_lm_row source must not special-case hub 93."""
        import inspect
        src = inspect.getsource(m._is_ops_fm_lm_row)
        self.assertNotIn("93", src)
        self.assertNotIn("hub_id", src)
        self.assertNotIn("station_id", src)

    def test_all_plus_profile_fm_lm_kept_on_every_hub(self):
        for hub in MULTI_HUBS:
            with self.subTest(hub=hub):
                row = _att(
                    "AllKeep%d" % hub,
                    hub,
                    dept="All",
                    profile_dept="FM/LM",
                    event_dept_id=999999,
                    agency="GRG",
                    contract="Agency Part-time",
                )
                self.assertTrue(
                    m._is_ops_fm_lm_row(row),
                    "hub %s: All+profile FM/LM must KEEP" % hub,
                )

    def test_event_dept_id_999999_plus_profile_fm_lm_ops_kept(self):
        for hub in MULTI_HUBS:
            with self.subTest(hub=hub):
                row = _att(
                    "IdAll%d" % hub,
                    hub,
                    dept="SomethingElse",
                    profile_dept="FM/LM Ops",
                    event_dept_id=999999,
                )
                self.assertTrue(m._is_ops_fm_lm_row(row))

    def test_all_plus_rider_or_security_dropped_on_every_hub(self):
        for hub in MULTI_HUBS:
            for bad_profile in ("Rider", "Security", "Office"):
                with self.subTest(hub=hub, profile=bad_profile):
                    row = _att(
                        "Drop%s%d" % (bad_profile, hub),
                        hub,
                        dept="All",
                        profile_dept=bad_profile,
                        event_dept_id=999999,
                        agency="GRG",
                        contract="Agency Part-time",
                    )
                    self.assertFalse(
                        m._is_ops_fm_lm_row(row),
                        "hub %s: All+%s must DROP" % (hub, bad_profile),
                    )

    def _twelve_for_hub(self, hub):
        rows = []
        for i in range(8):
            rows.append(_att("FTE%d" % i, hub))
        for i in range(2):
            rows.append(
                _att(
                    "OS%d" % i,
                    hub,
                    agency="GRG",
                    contract="Agency Part-time",
                )
            )
        for sid in ("OpsAllA", "OpsAllB"):
            rows.append(
                _att(
                    sid,
                    hub,
                    dept="All",
                    profile_dept="FM/LM",
                    event_dept_id=999999,
                    agency="GRG",
                    contract="Agency Part-time",
                )
            )
        self.assertEqual(len(rows), 12)
        return rows

    def test_cook_labor_sum_12_for_each_synthetic_hub(self):
        """Same 12->12 cook as hub 93, for 93/4232/10/166."""
        for hub in MULTI_HUBS:
            with self.subTest(hub=hub):
                rows = self._twelve_for_hub(hub)
                filtered = m._filter_attendance_for_station(rows, hub)
                self.assertEqual(len(filtered), 12)
                kept = [r for r in filtered if m._is_ops_fm_lm_row(r)]
                self.assertEqual(len(kept), 12)
                cooked = m._cook_roster_hub_summary(
                    [], filtered, hub, "Hub %s" % hub
                )[0]
                labor = (
                    cooked["fte_count"] + cooked["os_count"] + cooked["bpo_count"]
                )
                self.assertEqual(
                    labor,
                    12,
                    "hub %s cook labor=%s cooked=%r" % (hub, labor, cooked),
                )
                self.assertEqual(cooked["fte_count"], 8)
                self.assertEqual(cooked["os_count"], 4)
                self.assertEqual(cooked["bpo_count"], 0)
                self.assertIn("labor_source=attendance", cooked["metric_notes"])


if __name__ == "__main__":
    unittest.main()
