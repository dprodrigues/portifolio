<script setup>
import NuxtTime from 'nuxt-time'
import Date from './Date.vue';

const date = ref('2023-02-11T08:24:08.396Z')

onMounted(() => {
  date.value = Date.now()
})

// const changeDate = () => {
//   date.value = Date.now()
// }

// export default {
//   components: {
//     Date,
//     NuxtTime
//   }
// }
</script>

<template>
  <div class="container">
    <Date />

    <NuxtTime :datetime="date" second="numeric" month="long" day="numeric" />
  </div>
</template>

<style scoped>
.container {
  align-items: flex-end;
  display: flex;
}

p {
  font-size: 0.875rem;
}
</style>
