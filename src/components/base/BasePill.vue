<script setup>
defineProps({
  tone: { type: String, default: "cream" }, // cream | navy | sand
});
const tones = {
  cream: "bg-cream text-navy border border-navy/15",
  navy: "bg-navy text-cream",
  sand: "bg-sand text-navy",
};
</script>

<template>
  <span :class="['inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-extrabold', tones[tone]]">
    <slot />
  </span>
</template>
