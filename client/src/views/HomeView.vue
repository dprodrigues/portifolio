<template>
  <div class="container">
    <div>
      <h1>
        DANIEL<br />
        RODRIGUES
      </h1>
    </div>
  </div>
</template>

<style scoped>
.container {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 4rem 4rem 12rem;
  width: 100%;
}

h1 {
  color: var(--color-text);
  font-family: var(--font-title);
  font-size: 6rem;
  font-weight: 500;
  line-height: 5.5rem;
  letter-spacing: -2px;
  text-align: center;
}

@media only screen and (max-width: 768px) {

  h1 {
    font-size: 3rem;
    line-height: 3rem;
  }
}
</style>
