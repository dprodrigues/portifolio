<script>
import TimeAndDate from './TimeAndDate.vue';
import Temperature from './Temperature.vue';

export default {
  components: {
    TimeAndDate,
    Temperature,
  }
}
</script>

<template>
  <header>
    <Temperature />

    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>

        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>

        <li>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
      </ul>
    </nav>

    <TimeAndDate />
  </header>
</template>

<style scoped>
header,
nav {
  display: flex;
  left: 50%;
  position: fixed;
  transform: translateX(-50%);
}

header {
  align-items: center;
  background-color: rgba(29, 27, 27, 0.4);
  backdrop-filter: blur(12px);
  border-radius: 1rem;
  bottom: 3rem;
  justify-content: space-between;
  padding: 0 3rem;
  padding: 0.75rem 2rem;
  transform: translateX(-50%);
  width: calc(var(--screen-width) - 5rem);
  z-index: 5;
}

nav {
  bottom: 0;
  height: 100%;
  width: max-content;
}

ul {
  align-items: center;
  border-radius: 1rem;
  display: flex;
  font-size: 0.875rem;
  text-align: center;
  width: 100%;
  z-index: 15;
}

li {
  list-style: none;
  margin-right: 1.25rem;
}

li:last-of-type {
  margin-right: 0;
}

a {
  color: #fff;
  text-decoration: none;
}

a.router-link-active {
  border-bottom: 2px solid #fff;
  transition: all 0.1s linear;
  transform-origin: center;
}
</style>
