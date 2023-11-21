<script setup>
import AnimatedPlaceholder from "@/components/skeleton/AnimatedPlaceholder.vue";
</script>

<template>
  <section class="hero">
    <div class="intro pt-2">
      <h1 class="title">
        <AnimatedPlaceholder />
      </h1>
      <h4 class="slogan">
        <AnimatedPlaceholder width="20ch" height="2ch" />
        <AnimatedPlaceholder width="30ch" height="2ch" />
        <AnimatedPlaceholder width="25ch" height="2ch" />
      </h4>
      <div class="cta">
        <a class="btn" v-for="_ in Array(2)">
          <AnimatedPlaceholder width="6rem" height="3rem" />
        </a>
      </div>
    </div>

    <div class="hero-image">
      <AnimatedPlaceholder width="100%" height="65vh" />
    </div>
  </section>
</template>

<style scoped>
.slogan {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
