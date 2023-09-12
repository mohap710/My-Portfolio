<script setup>
import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import TestimonialCard from "@/components/TestimonialCard.vue";
import ProjectShowcase from "@/components/ProjectShowcase.vue";
const testimonials = [
  {
    id: 1,
    name: "Mohab Mohammed",
    quote: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Distinctio non commodi rerum at autem! Dignissimos minus
                praesentium a quis, consectetur at libero voluptate perspiciatis
                mollitia?`,
    role: "Web developer",
    img: "/src/assets/images/smile.png",
  },
  {
    id: 2,
    name: "Mohab Mohammed",
    quote: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Distinctio non commodi rerum at autem! Dignissimos minus
                praesentium a quis, consectetur at libero voluptate perspiciatis
                mollitia?`,
    role: "Web developer",
    img: "src/assets/images/me.png",
  },
  {
    id: 3,
    name: "Mohab Mohammed",
    quote: "Hi",
    role: "Web developer",
    img: "src/assets/images/20230806_055537-removebg-preview.png",
  },
];
</script>
<template>
  <HeroSection />
  <AboutSection />
  <!-- <section class="services">
        <h2 class="section-title">What I do ?</h2>
        <div class="row services-row">
          <div class="service-card">1</div>
          <div class="service-card">1</div>
          <div class="service-card">1</div>
          <div class="service-card">1</div>
          <div class="service-card">1</div>
        </div>
      </section> -->

  <section class="projects">
    <h2 class="section-title">Projects</h2>
    <project-showcase />
  </section>

  <section class="testimonials">
    <h2 class="section-title">What people say about me</h2>
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li
            class="glide__slide"
            v-for="testimonial in testimonials"
            :key="testimonial.id"
          >
            <TestimonialCard
              :name="testimonial.name"
              :quote="testimonial.quote"
              :role="testimonial.role"
              :img="testimonial.img"
            />
          </li>
        </ul>
      </div>

      <div class="glide__bullets" data-glide-el="controls[nav]">
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
        <button class="glide__bullet" data-glide-dir="=2"></button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.indicator {
  display: flex;
  justify-content: center;
  margin-top: 4rem;
}

.indicator .indicator-dot {
  display: inline-block;
  height: 15px;
  width: 15px;
  margin: 4px;
  border-radius: 15px;
  background: #fff;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.indicator-dot.active {
  width: 45px;
}
</style>
