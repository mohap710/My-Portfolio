<script setup>
import ProjectCard from "./projectCard.vue";
import { useProjectStore } from "../stores/projects";
const { projects } = useProjectStore();
</script>

<template>
  <section class="projects">
    <h2 class="section-title">My Work</h2>
    <ProjectCard v-for="project in projects" :project="project" />
  </section>
</template>

<style></style>
