<template>
  <div class="wrapper">
    <svg>
      <text x="50%" y="50%" dy=".35em" text-anchor="middle">MOHAB</text>
    </svg>
  </div>
</template>

<script setup></script>

<style>
html,
body {
  min-height: 100vh;
  overflow-x: hidden !important;
}
svg {
  width: 100%;
  height: 100%;
}
svg text {
  animation: stroke 2s infinite alternate;
  stroke-width: 2;
  stroke: #365fa0;
  font-size: 15vw;
}
@keyframes stroke {
  0% {
    fill: rgba(54, 95, 160, 0);
    stroke: rgba(54, 95, 160, 1);
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 50%;
    stroke-width: 2;
  }
  70% {
    fill: rgba(54, 95, 160, 0);
    stroke: rgba(54, 95, 160, 1);
  }
  80% {
    fill: rgba(54, 95, 160, 0);
    stroke: rgba(54, 95, 160, 1);
    stroke-width: 3;
  }
  100% {
    fill: rgba(54, 95, 160, 1);
    stroke: rgba(54, 95, 160, 0);
    stroke-dashoffset: -25%;
    stroke-dasharray: 50% 0;
    stroke-width: 0;
  }
}

.wrapper {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  z-index: 1000;
}
</style>
