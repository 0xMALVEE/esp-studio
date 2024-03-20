#ifndef gpio_mode_chttp_h
#define gpio_mode_chttp_h
#include "./GpioModeDefinitions.dyno.h"
#include "./GpioModeCSQL.dyno.h"
#include "./GpioModeActions.dyno.h"
#include "./GpioModeActions.dyno.c"
#include "./GpioModeHttp.dyno.c"
esp_err_t gpio_mode_http_query(httpd_req_t *req);
esp_err_t gpio_mode_http_get_one(httpd_req_t *req);
esp_err_t gpio_mode_entity_wipe(httpd_req_t *req);
esp_err_t gpio_mode_http_post(httpd_req_t *req);
esp_err_t gpio_mode_http_update(httpd_req_t *req);
void append_gpio_mode_router(httpd_handle_t *server, rest_server_context_t *rest_context);
#endif
