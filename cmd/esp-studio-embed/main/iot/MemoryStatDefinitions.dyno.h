#ifndef memory_stat_definitions
#define memory_stat_definitions
struct memory_stat_entity_t
{
        char * visibility;
        char * parentId;
        char * linkerId;
        char * workspaceId;
        char * linkedId;
        char * uniqueId;
        char * userId;
        double * rank;
        double * updated;
        double * created;
        char * createdFormatted;
        char * updatedFormatted;
        /* even int64 was converted to double due to esp bug */
        double * heapSize;
};
typedef struct memory_stat_entity_t memory_stat_entity_t;
#endif