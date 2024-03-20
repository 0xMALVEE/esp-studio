#ifndef database_h
#define database_h
/*
    This example creates two databases on SPIFFS,
    inserts and retrieves data from them.
*/
#include <stdio.h>
#include <string.h>
#include <sys/unistd.h>
#include <sys/stat.h>
#include "esp_err.h"
#include "esp_log.h"
#include "esp_spiffs.h"
#include "esp_timer.h"
#include "sqlite3.h"

static const char *TAG2 = "sqlite3_spiffs";

const char *data = "Callback function called";
static int callback(void *data, int argc, char **argv, char **azColName)
{
    int i;
    printf("%s: ", (const char *)data);
    for (i = 0; i < argc; i++)
    {
        printf("%s = %s\n", azColName[i], argv[i] ? argv[i] : "NULL");
    }
    printf("\n");
    return 0;
}

int db_open(const char *filename, sqlite3 **db)
{
    int rc = sqlite3_open(filename, db);
    if (rc)
    {
        printf("Can't open database: %s\n", sqlite3_errmsg(*db));
        return rc;
    }
    else
    {
        printf("Opened database successfully\n");
    }
    return rc;
}

char *zErrMsg = 0;
int db_exec(sqlite3 *db, const char *sql)
{
    printf("%s\n", sql);
    int64_t start = esp_timer_get_time();

    int rc = sqlite3_exec(db, sql, callback, (void *)data, &zErrMsg);
    if (rc != SQLITE_OK)
    {
        printf("SQL error: %s\n", zErrMsg);
        sqlite3_free(zErrMsg);
    }
    else
    {
        printf("Operation done successfully\n");
    }
    printf("Time taken: %lld\n", esp_timer_get_time() - start);
    return rc;
}
int db_exec_cb(sqlite3 *db, const char *sql, int (*callback)(void *, int, char **, char **))
{
    printf("%s\n", sql);
    int64_t start = esp_timer_get_time();

    int rc = sqlite3_exec(db, sql, callback, (void *)data, &zErrMsg);
    if (rc != SQLITE_OK)
    {
        printf("SQL error: %s\n", zErrMsg);
        sqlite3_free(zErrMsg);
    }
    else
    {
        printf("Operation done successfully\n");
    }
    printf("Time taken: %lld\n", esp_timer_get_time() - start);
    return rc;
}

void execute_sql(const char *sql, sqlite3 *db1)
{
    int rc;
    bool hasError;
    rc = db_exec(db1, sql);
    if (rc != SQLITE_OK)
    {

        return;
    }
}

void execute_sql_back()
{
    sqlite3 *db1;
    int rc;

    ESP_LOGI(TAG2, "Initializing SPIFFS");

    esp_vfs_spiffs_conf_t conf = {
        // .base_path = "/storage",
        .base_path = "/storage",
        .partition_label = "storage",
        .max_files = 15,
        .format_if_mount_failed = true};

    // Use settings defined above to initialize and mount SPIFFS filesystem.
    // Note: esp_vfs_spiffs_register is an all-in-one convenience function.
    esp_err_t ret = esp_vfs_spiffs_register(&conf);

    if (ret != ESP_OK)
    {
        if (ret == ESP_FAIL)
        {
            ESP_LOGE(TAG2, "Failed to mount or format filesystem");
        }
        else if (ret == ESP_ERR_NOT_FOUND)
        {
            ESP_LOGE(TAG2, "Failed to find SPIFFS partition");
        }
        else
        {
            ESP_LOGE(TAG2, "Failed to initialize SPIFFS (%s)", esp_err_to_name(ret));
        }
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

    sqlite3_initialize();

    if (db_open("/storage/test1.db", &db1))
        return;

    rc = db_exec(db1, "CREATE TABLE IF NOT EXISTS `fb_data_node_type_entities` (`visibility` text,`workspace_id` text,`linker_id` text,`parent_id` text,`unique_id` text NOT NULL UNIQUE,`user_id` text,`name` text,`rank` integer,`updated` integer,`created` integer,`created_formatted` text,`updated_formatted` text,PRIMARY KEY (`unique_id`));");
    if (rc != SQLITE_OK)
    {
        sqlite3_close(db1);
        return;
    }

    rc = db_exec(db1, "SELECT count(*) FROM `fb_data_node_type_entities`");
    if (rc != SQLITE_OK)
    {
        sqlite3_close(db1);
        return;
    }

    rc = db_exec(db1, "INSERT INTO `fb_data_node_type_entities` (`unique_id`, `name`) VALUES ('a', 'Another type');");
    if (rc != SQLITE_OK)
    {
        sqlite3_close(db1);
        return;
    }

    rc = db_exec(db1, "SELECT * FROM `fb_data_node_type_entities`");
    if (rc != SQLITE_OK)
    {
        sqlite3_close(db1);
        return;
    }

    sqlite3_close(db1);

    // All done, unmount partition and disable SPIFFS
    esp_err_t err4 = esp_vfs_spiffs_unregister("storage");

    if (err4 != ESP_OK)
    {

        ESP_LOGE(TAG2, "Failed to initialize SPIFFS (%s)", esp_err_to_name(err4));
    }

    // while(1);
}

void run_query(const char *sql)
{
    sqlite3 *db1;

    int rc;

    esp_vfs_spiffs_conf_t conf = {
        .base_path = "/storage",
        .partition_label = "storage",
        .max_files = 5,
        .format_if_mount_failed = true};

    esp_err_t ret = esp_vfs_spiffs_register(&conf);

    if (ret != ESP_OK)
    {
        return;
    }

    sqlite3_initialize();

    if (db_open("/storage/test2.db", &db1))
        return;

    rc = db_exec(db1, sql);
    if (rc != SQLITE_OK)
    {
        sqlite3_close(db1);
        return;
    }

    sqlite3_close(db1);

    esp_err_t err4 = esp_vfs_spiffs_unregister("storage");

    if (err4 != ESP_OK)
    {
        ESP_LOGE(TAG2, "Failed to initialize SPIFFS (%s)", esp_err_to_name(err4));
    }
}

static int sql_statement_count(sqlite3 *db1, const char * sql) {
    sqlite3_stmt *stmt;

    int rc = sqlite3_prepare_v2(db1, sql, -1, &stmt, NULL);
    if (rc != SQLITE_OK) {
    // error handling -> statement not prepared
    }
    rc = sqlite3_step(stmt);
    if (rc != SQLITE_ROW) {
    // error handling -> no rows returned, or an error occurred
    }
    int rowcount = sqlite3_column_int(stmt, 0);
    sqlite3_finalize(stmt);

    return rowcount;
}

#endif