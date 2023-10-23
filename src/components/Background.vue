<template>
  <div class="bg-container">
    <img
      :src="Background"
      class="w-full h-full fixed z-0 opacity-40 left-0 top-0"
    />
    <div
      v-for="i in 80"
      :key="i"
      class="light"
      :style="{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 10 + 5}s`,
      }"
    ></div>
  </div>
</template>

<script setup>
import Background from 'src/assets/img/pageBg.png';
</script>

<style>
.bg-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  top: 0;
  left: 0;
  filter: blur(10px);
}

.light {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.5)
  );
  transform: rotate(30deg);
  animation: moveLight ease-in-out infinite;
}

@keyframes moveLight {
  0% {
    transform: translateX(-200%) rotate(10deg);
  }
  50% {
    transform: translateX(200%) translateY(200%) rotate(10deg);
  }
  100% {
    transform: translateX(-200%) rotate(10deg);
  }
}
</style>
