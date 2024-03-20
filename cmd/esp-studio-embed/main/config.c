
#include <stdio.h>
#include "freertos/FreeRTOS.h"
#include "nvs.h"
#include "nvs_flash.h"
#include <string.h>

#define WIFI_INFO_NAMESPACE "WIFI_CONFIG"

struct wifi_info
{
    const char *ssid;
    const char *password;
};

static esp_err_t get_wifi_info(struct wifi_info *d)
{
    nvs_handle_t wifi_info_handle;
    esp_err_t err = nvs_open(WIFI_INFO_NAMESPACE, NVS_READONLY, &wifi_info_handle);

    if (err == ESP_OK)
    {

        size_t required_size1;
        nvs_get_str(wifi_info_handle, "SSID", NULL, &required_size1);
        char *ssid = malloc(required_size1);
        nvs_get_str(wifi_info_handle, "SSID", ssid, &required_size1);

        size_t required_size2;
        nvs_get_str(wifi_info_handle, "PASSWORD", NULL, &required_size2);
        char *password = malloc(required_size2);
        nvs_get_str(wifi_info_handle, "PASSWORD", password, &required_size2);

        d->ssid = ssid;
        d->password = password;
    }

    return err;
}

static esp_err_t set_wifi_info(const char *type, const char *value)
{
    nvs_handle_t wifi_info_handle;
    esp_err_t err = nvs_open(WIFI_INFO_NAMESPACE, NVS_READWRITE, &wifi_info_handle);

    // printf("Saving wifi_config %s and %s\n", ssid, password);
    if (strcmp(type, "ssid") == 0)
    {
        printf("Setting the ssid: %s", value);
        nvs_set_str(wifi_info_handle, "SSID", value);
    }
    else if (strcmp(type, "password") == 0)
    {
        nvs_set_str(wifi_info_handle, "PASSWORD", value);
    }

    err = nvs_commit(wifi_info_handle);

    if (err != ESP_OK)
    {
        printf("WIFI Configuration failed: %s\n", esp_err_to_name(err));
    }
    else
    {
        printf("Wifi saved.\n");
    }

    return err;
}