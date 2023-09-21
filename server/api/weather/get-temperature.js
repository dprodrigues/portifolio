import { getTemperature } from "~/server/src/api/weather";

export default defineEventHandler(async () => {
  try {
    return await getTemperature();
  } catch (error) {
    return error;
  }
});
