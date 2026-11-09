<script setup>
import { useHead } from "@unhead/vue";
import { site } from "@/data/site.js";
import SectionHeading from "@/components/base/SectionHeading.vue";
import BlobShape from "@/components/base/BlobShape.vue";
import AvailabilityBadge from "@/components/home/AvailabilityBadge.vue";
import ContactForm from "@/components/contact/ContactForm.vue";

useHead({
  title: `Contact · ${site.name}`,
  meta: [{ name: "description", content: `Start a project with ${site.name}, ${site.role}.` }],
});
</script>

<template>
  <section class="relative overflow-hidden pt-40 pb-16">
    <BlobShape class="top-24 -right-24 size-[320px] bg-sand/60" />
    <BlobShape class="bottom-0 -left-28 size-[280px] bg-sky/30 [animation-delay:-5s]" />

    <div class="relative z-[2] mx-auto max-w-[1240px] px-5 sm:px-9">
      <SectionHeading as="h1" eyebrow="Say hello" title="Let's build" accent="something good" />

      <div class="mt-14 grid items-start gap-8 lg:grid-cols-[1.4fr_1fr]">
        <ContactForm v-reveal />

        <aside v-reveal="0.1" class="rounded-[32px] bg-navy p-8 text-beige sm:p-10">
          <AvailabilityBadge v-if="site.available" class="text-navy" />
          <p class="mt-6 text-beige/80">Prefer email? Write to me directly and I'll get back to you within two days.</p>
          <a
            :href="`mailto:${site.email}`"
            class="mt-2 block font-display text-[clamp(22px,2.6vw,32px)] font-extrabold break-all text-sand transition hover:text-white font-stretch-condensed"
            >{{ site.email }}</a
          >
          <ul class="mt-8 grid gap-3">
            <li v-for="s in site.socials.filter((x) => x.label !== 'Email')" :key="s.label">
              <a
                :href="s.href"
                target="_blank"
                rel="noopener"
                class="flex items-center justify-between rounded-2xl border border-beige/20 px-5 py-4 font-extrabold transition hover:translate-x-1.5 hover:bg-white/5"
                >{{ s.label }} <span aria-hidden="true">↗</span></a
              >
            </li>
            <li>
              <a
                :href="site.cvUrl"
                download
                class="flex items-center justify-between rounded-2xl bg-sand px-5 py-4 font-extrabold text-navy transition hover:translate-x-1.5"
                >Download CV <span aria-hidden="true">↓</span></a
              >
            </li>
          </ul>
        </aside>
      </div>
    </div>
  </section>
</template>
