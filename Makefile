default:
	cd cmd/esp-studio-server && make dev
mock:
	rm -rf artifacts/md && mkdir -p artifacts/md && \
	rm -rf esp-32-source-database.db && e mock import && e mock write && make inject-mocks
desktop:
	cd cmd/esp-studio-desktop && make
god:
	cd cmd/esp-studio-desktop && ~/go/bin/wails build -o esp-studio-desktop;
win:
	cd cmd/esp-studio-desktop && GOOS=windows GOARCH=amd64 ~/go/bin/wails build -o esp-studio-win64.exe;
win-package:
	cd ./cmd/esp-studio-desktop && ./package.bat