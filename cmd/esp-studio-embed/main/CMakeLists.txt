idf_component_register(SRCS "main.c" 
INCLUDE_DIRS "." )
set(WEB_SRC_DIR "${CMAKE_CURRENT_SOURCE_DIR}/dist")

# littlefs_create_partition_image(storage device_graphics)

if (EXISTS ${WEB_SRC_DIR})
    spiffs_create_partition_image(webdata ${WEB_SRC_DIR} FLASH_IN_PROJECT)
else()
    message(FATAL_ERROR "SRC NOT EXISTS")
endif()