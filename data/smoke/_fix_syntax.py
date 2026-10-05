from pathlib import Path
p=Path('export_lm_hubs.py')
s=p.read_text(encoding='utf-8')
s=s.replace('''
    agency_id=0 sometimes returns a huge unscoped dump (thousands of empty
    Part-time shells). When total looks unscoped, also fetch agency_id=9
    (in-house) and keep agency0 rows that have matching Event Station events.
    """
    agency_id = int(_ROSTER_AGENCY_ID)
''','''
    agency_id = int(_ROSTER_AGENCY_ID)
''',1)
p.write_text(s,encoding='utf-8')
