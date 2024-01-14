<template>
  <div>
    <p>{{ currentDate }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: ''
    };
  },
  created() {
    this.updateDate();
  },
  methods: {
    updateDate() {
      const now = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      this.currentDate = now.toLocaleDateString(undefined, options);
    }
  }
};
</script>

<style scoped>
p {
  font-size: 0.875rem;
  margin-right: 1rem;
}
</style>
