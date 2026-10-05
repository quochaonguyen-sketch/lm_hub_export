from pathlib import Path
p=Path('export_lm_hubs.py')
s=p.read_text(encoding='utf-8')
s=s.replace('''    att_tokens = set()
    late_count = 0
    for row in att_rows or []:
        if _is_late_attendance_row(row):
            late_count += 1
            att_tokens.update(_row_identity_tokens(row))
''','''    att_tokens = set()
    late_count = 0
    for row in att_rows or []:
        # Any matching attendance status is authoritative over a calendar
        # status for that staff member; only Late In increments the metric.
        att_tokens.update(_row_identity_tokens(row))
        if _is_late_attendance_row(row):
            late_count += 1
''',1)
p.write_text(s,encoding='utf-8')
