<script>
import { RouterLink } from 'vue-router';

export default {
  components: {
    RouterLink,
  },
}
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>

        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>

        <li>
          <RouterLink to="/projects">Projects</RouterLink>
        </li>

        <li>
          <RouterLink to="/contact">Contact</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
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
