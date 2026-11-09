<script setup>
defineProps({
  value: { type: String, required: true },
  label: { type: String, required: true },
});
</script>

<template>
  <div class="min-w-[190px] rounded-3xl border border-navy/15 bg-cream/95 px-[22px] py-[18px] shadow-soft">
    <b class="block font-display text-[54px] leading-none font-extrabold font-stretch-condensed">{{ value }}</b>
    <span class="text-sm text-muted">{{ label }}</span>
  </div>
</template>
