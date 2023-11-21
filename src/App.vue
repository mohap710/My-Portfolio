<script setup>
import { RouterView } from "vue-router";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";

// register Swiper custom elements

register();
</script>

<template>
  <RouterView />
</template>

<style>
.btn-text {
  font-weight: 900;
}
swiper {
  padding-block: 2rem;
}
swiper-slide {
  cursor: grab;
}
swiper-slide:active {
  cursor: grabbing;
}
swiper-container::part(bullet-active) {
  background-color: var(--soft-blue);
}
swiper-container::part(button-next),
swiper-container::part(button-prev) {
  color: var(--soft-blue);
}
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: var(--swiper-pagination-bottom, -2px);
  top: var(--swiper-pagination-top, auto);
  left: 0px;
  width: 100%;
}
</style>
