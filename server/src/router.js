const weatherController = require("./gateway/weatherController");

module.exports = (app) => {
  app.get("/", weatherController.getCurrentTemperature);
};
