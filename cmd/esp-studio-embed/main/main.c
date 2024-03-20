#include "sqlite3.h"

sqlite3 *dbref;


#include <stdio.h>
#include "cJSON.h"
#include "str_builder.h"
#include "str_builder.c"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "gpio_tools.c"
#include "./nvs.c";
#include "./config.c"
#include "./ble-nimble.c"
#include "./database.c"
#include <esp_http_server.h>
#include "fireback.h"
#include "uuid.h"
#include "uuid.c"

#define GPIOSTATE_AFTER_UPDATE  if (dto.gpioModeSnapshot != NULL && \
        dto.gpioValueSnapshot != NULL && \
        dto.gpioIndexSnapshot != NULL \
    ) { \
        set_gpio_state(*dto.gpioIndexSnapshot, *dto.gpioModeSnapshot, *dto.gpioValueSnapshot); \
    } \


#include "./iot/GpioCSQL.dyno.h"
#include "./iot/GpioDefinitions.dyno.h"
#include "./iot/GpioSeederSQLite.dyno.h"
#include "./iot/MemoryStatDefinitions.dyno.h"
#include "./iot/MemoryStatHttp.dyno.h"
#include "./iot/GpioModeSeederSQLite.dyno.h"
#include "./iot/GpioStateDefinitions.dyno.h"
#include "./iot/GpioStateHttp.dyno.h"


#include "./wifi.c"


#include "freertos/event_groups.h"
#include "esp_event.h"
#include "esp_log.h"
#include "esp_nimble_hci.h"
#include "nimble/nimble_port.h"
#include "nimble/nimble_port_freertos.h"
#include "host/ble_hs.h"
#include "services/gap/ble_svc_gap.h"
#include "services/gatt/ble_svc_gatt.h"
#include "memory-monitor.c"
#include "sdkconfig.h"
#include "esp_littlefs.h"



static void inject_sqlite_storage_littlefs()
{
    esp_vfs_littlefs_conf_t conf = {
        .base_path = "/storage",
        .partition_label = "storage",
        .format_if_mount_failed = true,
        .dont_mount = false,
        
    };

    // Use settings defined above to initialize and mount LittleFS filesystem.
    // Note: esp_vfs_littlefs_register is an all-in-one convenience function.
    esp_err_t ret = esp_vfs_littlefs_register(&conf);

     if (ret != ESP_OK)
    {
            if (ret == ESP_FAIL)
            {
                    ESP_LOGE(TAG, "Failed to mount or format filesystem");
            }
            else if (ret == ESP_ERR_NOT_FOUND)
            {
                    ESP_LOGE(TAG, "Failed to find LittleFS partition");
            }
            else
            {
                    ESP_LOGE(TAG, "Failed to initialize LittleFS (%s)", esp_err_to_name(ret));
            }
            return;
    }

      size_t total = 0, used = 0;
        ret = esp_littlefs_info(conf.partition_label, &total, &used);
        if (ret != ESP_OK)
        {
                ESP_LOGE(TAG, "Failed to get LittleFS partition information (%s)", esp_err_to_name(ret));
        }
        else
        {
                ESP_LOGI(TAG, "Partition size: total: %d, used: %d", total, used);
        }
    
}



static void inject_sqlite_storage()
{
    esp_vfs_spiffs_conf_t conf = {
        .base_path = "/storage",
        .partition_label = "storage",
        .max_files = 15,
        .format_if_mount_failed = true};

    esp_err_t ret = esp_vfs_spiffs_register(&conf);

    if (ret != ESP_OK)
    {

        ESP_LOGE(TAG2, "Failed to initialize SPIFFS (%s)", esp_err_to_name(ret));

        return;
    }

    size_t total = 0, used = 0;
    ret = esp_spiffs_info("storage", &total, &used);
    if (ret != ESP_OK)
    {
        ESP_LOGE(TAG2, "@@@@Failed to get SPIFFS partition information (%s)", esp_err_to_name(ret));
    }
    else
    {
        ESP_LOGI(TAG2, "Partition size: total: %d, used: %d", total, used);
    }
}




void read_gpio_states(sqlite3 *db1, const char * sql) {
    sqlite3_stmt *stmt;
    sqlite3_prepare_v2(db1, sql, -1, &stmt, NULL);

    while (sqlite3_step(stmt) != SQLITE_DONE) {
        int i;
        int num_cols = sqlite3_column_count(stmt);

        int gpioIndex = -1;
        int gpioMode = -1;
        int value = -1;

        for (i = 0; i < num_cols; i++)
		{
            char * name = sqlite3_column_name(stmt, i);
            if (strcmp(name, "gpio_index_snapshot") == 0) {
                gpioIndex = sqlite3_column_int(stmt, i);
            }

            if (strcmp(name, "gpio_mode_snapshot") == 0) {
                gpioMode = sqlite3_column_int(stmt, i);
            }
            if (strcmp(name, "gpio_value_snapshot") == 0) {
                value = sqlite3_column_int(stmt, i);
            }
        }

        if (gpioIndex != -1 && gpioMode != -1) {
            set_gpio_state(gpioIndex, gpioMode, value);
        }
    }
    sqlite3_finalize(stmt);
}

void app_main(void)
{

    init_nvs_all();


    inject_sqlite_storage_littlefs();
    sqlite3_initialize();

    sqlite3 *db1;

    if (db_open("/storage/test2.db", &db1))
        return;



    
    execute_sql(memory_stat_create_sql , db1);
    execute_sql(gpio_mode_create_sql , db1);
    execute_sql(gpio_mode_seeder_sql, db1);
    execute_sql(gpio_create_sql , db1);
    execute_sql(gpio_seeder_sql, db1);
    execute_sql(gpio_state_create_sql , db1);


    // This has a high priority. Becaes what ever is happening needs to be back when
    // the power has connected

    execute_sql(gpio_state_query_sql , db1);
    read_gpio_states(db1, "select * from fb_gpio_state_entities");


    // nimble_port_init();                        // 3 - Initialize the host stack
    // ble_svc_gap_device_name_set("ESP-STUDIO"); // 4 - Initialize NimBLE configuration - server name
    // ble_svc_gap_init();                        // 4 - Initialize NimBLE configuration - gap service
    // ble_svc_gatt_init();                       // 4 - Initialize NimBLE configuration - gatt service
    // ble_gatts_count_cfg(gatt_svcs);            // 4 - Initialize NimBLE configuration - config gatt services
    // ble_gatts_add_svcs(gatt_svcs);             // 4 - Initialize NimBLE configuration - queues gatt services.
    // ble_hs_cfg.sync_cb = ble_app_on_sync;      // 5 - Initialize application
    // nimble_port_freertos_init(host_task);      // 6 - Run the thread

    
   


    struct wifi_info info2 = {
        .ssid = "Ali",
        .password = "12345678",
    };

    // get_wifi_info(&info2);

    printf("Previously info for wifi: '%s' and '%s'", info2.ssid, info2.password);


    
    
 
    if (!((info2.ssid == NULL) || (info2.ssid[0] == '\0')))
    {
        wifi_init_sta(info2.ssid, info2.password);
        ESP_ERROR_CHECK(init_fs());

        setup_server(db1);
    }
    else
    {
        printf("SSID is not set. We skip wifi and http network\n");
    }


    // initialize_gpio();

    // Causes panic in sqlite.
    // begin_monitor_memory();


}