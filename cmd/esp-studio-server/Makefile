prepare:
	rm -rf ./ui &&  cd ../../ui && npm run es:build:bundle && cd ../cmd/esp-studio-server && cp -R ../../ui/build ./ui

dev:
	go build -o ../../artifacts/esp-studio-server-mac/esp-studiox . && \
	mv ../../artifacts/esp-studio-server-mac/esp-studiox /usr/local/bin/e

pie:
	GOOS=linux GOARCH=arm go build -ldflags "-s -w" -o ../../artifacts/esp-studio-pie/esp-studio-pie .

win:
	go build -ldflags "-s -w" -o ../../artifacts/esp-studio-server-windows/esp.exe .

linux:
	GOARCH=amd64 GOOS=linux go build -ldflags "-s -w" -o ../../artifacts/esp-studio-server-linux/esp_linux_amd64 .
	
mac:
	go build -ldflags "-s -w" -o ../../artifacts/esp-studio-server-mac/esp_server .
	
npm:
	cd ../../artifacts/esp-studio-server/release-tsjs && npm i --force && npm run build && npm publish
