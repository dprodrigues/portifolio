export default function () {
  return useAsyncData("weather", () => $fetch("/api/weather/get-temperature"));
}
