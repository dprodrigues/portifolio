<template>
  <div class="container">
    <Date />

    <Clock />
  </div>
</template>

<script>
import Clock from './Clock.vue';
import Date from './Date.vue';

export default {
  components: {
    Clock,
    Date
  }
}
</script>

<style scoped>
.container {
  align-items: flex-end;
  display: flex;
}

p {
  font-size: 0.875rem;
}
</style>
