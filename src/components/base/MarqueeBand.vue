<script setup>
// Tilted, endlessly scrolling band of words. The list is repeated so the loop is seamless.
defineProps({
  items: { type: Array, required: true },
});
</script>

<template>
  <div
    class="relative z-[9] -mx-5 -mt-7 w-[calc(100%+40px)] -rotate-2 overflow-hidden bg-navy py-3.5 whitespace-nowrap text-beige"
    aria-hidden="true"
  >
    <div class="inline-block animate-marquee">
      <span
        v-for="n in 4"
        :key="n"
        class="font-display text-[clamp(26px,4vw,48px)] font-extrabold uppercase font-stretch-condensed"
      >
        <template v-for="item in items" :key="item">{{ item }}<span class="mx-4 text-sand">✺</span></template>
      </span>
    </div>
  </div>
</template>
