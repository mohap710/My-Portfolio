<script setup>
import AnimatedPlaceholder from "./AnimatedPlaceholder.vue";
</script>
<template>
  <div class="skills-container">
    <AnimatedPlaceholder
      width="57px"
      height="57px"
      class="skill"
      v-for="_ in Array(15)"
    />
  </div>
</template>

<style scoped></style>
