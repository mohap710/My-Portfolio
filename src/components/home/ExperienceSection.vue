<script setup>
// Minimal career timeline: a preview, not the CV. Full details live in the downloadable PDF.
import { site } from "@/data/site.js";
import { experience } from "@/data/experience.js";
import SectionHeading from "@/components/base/SectionHeading.vue";
import AppIcon from "@/components/base/AppIcon.vue";
</script>

<template>
  <section id="experience" class="relative scroll-mt-20 bg-beige pb-36">
    <div class="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-9 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
      <div class="lg:sticky lg:top-32 lg:self-start">
        <SectionHeading eyebrow="Experience" title="The road" accent="so far" class="[&_h2]:text-[clamp(54px,8vw,110px)]" />
        <a
          v-reveal
          :href="site.cvUrl"
          download
          class="mt-6 inline-flex items-center gap-2 font-bold text-navy underline decoration-sand decoration-2 underline-offset-4 transition-colors hover:text-royal"
        >
          Full CV <AppIcon name="download" class="size-4" />
        </a>
      </div>

      <ol class="relative border-l-2 border-navy/15">
        <li v-for="item in experience" :key="item.period" v-reveal class="relative pb-11 pl-8 last:pb-0 sm:pl-10">
          <span
            aria-hidden="true"
            :class="[
              'absolute top-1.5 -left-[9px] size-4 rounded-full border-[3px] border-beige',
              item.current ? 'bg-royal animate-pulse-ring' : 'bg-navy',
            ]"
          />
          <p class="text-[13px] font-extrabold tracking-[0.18em] text-muted uppercase">{{ item.period }}</p>
          <h3 class="mt-1.5 font-display text-[clamp(26px,3.2vw,36px)] leading-none font-extrabold uppercase font-stretch-condensed">
            {{ item.role }}
          </h3>
          <p class="mt-1 font-semibold text-navy/70">{{ item.org }}</p>
          <p class="mt-3 max-w-[52ch] text-muted">{{ item.line }}</p>
          <span
            v-if="item.metric"
            class="mt-3 inline-block rounded-full bg-cream px-3.5 py-1 text-sm font-bold text-navy shadow-soft"
            >{{ item.metric }}</span
          >
        </li>
      </ol>
    </div>
  </section>
</template>
