#ifndef gpio_mode_json_c
#define gpio_mode_json_c
#include "cJSON.h"
#include "./GpioModeDefinitions.dyno.h"
cJSON *gpio_mode_json_object(struct gpio_mode_entity_t *data)
{
    cJSON *json = cJSON_CreateObject();
    if (data->visibility != NULL) {
        cJSON_AddStringToObject(json, "visibility", data->visibility);
    }
    if (data->parentId != NULL) {
        cJSON_AddStringToObject(json, "parentId", data->parentId);
    }
    if (data->linkerId != NULL) {
        cJSON_AddStringToObject(json, "linkerId", data->linkerId);
    }
    if (data->workspaceId != NULL) {
        cJSON_AddStringToObject(json, "workspaceId", data->workspaceId);
    }
    if (data->linkedId != NULL) {
        cJSON_AddStringToObject(json, "linkedId", data->linkedId);
    }
    if (data->uniqueId != NULL) {
        cJSON_AddStringToObject(json, "uniqueId", data->uniqueId);
    }
    if (data->userId != NULL) {
        cJSON_AddStringToObject(json, "userId", data->userId);
    }
    if (data->rank != NULL) {
        cJSON_AddNumberToObject(json, "rank", *data->rank);
    }
    if (data->updated != NULL) {
        cJSON_AddNumberToObject(json, "updated", *data->updated);
    }
    if (data->created != NULL) {
        cJSON_AddNumberToObject(json, "created", *data->created);
    }
    if (data->createdFormatted != NULL) {
        cJSON_AddStringToObject(json, "createdFormatted", data->createdFormatted);
    }
    if (data->updatedFormatted != NULL) {
        cJSON_AddStringToObject(json, "updatedFormatted", data->updatedFormatted);
    }
    if (data->key != NULL) {
        cJSON_AddStringToObject(json, "key", data->key);
    }
    if (data->index != NULL) {
        cJSON_AddNumberToObject(json, "index", *data->index);
    }
    if (data->description != NULL) {
        cJSON_AddStringToObject(json, "description", data->description);
    }
    return json;
};
char *gpio_mode_json(struct gpio_mode_entity_t *data)
{
    cJSON *json = gpio_mode_json_object(data);
    char *res = cJSON_Print(json);
    cJSON_free(json);
    return res;
};
struct gpio_mode_entity_t json_gpio_mode(const char *source)
{
    struct gpio_mode_entity_t dto = {};
    cJSON *json = cJSON_Parse(source);
    if (cJSON_GetObjectItem(json, "visibility") != NULL) {
            dto.visibility = cJSON_GetObjectItem(json, "visibility")->valuestring;
    }
    if (cJSON_GetObjectItem(json, "parentId") != NULL) {
            dto.parentId = cJSON_GetObjectItem(json, "parentId")->valuestring;
    }
    if (cJSON_GetObjectItem(json, "linkerId") != NULL) {
            dto.linkerId = cJSON_GetObjectItem(json, "linkerId")->valuestring;
    }
    if (cJSON_GetObjectItem(json, "workspaceId") != NULL) {
            dto.workspaceId = cJSON_GetObjectItem(json, "workspaceId")->valuestring;
    }
    if (cJSON_GetObjectItem(json, "linkedId") != NULL) {
            dto.linkedId = cJSON_GetObjectItem(json, "linkedId")->valuestring;
    }
    if (cJSON_GetObjectItem(json, "uniqueId") != NULL) {
            dto.uniqueId = cJSON_GetObjectItem(json, "uniqueId")->valuestring;
    }
    if (cJSON_GetObjectItem(json, "userId") != NULL) {
            dto.userId = cJSON_GetObjectItem(json, "userId")->valuestring;
    }
    if (cJSON_GetObjectItem(json, "rank") != NULL) {
            dto.rank = &cJSON_GetObjectItem(json, "rank")->valuedouble;
    }
    if (cJSON_GetObjectItem(json, "updated") != NULL) {
            dto.updated = &cJSON_GetObjectItem(json, "updated")->valuedouble;
    }
    if (cJSON_GetObjectItem(json, "created") != NULL) {
            dto.created = &cJSON_GetObjectItem(json, "created")->valuedouble;
    }
    if (cJSON_GetObjectItem(json, "createdFormatted") != NULL) {
            dto.createdFormatted = cJSON_GetObjectItem(json, "createdFormatted")->valuestring;
    }
    if (cJSON_GetObjectItem(json, "updatedFormatted") != NULL) {
            dto.updatedFormatted = cJSON_GetObjectItem(json, "updatedFormatted")->valuestring;
    }
    if (cJSON_GetObjectItem(json, "key") != NULL) {
            dto.key = cJSON_GetObjectItem(json, "key")->valuestring;
    }
    if (cJSON_GetObjectItem(json, "index") != NULL) {
            dto.index = &cJSON_GetObjectItem(json, "index")->valuedouble;
    }
    if (cJSON_GetObjectItem(json, "description") != NULL) {
            dto.description = cJSON_GetObjectItem(json, "description")->valuestring;
    }
    return dto;
};
#endif