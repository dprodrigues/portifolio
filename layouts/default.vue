<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import BackgroundAnimation from '../components/BackgroundAnimation.vue'
import '~/assets/base.css'
import '~/assets/main.css'
</script>

<template>
  <HeaderComponent />

  <main>
    <slot />

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
  height: calc(100vh - 4rem);
  overflow: hidden;
  position: relative;
  width: calc(100vw - 4rem);
}
</style>
