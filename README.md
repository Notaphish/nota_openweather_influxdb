OpenWeatherAPI -> InfluxDB

Should be able to run on a cron, updating the persistent influxdb. Going to incorporate into my home dashboard  

Pre-reqs:
Docker, openweather api key

### Instructions

- Rename the `.env-example` file to `.env` or create your own `.env` file, and fill in the appropriate params

#### Docker

- Run `make build` to create the docker image ( baking the configuration in)
- Start-up the influx db container using `docker-compose up -d`
- Run the script with docker: `make run`

#### Local

- Run `npm install`
- Edit the `.env` file so the DB_HOST is localhost ( or whatever your influxdb is running )
- Run `npm run start` to run the script and upload to influxdb