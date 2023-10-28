<template>
  <div>
    <div class="wave wave-1"></div>
    <div class="wave wave-2"></div>
    <div class="wave wave-3"></div>
  </div>
</template>

<style scoped>
.wave {
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  background: url(../assets/wave.svg) repeat-x;
  bottom: -1rem;
  filter: blur(2rem);
  height: 198px;
  position: absolute;
  width: 625rem;
}

.wave-2 {
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
  filter: blur(3rem);
  bottom: -2rem;
  opacity: 1;
}

.wave-3 {
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
  filter: blur(10rem);
  bottom: 0;
  opacity: 1;
}

@keyframes wave {
  0% {
    margin-left: 0;
  }

  100% {
    margin-left: -1600px;
  }
}

@keyframes swell {

  0%,
  100% {
    transform: translate3d(0, -25px, 0);
  }

  50% {
    transform: translate3d(0, 5px, 0);
  }
}
</style>
