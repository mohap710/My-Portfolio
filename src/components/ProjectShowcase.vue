<script setup>
const props = defineProps({
  id: Number,
  title: String,
  summary: String,
  role: String,
  stack: Array,
  links: Object,
  screenshot: String,
});
const stackImages = props.stack.map(
  (el) => `/src/assets/images/stack/${el}.png`
);
console.log(stackImages);
// import "swiper/element/css/autoplay";
</script>

<template>
  <div class="project-card">
    <div class="info">
      <h4 class="project-title">
        <span class="number">{{ id }}.</span>
        {{ title }}
      </h4>
      <div class="summary">
        <p>{{ summary }}</p>
        <div class="tech-info">
          <div class="role">Role: {{ role }}</div>
          <div class="stack">
            <img v-for="skill in stackImages" :src="skill" :alt="skill" />
          </div>
        </div>
        <div class="actions">
          <a
            v-if="links.live"
            target="_blank"
            :href="links.live"
            class="btn btn-primary"
            >View website</a
          >
          <a
            v-if="links.github"
            target="_blank"
            :href="links.github"
            class="btn btn-github"
            ><span>View on</span>
          </a>
        </div>
      </div>
    </div>
    <div class="mockup">
      <swiper-container
        slides-per-view="1"
        speed="1000"
        loop="true"
        navigation="true"
        pagination="true"
      >
        <swiper-slide>
          <img src="@images/projects/SN1.png" loading="lazy" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="@images/projects/SN2.png" loading="lazy" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="@images/projects/SN3.png" loading="lazy" alt="" />
        </swiper-slide>
        ...
      </swiper-container>
      <!-- <img :src="screenshot" alt="" /> -->
    </div>
  </div>
</template>

<style scoped>
.project-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  min-height: 85vh;
  margin-block-end: 2rem;
}

.project-title {
  position: relative;
  font-size: calc(1rem + 3vw);
  font-weight: 900;
  margin-bottom: 1rem;
}
.summary {
  position: relative;
  max-width: 60ch;
  margin-inline: auto;
  line-height: 1.5;
  text-align: justify;
}
span.number {
  position: relative;
  font-weight: 900;
}

.tech-info {
  text-align: center;
  padding-block: 0.625rem;
  margin-top: 1rem;
  border-block: 2px solid var(--rich-black);
}
.role {
  font-weight: 800;
}
.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
}
.stack > img {
  width: 40px;
  aspect-ratio: 1;
}
.actions {
  margin-top: 1rem;
  justify-content: space-evenly;
}
.btn-github {
  position: relative;
  color: var(--rich-black);
  font-weight: 800;
  display: flex;
  gap: 10px;
  align-items: center;
  border: 1px solid var(--rich-black);
  transform: 300ms ease;
}
.btn-github:hover {
  color: var(--whitesmoke);
  background-color: var(--rich-black);
}
.btn-github::after {
  content: "";
  display: block;
  width: 30px;
  aspect-ratio: 1;
  margin-inline: 5px;
  background-image: url("../assets/images/github.svg");
}
.btn-github:hover::after {
  filter: brightness(0) invert(1);
}

.btn-github img {
  width: 32px;
}
.mockup {
  max-width: 500px;
}
.row {
  flex-direction: row;
}
.row-reverse {
  flex-direction: row-reverse;
}
.column {
  flex-direction: column;
}
.column-reverse {
  flex-direction: column-reverse;
}

@media (width > 800px) {
  .info {
    padding: 2rem 5rem;
    max-width: 50%;
  }
  /* .project-card{
    margin-bottom: 10rem;
  } */

  .project-title,
  .summary {
    padding-inline-start: 2vw;
  }
  .summary::before {
    content: "";
    display: block;
    position: absolute;
    left: -5%;
    height: 100%;
    border-inline-start: 1px solid var(--rich-black);
    opacity: 0.5;
  }

  span.number {
    position: absolute;
    left: -10%;
    font-weight: 900;
  }
}
swiper-container::part(bullet-active) {
  background-color: var(--soft-blue);
}
swiper-container::part(button-next),
swiper-container::part(button-prev) {
  color: var(--soft-blue);
}
</style>
