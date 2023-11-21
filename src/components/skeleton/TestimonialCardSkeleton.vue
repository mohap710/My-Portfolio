<script setup>
import AnimatedPlaceholder from "./AnimatedPlaceholder.vue";
</script>

<template>
  <div class="testimonial-card">
    <div class="avatar">
      <div class="img-wrapper">
        <AnimatedPlaceholder height="100%" border-radius="50%" />
      </div>
    </div>
    <div class="content">
      <q>
        <AnimatedPlaceholder width="30ch" height="1ch" v-for="_ in Array(6)" />
      </q>
      <h4 class="name mt-3">
        <AnimatedPlaceholder width="15ch" height="1ch" />
      </h4>
      <h6 class="role mb-3">
        <AnimatedPlaceholder width="15ch" height="1ch" />
      </h6>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
q {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
