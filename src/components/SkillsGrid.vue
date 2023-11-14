<script setup>
import { getImageUrl } from "../utils/imgUrl";

const skills = [
  "html",
  "css",
  "docker",
  "vuejs",
  "javascript",
  "expressjs",
  "git",
  "graphql",
  "laravel",
  "linux",
  "mongodb",
  "mysql",
  "nodejs",
  "bash",
  "sequelize",
];
</script>
<template>
  <div class="skills-container">
    <div
      v-tooltip="{ content: skill, triggers: ['hover', 'touch'] }"
      class="skill"
      v-for="skill in skills"
      :key="skill"
    >
      <img :src="getImageUrl(`stack/${skill}.png`)" :alt="skill" />
    </div>
  </div>
</template>

<style scoped>
.skills-container {
  margin-block: 2rem;
  perspective: 600px;
  display: grid;
  grid-template-columns: repeat(4, 60px);
  gap: 15px;
  max-width: 800px;
  transform: rotate(45deg);
}

.skill {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(49, 25, 25, 0.171);
  color: transparent;
  box-shadow: 30px 30px 30px -20px rgba(0, 0, 0, 0.8);
  border-radius: 0.5rem;
  filter: grayscale();
  transition: all ease-in-out 450ms;
}
.skill:hover {
  filter: none;
}
img {
  padding: 10px;
  rotate: -45deg;
  vertical-align: center;
}
.skill:nth-child(odd) {
  animation: 1000ms ease-in-out infinite alternate pulse;
}
.skill:nth-child(even) {
  animation: 1000ms 1000ms ease-in-out infinite alternate pulse;
}

@keyframes pulse {
  to {
    transform: translate3d(0px, 0px, -10px);
    box-shadow: 15px 15px -10px -10px rgba(black, 0.8);
  }
}
</style>
