#ifndef memory_stat_caction_c
#define memory_stat_caction_c
#include "./MemoryStatDefinitions.dyno.h"
#include "./MemoryStatCSQL.dyno.h"
#include "./MemoryStatCJson.dyno.h"
#include "./MemoryStatCJson.dyno.c"
char* memory_stat_entity_to_sql_insert(struct memory_stat_entity_t *data)
{
    char* query = sqlite3_mprintf(
        memory_stat_insert_sql
            , data->visibility == NULL ? "" :  data->visibility
            , data->parentId == NULL ? "" :  data->parentId
            , data->linkerId == NULL ? "" :  data->linkerId
            , data->workspaceId == NULL ? "" :  data->workspaceId
            , data->linkedId == NULL ? "" :  data->linkedId
            , data->uniqueId == NULL ? "" :  data->uniqueId
            , data->userId == NULL ? "" :  data->userId
            , data->rank == NULL ? 0 : * data->rank
            , data->updated == NULL ? 0 : * data->updated
            , data->created == NULL ? 0 : * data->created
            , data->createdFormatted == NULL ? "" :  data->createdFormatted
            , data->updatedFormatted == NULL ? "" :  data->updatedFormatted
            , data->heapSize == NULL ? 0 : * data->heapSize
    );
    return query;
};
;
char* memory_stat_entity_to_sql_update(struct memory_stat_entity_t *data)
{
    str_builder_t *sb;
    char           *str;
    sb = str_builder_create();
    str_builder_add_str(sb, "UPDATE fb_memory_stat_entities set unique_id = unique_id ", 0);
        if (data->visibility != NULL) {
            str_builder_add_str(sb, ",visibility = '", 0);
            str_builder_add_str(sb, data->visibility, 0);
            str_builder_add_str(sb, "'", 0);
        }
        if (data->parentId != NULL) {
            str_builder_add_str(sb, ",parent_id = '", 0);
            str_builder_add_str(sb, data->parentId, 0);
            str_builder_add_str(sb, "'", 0);
        }
        if (data->linkerId != NULL) {
            str_builder_add_str(sb, ",linker_id = '", 0);
            str_builder_add_str(sb, data->linkerId, 0);
            str_builder_add_str(sb, "'", 0);
        }
        if (data->workspaceId != NULL) {
            str_builder_add_str(sb, ",workspace_id = '", 0);
            str_builder_add_str(sb, data->workspaceId, 0);
            str_builder_add_str(sb, "'", 0);
        }
        if (data->linkedId != NULL) {
            str_builder_add_str(sb, ",linked_id = '", 0);
            str_builder_add_str(sb, data->linkedId, 0);
            str_builder_add_str(sb, "'", 0);
        }
        if (data->uniqueId != NULL) {
            str_builder_add_str(sb, ",unique_id = '", 0);
            str_builder_add_str(sb, data->uniqueId, 0);
            str_builder_add_str(sb, "'", 0);
        }
        if (data->userId != NULL) {
            str_builder_add_str(sb, ",user_id = '", 0);
            str_builder_add_str(sb, data->userId, 0);
            str_builder_add_str(sb, "'", 0);
        }
        if (data->rank != NULL) {
            str_builder_add_str(sb, ",rank = ", 0);
            str_builder_add_int(sb, *data->rank);
        }
        if (data->updated != NULL) {
            str_builder_add_str(sb, ",updated = ", 0);
            str_builder_add_int(sb, *data->updated);
        }
        if (data->created != NULL) {
            str_builder_add_str(sb, ",created = ", 0);
            str_builder_add_int(sb, *data->created);
        }
        if (data->createdFormatted != NULL) {
            str_builder_add_str(sb, ",created_formatted = '", 0);
            str_builder_add_str(sb, data->createdFormatted, 0);
            str_builder_add_str(sb, "'", 0);
        }
        if (data->updatedFormatted != NULL) {
            str_builder_add_str(sb, ",updated_formatted = '", 0);
            str_builder_add_str(sb, data->updatedFormatted, 0);
            str_builder_add_str(sb, "'", 0);
        }
        if (data->heapSize != NULL) {
            str_builder_add_str(sb, ",heap_size = ", 0);
            str_builder_add_int(sb, *data->heapSize);
        }
    str_builder_add_str(sb, " where unique_id = '", 0);
    str_builder_add_str(sb, data->uniqueId , 0);
    str_builder_add_str(sb, "'", 0);
    str = str_builder_dump(sb, NULL);
    str_builder_destroy(sb);
    return str;
};
;
esp_err_t memory_stat_action_create(httpd_req_t *req)
{
    int response;
    int count = 0;
    char * body = read_body_as_string(req);
    memory_stat_entity_t dto = json_memory_stat(body);
    char * sql = memory_stat_entity_to_sql_insert(&dto);
    execute_sql(sql , dbref);
    httpd_resp_set_type(req, "application/json");
    response = httpd_resp_send(req, "", HTTPD_RESP_USE_STRLEN);
    return response;
}
;
esp_err_t memory_stat_action_migrate(httpd_req_t *req)
{
    int response;
    execute_sql(memory_stat_create_sql , dbref);
    return 0;
}
;
static char * memory_stat_action_get_one(sqlite3 *db1, const char * sql)
{
    cJSON *body = cJSON_CreateObject();
    cJSON *json = cJSON_AddObjectToObject(body, "data");
    sqlite3_stmt *stmt;
    sqlite3_prepare_v2(db1, sql, -1, &stmt, NULL);
	printf("Got result single:\n");
    int record = 0;
    while (sqlite3_step(stmt) != SQLITE_DONE) {
        int i;
		int num_cols = sqlite3_column_count(stmt);
		for (i = 0; i < num_cols; i++)
		{
            char * name = sqlite3_column_name(stmt, i);
                // TEXT
            if (strcmp(name, "visibility") == 0) {
                    cJSON_AddStringToObject(json, "visibility", (const char *)sqlite3_column_text(stmt, i));
            }
                // TEXT
            if (strcmp(name, "parent_id") == 0) {
                    cJSON_AddStringToObject(json, "parentId", (const char *)sqlite3_column_text(stmt, i));
            }
                // TEXT
            if (strcmp(name, "linker_id") == 0) {
                    cJSON_AddStringToObject(json, "linkerId", (const char *)sqlite3_column_text(stmt, i));
            }
                // TEXT
            if (strcmp(name, "workspace_id") == 0) {
                    cJSON_AddStringToObject(json, "workspaceId", (const char *)sqlite3_column_text(stmt, i));
            }
                // TEXT
            if (strcmp(name, "linked_id") == 0) {
                    cJSON_AddStringToObject(json, "linkedId", (const char *)sqlite3_column_text(stmt, i));
            }
                // TEXT
            if (strcmp(name, "unique_id") == 0) {
                    cJSON_AddStringToObject(json, "uniqueId", (const char *)sqlite3_column_text(stmt, i));
            }
                // TEXT
            if (strcmp(name, "user_id") == 0) {
                    cJSON_AddStringToObject(json, "userId", (const char *)sqlite3_column_text(stmt, i));
            }
                // INTEGER
            if (strcmp(name, "rank") == 0) {
                    double y = sqlite3_column_double(stmt, i);
                    cJSON_AddNumberToObject(json, "rank", y);
            }
                // INTEGER
            if (strcmp(name, "updated") == 0) {
                    double y = sqlite3_column_double(stmt, i);
                    cJSON_AddNumberToObject(json, "updated", y);
            }
                // INTEGER
            if (strcmp(name, "created") == 0) {
                    double y = sqlite3_column_double(stmt, i);
                    cJSON_AddNumberToObject(json, "created", y);
            }
                // TEXT
            if (strcmp(name, "created_formatted") == 0) {
                    cJSON_AddStringToObject(json, "createdFormatted", (const char *)sqlite3_column_text(stmt, i));
            }
                // TEXT
            if (strcmp(name, "updated_formatted") == 0) {
                    cJSON_AddStringToObject(json, "updatedFormatted", (const char *)sqlite3_column_text(stmt, i));
            }
                // INTEGER
            if (strcmp(name, "heap_size") == 0) {
                    double y = sqlite3_column_double(stmt, i);
                    cJSON_AddNumberToObject(json, "heapSize", y);
            }
        }
        record++;
        break;
    }
    sqlite3_finalize(stmt);
    char *res = cJSON_Print(body);
    cJSON_Delete(body);
    return res;
};
;
static char * memory_stat_action_query(sqlite3 *db1, const char * sql, int *count)
{
    cJSON *body = cJSON_CreateObject();
    cJSON *data = cJSON_AddObjectToObject(body, "data");
    cJSON *json = cJSON_AddArrayToObject(data, "items");
    sqlite3_stmt *stmt;
    sqlite3_prepare_v2(db1, sql, -1, &stmt, NULL);
	printf("Got results:\n");
    int record = 0;
    while (sqlite3_step(stmt) != SQLITE_DONE) {
        int i;
		int num_cols = sqlite3_column_count(stmt);
        cJSON *row = cJSON_CreateObject();
		for (i = 0; i < num_cols; i++)
		{
            char * name = sqlite3_column_name(stmt, i);
                // TEXT
            if (strcmp(name, "visibility") == 0) {
                    cJSON_AddStringToObject(row, "visibility", (const char *)sqlite3_column_text(stmt, i));
            }
                // TEXT
            if (strcmp(name, "parent_id") == 0) {
                    cJSON_AddStringToObject(row, "parentId", (const char *)sqlite3_column_text(stmt, i));
            }
                // TEXT
            if (strcmp(name, "linker_id") == 0) {
                    cJSON_AddStringToObject(row, "linkerId", (const char *)sqlite3_column_text(stmt, i));
            }
                // TEXT
            if (strcmp(name, "workspace_id") == 0) {
                    cJSON_AddStringToObject(row, "workspaceId", (const char *)sqlite3_column_text(stmt, i));
            }
                // TEXT
            if (strcmp(name, "linked_id") == 0) {
                    cJSON_AddStringToObject(row, "linkedId", (const char *)sqlite3_column_text(stmt, i));
            }
                // TEXT
            if (strcmp(name, "unique_id") == 0) {
                    cJSON_AddStringToObject(row, "uniqueId", (const char *)sqlite3_column_text(stmt, i));
            }
                // TEXT
            if (strcmp(name, "user_id") == 0) {
                    cJSON_AddStringToObject(row, "userId", (const char *)sqlite3_column_text(stmt, i));
            }
                // INTEGER
            if (strcmp(name, "rank") == 0) {
                    double y = sqlite3_column_double(stmt, i);
                    cJSON_AddNumberToObject(row, "rank", y);
            }
                // INTEGER
            if (strcmp(name, "updated") == 0) {
                    double y = sqlite3_column_double(stmt, i);
                    cJSON_AddNumberToObject(row, "updated", y);
            }
                // INTEGER
            if (strcmp(name, "created") == 0) {
                    double y = sqlite3_column_double(stmt, i);
                    cJSON_AddNumberToObject(row, "created", y);
            }
                // TEXT
            if (strcmp(name, "created_formatted") == 0) {
                    cJSON_AddStringToObject(row, "createdFormatted", (const char *)sqlite3_column_text(stmt, i));
            }
                // TEXT
            if (strcmp(name, "updated_formatted") == 0) {
                    cJSON_AddStringToObject(row, "updatedFormatted", (const char *)sqlite3_column_text(stmt, i));
            }
                // INTEGER
            if (strcmp(name, "heap_size") == 0) {
                    double y = sqlite3_column_double(stmt, i);
                    cJSON_AddNumberToObject(row, "heapSize", y);
            }
        }
        record++;
        cJSON_AddItemToArray(json, row);
    }
    sqlite3_finalize(stmt);
    *count = (int*)record;
    cJSON_AddNumberToObject(body, "totalItems", *count);
    cJSON_AddNumberToObject(body, "totalAvailableItems", *count);
    char *res = cJSON_Print(body);
    cJSON_Delete(body);
    return res;
};
;
#endif
