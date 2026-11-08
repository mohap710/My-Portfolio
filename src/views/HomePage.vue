<script setup>
import { defineAsyncComponent, onMounted } from "vue";

// Skeletons Components
import ProjectCardSkeleton from "@/components/skeleton/ProjectCardSkeleton.vue";
import HeroSectionSkeleton from "@/components/skeleton/HeroSectionSkeleton.vue";
import AboutSectionSkeleton from "@/components/skeleton/AboutSectionSkeleton.vue";
import TestimonialCardSkeleton from "@/components/skeleton/TestimonialCardSkeleton.vue";
// Async Components
const emits = defineEmits(["loaded"]);
onMounted(() => {
  console.log("mounted");
  emits("loaded");
});

const HeroSection = defineAsyncComponent(() =>
  import("@/components/HeroSection.vue")
);
const ProjectsShowcase = defineAsyncComponent(() =>
  import("@/components/ProjectsShowcase.vue")
);
const AboutSection = defineAsyncComponent(() =>
  import("@/components/AboutSection.vue")
);

const TestimonialSection = defineAsyncComponent(() =>
  import("@/components/TestimonialSection.vue")
);

const ContactForm = defineAsyncComponent(() =>
  import("@/components/ContactForm.vue")
);
</script>
<template>
  <!-- Hero Section -->
  <Suspense>
    <HeroSection id="home" />
    <!-- <template #fallback>
      <HeroSectionSkeleton />
    </template> -->
  </Suspense>

  <!-- Portfolio -->
  <Suspense>
    <ProjectsShowcase id="portfolio" />
    <!-- <template #fallback>
      <ProjectCardSkeleton v-for="_ in Array(2)" />
    </template> -->
  </Suspense>

  <!-- About Section -->
  <Suspense>
    <AboutSection id="about" />
    <!-- <template #fallback>
      <AboutSectionSkeleton />
    </template> -->
  </Suspense>

  <!-- Testimonials -->
  <Suspense>
    <TestimonialSection />
    <!-- <template #fallback>
      <div class="testimonials-container">
        <swiper-container
          :breakpoints="{
            1024: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 1,
            },
          }"
        >
          <swiper-slide v-for="_ in Array(3)">
            <TestimonialCardSkeleton />
          </swiper-slide>
        </swiper-container>
      </div>
    </template> -->
  </Suspense>
  <!-- Contact -->
  <ContactForm id="contact" />
</template>

<style scoped></style>
