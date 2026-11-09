<script setup>
import { site } from "@/data/site.js";
import BrandLogo from "@/components/base/BrandLogo.vue";
import CloudSeparator from "@/components/base/CloudSeparator.vue";
import AppIcon from "@/components/base/AppIcon.vue";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="relative mt-24 bg-navy text-beige">
    <CloudSeparator fill="var(--color-navy)" />
    <div class="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-6 px-6 py-9 sm:px-9">
      <div class="flex items-center gap-4">
        <BrandLogo variant="wordmark" tone="beige" class="h-6 w-auto" />
        <span class="text-sm font-bold">© {{ year }} {{ site.name }}</span>
      </div>
      <ul class="flex flex-wrap gap-2.5">
        <li v-for="s in site.socials" :key="s.label">
          <a
            :href="s.href"
            :target="s.icon === 'mail' ? undefined : '_blank'"
            rel="noopener"
            :aria-label="s.label"
            :title="s.label"
            class="grid size-11 place-items-center rounded-full border border-beige/25 transition duration-300 hover:-translate-y-0.5 hover:border-sand hover:bg-sand hover:text-navy"
          >
            <AppIcon :name="s.icon" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
