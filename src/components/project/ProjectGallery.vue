<script setup>
import { ref } from "vue";
import AppIcon from "@/components/base/AppIcon.vue";

// Lightweight slider: CSS scroll-snap track + arrow buttons, and a <dialog> lightbox.
// No library; keyboard works through native scrolling and the dialog's Esc.
const props = defineProps({
  images: { type: Array, required: true },
  title: { type: String, required: true },
});

const track = ref(null);
const dialog = ref(null);
const current = ref(0);

const active = ref(0); // slide nearest the track's left edge, drives the dot/pill indicator

const goTo = (i) => {
  const el = track.value?.children[i];
  if (el) track.value.scrollTo({ left: el.offsetLeft - track.value.offsetLeft, behavior: "smooth" });
};
const scrollBy = (dir) => goTo(Math.min(Math.max(active.value + dir, 0), props.images.length - 1));

let raf = 0;
const onScroll = () => {
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(() => {
    const t = track.value;
    if (!t) return;
    const atEnd = t.scrollLeft + t.clientWidth >= t.scrollWidth - 4;
    if (atEnd) return (active.value = props.images.length - 1);
    let best = 0;
    [...t.children].forEach((el, i) => {
      const d = Math.abs(el.offsetLeft - t.offsetLeft - t.scrollLeft);
      if (d < Math.abs(t.children[best].offsetLeft - t.offsetLeft - t.scrollLeft)) best = i;
    });
    active.value = best;
  });
};
const open = (i) => {
  current.value = i;
  dialog.value?.showModal();
};
const step = (dir) => (current.value = (current.value + dir + props.images.length) % props.images.length);
</script>

<template>
  <div>
    <div class="mb-5 flex items-center justify-between">
      <h2 class="font-display text-4xl font-extrabold uppercase font-stretch-condensed">Gallery</h2>
      <div class="flex gap-2">
        <button type="button" class="grid size-11 place-items-center rounded-full border-2 border-navy transition hover:bg-navy hover:text-cream" aria-label="Previous images" @click="scrollBy(-1)">←</button>
        <button type="button" class="grid size-11 place-items-center rounded-full border-2 border-navy transition hover:bg-navy hover:text-cream" aria-label="Next images" @click="scrollBy(1)">→</button>
      </div>
    </div>
    <ul
      ref="track"
      class="relative flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      @scroll.passive="onScroll"
    >
      <li v-for="(src, i) in images" :key="src" class="w-[80%] shrink-0 snap-start sm:w-[46%] lg:w-[38%]">
        <button
          type="button"
          class="block aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-navy/10 bg-white shadow-soft transition hover:-translate-y-1"
          :aria-label="`Open image ${i + 1} of ${images.length}`"
          @click="open(i)"
        >
          <img :src="src" :alt="`${title} screenshot ${i + 1}`" loading="lazy" class="size-full object-cover object-top" />
        </button>
      </li>
    </ul>

    <!-- indicators: dots, with the active slide stretched into a pill -->
    <div v-if="images.length > 1" class="mt-4 flex items-center justify-center gap-2">
      <button
        v-for="(src, i) in images"
        :key="`dot-${src}`"
        type="button"
        :aria-label="`Go to image ${i + 1}`"
        :aria-current="i === active ? 'true' : undefined"
        :class="[
          'h-2.5 rounded-full transition-all duration-300 ease-out',
          i === active ? 'w-8 bg-navy' : 'w-2.5 bg-navy/25 hover:bg-navy/50',
        ]"
        @click="goTo(i)"
      />
    </div>

    <dialog
      ref="dialog"
      class="m-auto max-h-[92vh] w-[min(1200px,94vw)] rounded-[24px] bg-navy p-0 text-cream backdrop:bg-navy/80"
      @click.self="dialog.close()"
      @keydown.left="step(-1)"
      @keydown.right="step(1)"
    >
      <div class="flex items-center justify-between px-5 py-3 text-sm font-bold">
        <span>{{ current + 1 }} / {{ images.length }}</span>
        <button type="button" class="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-white/20" aria-label="Close" @click="dialog.close()">
          <AppIcon name="x" />
        </button>
      </div>
      <div class="max-h-[80vh] overflow-y-auto bg-white">
        <img :src="images[current]" :alt="`${title} screenshot ${current + 1}`" class="block w-full" />
      </div>
    </dialog>
  </div>
</template>
