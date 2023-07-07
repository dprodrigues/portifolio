const axios = require("axios");
const {
  WEATHER: { KEY, URL },
} = require("../../../config");

const instance = axios.create({
  baseURL: URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Application: "application/json",
  },
});

const getWeather = async () => {
  try {
    const response = await instance.get(
      `/current.json?q=teresopolis&key=${KEY}`
    );

    console.log("response:", response);

    return response;
  } catch (error) {
    console.log("error:", error);
  }
};

module.exports = { getWeather };
