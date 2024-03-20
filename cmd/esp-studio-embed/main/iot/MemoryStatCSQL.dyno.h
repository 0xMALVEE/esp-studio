#ifndef memory_stat_csql_h
#define memory_stat_csql_h
#include "./MemoryStatDefinitions.dyno.h"
const char * memory_stat_create_sql = "CREATE TABLE IF NOT EXISTS fb_memory_stat_entities ("
        "`visibility` TEXT,"
        "`parent_id` TEXT,"
        "`linker_id` TEXT,"
        "`workspace_id` TEXT,"
        "`linked_id` TEXT,"
        "`unique_id` TEXT,"
        "`user_id` TEXT,"
        "`rank` INTEGER,"
        "`updated` INTEGER,"
        "`created` INTEGER,"
        "`created_formatted` TEXT,"
        "`updated_formatted` TEXT,"
        "`heap_size` INTEGER,"
    "PRIMARY KEY (unique_id)"
" );";
const char * memory_stat_query_sql = "SELECT * FROM fb_memory_stat_entities "
;
const char * memory_stat_insert_sql = "INSERT INTO fb_memory_stat_entities values ("
    "'%q',"
    "'%q',"
    "'%q',"
    "'%q',"
    "'%q',"
    "'%q',"
    "'%q',"
    "%f,"
    "%f,"
    "%f,"
    "'%q',"
    "'%q',"
    "%f"
" );";
;
#endif