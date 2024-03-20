#ifndef memory_stat_json_h
#define memory_stat_json_h
#include "cJSON.h"
#include "./MemoryStatDefinitions.dyno.h"
cJSON *memory_stat_json_object(struct memory_stat_entity_t *data);
char *memory_stat_json(struct memory_stat_entity_t *data);
struct memory_stat_entity_t json_memory_stat(const char *source);
#endif