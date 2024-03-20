#ifndef gpio_state_json_h
#define gpio_state_json_h
#include "cJSON.h"
#include "./GpioStateDefinitions.dyno.h"
cJSON *gpio_state_json_object(struct gpio_state_entity_t *data);
char *gpio_state_json(struct gpio_state_entity_t *data);
struct gpio_state_entity_t json_gpio_state(const char *source);
#endif