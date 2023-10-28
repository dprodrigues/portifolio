<template>
  <Loading v-if="loading" />

  <div class="container" v-else>
    <img :src="currentWeatherIcon" alt="Weather icon" class="weather-image" />

    <p class="weather-temperature">{{ currentTemperature }}°C</p>
  </div>
</template>

<script>
import Loading from './Loading.vue';

export default {
  components: {
    Loading,
  },
  data() {
    return {
      currentTemperature: null,
      currentWeatherIcon: null,
      loading: true,
    };
  },
  created() {
    this.fetchWeather();
  },
  methods: {
    async fetchWeather() {
      try {
        const data = await fetch('/api/weather/get-temperature').then((response) => response.json());

        this.currentTemperature = data.current.temp_c;
        this.currentWeatherIcon = data.current.condition.icon;
      } catch (error) {
        console.error('Error fetching weather:', error);
      } finally {
        this.loading = false
      }
    }
  }
};
</script>

<style scoped>
.container,
.loading {
  align-items: center;
  display: flex;
  height: 1.5rem;
}

.weather-image {
  filter: brightness(0) invert(1);
  margin-right: 0.5rem;
  width: 1.5rem;
}

.weather-temperature {
  color: var(--color-text);
  font-size: 0.875rem;
}
</style>
