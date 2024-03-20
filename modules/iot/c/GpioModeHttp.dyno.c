#ifndef gpio_mode_chttp_c
#define gpio_mode_chttp_c
#include "./GpioModeDefinitions.dyno.h"
#include "./GpioModeCSQL.dyno.h"
#include "./GpioModeActions.dyno.h"
#include "./GpioModeActions.dyno.c"
#include "./GpioModeHttp.dyno.c"
esp_err_t gpio_mode_http_query(httpd_req_t *req)
{
    int response;
    int count = 0;
    char * result = gpio_mode_action_query(dbref, gpio_mode_query_sql, &count);
    httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
    httpd_resp_set_type(req, "application/json");
    response = httpd_resp_send(req, result, HTTPD_RESP_USE_STRLEN);
    cJSON_free(result);
    return response;
};
esp_err_t gpio_mode_http_get_one(httpd_req_t *req)
{
    int response;
    int count = 0;
    char * result = gpio_mode_action_get_one(dbref, "select * from fb_gpio_mode_entities where unique_id = '86302ed2-da6d-44a9-aa47-bdce3b38aedc'");
    httpd_resp_set_type(req, "application/json");
    response = httpd_resp_send(req, result, HTTPD_RESP_USE_STRLEN);
    cJSON_free(result);
    return response;
};
esp_err_t gpio_mode_entity_wipe(httpd_req_t *req)
{
    int response;
    execute_sql("delete from fb_gpio_mode_entities where 1 <> 2", dbref);
    httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
    httpd_resp_set_type(req, "application/json");
    response = httpd_resp_send(req, "", HTTPD_RESP_USE_STRLEN);
    return response;
};
esp_err_t gpio_mode_http_post(httpd_req_t *req)
{
    int response;
    int count = 0;
    char * body = read_body_as_string(req);
    gpio_mode_entity_t dto = json_gpio_mode(body);
    if (dto.uniqueId == NULL || strcmp(dto.uniqueId, "") == 0) {
        uuid_t uu, uu2;
        char unique_id[UUID_STR_LEN];
        uuid_generate(uu);
        uuid_unparse(uu, unique_id);
        dto.uniqueId = unique_id;
    }
    char * sql = gpio_mode_entity_to_sql_insert(&dto);
    execute_sql(sql , dbref);
    httpd_resp_set_type(req, "application/json");
    httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
    response = httpd_resp_send(req, "", HTTPD_RESP_USE_STRLEN);
    return response;
}
;
esp_err_t gpio_mode_http_update(httpd_req_t *req)
{
    int response;
    int count = 0;
    char * body = read_body_as_string(req);
    gpio_mode_entity_t dto = json_gpio_mode(body);
    if (dto.uniqueId == NULL || strcmp(dto.uniqueId, "") == 0) {
        response = httpd_resp_send(req, "UniqueId is required for updating dto", HTTPD_RESP_USE_STRLEN);
        return response;    
    }
    char * sql = gpio_mode_entity_to_sql_update(&dto);
    execute_sql(sql , dbref);
    #ifdef GPIOMODE_AFTER_UPDATE
    GPIOMODE_AFTER_UPDATE
    #endif
    httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
    httpd_resp_set_type(req, "application/json");
    free(sql);
    response = httpd_resp_send(req, "", HTTPD_RESP_USE_STRLEN);
    return response;
}
;
void append_gpio_mode_router(httpd_handle_t *server, rest_server_context_t *rest_context)
{
    httpd_uri_t uri_gpio_mode_query = {
        .uri = "/gpioModes",
        .method = HTTP_GET,
        .handler = gpio_mode_http_query,
        .user_ctx = rest_context,
    };
    httpd_uri_t uri_gpio_mode_get_one = {
        .uri = "/gpioMode/*",
        .method = HTTP_GET,
        .handler = gpio_mode_http_get_one,
        .user_ctx = rest_context,
    };
    httpd_uri_t uri_gpio_mode_post = {
        .uri = "/gpioMode",
        .method = HTTP_POST,
        .handler = gpio_mode_http_post,
        .user_ctx = rest_context,
    };
    httpd_uri_t uri_gpio_mode_patch = {
        .uri = "/gpioMode",
        .method = HTTP_PATCH,
        .handler = gpio_mode_http_update,
        .user_ctx = rest_context,
    };
    httpd_uri_t uri_gpio_modes_delete = {
        .uri = "/gpioModes",
        .method = HTTP_DELETE,
        .handler = gpio_mode_entity_wipe,
        .user_ctx = rest_context,
    };
    httpd_register_uri_handler(server, &uri_gpio_mode_query);
    httpd_register_uri_handler(server, &uri_gpio_mode_post);
    httpd_register_uri_handler(server, &uri_gpio_mode_patch);
    httpd_register_uri_handler(server, &uri_gpio_mode_get_one);
    httpd_register_uri_handler(server, &uri_gpio_modes_delete);
};
#endif
