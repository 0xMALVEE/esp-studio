#ifndef gpio_chttp_h
#define gpio_chttp_h
#include "./GpioDefinitions.dyno.h"
#include "./GpioCSQL.dyno.h"
#include "./GpioActions.dyno.h"
#include "./GpioActions.dyno.c"
#include "./GpioHttp.dyno.c"
esp_err_t gpio_http_query(httpd_req_t *req);
esp_err_t gpio_http_get_one(httpd_req_t *req);
esp_err_t gpio_entity_wipe(httpd_req_t *req);
esp_err_t gpio_http_post(httpd_req_t *req);
esp_err_t gpio_http_update(httpd_req_t *req);
void append_gpio_router(httpd_handle_t *server, rest_server_context_t *rest_context);
#endif
