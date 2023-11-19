<script setup>
import { getImageUrl } from "../utils/imgUrl";
import { useTestimonialStore } from "../stores/testimonials";

const HeroSection = defineAsyncComponent(() =>
  import("@/components/HeroSection.vue")
);
const AboutSection = defineAsyncComponent(() =>
  import("@/components/AboutSection.vue")
);
const TestimonialCard = defineAsyncComponent(() =>
  import("@/components/TestimonialCard.vue")
);

const ContactForm = defineAsyncComponent(() =>
  import("@/components/ContactForm.vue")
);
const ProjectCardSkeleton = defineAsyncComponent(() =>
  import("@/components/skeleton/ProjectCardSkeleton.vue")
);
const ProjectsShowcase = defineAsyncComponent({
  loader: () => import("@/components/ProjectsShowcase.vue"),
  loadingComponent: ProjectCardSkeleton,
});
const { testimonials } = useTestimonialStore();
import { Autoplay } from "swiper/modules";
import { defineAsyncComponent } from "vue";
</script>
<template>
  <HeroSection id="home" />
  <Suspense>
    <ProjectsShowcase v-cloak id="portfolio" />
    <template #fallback>
      <ProjectCardSkeleton />
    </template>
  </Suspense>
  <AboutSection id="about" />
  <section class="testimonials" id="testimonials">
    <h2 class="section-title">What they say</h2>
    <div class="testimonials-container">
      <swiper-container
        :modules="[Autoplay]"
        autoplay-delay="5000"
        speed="1000"
        loop="true"
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
        <swiper-slide v-for="testimonial in testimonials" :key="testimonial.id">
          <TestimonialCard
            :name="testimonial.name"
            :quote="testimonial.quote"
            :role="testimonial.role"
            :img="getImageUrl(testimonial.img)"
          />
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
  <ContactForm id="contact" />
</template>

<style scoped>
swiper-container {
  padding: 1rem;
}

.testimonials {
  color: var(--rich-black);
  /* background-image: url(../assets/images/dddepth.png);
  background-repeat: no-repeat;
  background-position: bottom right; */
}
</style>
