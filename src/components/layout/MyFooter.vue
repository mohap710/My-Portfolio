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
  background-image: radial-gradient(
      at 0% 0%,
      hsla(204, 48%, 45%, 0.64) 0px,
      transparent 50%
    ),
    radial-gradient(at 100% 5%, hsla(217, 91%, 31%, 0.74) 0px, transparent 50%),
    radial-gradient(at 82% 99%, hsla(213, 100%, 50%, 0.41) 0px, transparent 50%);
  background-repeat: no-repeat;
  background-size: 300% 300%;
}

.signture {
  font-size: 1.2rem;
  text-align: center;
}
</style>
