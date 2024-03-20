/* WiFi station Example

  This example code is in the Public Domain (or CC0 licensed, at your option.)

  Unless required by applicable law or agreed to in writing, this
  software is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
  CONDITIONS OF ANY KIND, either express or implied.
*/
#include <string.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "freertos/event_groups.h"
#include "esp_system.h"
#include "esp_wifi.h"
#include "esp_event.h"
#include "esp_log.h"
#include "nvs_flash.h"
#include <esp_http_server.h>
#include <fcntl.h>
#include "lwip/err.h"
#include "lwip/sys.h"
#include "./index.c"
#include "./database.c"
#include "./embed-spiff.c"
// #include "./esp-studio-server-lib/MemoryStatEntity.h";
// #include "./esp-studio-server-lib/MemoryStatEntity.c";
#include "./iot/MemoryStatDefinitions.dyno.h"
#include "./iot/MemoryStatHttp.dyno.h"
#include "./iot/MemoryStatHttp.dyno.c"
#include "./iot/GpioDefinitions.dyno.h"
#include "./iot/GpioHttp.dyno.h"
#include "./iot/GpioHttp.dyno.c"
#include "./iot/GpioModeDefinitions.dyno.h"
#include "./iot/GpioModeHttp.dyno.h"
#include "./iot/GpioModeHttp.dyno.c"
#include "./iot/GpioStateHttp.dyno.h"

#include "cJSON.h"
#include "fireback.h"

#include "gpio_builtin_tools.c"

static void event_handler(void *arg, esp_event_base_t event_base,
                          int32_t event_id, void *event_data)
{
    if (event_base == WIFI_EVENT && event_id == WIFI_EVENT_STA_START)
    {
        esp_wifi_connect();
    }
    else if (event_base == WIFI_EVENT && event_id == WIFI_EVENT_STA_DISCONNECTED)
    {
        if (s_retry_num < EXAMPLE_ESP_MAXIMUM_RETRY)
        {
            esp_wifi_connect();
            s_retry_num++;
            ESP_LOGI(WIFI_TAG, "retry to connect to the AP");
        }
        else
        {
            xEventGroupSetBits(s_wifi_event_group, WIFI_FAIL_BIT);
        }
        ESP_LOGI(WIFI_TAG, "connect to the AP fail");
    }
    else if (event_base == IP_EVENT && event_id == IP_EVENT_STA_GOT_IP)
    {
        ip_event_got_ip_t *event = (ip_event_got_ip_t *)event_data;
        ESP_LOGI(WIFI_TAG, "got ip:" IPSTR, IP2STR(&event->ip_info.ip));
        s_retry_num = 0;
        xEventGroupSetBits(s_wifi_event_group, WIFI_CONNECTED_BIT);
    }
}

esp_err_t send_web_page(httpd_req_t *req)
{
    int response;
    httpd_resp_set_hdr(req, "Content-Encoding", "gzip");
    httpd_resp_set_type(req, "text/html");
    response = httpd_resp_send(req, (const char *)index_html_gz, index_html_gz_len);
    // response = httpd_resp_send(req, on_resp, HTTPD_RESP_USE_STRLEN);
    return response;
}


void query_items(sqlite3 *db1, const char * sql) {

    sqlite3_stmt *stmt;
    sqlite3_prepare_v2(db1, sql, -1, &stmt, NULL);

	printf("Got results:\n");
	while (sqlite3_step(stmt) != SQLITE_DONE) {
		int i;
		int num_cols = sqlite3_column_count(stmt);
		
		for (i = 0; i < num_cols; i++)
		{
            printf("name = %s, ", sqlite3_column_name(stmt, i));
			switch (sqlite3_column_type(stmt, i))
			{
			case (SQLITE3_TEXT):
				printf("%s, ", sqlite3_column_text(stmt, i));
				break;
			case (SQLITE_INTEGER):
				printf("%d, ", sqlite3_column_int(stmt, i));
				break;
			case (SQLITE_FLOAT):
				printf("%g, ", sqlite3_column_double(stmt, i));
				break;
			default:
				break;
			}
		}
		printf("\n");

	}

	sqlite3_finalize(stmt);
}

 
esp_err_t get_req_handler(httpd_req_t *req)
{
    return send_web_page(req);
}

static esp_err_t set_content_type_from_file(httpd_req_t *req, const char *filepath)
{
    const char *type = "text/plain";
    if (CHECK_FILE_EXTENSION(filepath, ".html"))
    {
        type = "text/html";
    }
    else if (CHECK_FILE_EXTENSION(filepath, ".js"))
    {
        type = "application/javascript";
    }
    else if (CHECK_FILE_EXTENSION(filepath, ".css"))
    {
        type = "text/css";
    }
    else if (CHECK_FILE_EXTENSION(filepath, ".png"))
    {
        type = "image/png";
    }
    else if (CHECK_FILE_EXTENSION(filepath, ".ico"))
    {
        type = "image/x-icon";
    }
    else if (CHECK_FILE_EXTENSION(filepath, ".svg"))
    {
        type = "image/svg+xml";
    }
    return httpd_resp_set_type(req, type);
}

static esp_err_t rest_common_get_handler(httpd_req_t *req)
{
    char filepath[FILE_PATH_MAX];
    ESP_LOGE(REST_TAG, "I am called");

    rest_server_context_t *rest_context = (rest_server_context_t *)req->user_ctx;
    strlcpy(filepath, rest_context->base_path, sizeof(filepath));
    if (req->uri[strlen(req->uri) - 1] == '/')
    {
        strlcat(filepath, "/index.html", sizeof(filepath));
    }
    else
    {
        strlcat(filepath, req->uri, sizeof(filepath));
    }
    int fd = open(filepath, O_RDONLY, 0);
    if (fd == -1)
    {
        ESP_LOGE(REST_TAG, "Failed to open file : %s", filepath);
        /* Respond with 500 Internal Server Error */
        httpd_resp_send_err(req, HTTPD_500_INTERNAL_SERVER_ERROR, "Failed to read existing file");
        return ESP_FAIL;
    }

    httpd_resp_set_hdr(req, "Content-Encoding", "gzip");
    set_content_type_from_file(req, filepath);

    char *chunk = rest_context->scratch;
    ssize_t read_bytes;
    do
    {
        /* Read file in chunks into the scratch buffer */
        read_bytes = read(fd, chunk, SCRATCH_BUFSIZE);
        if (read_bytes == -1)
        {
            ESP_LOGE(REST_TAG, "Failed to read file : %s", filepath);
        }
        else if (read_bytes > 0)
        {
            /* Send the buffer contents as HTTP response chunk */
            if (httpd_resp_send_chunk(req, chunk, read_bytes) != ESP_OK)
            {
                close(fd);
                ESP_LOGE(REST_TAG, "File sending failed!");
                /* Abort sending file */
                httpd_resp_sendstr_chunk(req, NULL);
                /* Respond with 500 Internal Server Error */
                httpd_resp_send_err(req, HTTPD_500_INTERNAL_SERVER_ERROR, "Failed to send file");
                return ESP_FAIL;
            }
        }
    } while (read_bytes > 0);
    /* Close file after sending complete */
    close(fd);
    ESP_LOGI(REST_TAG, "File sending complete");
    /* Respond with an empty chunk to signal HTTP response completion */
    httpd_resp_send_chunk(req, NULL, 0);
    return ESP_OK;
}

httpd_handle_t setup_server(sqlite3 *db1)
{
    dbref = db1;
    const char *base_path = "/dist";
    httpd_config_t config = HTTPD_DEFAULT_CONFIG();
    config.max_uri_handlers = 100;
    httpd_handle_t server = NULL;

    config.uri_match_fn = httpd_uri_match_wildcard;

    // REST_CHECK(base_path, "wrong base path", err);
    rest_server_context_t *rest_context = calloc(1, sizeof(rest_server_context_t));
    // REST_CHECK(rest_context, "No memory for rest context", err);
    strlcpy(rest_context->base_path, base_path, sizeof(rest_context->base_path));

    httpd_uri_t uri_get = {
        .uri = "*",
        .method = HTTP_GET,
        .handler = rest_common_get_handler,
        .user_ctx = rest_context
        // .handler = get_req_handler,
        // .user_ctx = NULL
    };
 
    httpd_uri_t uri_get_data_nodes = {
        .uri = "/dataNodes",
        .method = HTTP_GET,
        .handler = http_api_query_dataNodes,
        .user_ctx = rest_context};
 
    httpd_uri_t uri_authorize_os = {
        .uri = "/passport/authorizeOs",
        .method = HTTP_POST,
        .handler = http_api_passport_authorize_os,
        .user_ctx = rest_context};
 
    httpd_uri_t uri_authorize_urw = {
        .uri = "/userRoleWorkspaces",
        .method = HTTP_GET,
        .handler = http_api_passport_user_role_workspace,
        .user_ctx = rest_context};

    httpd_uri_t uri_write_datum = {
        .uri = "/dataNode/write",
        .method = HTTP_POST,
        .handler = http_api_write_to_node,
        .user_ctx = rest_context};

    if (httpd_start(&server, &config) == ESP_OK)
    {
        httpd_register_uri_handler(server, &uri_get_data_nodes);
        httpd_register_uri_handler(server, &uri_write_datum);
        httpd_register_uri_handler(server, &uri_authorize_os);
        httpd_register_uri_handler(server, &uri_authorize_urw);

        append_memory_stat_router(server, rest_context);
        append_gpio_router(server, rest_context);
        append_gpio_mode_router(server, rest_context);
        append_gpio_state_router(server, rest_context);
        httpd_register_uri_handler(server, &uri_get);
    }

    return server;
}

void wifi_init_sta(const char *n_ssid, const char *n_pass)
{
    printf("1\n");
    if (n_ssid == NULL)
    {
        printf("2\n");
        if (n_ssid[0] == '\0')
        {
            printf("Emptty ssid, skipping\n");
            return;
        }
    }

    s_wifi_event_group = xEventGroupCreate();

    ESP_ERROR_CHECK(esp_netif_init());

    ESP_ERROR_CHECK(esp_event_loop_create_default());
    esp_netif_create_default_wifi_sta();

    wifi_init_config_t cfg = WIFI_INIT_CONFIG_DEFAULT();
    ESP_ERROR_CHECK(esp_wifi_init(&cfg));

    esp_event_handler_instance_t instance_any_id;
    esp_event_handler_instance_t instance_got_ip;
    ESP_ERROR_CHECK(esp_event_handler_instance_register(WIFI_EVENT,
                                                        ESP_EVENT_ANY_ID,
                                                        &event_handler,
                                                        NULL,
                                                        &instance_any_id));
    ESP_ERROR_CHECK(esp_event_handler_instance_register(IP_EVENT,
                                                        IP_EVENT_STA_GOT_IP,
                                                        &event_handler,
                                                        NULL,
                                                        &instance_got_ip));
    // printf("hi %s", ssid);
    // printf("hi %s", password);

    wifi_config_t wifi_config = {
        .sta = {
            // .ssid = {ssid},
            // .password = {password},
            // .ssid = EXAMPLE_ESP_WIFI_SSID,
            // .password = EXAMPLE_ESP_WIFI_PASS,
            /* Setting a password implies station will connect to all security modes including WEP/WPA.
             * However these modes are deprecated and not advisable to be used. Incase your Access point
             * doesn't support WPA2, these mode can be enabled by commenting below line */
            .threshold.authmode = WIFI_AUTH_WPA2_PSK,
        },
    };

    // char *password2 = "smct1589";                                     // assigning SSID
    // strncpy((char *)wifi_config.sta.password, (char *)password2, 32); // copy
    // char *password2 = "smct1589";                                     // assigning SSID
    strncpy((char *)wifi_config.sta.password, (char *)n_pass, 32); // copy
    strncpy((char *)wifi_config.sta.ssid, (char *)n_ssid, 32);     // copy

    ESP_ERROR_CHECK(esp_wifi_set_mode(WIFI_MODE_STA));
    ESP_ERROR_CHECK(esp_wifi_set_config(WIFI_IF_STA, &wifi_config));
    ESP_ERROR_CHECK(esp_wifi_start());

    ESP_LOGI(WIFI_TAG, "wifi_init_sta finished.");

    /* Waiting until either the connection is established (WIFI_CONNECTED_BIT) or connection failed for the maximum
     * number of re-tries (WIFI_FAIL_BIT). The bits are set by event_handler() (see above) */
    EventBits_t bits = xEventGroupWaitBits(s_wifi_event_group,
                                           WIFI_CONNECTED_BIT | WIFI_FAIL_BIT,
                                           pdFALSE,
                                           pdFALSE,
                                           portMAX_DELAY);

    /* xEventGroupWaitBits() returns the bits before the call returned, hence we can test which event actually
     * happened. */
    if (bits & WIFI_CONNECTED_BIT)
    {
        ESP_LOGI(WIFI_TAG, "connected to ap SSID:%s password:%s",
                 wifi_config.sta.ssid, wifi_config.sta.password);
    }
    else if (bits & WIFI_FAIL_BIT)
    {
        ESP_LOGI(WIFI_TAG, "Failed to connect to SSID:%s, password:%s",
                 wifi_config.sta.ssid, wifi_config.sta.password);
    }
    else
    {
        ESP_LOGE(WIFI_TAG, "UNEXPECTED EVENT");
    }

    /* The event will not be processed after unregister */
    ESP_ERROR_CHECK(esp_event_handler_instance_unregister(IP_EVENT, IP_EVENT_STA_GOT_IP, instance_got_ip));
    ESP_ERROR_CHECK(esp_event_handler_instance_unregister(WIFI_EVENT, ESP_EVENT_ANY_ID, instance_any_id));
    vEventGroupDelete(s_wifi_event_group);
}
