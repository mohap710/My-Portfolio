<script setup>
import SkillsGrid from "./SkillsGrid.vue";
</script>

<template>
  <section>
    <h2 class="section-title">Who am I</h2>
    <div class="about-me">
      <p>
        Driven by a passion for technology's transformative potential, I've
        evolved from a skilled coder to a client-centric solutions architect,
        extending my expertise beyond web development to encompass content
        writing and the broader IT landscape. Committed to leveraging technology
        for positive impact, I'm dedicated to making a meaningful difference in
        the world.
      </p>
      <img src="@images/aboutMe.svg" alt="" />
    </div>
    <div class="skills">
      <h2 class="title">Domain of expertise</h2>
      <SkillsGrid />
    </div>
  </section>
</template>

<style scoped>
.about-me,
.skills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem 10rem;
  align-items: center;
  margin-block: 5rem;
}
.skills {
  column-gap: 15rem;
}
.title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--dark-blue);
}
.about-me p {
  font-size: 1.4rem;
  font-weight: 500;
  text-align: justify;
  line-height: 2;
  max-width: 50ch;
}
.about-me img {
  max-width: 300px;
}

@media (min-width: 991px) {
  .about-me {
    flex-direction: row-reverse;
  }
  .skills {
    flex-direction: row;
  }
}
</style>
