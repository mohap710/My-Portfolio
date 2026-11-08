<script setup>
import ProjectCard from "./projectCard.vue";
import { useProjectStore } from "../stores/projects";
const { featuredProjects } = useProjectStore();
</script>

<template>
  <section class="projects">
    <h2 class="section-title">Featured Projects</h2>
    <ProjectCard
      v-for="(project, idx) in featuredProjects"
      :project="project"
      :idx="idx + 1"
    />

    <div>
      <a
        href="project.liveLink"
        class="btn btn-outline-primary all-projects__btn m-auto"
        >View all projects</a
      >
    </div>
  </section>
</template>

<style scoped>
.all-projects__btn {
  font-size: 1.5rem;
  color: var(--dark-blue);
}

.all-projects__btn:hover {
  color: var(--whitesmoke);
}
</style>
