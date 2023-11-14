<script setup>
import { getImageUrl } from "../utils/imgUrl";
import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import TestimonialCard from "@/components/TestimonialCard.vue";
import ProjectsShowcase from "@/components/ProjectsShowcase.vue";
import { useTestimonialStore } from "../stores/testimonials";
const { testimonials } = useTestimonialStore();
import { Autoplay } from "swiper/modules";
</script>
<template>
  <HeroSection id="home" />
  <ProjectsShowcase id="portfolio" />
  <AboutSection id="about" />
  <section class="testimonials" id="testimonials">
    <h2 class="section-title">What they say</h2>

    <swiper-container
      :modules="[Autoplay]"
      autoplay-delay="3000"
      speed="1000"
      loop="true"
      :breakpoints="{
        1024: {
          slidesPerView: 3,
        },
        800: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 1,
        },
      }"
    >
      <swiper-slide v-for="testimonial in testimonials" :key="testimonial.id">
        <TestimonialCard
          :name="testimonial.name"
          :quote="testimonial.quote"
          :role="testimonial.role"
          :img="getImageUrl(testimonial.img)"
        />
      </swiper-slide>
    </swiper-container>
  </section>
</template>

<style scoped>
swiper-container {
  padding: 1rem;
}

.testimonials {
  color: var(--rich-black);
  background-image: url(../assets/images/dddepth.png);
  background-repeat: no-repeat;
  background-position: bottom right;
}
</style>
