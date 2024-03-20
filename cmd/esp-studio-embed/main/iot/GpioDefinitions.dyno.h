#ifndef gpio_definitions
#define gpio_definitions
struct gpio_entity_t
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
        char * name;
        /* even int64 was converted to double due to esp bug */
        double * index;
        char * analogFunction;
        char * rtcGpio;
        char * comments;
        char * modeId;
};
typedef struct gpio_entity_t gpio_entity_t;
#endif