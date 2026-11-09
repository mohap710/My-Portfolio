<script setup>
import { useProjects } from "@/composables/useProjects.js";
import SectionHeading from "@/components/base/SectionHeading.vue";
import BlobShape from "@/components/base/BlobShape.vue";
import ProjectCard from "./ProjectCard.vue";
import BaseButton from "@/components/base/BaseButton.vue";

const { featured } = useProjects();
</script>

<template>
  <section id="work" class="relative scroll-mt-20 overflow-x-clip pt-32 pb-40">
    <BlobShape class="top-28 -left-28 size-[340px] bg-sky/30" />
    <BlobShape class="top-[640px] -right-16 size-60 bg-sand/70 [animation-delay:-6s]" />

    <div class="relative z-[2] mx-auto max-w-[1240px] px-5 sm:px-9">
      <SectionHeading eyebrow="Selected work" title="Projects" accent="that ship" />
      <p v-reveal class="mt-5 mb-14 max-w-[46ch] font-bold text-muted">
        Real products for real clients, from pixel-perfect websites to back-end systems.
      </p>

      <!-- bento: lead project full width, the rest in two columns -->
      <div class="grid gap-6 md:grid-cols-2">
        <ProjectCard
          v-for="(project, i) in featured"
          :key="project.slug"
          v-reveal="(i % 2) * 0.1"
          :project="project"
          :to="{ name: 'project', params: { slug: project.slug } }"
          :number="i + 1"
          :featured="i === 0"
          :class="i === 0 && 'md:col-span-2'"
        />
      </div>
      <div v-reveal class="mt-12 flex justify-center">
        <BaseButton to="/projects" variant="navy" size="lg">View all projects →</BaseButton>
      </div>
    </div>
  </section>
</template>
