require("dotenv/config");

module.exports = {
  WEATHER: {
    URL: process.env.WEATHER_API,
    KEY: process.env.WEATHER_KEY,
  },
};
