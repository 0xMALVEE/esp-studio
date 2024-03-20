gp:
	rm -rf build; mkdir build;
	rm -rf github-pages; mkdir github-pages;

	# English
	./node_modules/.bin/env-cmd -f ./src/apps/react-go-dashboard/.env.githubpages ./node_modules/.bin/env-cmd -f ./src/apps/react-go-dashboard/.env.githubpagesen ./node_modules/.bin/craco build
	cp -R build github-pages/en;
	
	# Persian
	./node_modules/.bin/env-cmd -f ./src/apps/react-go-dashboard/.env.githubpages ./node_modules/.bin/env-cmd -f ./src/apps/react-go-dashboard/.env.githubpagesfa ./node_modules/.bin/craco build
	cp -R build github-pages/fa;

	# Create the index.html
	echo "<meta http-equiv='Refresh' content=\"0; url='/react-go-dashboard/en'\" />" > github-pages/index.html
b1:
	rm -rf build; mkdir build;
	rm -rf polish-b1-simulator/en;
	rm -rf polish-b1-simulator/fa;
	rm -rf polish-b1-simulator/polish-b1;
	cp -R ../cmd/academy-core/embed-content/polish-b1 polish-b1-simulator/
	
	# English
	./node_modules/.bin/env-cmd -f ./src/apps/polish-b1-simulator/.env.githubpages ./node_modules/.bin/env-cmd -f ./src/apps/polish-b1-simulator/.env.githubpagesen ./node_modules/.bin/craco build
	cp -R build polish-b1-simulator/en;
	
	# Persian
	./node_modules/.bin/env-cmd -f ./src/apps/polish-b1-simulator/.env.githubpages ./node_modules/.bin/env-cmd -f ./src/apps/polish-b1-simulator/.env.githubpagesfa ./node_modules/.bin/craco build
	cp -R build polish-b1-simulator/fa;

	# Create the index.html
	echo "<meta http-equiv='Refresh' content=\"0; url='/polish-b1-simulator/en'\" />" > polish-b1-simulator/index.html