<script setup>
import { useHead } from "@unhead/vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BlobShape from "@/components/base/BlobShape.vue";

useHead({ title: "Page not found · Mohab Alhassan", meta: [{ name: "robots", content: "noindex" }] });
</script>

<template>
  <section class="relative grid min-h-[80svh] place-items-center overflow-hidden px-5 pt-32 text-center">
    <BlobShape class="top-1/4 left-1/2 size-[420px] -translate-x-1/2 bg-sand/60" />
    <div class="relative z-[2]">
      <p class="font-display text-[clamp(120px,26vw,320px)] leading-[0.8] font-extrabold font-stretch-condensed">404</p>
      <h1 class="mt-4 font-display text-[clamp(32px,5vw,56px)] leading-none font-extrabold text-royal uppercase font-stretch-condensed">This page wandered off.</h1>
      <p class="mx-auto mt-3 max-w-[40ch] text-muted">The link may be old or mistyped. Let's get you back on track.</p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <BaseButton to="/" variant="navy">Back home</BaseButton>
        <BaseButton to="/contact" variant="outline">Say hello</BaseButton>
      </div>
    </div>
  </section>
</template>
