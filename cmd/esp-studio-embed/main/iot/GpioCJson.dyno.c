#ifndef gpio_json_c
#define gpio_json_c
#include "cJSON.h"
#include "./GpioDefinitions.dyno.h"
cJSON *gpio_json_object(struct gpio_entity_t *data)
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
    if (data->name != NULL) {
        cJSON_AddStringToObject(json, "name", data->name);
    }
    if (data->index != NULL) {
        cJSON_AddNumberToObject(json, "index", *data->index);
    }
    if (data->analogFunction != NULL) {
        cJSON_AddStringToObject(json, "analogFunction", data->analogFunction);
    }
    if (data->rtcGpio != NULL) {
        cJSON_AddStringToObject(json, "rtcGpio", data->rtcGpio);
    }
    if (data->comments != NULL) {
        cJSON_AddStringToObject(json, "comments", data->comments);
    }
    return json;
};
char *gpio_json(struct gpio_entity_t *data)
{
    cJSON *json = gpio_json_object(data);
    char *res = cJSON_Print(json);
    cJSON_free(json);
    return res;
};
struct gpio_entity_t json_gpio(const char *source)
{
    struct gpio_entity_t dto = {};
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
    if (cJSON_GetObjectItem(json, "name") != NULL) {
            dto.name = cJSON_GetObjectItem(json, "name")->valuestring;
    }
    if (cJSON_GetObjectItem(json, "index") != NULL) {
            dto.index = &cJSON_GetObjectItem(json, "index")->valuedouble;
    }
    if (cJSON_GetObjectItem(json, "analogFunction") != NULL) {
            dto.analogFunction = cJSON_GetObjectItem(json, "analogFunction")->valuestring;
    }
    if (cJSON_GetObjectItem(json, "rtcGpio") != NULL) {
            dto.rtcGpio = cJSON_GetObjectItem(json, "rtcGpio")->valuestring;
    }
    if (cJSON_GetObjectItem(json, "comments") != NULL) {
            dto.comments = cJSON_GetObjectItem(json, "comments")->valuestring;
    }
    return dto;
};
#endif