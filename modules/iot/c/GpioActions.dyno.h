#ifndef gpio_caction_h
#define gpio_caction_h
#include "./GpioDefinitions.dyno.h"
#include "./GpioCSQL.dyno.h"
#include "./GpioCJson.dyno.h"
#include "./GpioCJson.dyno.c"
char* gpio_entity_to_sql_insert(struct gpio_entity_t *data)
;
char* gpio_entity_to_sql_update(struct gpio_entity_t *data)
;
esp_err_t gpio_action_create(httpd_req_t *req)
;
esp_err_t gpio_action_migrate(httpd_req_t *req)
;
static char * gpio_action_get_one(sqlite3 *db1, const char * sql)
;
static char * gpio_action_query(sqlite3 *db1, const char * sql, int *count)
;
#endif
