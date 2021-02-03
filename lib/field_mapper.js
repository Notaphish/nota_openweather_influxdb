const fields = require("../fields.json");
const _ = require("lodash");

module.exports = {
  openWeatherApiFieldPathsByKey: _.mapValues(fields, "openweather_field_path"),
  influxFieldNames: Object.keys(fields),
};
