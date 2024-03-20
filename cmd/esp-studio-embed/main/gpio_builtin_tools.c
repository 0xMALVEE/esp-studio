#ifndef gpio_builtin_tools_c
#define gpio_builtin_tools_c
#include "fireback.h"
struct write_datum_temp_dto_t
{

    double *pinIndex;
    double *value;
};

struct write_datum_temp_dto_t json_write_datum_temp_dto(const char *source)
{
    struct write_datum_temp_dto_t dto = {};
    cJSON *json = cJSON_Parse(source);

    if (cJSON_GetObjectItem(json, "pinIndex") != NULL)
    {
        dto.pinIndex = &cJSON_GetObjectItem(json, "pinIndex")->valuedouble;
    }

    if (cJSON_GetObjectItem(json, "value") != NULL)
    {
        dto.value = &cJSON_GetObjectItem(json, "value")->valuedouble;
    }
    
    cJSON_Delete(json);

    return dto;
}

static esp_err_t http_api_write_to_node(httpd_req_t *req)
{

    int response;

    httpd_resp_set_type(req, "application/json");
    const char *cxa = read_body_as_string(req);
    struct write_datum_temp_dto_t dto = json_write_datum_temp_dto(cxa);
    // free(cxa);
    int value = -1;
    int pinIndex = -1;

    if (dto.value != NULL)
    {
        value = *dto.value;
    }

    if (dto.pinIndex != NULL)
    {
        pinIndex = *dto.pinIndex;
    }

    if (value > -1 && pinIndex > -1)
    {
        gpio_set_level(pinIndex, value == 0 ? 1 : 0);
    }

    response = httpd_resp_send(req, "hi", strlen("hi"));
    return response;
}

static esp_err_t http_api_query_dataNodes(httpd_req_t *req)
{

    int response;

    httpd_resp_set_type(req, "application/json");
    char result[] = "{\"data\":{\"items\":[{\"name\": \"gpio1\"},{\"name\": \"gpio2\"},{\"name\": \"gpio3\"},{\"name\": \"gpio4\"},{\"name\": \"gpio5\"}]}}";

    response = httpd_resp_send(req, result, strlen(result));
    return response;
}

static esp_err_t http_api_passport_authorize_os(httpd_req_t *req)
{

    int response;

    httpd_resp_set_type(req, "application/json");
    char result[] = "{\"data\":{\"token\":\"817d0a1b8c754de8b91400a182a31007fbfd616feb8bfef706d05f18489d86f2\",\"exchangeKey\":\"ee32b4e1\",\"userRoleWorkspaces\":[{\"workspaceId\":\"OS_WS_501\",\"uniqueId\":\"caae55db\",\"userId\":\"OS_501\",\"roleId\":\"29ea454d\",\"role\":{\"workspaceId\":\"\",\"uniqueId\":\"29ea454d\",\"userId\":\"\",\"name\":\"OS User\",\"capabilities\":[{\"uniqueId\":\"root/*\",\"updated\":1695904927442724000,\"created\":1695904927442724000}],\"updated\":1695905132749994000,\"created\":1695905132749994000},\"updated\":1695905132751034000,\"created\":1695905132751034000}],\"user\":{\"uniqueId\":\"OS_501\",\"firstName\":\"ali\",\"updated\":1695905132748416000,\"created\":1695905132748416000}}}";

    response = httpd_resp_send(req, result, strlen(result));
    return response;
}

static esp_err_t http_api_passport_user_role_workspace(httpd_req_t *req)
{

    int response;

    httpd_resp_set_type(req, "application/json");
    char result[] = "{\"data\":{\"items\":[{\"created\":1695905132751034000,\"role\":{\"capabilities\":[{\"created\":1695904927442724000,\"uniqueId\":\"root/*\",\"updated\":1695904927442724000}],\"created\":1695905132749994000,\"name\":\"OS User\",\"uniqueId\":\"29ea454d\",\"updated\":1695905132749994000,\"userId\":\"\",\"workspaceId\":\"\"},\"roleId\":\"29ea454d\",\"uniqueId\":\"caae55db\",\"updated\":1695905132751034000,\"userId\":\"OS_501\",\"workspaceId\":\"OS_WS_501\"}],\"itemsPerPage\":20,\"startIndex\":0,\"totalAvailableItems\":0,\"totalItems\":1},\"jsonQuery\":\"\"}";

    response = httpd_resp_send(req, result, strlen(result));
    return response;
}


#endif