import axios from "axios";
import { WEATHER } from "~/server/config";

const instance = axios.create({
  baseURL: WEATHER.URL,
  headers: {
    "Content-Type": "application/json",
    Application: "application/json",
  },
});

const getTemperature = async () => {
  try {
    const { data } = await instance.get(
      `/current.json?q=teresopolis&key=${WEATHER.KEY}`
    );

    return data;
  } catch (error) {
    return error;
  }
};

export { getTemperature };
