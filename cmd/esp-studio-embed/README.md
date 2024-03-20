# Fireback embed

A fireback implementation for small devices, aims to be configurable via bluetooth, create http server, and store
The data into memory for household projects.

## SQLITE for ESP IDF 5

Sqlite driver is perfect, just needs one minor change:

/Users/ali/esp/esp-idf/components/esp32-idf-sqlite3/CMakeLists.txt

Change:

REQUIRES mbedtls
to (spi_flash is missing)
REQUIRES mbedtls spi_flash

Also in the same directory, add this to esp32.c: (esp_random) seems to be missing

+#include <esp_random.h>
#include "shox96_0_2.h"

Rest are good!
