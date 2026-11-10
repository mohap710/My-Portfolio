<script setup>
import { ref } from "vue";
import { site } from "@/data/site.js";
import { usePointerParallax } from "@/composables/usePointerParallax.js";
import { usePhraseRotator } from "@/composables/usePhraseRotator.js";
import photo from "@/assets/images/mohab.webp";
import HeroBackdrop from "./HeroBackdrop.vue";
import HeroHeadline from "./HeroHeadline.vue";
import StatCard from "./StatCard.vue";
import ScrollCue from "./ScrollCue.vue";

const hero = ref(null);
const drift = usePointerParallax(hero, -20);
const { index, leaving, cycle, hold } = usePhraseRotator(site.hero.headlines, { hold: 3400 });

const maskUrl = `url("${photo}")`;
// shared by the behind-copy and the masked front copy so both line up exactly
const headlineClass =
  "absolute top-[47%] left-1/2 z-[2] -translate-x-1/2 text-center font-display text-[clamp(60px,9.4vw,150px)] leading-[0.82] font-extrabold whitespace-nowrap uppercase font-stretch-normal tracking-wide max-lg:top-[71%] max-lg:text-[clamp(34px,15vw,100px)]";
</script>

<template>
  <section ref="hero" class="relative isolate h-[max(100svh,640px)] overflow-hidden lg:h-[max(100svh,740px)]">
    <HeroBackdrop />

    <h1 class="sr-only">
      {{ site.name }}, {{ site.role }}.
      {{ site.hero.headlines.slice(1).map((l) => l.join(" ")).join(". ") }}.
    </h1>

    <!-- behind the photo -->
    <HeroHeadline :lines="site.hero.headlines[index]" :index="index" :leaving="leaving" :class="headlineClass" />

    <img
      :src="photo"
      :alt="site.name"
      width="568"
      height="894"
      fetchpriority="high"
      class="absolute bottom-0 left-1/2 z-[3] h-[84%] w-auto max-w-none -translate-x-1/2 drop-shadow-[0_24px_30px_rgb(15_28_63/0.2)] transition-transform duration-200 max-lg:h-[min(48%,96vw)]"
      :style="{ transform: `translateX(${drift}px)` }"
    />

    <!-- the same headline again, in front, masked to the photo's silhouette. The outline comes
         from an SVG filter on the filled text (not text-stroke), so overlapping glyph contours
         merge into one clean outline per letter. -->
    <div
      aria-hidden="true"
      class="silhouette pointer-events-none absolute inset-0 z-[4]"
      :style="{ '--drift': `${drift}px` }"
    >
      <HeroHeadline
        :lines="site.hero.headlines[index]"
        :index="index"
        :leaving="leaving"
        :class="[headlineClass, 'text-navy [filter:url(#hero-outline)]']"
      />
    </div>
    <svg class="absolute size-0" aria-hidden="true">
      <filter id="hero-outline" color-interpolation-filters="sRGB">
        <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="grown" />
        <feComposite in="grown" in2="SourceAlpha" operator="out" result="ring" />
        <feFlood flood-color="#0f1c3f" />
        <feComposite in2="ring" operator="in" />
      </filter>
    </svg>

    <!-- progress for the rotating headline -->
    <div class="absolute bottom-[3.4%] left-1/2 z-[6] flex -translate-x-1/2 gap-2" aria-hidden="true">
      <i
        v-for="(_, i) in site.hero.headlines"
        :key="`${i}-${cycle}`"
        class="relative h-[5px] w-[34px] overflow-hidden rounded-full bg-navy/20"
      >
        <span
          v-if="i === index"
          class="progress absolute inset-0 origin-left bg-navy"
          :style="{ animationDuration: `${hold + 650}ms` }"
        />
      </i>
    </div>

    <StatCard v-bind="site.hero.stat" class="absolute top-[19%] left-[5%] z-[6] -rotate-3 max-lg:hidden" />
    <ScrollCue href="#work" class="absolute right-[5%] bottom-[9%] z-[7] max-lg:right-4">
      See my work
    </ScrollCue>
  </section>
</template>

<style scoped>
/* mask = the photo itself, sized and placed exactly like the <img> (bottom-centred, same height) */
.silhouette {
  -webkit-mask: v-bind(maskUrl) no-repeat;
  mask: v-bind(maskUrl) no-repeat;
  -webkit-mask-size: auto 84%;
  mask-size: auto 84%;
  -webkit-mask-position: calc(50% + var(--drift, 0px)) 100%;
  mask-position: calc(50% + var(--drift, 0px)) 100%;
  transition:
    mask-position 0.2s,
    -webkit-mask-position 0.2s;
}
@media (width < 64rem) {
  .silhouette {
    -webkit-mask-size: auto min(48%, 96vw);
    mask-size: auto min(48%, 96vw);
  }
}
.progress {
  animation: grow linear forwards;
}
@keyframes grow {
  from {
    transform: scaleX(0);
  }
}
</style>
