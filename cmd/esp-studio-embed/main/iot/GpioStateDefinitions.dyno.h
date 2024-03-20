#ifndef gpio_state_definitions
#define gpio_state_definitions
struct gpio_state_entity_t
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
        char * gpioModeId;
        /* even int64 was converted to double due to esp bug */
        double * gpioIndexSnapshot;
        /* even int64 was converted to double due to esp bug */
        double * gpioModeSnapshot;
        /* even int64 was converted to double due to esp bug */
        double * gpioValueSnapshot;
        char * gpioId;
};
typedef struct gpio_state_entity_t gpio_state_entity_t;
#endif