<script setup>
import { useHead } from "@unhead/vue";
import { site } from "@/data/site.js";
import { useProjects } from "@/composables/useProjects.js";
import { useProjectFilters } from "@/composables/useProjectFilters.js";
import SectionHeading from "@/components/base/SectionHeading.vue";
import BlobShape from "@/components/base/BlobShape.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import ProjectCard from "@/components/home/ProjectCard.vue";
import ProjectFilters from "@/components/projects/ProjectFilters.vue";

const { all } = useProjects();
const { query, role, roles, results, activeCount, reset } =
  useProjectFilters(all);

useHead({
  title: `Projects · ${site.name}`,
  meta: [{ name: "description", content: `All projects by ${site.name}: websites, web apps and back-end systems.` }],
});
</script>

<template>
  <section class="relative overflow-x-clip pt-40 pb-16">
    <BlobShape class="top-24 -right-24 size-[320px] bg-sand/60" />
    <BlobShape class="top-[520px] -left-28 size-[280px] bg-sky/30 [animation-delay:-5s]" />

    <div class="relative z-[2] mx-auto max-w-[1240px] px-5 sm:px-9">
      <SectionHeading as="h1" eyebrow="All work" title="Projects" accent="and experiments" />

      <ProjectFilters
        v-model:query="query"
        v-model:role="role"
        :roles="roles"
        :active-count="activeCount"
        class="sticky top-[104px] z-10 mt-12"
        @reset="reset"
      />

      <p class="mt-6 mb-6 text-sm font-bold text-muted" aria-live="polite">
        Showing {{ results.length }} of {{ all.length }} projects
      </p>

      <TransitionGroup
        tag="div"
        class="relative grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        move-class="transition duration-500 ease-out-expo"
        enter-active-class="transition duration-500 ease-out-expo"
        leave-active-class="absolute transition duration-300"
        enter-from-class="opacity-0 translate-y-6 scale-95"
        leave-to-class="opacity-0 scale-95"
      >
        <ProjectCard
          v-for="(project, i) in results"
          :key="project.slug"
          :project="project"
          :to="{ name: 'project', params: { slug: project.slug } }"
          :number="i + 1"
        />
      </TransitionGroup>

      <div v-if="!results.length" class="rounded-[32px] border-2 border-dashed border-navy/15 py-16 text-center">
        <p class="font-display text-4xl font-extrabold uppercase font-stretch-condensed">Nothing matches that combo</p>
        <p class="mt-2 text-muted">Try fewer filters or a different search.</p>
        <BaseButton variant="navy" class="mt-6" @click="reset">Clear filters</BaseButton>
      </div>
    </div>
  </section>
</template>
