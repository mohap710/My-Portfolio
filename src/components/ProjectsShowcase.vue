<script setup>
import { EffectFlip, Autoplay } from "swiper/modules";
import { useProjectStore } from "../stores/projects";
import { getImageUrl } from "../utils/imgUrl";
const { projects } = useProjectStore();
</script>

<template>
  <section class="projects">
    <h2 class="section-title">Projects</h2>
    <div v-for="project in projects" class="project-card">
      <div class="info">
        <h4 class="project-title">
          <span class="number">{{ project.id }}.</span>
          {{ project.title }}
        </h4>
        <div class="summary">
          <p>{{ project.summary }}</p>
          <div class="tech-info">
            <div class="role">Role: {{ project.role }}</div>
            <div class="stack">
              <abbr :title="skill" v-for="skill in project.stack">
                <img :src="getImageUrl(`stack/${skill}.png`)" :alt="skill" />
              </abbr>
            </div>
          </div>
          <div class="actions">
            <a
              v-if="project.liveLink"
              target="_blank"
              :href="project.liveLink"
              class="btn btn-primary"
              >View website</a
            >
            <a
              v-if="project.githubLink"
              target="_blank"
              :href="project.githubLink"
              class="btn btn-github"
              ><span>View on</span>
            </a>
          </div>
        </div>
      </div>
      <div class="mockup">
        <swiper-container
          :modules="[EffectFlip, Autoplay]"
          effect="flip"
          slides-per-view="1"
          autoplay-delay="3000"
          speed="1000"
          loop="true"
          pagination="true"
        >
          <swiper-slide v-for="(img, idx) in project.screenshots">
            <img
              :src="getImageUrl(img)"
              loading="lazy"
              :alt="project.title + idx"
            />
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  min-height: 85vh;
  margin-block-end: 5rem;
}
.project-card:nth-child(odd) {
  flex-direction: row-reverse;
}
.project-title {
  position: relative;
  font-size: calc(1rem + 2vw);
  font-weight: 900;
  margin-bottom: 1rem;
}
.summary {
  position: relative;
  max-width: 70ch;
  margin-inline: auto;
  line-height: 2;
  text-align: justify;
}
.summary > p {
  font-size: 1.1rem;
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
.stack img {
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

/* remove shadow from swiper cube effect */
.swiper-cube-shadow::before {
  opacity: 0.3 !important;
}
</style>
