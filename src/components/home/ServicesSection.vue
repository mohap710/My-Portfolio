<script setup>
import { services, process } from "@/data/services.js";
import CloudSeparator from "@/components/base/CloudSeparator.vue";
import BlobShape from "@/components/base/BlobShape.vue";
import ServiceItem from "./ServiceItem.vue";
import ProcessSteps from "./ProcessSteps.vue";
</script>

<template>
  <section id="services" class="relative scroll-mt-20 bg-navy pt-24 pb-36 text-cream">
    <CloudSeparator fill="var(--color-navy)" />
    <BlobShape class="top-16 -right-24 size-[300px] bg-navy-2/80" />

    <div class="relative z-[2] mx-auto max-w-[1240px] px-5 sm:px-9">
      <div class="grid gap-10 lg:grid-cols-[190px_1fr]">
        <h2
          class="self-start font-display text-[clamp(64px,11vw,160px)] leading-none font-extrabold text-transparent uppercase [-webkit-text-stroke:2px_rgb(241_232_216/0.65)] font-stretch-condensed lg:sticky lg:top-24 lg:rotate-180 lg:[writing-mode:vertical-rl]"
        >
          Services
        </h2>
        <div>
          <ServiceItem
            v-for="(service, i) in services"
            :key="service.id"
            v-reveal="i * 0.08"
            :number="i + 1"
            :title="service.title"
            :body="service.body"
            :open="i === 0"
          />
        </div>
      </div>
      <ProcessSteps :steps="process" />
    </div>
  </section>
</template>
