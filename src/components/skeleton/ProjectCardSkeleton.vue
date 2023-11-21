<script setup>
import AnimatedPlaceholder from "./AnimatedPlaceholder.vue";
</script>
<template>
  <div class="project-card">
    <div class="info">
      <h4 class="project-title">
        <AnimatedPlaceholder width="50%" height="2rem" />
      </h4>
      <div class="summary">
        <p class="summary-placeholder">
          <AnimatedPlaceholder width="25ch" height="1ch" />
          <AnimatedPlaceholder width="15ch" height="1ch" />
          <AnimatedPlaceholder width="25ch" height="1ch" />
          <AnimatedPlaceholder width="30ch" height="1ch" />
        </p>
        <div class="tech-info">
          <div class="role">
            <AnimatedPlaceholder height="1ch" />
          </div>
          <div class="stack">
            <AnimatedPlaceholder v-for="_ in Array(4)" />
          </div>
        </div>
        <div class="actions">
          <a class="btn" v-for="_ in Array(2)">
            <AnimatedPlaceholder width="6rem" height="3rem" />
          </a>
        </div>
      </div>
    </div>
    <div class="mockup">
      <AnimatedPlaceholder width="75%" height="300px" class="img-placeholder" />
    </div>
  </div>
</template>

<style scoped>
.project-card {
  margin-block-end: 0;
}
.summary-placeholder {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}
.role {
  margin: auto;
}
.stack > * {
  width: 40px;
  aspect-ratio: 1;
}
.img-placeholder {
  margin-inline: auto;
}
</style>
