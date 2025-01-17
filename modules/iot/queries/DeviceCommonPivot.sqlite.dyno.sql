
select 
MAX(CASE WHEN depth_reverse == 0 THEN unique_id END) as 'unique_id0',
MAX(CASE WHEN depth_reverse == 0 THEN name END) as 'name0'
,
MAX(CASE WHEN depth_reverse == 1 THEN unique_id END) as 'unique_id1',
MAX(CASE WHEN depth_reverse == 1 THEN name END) as 'name1'
,
MAX(CASE WHEN depth_reverse == 2 THEN unique_id END) as 'unique_id2',
MAX(CASE WHEN depth_reverse == 2 THEN name END) as 'name2'
,
MAX(CASE WHEN depth_reverse == 3 THEN unique_id END) as 'unique_id3',
MAX(CASE WHEN depth_reverse == 3 THEN name END) as 'name3'
,
MAX(CASE WHEN depth_reverse == 4 THEN unique_id END) as 'unique_id4',
MAX(CASE WHEN depth_reverse == 4 THEN name END) as 'name4'
,
MAX(CASE WHEN depth_reverse == 5 THEN unique_id END) as 'unique_id5',
MAX(CASE WHEN depth_reverse == 5 THEN name END) as 'name5'
,
MAX(CASE WHEN depth_reverse == 6 THEN unique_id END) as 'unique_id6',
MAX(CASE WHEN depth_reverse == 6 THEN name END) as 'name6'
from (
    with result as (WITH RECURSIVE
        fb_device_entities_cte(level, recordIndex, unique_id, parent_id,visibility,updated,created,name,model,ip,wifi_user,wifi_password,security_type) AS (
        select * from (
            SELECT 0, ROW_NUMBER() OVER(ORDER BY fb_device_entities.unique_id) AS recordIndex, fb_device_entities.unique_id, fb_device_entities.parent_id,fb_device_entities.visibility,fb_device_entities.updated,fb_device_entities.created,fb_device_entities.name,fb_device_entities.model,fb_device_entities.ip,fb_device_entities.wifi_user,fb_device_entities.wifi_password,fb_device_entities.security_type from fb_device_entities
        )
        UNION ALL
        SELECT fb_device_entities_cte.level+1,fb_device_entities_cte.recordIndex,fb_device_entities.unique_id, fb_device_entities.parent_id,fb_device_entities.visibility,fb_device_entities.updated,fb_device_entities.created,fb_device_entities.name,fb_device_entities.model,fb_device_entities.ip,fb_device_entities.wifi_user,fb_device_entities.wifi_password,fb_device_entities.security_type
            FROM fb_device_entities JOIN fb_device_entities_cte ON fb_device_entities.unique_id=fb_device_entities_cte.parent_id
            ORDER BY 2 DESC
        )
    SELECT level, recordIndex, unique_id, parent_id,visibility,updated,created,name,model,ip,wifi_user,wifi_password,security_type 
    ,ROW_NUMBER() OVER(ORDER BY fb_device_entities_cte.recordIndex)
    FROM fb_device_entities_cte
        order by recordIndex desc)
    select *, total - result.level - 1 as 'depth_reverse' from result
    left join (select count(*) total, recordIndex from result group by recordIndex) v
    on v.recordIndex = result.recordIndex
    order by result.recordIndex, depth_reverse asc
)
group by recordIndex
