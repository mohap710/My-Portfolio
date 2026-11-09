<script setup>
// Text link with a small track whose dot keeps sliding down: tells visitors there is more below.
defineProps({
  href: { type: String, default: "#work" },
});
</script>

<template>
  <a :href="href" class="group inline-flex items-center gap-3 text-sm font-extrabold tracking-[0.18em] text-navy uppercase">
    <span class="transition group-hover:text-royal"><slot /></span>
    <span class="relative h-12 w-[2px] overflow-hidden rounded-full bg-navy/20" aria-hidden="true">
      <span class="cue absolute inset-x-0 top-0 h-4 rounded-full bg-royal" />
    </span>
  </a>
</template>

<style scoped>
.cue {
  animation: cue 1.8s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
@keyframes cue {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(300%);
  }
}
</style>
