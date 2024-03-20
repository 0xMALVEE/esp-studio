#ifndef nvs_c
#define nvs_c

#include "nvs_flash.h"
#include "nvs.h"

static void init_nvs_all()
{
    esp_err_t err = nvs_flash_init();

    printf("Init...\n");
    if (err == ESP_ERR_NVS_NO_FREE_PAGES || err == ESP_ERR_NVS_NEW_VERSION_FOUND)
    {
        printf("Failled %s\n", esp_err_to_name(err));
        ESP_ERROR_CHECK(nvs_flash_erase());
        err = nvs_flash_init();
    }
    else
    {
        printf("No error at all...\n");
    }
}


#endif