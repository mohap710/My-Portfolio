<script setup>
import { assetUrl, stackIcon } from "@/composables/useAsset.js";

defineProps({
  skills: { type: Array, required: true },
});
</script>

<template>
  <ul class="flex flex-wrap gap-2.5">
    <li
      v-for="skill in skills"
      :key="skill.label"
      class="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-cream py-2 pr-5 pl-2.5 text-sm font-extrabold text-navy transition duration-300 hover:-translate-y-0.5 hover:border-navy/40"
    >
      <span class="grid size-6 place-items-center rounded-full bg-white p-1">
        <img :src="stackIcon(skill.icon)" alt="" class="size-full object-contain" loading="lazy" />
      </span>
      {{ skill.label }}
    </li>
  </ul>
</template>
