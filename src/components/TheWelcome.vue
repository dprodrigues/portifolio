<template>
  <div class="container">

    <h2>
      SOFTWARE<br />
      DEVELOPER
    </h2>

    <h1>
      DANIEL<br />
      RODRIGUES
    </h1>

  </div>
</template>

<style scoped>
.container {
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  padding: 4rem 4rem 12rem;
  height: 100%;
  width: 100%;
}

h1,
h2 {
  font-family: var(--font-title);
  font-size: 6rem;
  font-weight: 500;
  line-height: 5.5rem;
  letter-spacing: -2px;
}

h1 {
  text-align: right;
}

h2 {
  text-align: left;
}

@media only screen and (max-width: 768px) {

  h1,
  h2 {
    font-size: 3rem;
    line-height: 3rem;
  }
}
</style>
