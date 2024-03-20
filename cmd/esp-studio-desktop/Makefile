default:
	cd ../../ui && rm -rf build && npm run build:desktop && cd ../cmd/esp-studio-desktop && \
	rm -rf ./frontend/dist && mkdir -p ./cmd/esp-studio/frontend && cp -R ../../ui/build ./frontend/dist && \
	cp ./assets/appicon.png ./build/appicon.png && \
	~/go/bin/wails build -o esp-studio-desktop;

pkg:
	rm -rf ../../artifacts/esp-studio-mac && mkdir -p ../../artifacts/esp-studio-mac && \
	packagesbuild --project ./macos-installer.pkgproj && \
	cp ./build/academy.pkg ../../artifacts/esp-studio-mac/academy_desktop_mac_latest.pkg;
	rm -rf ./build/academy.pkg;
