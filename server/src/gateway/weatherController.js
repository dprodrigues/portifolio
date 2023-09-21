const { getWeather } = require("../../api/weather");

module.exports = {
  async getCurrentTemperature(req, res) {
    try {
      const weather = await getWeather();

      res.status(200).send(JSON.stringify(weather.data));
    } catch (error) {
      res.status(500).send();
    }
  },
};
