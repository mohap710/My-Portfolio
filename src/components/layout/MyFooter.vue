<script setup>
const currentYear = new Date().getFullYear();
</script>
<template>
  <footer>
    <div class="signture">Mohab Mohammed © {{ currentYear }}</div>
  </footer>
</template>

<style scoped>
footer {
  position: relative;
  color: var(--rich-black);
  padding-block: 1rem;
  color: var(--whitesmoke);
  /* background-image: url("../../assets/images/background-pattern.svg"); */
  background-color: var(--rich-black);
  background-image: var(--gradient);
  background-repeat: no-repeat;
  background-size: 300% 300%;
}

.signture {
  font-size: 1.2rem;
  text-align: center;
}
</style>
