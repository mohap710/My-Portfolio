<script setup>
defineProps({
  steps: { type: Array, required: true },
});
</script>

<template>
  <ol class="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <li
      v-for="(step, i) in steps"
      :key="step.title"
      v-reveal="i * 0.08"
      class="group rounded-[26px] border border-beige/20 bg-white/5 p-6 transition duration-300 hover:-translate-y-1.5 hover:bg-sand hover:text-navy"
    >
      <b class="font-display text-[44px] font-extrabold text-sand transition group-hover:text-navy font-stretch-condensed"
        >0{{ i + 1 }}</b
      >
      <h3 class="my-1 font-display text-2xl font-extrabold uppercase font-stretch-condensed">{{ step.title }}</h3>
      <p class="text-sm opacity-85">{{ step.body }}</p>
    </li>
  </ol>
</template>
