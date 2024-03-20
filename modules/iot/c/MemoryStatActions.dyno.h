#ifndef memory_stat_caction_h
#define memory_stat_caction_h
#include "./MemoryStatDefinitions.dyno.h"
#include "./MemoryStatCSQL.dyno.h"
#include "./MemoryStatCJson.dyno.h"
#include "./MemoryStatCJson.dyno.c"
char* memory_stat_entity_to_sql_insert(struct memory_stat_entity_t *data)
;
char* memory_stat_entity_to_sql_update(struct memory_stat_entity_t *data)
;
esp_err_t memory_stat_action_create(httpd_req_t *req)
;
esp_err_t memory_stat_action_migrate(httpd_req_t *req)
;
static char * memory_stat_action_get_one(sqlite3 *db1, const char * sql)
;
static char * memory_stat_action_query(sqlite3 *db1, const char * sql, int *count)
;
#endif
