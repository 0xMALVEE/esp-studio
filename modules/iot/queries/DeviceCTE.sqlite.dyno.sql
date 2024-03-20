WITH RECURSIVE
    fb_device_entities_cte(level, unique_id, parent_id,visibility,updated,created,name,model,ip,wifi_user,wifi_password,security_type) AS (
    select * from (
        SELECT 0, fb_device_entities.unique_id, fb_device_entities.parent_id,fb_device_entities.visibility,fb_device_entities.updated,fb_device_entities.created,fb_device_entities.name,fb_device_entities.model,fb_device_entities.ip,fb_device_entities.wifi_user,fb_device_entities.wifi_password,fb_device_entities.security_type from fb_device_entities
        where parent_id is null
        (internalCondition)
        limit @limit offset @offset
    )
    UNION ALL
    SELECT fb_device_entities_cte.level+1,fb_device_entities.unique_id, fb_device_entities.parent_id,fb_device_entities.visibility,fb_device_entities.updated,fb_device_entities.created,fb_device_entities.name,fb_device_entities.model,fb_device_entities.ip,fb_device_entities.wifi_user,fb_device_entities.wifi_password,fb_device_entities.security_type
        FROM fb_device_entities JOIN fb_device_entities_cte ON fb_device_entities.parent_id=fb_device_entities_cte.unique_id
        ORDER BY 2 DESC
    )
SELECT DISTINCT
    fb_device_entities_cte.level,
    fb_device_entities_cte.unique_id,
    fb_device_entities_cte.parent_id,fb_device_entities_cte.visibility,fb_device_entities_cte.updated,fb_device_entities_cte.created,fb_device_entity_polyglots.name
,fb_device_entities_cte.model
,fb_device_entities_cte.ip
,fb_device_entities_cte.wifi_user
,fb_device_entities_cte.wifi_password
,fb_device_entities_cte.security_type
    FROM fb_device_entities_cte
LEFT JOIN fb_device_entity_polyglots on fb_device_entity_polyglots.linker_id = fb_device_entities_cte.unique_id
and fb_device_entity_polyglots.language_id = '(language)'