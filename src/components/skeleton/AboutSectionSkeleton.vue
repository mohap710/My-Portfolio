<script setup>
import AnimatedPlaceholder from "./AnimatedPlaceholder.vue";
import SkillGridSkeleton from "./SkillGridSkeleton.vue";
</script>
<template>
  <section>
    <h2 class="section-title">
      <AnimatedPlaceholder width="10ch" height="1ch" />
    </h2>
    <div class="about-me">
      <p class="about-placeholder">
        <AnimatedPlaceholder width="45ch" height="2ch" v-for="_ in Array(5)" />
      </p>
      <AnimatedPlaceholder width="400px" height="400px" class="profile-pic" />
    </div>
    <div class="skills">
      <h2><AnimatedPlaceholder width="10ch" height="1ch" /></h2>
      <SkillGridSkeleton />
    </div>
  </section>
</template>

<style scoped>
.about-placeholder {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
