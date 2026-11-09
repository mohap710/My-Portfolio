<script setup>
import { useHead } from "@unhead/vue";
import { site } from "@/data/site.js";
import HeroSection from "@/components/home/HeroSection.vue";
import MarqueeBand from "@/components/base/MarqueeBand.vue";
import ProjectsSection from "@/components/home/ProjectsSection.vue";
import ServicesSection from "@/components/home/ServicesSection.vue";
import AboutSection from "@/components/home/AboutSection.vue";
import ExperienceSection from "@/components/home/ExperienceSection.vue";
import TestimonialsSection from "@/components/home/TestimonialsSection.vue";
import ContactCta from "@/components/home/ContactCta.vue";

useHead({
  title: `${site.name} · ${site.role}`,
  meta: [
    { name: "description", content: `${site.name}, ${site.role}. ${site.tagline}` },
    { property: "og:title", content: `${site.name} · ${site.role}` },
    { property: "og:description", content: site.tagline },
    { property: "og:type", content: "website" },
  ],
});
</script>

<template>
  <HeroSection />
  <MarqueeBand :items="site.marquee" />
  <ProjectsSection />
  <ServicesSection />
  <AboutSection />
  <ExperienceSection />
  <TestimonialsSection />
  <ContactCta />
</template>
