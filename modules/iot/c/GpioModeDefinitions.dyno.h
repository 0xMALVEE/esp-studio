#ifndef gpio_mode_definitions
#define gpio_mode_definitions
struct gpio_mode_entity_t
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
        char * key;
        /* even int64 was converted to double due to esp bug */
        double * index;
        char * description;
};
typedef struct gpio_mode_entity_t gpio_mode_entity_t;
#endif