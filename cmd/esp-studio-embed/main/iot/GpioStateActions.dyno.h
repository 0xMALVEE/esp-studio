#ifndef gpio_state_caction_h
#define gpio_state_caction_h
#include "./GpioStateDefinitions.dyno.h"
#include "./GpioStateCSQL.dyno.h"
#include "./GpioStateCJson.dyno.h"
#include "./GpioStateCJson.dyno.c"
char* gpio_state_entity_to_sql_insert(struct gpio_state_entity_t *data)
;
char* gpio_state_entity_to_sql_update(struct gpio_state_entity_t *data)
;
esp_err_t gpio_state_action_create(httpd_req_t *req)
;
esp_err_t gpio_state_action_migrate(httpd_req_t *req)
;
static char * gpio_state_action_get_one(sqlite3 *db1, const char * sql)
;
static char * gpio_state_action_query(sqlite3 *db1, const char * sql, int *count)
;
#endif
