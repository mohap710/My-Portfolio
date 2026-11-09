<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { assetUrl } from "@/composables/useAsset.js";
import { useReducedMotion } from "@/composables/useReducedMotion.js";

// Vertical review carousel: reviewers listed down the left with a progress rail on the active one,
// quotes slide vertically on the right. Auto-advances; pauses on hover/focus and under reduced motion.
const props = defineProps({
  items: { type: Array, required: true },
  interval: { type: Number, default: 7000 },
});

const active = ref(0);
const paused = ref(false);
const run = ref(0); // restarts the progress rail
const reduced = useReducedMotion();
let timer;

const go = (i) => {
  active.value = (i + props.items.length) % props.items.length;
  run.value++;
  start();
};
const start = () => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (!paused.value && !reduced.value) go(active.value + 1);
  }, props.interval);
};
onMounted(start);
onBeforeUnmount(() => clearInterval(timer));

// split each quote around its highlighted phrase so it can be coloured
const parts = computed(() =>
  props.items.map(({ quote, highlight }) => {
    const i = highlight ? quote.toLowerCase().indexOf(highlight.toLowerCase()) : -1;
    if (i === -1) return [quote, "", ""];
    return [quote.slice(0, i), quote.slice(i, i + highlight.length), quote.slice(i + highlight.length)];
  }),
);
</script>

<template>
  <div
    class="grid grid-cols-[auto_1fr] overflow-hidden rounded-[36px] bg-navy text-beige lg:grid-cols-[minmax(260px,0.8fr)_2fr] lg:rounded-[48px]"
    role="region"
    aria-roledescription="carousel"
    aria-label="Client reviews"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
    @focusin="paused = true"
    @focusout="paused = false"
  >
    <!-- reviewers (vertical indicator) -->
    <ol
      class="flex flex-col justify-center gap-1 border-r border-beige/10 p-2 sm:p-4 lg:justify-start lg:p-6"
    >
      <li v-for="(item, i) in items" :key="item.name" class="shrink-0">
        <button
          type="button"
          :aria-current="i === active"
          :aria-label="`Show review from ${item.name}`"
          :class="[
            'relative flex w-full items-center gap-3 rounded-2xl py-2 pr-2 pl-4 text-left lg:py-2.5 lg:pr-4 lg:pl-5 transition duration-300',
            i === active ? 'bg-white/8' : 'opacity-55 hover:opacity-90',
          ]"
          @click="go(i)"
        >
          <!-- progress rail -->
          <span class="absolute top-2 bottom-2 left-1.5 w-[3px] overflow-hidden rounded-full bg-white/10">
            <span
              v-if="i === active"
              :key="run"
              class="rail absolute inset-x-0 top-0 h-full origin-top bg-sand"
              :class="paused && '[animation-play-state:paused]'"
              :style="{ animationDuration: `${interval}ms` }"
            />
          </span>
          <img
            :src="assetUrl(item.avatar)"
            :alt="item.name"
            width="44"
            height="44"
            loading="lazy"
            class="size-11 rounded-full border-2 object-cover"
            :class="i === active ? 'border-sand' : 'border-transparent'"
          />
          <span class="hidden min-w-0 lg:block">
            <span class="block truncate font-extrabold">{{ item.name }}</span>
            <span class="block truncate text-xs text-beige/60">{{ item.role }}</span>
          </span>
        </button>
      </li>
    </ol>

    <!-- quotes (slide vertically, all stacked in one cell so the card keeps the tallest height) -->
    <div class="relative grid overflow-hidden p-5 sm:p-12 lg:p-16">
      <span
        class="pointer-events-none absolute -top-2 right-8 font-display text-[260px] leading-none font-extrabold text-white/10"
        aria-hidden="true"
        >“</span
      >
      <figure
        v-for="(item, i) in items"
        :key="item.name"
        :aria-hidden="i !== active"
        :class="[
          'col-start-1 row-start-1 self-center transition duration-700 ease-out-expo',
          i === active
            ? 'translate-y-0 opacity-100'
            : i < active
              ? 'pointer-events-none -translate-y-10 opacity-0'
              : 'pointer-events-none translate-y-10 opacity-0',
        ]"
      >
        <blockquote class="font-display text-[clamp(20px,2.3vw,32px)] leading-snug font-semibold">
          “{{ parts[i][0] }}<span class="text-sand">{{ parts[i][1] }}</span
          >{{ parts[i][2] }}”
        </blockquote>
        <figcaption class="mt-8 text-sm">
          <span class="block text-base font-extrabold">{{ item.name }}</span>
          <span class="text-beige/60">{{ item.role }}</span>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<style scoped>
.rail {
  animation: fill linear forwards;
}
@keyframes fill {
  from {
    transform: scaleY(0);
  }
}
</style>
