<template>
  <div>
    <p>{{ currentTime }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: ''
    };
  },
  created() {
    this.updateTime();
    setInterval(this.updateTime, 60000);
  },
  methods: {
    updateTime() {
      const now = new Date();
      let minutes = now.getMinutes()
      let hours = now.getHours();
      let period = 'AM';

      if (minutes < 10) { minutes = `0${minutes}`; }

      if (hours === 0) { hours = 12; }

      if (hours >= 12) { period = 'PM'; hours %= 12; }

      this.currentTime = `${hours}:${minutes} ${period}`;
    }
  }
};
</script>

<style scoped>
p {
  font-size: 0.875rem;
}
</style>
