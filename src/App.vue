<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import BackgroundAnimation from './components/BackgroundAnimation.vue'
</script>

<template>
  <TheHeader />

  <main>
    <RouterView />

    <BackgroundAnimation />
  </main>
</template>

<style scoped>
header {
  background-color: rgba(29, 27, 27, 0.4);
  border-radius: 1rem;
  bottom: 3rem;
  left: 50%;
  padding: 1rem 2rem;
  position: fixed;
  transform: translateX(-50%);
  z-index: 15;
}

main {
  background: linear-gradient(to top, #3fa3ab 0%, #79b6b4 100%);
  border-radius: 1rem;
  height: var(--screen-height);
  overflow: hidden;
  position: relative;
  width: var(--screen-width);
}
</style>
