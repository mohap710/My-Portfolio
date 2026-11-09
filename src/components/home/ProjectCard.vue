<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { stackLabels } from "@/data/skills.js";
import { assetUrl, stackIcon } from "@/composables/useAsset.js";
import AppIcon from "@/components/base/AppIcon.vue";

// Project card: browser-framed screenshot that scrolls on hover, meta row, title, summary and
// tech logos (scannable at a glance). `featured` makes the screenshot wider for the lead card.
const props = defineProps({
  project: { type: Object, required: true },
  number: { type: Number, required: true },
  featured: { type: Boolean, default: false },
  to: { type: [String, Object], default: null },
});

const tag = computed(() => (props.to ? RouterLink : "a"));
const linkProps = computed(() =>
  props.to ? { to: props.to } : { href: props.project.liveLink, target: "_blank", rel: "noopener" },
);
const host = computed(() => {
  try {
    return new URL(props.project.liveLink).host.replace(/^www\./, "");
  } catch {
    return "";
  }
});
</script>

<template>
  <component
    :is="tag"
    v-bind="linkProps"
    class="group flex h-full flex-col rounded-[32px] border border-navy/10 bg-cream p-3 shadow-soft transition duration-500 ease-out-expo hover:-translate-y-2 hover:shadow-lift"
    :class="featured && 'lg:flex-row lg:items-stretch'"
  >
    <!-- browser frame -->
    <div
      class="overflow-hidden rounded-[24px] bg-navy"
      :class="featured ? 'lg:w-[62%] lg:shrink-0' : ''"
    >
      <div class="flex items-center gap-1.5 px-4 py-3">
        <i class="size-2.5 rounded-full bg-beige/30" /><i class="size-2.5 rounded-full bg-beige/30" /><i
          class="size-2.5 rounded-full bg-beige/30"
        />
        <span class="ml-3 truncate rounded-full bg-white/10 px-3 py-0.5 text-xs text-beige/70">{{ host }}</span>
      </div>
      <div class="relative overflow-hidden" :class="featured ? 'aspect-[16/10]' : 'aspect-[4/3]'">
        <img
          :src="project.cover"
          :alt="`${project.title} website screenshot`"
          loading="lazy"
          class="absolute inset-0 size-full object-cover object-top transition-[object-position] duration-[4s] ease-in-out group-hover:object-bottom"
        />
      </div>
    </div>

    <!-- content -->
    <div class="flex flex-1 flex-col p-4 sm:p-6" :class="featured && 'lg:justify-center lg:pl-10'">
      <div class="flex items-center gap-3 text-sm font-extrabold">
        <span class="rounded-full bg-sand px-3 py-1">{{ String(number).padStart(2, "0") }}</span>
        <span class="text-muted">{{ project.role }} · {{ project.year }}</span>
        <span
          class="ml-auto grid size-11 place-items-center rounded-full bg-navy text-cream transition duration-300 group-hover:rotate-45 group-hover:bg-royal"
          aria-hidden="true"
          ><AppIcon name="arrow-up-right"
        /></span>
      </div>
      <h3
        class="mt-5 font-display font-extrabold uppercase font-stretch-condensed"
        :class="featured ? 'text-[clamp(40px,4.4vw,64px)] leading-[0.95]' : 'text-[34px] leading-none'"
      >
        {{ project.title }}
      </h3>
      <p class="mt-2 text-[15px] text-muted" :class="!featured && 'line-clamp-2'">{{ project.summary }}</p>
      <ul class="mt-auto flex flex-wrap gap-2 pt-5" aria-label="Tech stack">
        <li
          v-for="s in project.stack"
          :key="s"
          class="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white py-1 pr-3 pl-1 text-xs font-extrabold"
        >
          <img :src="stackIcon(s)" alt="" class="size-6 rounded-full object-contain p-0.5" loading="lazy" />
          {{ stackLabels[s] ?? s }}
        </li>
      </ul>
    </div>
  </component>
</template>
