<script setup>
import { testimonials } from "@/data/testimonials.js";
import CloudSeparator from "@/components/base/CloudSeparator.vue";
import TestimonialCarousel from "./TestimonialCarousel.vue";
</script>

<template>
  <section id="reviews" class="relative scroll-mt-20 bg-beige-2 pt-24 pb-32">
    <CloudSeparator fill="var(--color-beige-2)" />
    <div class="relative z-[2] mx-auto max-w-[1240px] px-5 sm:px-9">
      <span v-reveal class="mb-3.5 block text-[13px] font-extrabold tracking-[0.2em] text-royal uppercase"
        >Kind words</span
      >
      <TestimonialCarousel v-reveal :items="testimonials" />
    </div>
  </section>
</template>
