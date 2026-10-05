import json
p=r"C:\lm_hub_export\data\smoke\_backlog_d0_station_probe.json"
d=json.load(open(p,encoding="utf-8"))
def brief(k):
    x=d.get(k)
    if not isinstance(x, dict):
        print(k, x)
        return
    if "request_body" in x:
        sf=(x.get("first") or {}).get("station_fields") or {}
        keep=["current_station_id","current_station_name","station_id","station_name","pickup_station_id","origin_station_id","return_dest_station_id","next_station_id"]
        print(k, "total", x.get("total"), "ret", x.get("retcode"), "body_ids", x["request_body"].get("current_station_ids"), {kk: sf.get(kk) for kk in keep})
    else:
        print(k, json.dumps(x, ensure_ascii=False)[:500])
for k in ["before","unswitched_93","unswitched_166","unswitched_166_list","switch_166","switched_166","switched_to_166_query_93","restored"]:
    brief(k)
