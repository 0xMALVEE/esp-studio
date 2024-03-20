#ifndef gpio_mode_caction_h
#define gpio_mode_caction_h
#include "./GpioModeDefinitions.dyno.h"
#include "./GpioModeCSQL.dyno.h"
#include "./GpioModeCJson.dyno.h"
#include "./GpioModeCJson.dyno.c"
char* gpio_mode_entity_to_sql_insert(struct gpio_mode_entity_t *data)
;
char* gpio_mode_entity_to_sql_update(struct gpio_mode_entity_t *data)
;
esp_err_t gpio_mode_action_create(httpd_req_t *req)
;
esp_err_t gpio_mode_action_migrate(httpd_req_t *req)
;
static char * gpio_mode_action_get_one(sqlite3 *db1, const char * sql)
;
static char * gpio_mode_action_query(sqlite3 *db1, const char * sql, int *count)
;
#endif
