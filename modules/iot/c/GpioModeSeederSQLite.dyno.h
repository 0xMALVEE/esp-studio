const char * gpio_mode_seeder_sql = ""
"INSERT INTO fb_gpio_mode_entities values (\"A\",NULL,NULL,\"system\",NULL,\"GPIO_MODE_DISABLE\",NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,\"disable input and output\");"
"INSERT INTO fb_gpio_mode_entities values (\"A\",NULL,NULL,\"system\",NULL,\"GPIO_MODE_INPUT\",NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,\"input only\");"
"INSERT INTO fb_gpio_mode_entities values (\"A\",NULL,NULL,\"system\",NULL,\"GPIO_MODE_OUTPUT\",NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,\"output only mode\");"
"INSERT INTO fb_gpio_mode_entities values (\"A\",NULL,NULL,\"system\",NULL,\"GPIO_MODE_OUTPUT_OD\",NULL,NULL,NULL,NULL,NULL,NULL,NULL,6,\"output only with open-drain mode\");"
"INSERT INTO fb_gpio_mode_entities values (\"A\",NULL,NULL,\"system\",NULL,\"GPIO_MODE_INPUT_OUTPUT_OD\",NULL,NULL,NULL,NULL,NULL,NULL,NULL,7,\"output and input with open-drain mode\");"
"INSERT INTO fb_gpio_mode_entities values (\"A\",NULL,NULL,\"system\",NULL,\"GPIO_MODE_INPUT_OUTPUT\",NULL,NULL,NULL,NULL,NULL,NULL,NULL,3,\"output and input mode\");"
"";