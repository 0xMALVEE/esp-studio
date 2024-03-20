select
    count(*) total_items
from
    fb_device_entities
where
    parent_id is null