<script setup>
import { RouterView, useRoute } from "vue-router";
import { useHead } from "@unhead/vue";
import { site } from "@/data/site.js";
import AppNav from "@/components/layout/AppNav.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

// Site-wide share preview defaults; pages override title/description. Social crawlers need absolute URLs.
const route = useRoute();
const ogImage = `${site.url}og-image.jpg`;
useHead({
  link: [{ rel: "canonical", href: () => site.url + route.path.replace(/^\//, "") }],
  meta: [
    { property: "og:site_name", content: site.name },
    { property: "og:type", content: "website" },
    { property: "og:url", content: () => site.url + route.path.replace(/^\//, "") },
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: `${site.name}, ${site.role}` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: ogImage },
  ],
});
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
