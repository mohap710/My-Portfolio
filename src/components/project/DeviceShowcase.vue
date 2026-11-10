<script setup>
import { computed } from "vue";

// Raw full-page captures shown in HTML device frames: a browser window (fixed crop; on hover-capable screens it pans slowly to the bottom)
// with a phone overlapping its corner. Frames are drawn here so every project looks consistent.
const props = defineProps({
  desktop: { type: String, required: true },
  mobile: { type: String, default: null },
  url: { type: String, default: "" },
  title: { type: String, required: true },
});

const host = computed(() => {
  try {
    return new URL(props.url).host.replace(/^www\./, "");
  } catch {
    return "";
  }
});
</script>

<template>
  <div class="relative pb-10 lg:pr-24 lg:pb-16">
    <!-- browser -->
    <figure class="overflow-hidden rounded-[28px] border border-navy/10 bg-navy shadow-lift">
      <div class="flex items-center gap-1.5 px-5 py-3.5">
        <i class="size-3 rounded-full bg-[#ff5f57]" /><i class="size-3 rounded-full bg-[#febc2e]" /><i
          class="size-3 rounded-full bg-[#28c840]"
        />
        <span class="mx-auto truncate rounded-full bg-white/10 px-6 py-1 text-xs text-beige/80">{{ host }}</span>
      </div>
      <!-- no inner scrolling: page scroll never gets trapped inside the frame -->
      <div class="group h-[min(60vh,600px)] overflow-hidden bg-white max-sm:h-[300px]">
        <img
          :src="desktop"
          :alt="`${title} desktop screenshot`"
          class="block size-full object-cover object-top transition-[object-position] duration-[9s] ease-in-out [@media(hover:hover)]:group-hover:object-bottom"
        />
      </div>
    </figure>

    <!-- phone -->
    <figure
      v-if="mobile"
      class="absolute right-0 bottom-0 w-[30%] max-w-[230px] min-w-[130px] rounded-[34px] bg-navy p-2 shadow-lift max-sm:right-2"
    >
      <span class="absolute top-3.5 left-1/2 z-[2] h-4 w-16 -translate-x-1/2 rounded-full bg-navy" aria-hidden="true" />
      <div class="aspect-[9/19] overflow-hidden rounded-[26px] bg-white">
        <img :src="mobile" :alt="`${title} mobile screenshot`" class="block size-full object-cover object-top" />
      </div>
    </figure>
  </div>
</template>
