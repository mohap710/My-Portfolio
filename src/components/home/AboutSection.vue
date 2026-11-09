<script setup>
import { site } from "@/data/site.js";
import { skills } from "@/data/skills.js";
import photo from "@/assets/images/about.webp";
import CloudSeparator from "@/components/base/CloudSeparator.vue";
import SectionHeading from "@/components/base/SectionHeading.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BasePill from "@/components/base/BasePill.vue";
import SkillPills from "./SkillPills.vue";

const { about } = site;
</script>

<template>
  <section id="about" class="relative scroll-mt-20 bg-beige pt-24 pb-24">
    <CloudSeparator fill="var(--color-beige)" variant="wave" />
    <div class="relative z-[2] mx-auto grid max-w-[1240px] items-center gap-16 px-5 sm:px-9 lg:grid-cols-[1fr_1.1fr]">
      <!-- static portrait: same beige backdrop as the page, framed in a soft rounded card -->
      <figure v-reveal class="relative mx-auto w-full max-w-[460px]">
        <img
          :src="photo"
          :alt="`Portrait of ${site.name}`"
          width="825"
          height="1024"
          loading="lazy"
          class="block aspect-[825/1024] w-full rounded-[40px] border border-navy/10 object-cover shadow-lift"
        />
        <BasePill class="absolute top-[10%] -right-[5%] z-[3] rotate-6 shadow-soft">{{ about.tags[0] }}</BasePill>
        <BasePill tone="sand" class="absolute bottom-[12%] -left-[6%] z-[3] -rotate-5 shadow-soft">{{
          about.tags[1]
        }}</BasePill>
      </figure>

      <div>
        <SectionHeading eyebrow="About me" :title="about.title" :accent="about.accent" class="[&_h2]:text-[clamp(54px,8vw,110px)]" />
        <p v-reveal class="my-6 max-w-[50ch] text-muted">{{ about.bio }}</p>
        <SkillPills v-reveal :skills="skills" class="mb-8" />
        <dl v-reveal class="mb-8 flex flex-wrap gap-9">
          <div v-for="stat in about.stats" :key="stat.label">
            <dt class="sr-only">{{ stat.label }}</dt>
            <dd>
              <b class="block font-display text-[56px] leading-none font-extrabold font-stretch-condensed">{{ stat.value }}</b>
              <span class="text-sm text-muted">{{ stat.label }}</span>
            </dd>
          </div>
        </dl>
        <div v-reveal class="flex flex-wrap gap-3">
          <BaseButton :href="site.cvUrl" variant="navy" download>Download CV</BaseButton>
          <BaseButton to="/contact" variant="outline">Let's talk</BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
