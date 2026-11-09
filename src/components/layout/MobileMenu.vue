<script setup>
import { nextTick, onBeforeUnmount, ref, watch } from "vue";
import { RouterLink } from "vue-router";
import { site } from "@/data/site.js";
import BrandLogo from "@/components/base/BrandLogo.vue";
import BaseButton from "@/components/base/BaseButton.vue";

// Full-screen menu for small screens: focus moves in, Tab is trapped, Esc closes, page scroll locks.
const open = defineModel("open", { type: Boolean, default: false });
const panel = ref(null);
let lastFocus = null;

const focusables = () =>
  panel.value ? [...panel.value.querySelectorAll("a[href], button:not([disabled])")] : [];

const onKey = (e) => {
  if (e.key === "Escape") open.value = false;
  if (e.key !== "Tab") return;
  const els = focusables();
  if (!els.length) return;
  const [first, last] = [els[0], els[els.length - 1]];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
};

watch(open, async (isOpen) => {
  document.documentElement.style.overflow = isOpen ? "hidden" : "";
  if (isOpen) {
    lastFocus = document.activeElement;
    document.addEventListener("keydown", onKey);
    await nextTick();
    focusables()[1]?.focus();
  } else {
    document.removeEventListener("keydown", onKey);
    lastFocus?.focus?.();
  }
});
onBeforeUnmount(() => {
  document.removeEventListener("keydown", onKey);
  document.documentElement.style.overflow = "";
});
</script>

<template>
  <Transition
    enter-from-class="opacity-0 -translate-y-4"
    leave-to-class="opacity-0 -translate-y-4"
    enter-active-class="transition duration-400 ease-out-expo"
    leave-active-class="transition duration-300 ease-out-expo"
  >
    <div
      v-if="open"
      id="mobile-menu"
      ref="panel"
      class="fixed inset-0 z-[60] flex flex-col bg-beige px-6 pt-5 pb-10 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div class="flex items-center justify-between">
        <RouterLink to="/" class="size-10 text-navy" aria-label="Home"><BrandLogo class="size-10" /></RouterLink>
        <button
          type="button"
          class="grid size-11 place-items-center rounded-full bg-navy text-cream"
          aria-label="Close menu"
          @click="open = false"
        >
          <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
      <ul class="mt-14 flex flex-col gap-2">
        <li v-for="(link, i) in site.nav" :key="link.label">
          <RouterLink
            :to="link.to"
            class="block font-display text-6xl font-extrabold uppercase font-stretch-condensed transition hover:text-royal"
            @click="open = false"
          >
            <span class="mr-3 align-top font-sans text-sm text-royal">0{{ i + 1 }}</span>{{ link.label }}
          </RouterLink>
        </li>
      </ul>
      <div class="mt-auto flex flex-wrap gap-3">
        <BaseButton to="/contact" variant="primary" size="lg">Say hello</BaseButton>
        <BaseButton :href="site.cvUrl" variant="outline" size="lg" download>Download CV</BaseButton>
      </div>
    </div>
  </Transition>
</template>
