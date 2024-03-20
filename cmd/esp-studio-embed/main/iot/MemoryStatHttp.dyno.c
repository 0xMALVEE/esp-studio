#ifndef memory_stat_chttp_c
#define memory_stat_chttp_c
#include "./MemoryStatDefinitions.dyno.h"
#include "./MemoryStatCSQL.dyno.h"
#include "./MemoryStatActions.dyno.h"
#include "./MemoryStatActions.dyno.c"
#include "./MemoryStatHttp.dyno.c"
esp_err_t memory_stat_http_query(httpd_req_t *req)
{
    int response;
    int count = 0;
    char * result = memory_stat_action_query(dbref, memory_stat_query_sql, &count);
    httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
    httpd_resp_set_type(req, "application/json");
    response = httpd_resp_send(req, result, HTTPD_RESP_USE_STRLEN);
    cJSON_free(result);
    return response;
};
esp_err_t memory_stat_http_get_one(httpd_req_t *req)
{
    int response;
    int count = 0;
    char * result = memory_stat_action_get_one(dbref, "select * from fb_memory_stat_entities where unique_id = '86302ed2-da6d-44a9-aa47-bdce3b38aedc'");
    httpd_resp_set_type(req, "application/json");
    response = httpd_resp_send(req, result, HTTPD_RESP_USE_STRLEN);
    cJSON_free(result);
    return response;
};
esp_err_t memory_stat_entity_wipe(httpd_req_t *req)
{
    int response;
    execute_sql("delete from fb_memory_stat_entities where 1 <> 2", dbref);
    httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
    httpd_resp_set_type(req, "application/json");
    response = httpd_resp_send(req, "", HTTPD_RESP_USE_STRLEN);
    return response;
};
esp_err_t memory_stat_http_post(httpd_req_t *req)
{
    int response;
    int count = 0;
    char * body = read_body_as_string(req);
    memory_stat_entity_t dto = json_memory_stat(body);
    if (dto.uniqueId == NULL || strcmp(dto.uniqueId, "") == 0) {
        uuid_t uu, uu2;
        char unique_id[UUID_STR_LEN];
        uuid_generate(uu);
        uuid_unparse(uu, unique_id);
        dto.uniqueId = unique_id;
    }
    char * sql = memory_stat_entity_to_sql_insert(&dto);
    execute_sql(sql , dbref);
    httpd_resp_set_type(req, "application/json");
    httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
    response = httpd_resp_send(req, "", HTTPD_RESP_USE_STRLEN);
    return response;
}
;
esp_err_t memory_stat_http_update(httpd_req_t *req)
{
    int response;
    int count = 0;
    char * body = read_body_as_string(req);
    memory_stat_entity_t dto = json_memory_stat(body);
    if (dto.uniqueId == NULL || strcmp(dto.uniqueId, "") == 0) {
        response = httpd_resp_send(req, "UniqueId is required for updating dto", HTTPD_RESP_USE_STRLEN);
        return response;    
    }
    char * sql = memory_stat_entity_to_sql_update(&dto);
    execute_sql(sql , dbref);
    #ifdef MEMORYSTAT_AFTER_UPDATE
    MEMORYSTAT_AFTER_UPDATE
    #endif
    httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
    httpd_resp_set_type(req, "application/json");
    free(sql);
    response = httpd_resp_send(req, "", HTTPD_RESP_USE_STRLEN);
    return response;
}
;
void append_memory_stat_router(httpd_handle_t *server, rest_server_context_t *rest_context)
{
    httpd_uri_t uri_memory_stat_query = {
        .uri = "/memoryStats",
        .method = HTTP_GET,
        .handler = memory_stat_http_query,
        .user_ctx = rest_context,
    };
    httpd_uri_t uri_memory_stat_get_one = {
        .uri = "/memoryStat/*",
        .method = HTTP_GET,
        .handler = memory_stat_http_get_one,
        .user_ctx = rest_context,
    };
    httpd_uri_t uri_memory_stat_post = {
        .uri = "/memoryStat",
        .method = HTTP_POST,
        .handler = memory_stat_http_post,
        .user_ctx = rest_context,
    };
    httpd_uri_t uri_memory_stat_patch = {
        .uri = "/memoryStat",
        .method = HTTP_PATCH,
        .handler = memory_stat_http_update,
        .user_ctx = rest_context,
    };
    httpd_uri_t uri_memory_stats_delete = {
        .uri = "/memoryStats",
        .method = HTTP_DELETE,
        .handler = memory_stat_entity_wipe,
        .user_ctx = rest_context,
    };
    httpd_register_uri_handler(server, &uri_memory_stat_query);
    httpd_register_uri_handler(server, &uri_memory_stat_post);
    httpd_register_uri_handler(server, &uri_memory_stat_patch);
    httpd_register_uri_handler(server, &uri_memory_stat_get_one);
    httpd_register_uri_handler(server, &uri_memory_stats_delete);
};
#endif
