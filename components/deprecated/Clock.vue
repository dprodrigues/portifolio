<template>
  <div>
    <p>{{ currentTime }}</p>
  </div>
</template>

<script setup>
import { getCurrentHour } from '~/utils/getCurrentHour'
const currentTime = useState('currentTime', () => '')

await callOnce(() => {
  currentTime.value = getCurrentHour();

  setInterval(() => {
    currentTime.value = getCurrentHour();
  }, 1000)
})
</script>

<style scoped>
p {
  font-size: 0.875rem;
}
</style>
