#ifndef memory_monitor_c
#define memory_monitor_c


void begin_monitor_memory() {

    int count = 0;
    for (;;)
    {
        uuid_t uu, uu2;
        char unique_id[UUID_STR_LEN];
        int r;

    
        uuid_generate(uu);
        uuid_unparse(uu, unique_id);
        count++;
        double hp = (double) esp_get_free_internal_heap_size();
        printf("[APP] Free memory: %f bytes %s \n", hp, unique_id);
        memory_stat_entity_t dto = {
            .uniqueId = unique_id,
            .heapSize = &hp,
        };
        char * sql = memory_stat_entity_to_sql_insert(&dto);
        execute_sql(sql , dbref);
        sqlite3_free(sql);
        vTaskDelay(5000 / portTICK_PERIOD_MS);
    }
}

#endif
