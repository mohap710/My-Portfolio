<script setup>
import { RouterView } from "vue-router";
import AppNav from "@/components/layout/AppNav.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
</script>

<template>
  <a
    href="#main"
    class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-cream"
    >Skip to content</a
  >
  <AppNav />
  <main id="main">
    <RouterView />
  </main>
  <AppFooter />
</template>
