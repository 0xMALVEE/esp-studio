#ifndef gpio_state_chttp_h
#define gpio_state_chttp_h
#include "./GpioStateDefinitions.dyno.h"
#include "./GpioStateCSQL.dyno.h"
#include "./GpioStateActions.dyno.h"
#include "./GpioStateActions.dyno.c"
#include "./GpioStateHttp.dyno.c"
esp_err_t gpio_state_http_query(httpd_req_t *req);
esp_err_t gpio_state_http_get_one(httpd_req_t *req);
esp_err_t gpio_state_entity_wipe(httpd_req_t *req);
esp_err_t gpio_state_http_post(httpd_req_t *req);
esp_err_t gpio_state_http_update(httpd_req_t *req);
void append_gpio_state_router(httpd_handle_t *server, rest_server_context_t *rest_context);
#endif
