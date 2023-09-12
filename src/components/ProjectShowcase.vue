<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="project-card">
    <div class="info">
      <h4 class="project-title">
        <span class="number">01.</span>
        Project 1
      </h4>
      <div class="summary">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nobis
          quia vero impedit ipsa id cumque aliquid molestias itaque, ex, cum
          assumenda. Laborum nisi soluta quibusdam ab repellendus doloremque,
          iure labore tempora omnis impedit. Iusto minus enim ullam sapiente
          dolorem ad, sit ipsam harum cumque aperiam debitis esse reprehenderit
          sunt nisi voluptatem, odit iure tempora asperiores. Doloribus fugit
          vitae nemo.
        </p>
        <div class="tech-info">
          <div class="role">Role: Front-end Dev</div>
          <div class="stack">
            <img src="../assets/images/stack/vuejs.png" alt="" />
            <img src="../assets/images/stack/nodejs.png" alt="" />
            <img src="../assets/images/stack/graphql.png" alt="" />
          </div>
        </div>
        <div class="actions">
          <router-link to="/" class="btn btn-primary">View website</router-link>
          <router-link to="/" class="btn btn-github"
            ><span>View on</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="mockup">
      <img src="../assets/images/projects/chat-app.png" alt="" />
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
  max-width: 560px;
  aspect-ratio: 16 / 9;
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
</style>
