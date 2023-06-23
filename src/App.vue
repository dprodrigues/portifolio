<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <TheHeader />

  <main>
    <RouterView />

    <div class="background"></div>
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
  background-color: #0f050e;
  border-radius: 1rem;
  height: var(--screen-height);
  overflow: hidden;
  position: relative;
  width: var(--screen-width);
}

.background {
  background-color: #e4a0ff;
  position: absolute;
  bottom: -3rem;
  left: -50%;
  height: 8rem;
  width: 200%;
  filter: blur(4rem);
}

@keyframes move-left {
  0% {
    left: 0;
  }

  to {
    left: -100%;
  }
}
</style>
