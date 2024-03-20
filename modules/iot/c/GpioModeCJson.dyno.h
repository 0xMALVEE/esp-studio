#ifndef gpio_mode_json_h
#define gpio_mode_json_h
#include "cJSON.h"
#include "./GpioModeDefinitions.dyno.h"
cJSON *gpio_mode_json_object(struct gpio_mode_entity_t *data);
char *gpio_mode_json(struct gpio_mode_entity_t *data);
struct gpio_mode_entity_t json_gpio_mode(const char *source);
#endif