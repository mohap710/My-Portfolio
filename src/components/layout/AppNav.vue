<script setup>
import { ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { site } from "@/data/site.js";
import { useScrolled } from "@/composables/useScrolled.js";
import BrandLogo from "@/components/base/BrandLogo.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import MobileMenu from "./MobileMenu.vue";

// One floating pill holds the logo, links and CTA.
// Top of page: transparent pill, large logo. Scrolled: frosted glass pill, logo shrinks to fit.
const scrolled = useScrolled(60);
const menuOpen = ref(false);
const route = useRoute();
watch(
  () => route.fullPath,
  () => (menuOpen.value = false),
);
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 lg:pt-5">
    <nav
      aria-label="Main"
      :class="[
        'mx-auto flex max-w-[1200px] items-center justify-between gap-3 rounded-full border transition-[background-color,box-shadow,border-color,padding] duration-500 ease-out-expo',
        scrolled ? 'glass py-2.5 pr-2.5 pl-5' : 'border-transparent bg-transparent py-3 pr-2 pl-3',
      ]"
    >
      <RouterLink
        to="/"
        aria-label="Mohab Alhassan, home"
        :class="[
          'shrink-0 text-navy transition-[width,height] duration-500 ease-out-expo',
          scrolled ? 'size-11' : 'size-14 lg:size-20',
        ]"
      >
        <BrandLogo class="size-full" />
      </RouterLink>

      <ul class="hidden items-center gap-1 md:flex">
        <li v-for="link in site.nav" :key="link.label">
          <RouterLink
            :to="link.to"
            class="block rounded-full px-[18px] py-2 text-[15px] font-bold transition hover:bg-navy hover:text-cream"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <div class="flex items-center gap-2">
        <BaseButton to="/contact" variant="primary" size="sm" class="!px-6 !py-3">Say hello</BaseButton>
        <button
          type="button"
          class="grid size-11 place-items-center rounded-full bg-cream text-navy shadow-soft md:hidden"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          aria-label="Open menu"
          @click="menuOpen = true"
        >
          <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
            <path d="M4 8h16M4 16h10" />
          </svg>
        </button>
      </div>
    </nav>
    <MobileMenu v-model:open="menuOpen" />
  </header>
</template>
