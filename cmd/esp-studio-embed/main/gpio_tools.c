#ifndef gpio_tools
#define gpio_tools
#include "esp_system.h"
#include "driver/gpio.h"

void set_gpio_state(int gpioIndex, int gpioMode, int value) {
    printf("GPIO INDEX %d - GPIO MODE: %d VALUE: %d \n", gpioIndex, gpioMode, value);
    gpio_reset_pin(gpioIndex);
    gpio_set_direction(gpioIndex, gpioMode);

    if (value != -1) {
        gpio_set_level(gpioIndex, value);
    }
}

void initialize_gpio() {

    gpio_reset_pin(4);
    gpio_set_direction(4, GPIO_MODE_OUTPUT);

    gpio_reset_pin(5);
    gpio_set_direction(5, GPIO_MODE_OUTPUT);

    gpio_reset_pin(13);
    gpio_set_direction(13, GPIO_MODE_OUTPUT);

    gpio_reset_pin(14);
    gpio_set_direction(14, GPIO_MODE_OUTPUT);

    gpio_reset_pin(15);
    gpio_set_direction(15, GPIO_MODE_OUTPUT);

    gpio_reset_pin(16);
    gpio_set_direction(16, GPIO_MODE_OUTPUT);

    gpio_reset_pin(17);
    gpio_set_direction(17, GPIO_MODE_OUTPUT);

    gpio_reset_pin(18);
    gpio_set_direction(18, GPIO_MODE_OUTPUT);

    gpio_reset_pin(19);
    gpio_set_direction(19, GPIO_MODE_OUTPUT);

}

#endif