<script setup>
import { RouterLink } from "vue-router";
import { site } from "@/data/site.js";
import CloudSeparator from "@/components/base/CloudSeparator.vue";
import BlobShape from "@/components/base/BlobShape.vue";
import AppIcon from "@/components/base/AppIcon.vue";
</script>

<template>
  <!-- overflow-x-clip (not hidden) so the wave separator above the section stays visible -->
  <section class="relative overflow-x-clip bg-beige pt-24 pb-16 text-center">
    <CloudSeparator fill="var(--color-beige)" variant="wave" />
    <BlobShape class="-bottom-16 -left-24 size-[300px] bg-sky/40" />
    <BlobShape class="top-16 -right-10 size-56 bg-sand/80 [animation-delay:-8s]" />
    <div class="relative z-[2] mx-auto max-w-[1240px] px-5 sm:px-9">
      <span v-reveal class="mb-3.5 block text-[13px] font-extrabold tracking-[0.2em] text-royal uppercase"
        >Got a project?</span
      >
      <RouterLink
        v-reveal
        to="/contact"
        class="group block font-display text-[clamp(56px,12.2vw,200px)] leading-[0.95] font-extrabold whitespace-nowrap uppercase transition-colors duration-300 font-stretch-condensed hover:text-royal"
      >
        Let's talk
        <span class="inline-block transition-transform duration-300 group-hover:translate-x-5 group-hover:-translate-y-2.5"
          >→</span
        >
      </RouterLink>

      <ul v-reveal class="mt-10 flex flex-wrap items-center justify-center gap-3">
        <li v-for="s in site.socials" :key="s.label">
          <a
            :href="s.href"
            :target="s.icon === 'mail' ? undefined : '_blank'"
            rel="noopener"
            :aria-label="s.label"
            :title="s.label"
            class="grid size-14 place-items-center rounded-full border-2 border-navy bg-cream text-navy transition duration-300 hover:-translate-y-1 hover:border-royal hover:bg-royal hover:text-white"
          >
            <AppIcon :name="s.icon" class="!size-6" />
          </a>
        </li>
        <li>
          <a
            :href="site.cvUrl"
            download
            class="inline-flex h-14 items-center gap-2 rounded-full bg-navy px-6 font-extrabold text-cream transition duration-300 hover:-translate-y-1 hover:bg-royal"
          >
            <AppIcon name="download" /> Download CV
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
