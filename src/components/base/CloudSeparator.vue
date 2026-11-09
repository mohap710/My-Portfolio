<script setup>
import { computed } from "vue";

// Soft edge drawn at the top of a section, filled with that section's colour.
// "cloud" = irregular scallops, "wave" = gentle swell. A faint offset copy behind adds depth.
const props = defineProps({
  fill: { type: String, required: true }, // any CSS colour, e.g. "var(--color-navy)"
  variant: { type: String, default: "cloud" },
});

const W = 1440;
const H = 100;
const BUMPS = [170, 120, 210, 140, 190, 130, 160, 220, 150, 180, 125, 200];

const path = computed(() => {
  if (props.variant === "wave") {
    return `M0 ${H + 8} L0 55 C240 -10 480 120 720 55 C960 -10 1200 110 1440 40 L1440 ${H + 8} Z`;
  }
  const base = H * 0.74;
  let d = `M0 ${H + 8} L0 ${base}`;
  let x = 0;
  let i = 0;
  while (x < W) {
    const nx = Math.min(x + BUMPS[i % BUMPS.length], W);
    const rx = (nx - x) / 2;
    const ry = H * (0.2 + 0.06 * ((i * 7) % 4));
    d += ` A ${rx} ${ry} 0 0 1 ${nx} ${base}`;
    x = nx;
    i++;
  }
  return `${d} L${W} ${H + 8} Z`;
});
</script>

<template>
  <div
    class="pointer-events-none absolute inset-x-0 bottom-[calc(100%-2px)] z-[3] h-[clamp(50px,7vw,100px)]"
    aria-hidden="true"
  >
    <svg :viewBox="`0 0 ${W} ${H}`" preserveAspectRatio="none" class="block size-full overflow-visible">
      <path :d="path" :fill="fill" opacity="0.35" transform="translate(-70 -16)" />
      <path :d="path" :fill="fill" />
    </svg>
  </div>
</template>
