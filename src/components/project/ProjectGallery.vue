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

const scrollBy = (dir) => track.value?.scrollBy({ left: dir * track.value.clientWidth * 0.8, behavior: "smooth" });
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
    <ul ref="track" class="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
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
