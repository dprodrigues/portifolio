<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
  </header>

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

nav {
  align-items: center;
  border-radius: 1rem;
  display: flex;
  font-size: 0.875rem;
  text-align: center;
  width: 100%;
  z-index: 15;
}

nav a {
  color: #fff;
  margin-right: 1.25rem;
  text-decoration: none;
}

nav a:last-of-type {
  margin-right: 0;
}

main {
  background-color: #0f050e;
  border-radius: 1rem;
  height: calc(100vh - 4rem);
  overflow: hidden;
  position: relative;
  width: calc(100vw - 4rem);
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
