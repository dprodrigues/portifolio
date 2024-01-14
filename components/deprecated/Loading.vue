<template>
  <div class="container" :style="{ width: size, height: size }">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    size: {
      type: String,
      default: '24px'
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.spinner {
  width: 1.5rem;
  height: 1.5rem;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
