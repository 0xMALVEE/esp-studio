#ifndef gpio_json_h
#define gpio_json_h
#include "cJSON.h"
#include "./GpioDefinitions.dyno.h"
cJSON *gpio_json_object(struct gpio_entity_t *data);
char *gpio_json(struct gpio_entity_t *data);
struct gpio_entity_t json_gpio(const char *source);
#endif