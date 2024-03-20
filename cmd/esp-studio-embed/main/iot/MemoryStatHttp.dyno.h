#ifndef memory_stat_chttp_h
#define memory_stat_chttp_h
#include "./MemoryStatDefinitions.dyno.h"
#include "./MemoryStatCSQL.dyno.h"
#include "./MemoryStatActions.dyno.h"
#include "./MemoryStatActions.dyno.c"
#include "./MemoryStatHttp.dyno.c"
esp_err_t memory_stat_http_query(httpd_req_t *req);
esp_err_t memory_stat_http_get_one(httpd_req_t *req);
esp_err_t memory_stat_entity_wipe(httpd_req_t *req);
esp_err_t memory_stat_http_post(httpd_req_t *req);
esp_err_t memory_stat_http_update(httpd_req_t *req);
void append_memory_stat_router(httpd_handle_t *server, rest_server_context_t *rest_context);
#endif
