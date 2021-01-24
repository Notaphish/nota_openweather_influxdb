build:
	docker build ./ -t nota_openweathermap_influxdb

run:
	/usr/bin/docker run \
	--network="container:ow_influx" \
	nota_openweathermap_influxdb