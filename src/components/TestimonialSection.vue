<script setup>
import { getImageUrl } from "../utils/imgUrl";
import TestimonialCard from "./TestimonialCard.vue";
import { useTestimonialStore } from "../stores/testimonials";
const { testimonials } = useTestimonialStore();
import { Autoplay } from "swiper/modules";
import timeoutDelay from "@/utils/timeoutDelay";

await timeoutDelay(2000);
</script>

<template>
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
</template>

<style>
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
