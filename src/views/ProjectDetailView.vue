<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useHead } from "@unhead/vue";
import { site } from "@/data/site.js";
import { stackLabels } from "@/data/skills.js";
import { useProjects } from "@/composables/useProjects.js";
import { stackIcon } from "@/composables/useAsset.js";
import { caseStudy } from "@/composables/useCaseStudy.js";
import BaseButton from "@/components/base/BaseButton.vue";
import BlobShape from "@/components/base/BlobShape.vue";
import AppIcon from "@/components/base/AppIcon.vue";
import DeviceShowcase from "@/components/project/DeviceShowcase.vue";
import ProjectGallery from "@/components/project/ProjectGallery.vue";
import ContactCta from "@/components/home/ContactCta.vue";
import NotFoundView from "./NotFoundView.vue";

const props = defineProps({ slug: { type: String, required: true } });
const { bySlug, neighbours } = useProjects();
const project = computed(() => bySlug(props.slug));
const nav = computed(() => neighbours(props.slug));
const study = computed(() => caseStudy(props.slug));
// extra screenshots beyond the main capture
const gallery = computed(() => (project.value ? project.value.images.filter((src) => src !== project.value.cover) : []));

useHead(() =>
  project.value
    ? {
        title: `${project.value.title} · ${site.name}`,
        meta: [
          { name: "description", content: project.value.summary },
          { property: "og:title", content: project.value.title },
          { property: "og:description", content: project.value.summary },
        ],
      }
    : {},
);
</script>

<template>
  <NotFoundView v-if="!project" />
  <template v-else>
    <article class="relative overflow-x-clip pt-36 pb-32">
      <BlobShape class="top-20 -right-28 size-[340px] bg-sand/60" />
      <BlobShape class="top-[700px] -left-28 size-[280px] bg-sky/30 [animation-delay:-5s]" />

      <div class="relative z-[2] mx-auto max-w-[1240px] px-5 sm:px-9">
        <RouterLink to="/projects" class="inline-flex items-center gap-2 text-sm font-extrabold text-royal hover:underline">
          ← All projects
        </RouterLink>

        <!-- header -->
        <header class="mt-6 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p class="mb-3 text-[13px] font-extrabold tracking-[0.2em] text-royal uppercase">
              {{ project.role }} · {{ project.year }}
            </p>
            <h1 class="font-display text-[clamp(48px,8vw,120px)] leading-[0.88] font-extrabold uppercase font-stretch-condensed">
              {{ project.title }}
            </h1>
          </div>
          <div>
            <p class="text-lg text-muted">{{ project.summary }}</p>
            <div class="mt-6 flex flex-wrap gap-3">
              <BaseButton :href="project.liveLink" variant="primary" target="_blank" rel="noopener">
                Visit live site <AppIcon name="arrow-up-right" class="!size-4" />
              </BaseButton>
              <BaseButton v-if="project.githubLink" :href="project.githubLink" variant="outline" target="_blank" rel="noopener">
                <AppIcon name="github" /> Source
              </BaseButton>
            </div>
          </div>
        </header>

        <!-- screenshots -->
        <DeviceShowcase
          class="mt-14"
          :desktop="project.cover"
          :mobile="project.mobileShot"
          :url="project.liveLink"
          :title="project.title"
        />

        <!-- case study + sticky sidebar -->
        <div class="mt-16 grid items-start gap-12 lg:grid-cols-[1fr_340px]">
          <component :is="study" v-if="study" />
          <p v-else class="text-lg text-muted">{{ project.summary }}</p>

          <aside class="grid gap-5 lg:sticky lg:top-28">
            <section class="rounded-[28px] border border-navy/10 bg-cream p-6">
              <h2 class="font-display text-2xl font-extrabold uppercase font-stretch-condensed">Built with</h2>
              <ul class="mt-4 grid grid-cols-2 gap-2.5">
                <li v-for="s in project.stack" :key="s" class="flex items-center gap-2.5 rounded-2xl bg-white p-2.5 text-sm font-extrabold">
                  <img :src="stackIcon(s)" alt="" class="size-7 object-contain" />
                  {{ stackLabels[s] ?? s }}
                </li>
              </ul>
            </section>
            <section v-if="project.highlights?.length" class="rounded-[28px] bg-navy p-6 text-beige">
              <h2 class="font-display text-2xl font-extrabold uppercase font-stretch-condensed">At a glance</h2>
              <ol class="mt-4 grid gap-3 text-[15px]">
                <li v-for="(h, i) in project.highlights" :key="h" class="flex gap-3">
                  <span class="font-display text-xl font-extrabold text-sand">0{{ i + 1 }}</span>
                  <span class="pt-0.5">{{ h }}</span>
                </li>
              </ol>
            </section>
            <BaseButton :href="project.liveLink" variant="navy" class="w-full" target="_blank" rel="noopener">
              Visit {{ project.title }} <AppIcon name="arrow-up-right" class="!size-4" />
            </BaseButton>
          </aside>
        </div>

        <ProjectGallery v-if="gallery.length" class="mt-16" :images="gallery" :title="project.title" />

        <!-- previous / next -->
        <nav class="mt-20 grid gap-4 sm:grid-cols-2" aria-label="More projects">
          <RouterLink
            v-for="(p, dir) in { Previous: nav.prev, Next: nav.next }"
            :key="dir"
            :to="{ name: 'project', params: { slug: p.slug } }"
            :class="[
              'group flex items-center gap-5 rounded-[28px] border border-navy/10 bg-cream p-4 transition hover:-translate-y-1 hover:shadow-lift',
              dir === 'Next' && 'sm:flex-row-reverse sm:text-right',
            ]"
          >
            <img :src="p.cover" alt="" class="aspect-[4/3] w-28 rounded-2xl object-cover object-top" loading="lazy" />
            <span>
              <span class="block text-xs font-extrabold tracking-[0.2em] text-royal uppercase">{{ dir }} project</span>
              <span class="mt-1 block font-display text-2xl font-extrabold uppercase font-stretch-condensed">{{ p.title }}</span>
            </span>
          </RouterLink>
        </nav>
      </div>
    </article>
    <ContactCta />
  </template>
</template>
