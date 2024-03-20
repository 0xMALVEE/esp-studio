#
# This is a project Makefile. It is assumed the directory this Makefile resides in is a
# project subdirectory.
#

# PROJECT_NAME := esp-studio

# include $(IDF_PATH)/make/project.mk
# rm -rf ./main/iot && cp -R ../../modules/iot/c ./main/iot && 

sync:
	rm -rf ./main/iot && cp -R ../../modules/iot/c ./main/iot

b:
	. ${HOME}/esp/esp-idf/export.sh && idf.py build

clean:
	
	. ${HOME}/esp/esp-idf/export.sh && idf.py fullclean
idf:
	. ${HOME}/esp/esp-idf/export.sh && idf.py flash monitor
erase:
	. ${HOME}/esp/esp-idf/export.sh && idf.py erase-flash
 

bundle:
	make prepare;
	. ${HOME}/esp/esp-idf/export.sh && idf.py build
	rm -rf esp-studio-release && mkdir -p esp-studio-release;
	mkdir -p esp-studio-release/bootloader;
	mkdir -p esp-studio-release/partition_table;
	cp -R bundle-include/* esp-studio-release/;
	cp -R build/*.bin esp-studio-release/;
	cp -R build/bootloader/*.bin esp-studio-release/bootloader/
	cp -R build/partition_table/*.bin esp-studio-release/partition_table
	zip -r esp-studio-release.zip esp-studio-release;

# Generates C lib and brings it into project
c:
	make js && cd ../.. && npm run c-builder:esp-studio && cd - && rm -rf ./main/esp-studio-server-lib && mkdir -p ./main/esp-studio-server-lib && cp -R ../../artifacts/esp-studio-server-c/MemoryStat* ./main/esp-studio-server-lib
	
js:
	cd ../esp-studio-server && make js
prepare:

	cd ../../ui && npm run es:build:embed && cd - && rm -rf main/dist && \
	cp -R ../../ui/build ./main/dist

# In this project it is essential to have some mock data for now
mocks:
	cd ../.. && \
	rm -rf artifacts/md && mkdir -p artifacts/md && \
	rm -rf esp-32-source-database.db && e mock import && e mock write && make inject-mocks
