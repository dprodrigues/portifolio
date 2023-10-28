<template>
  <div class="container">
    <div>
      <p class="subtitle subtitle-1">Hi, my name is</p>

      <h1 class="title">
        DANIEL<br />
        RODRIGUES
      </h1>

      <p class="subtitle subtitle-2">and I am a Software Developer</p>
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

.title {
  color: var(--color-text);
  font-family: var(--font-title);
  font-size: 6rem;
  font-weight: 500;
  line-height: 5.5rem;
  letter-spacing: -2px;
}

.subtitle {
  color: var(--color-text);
  font-family: var(--font-title);
}

.subtitle-1 {
  margin-left: 6px;
}

.subtitle-2 {
  text-align: right;
}

@media only screen and (max-width: 768px) {
  h1 {
    font-size: 3rem;
    line-height: 3rem;
  }
}
</style>
