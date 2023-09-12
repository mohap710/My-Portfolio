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
  padding: 1rem;
}
footer::before {
  content: "";
  display: block;
  position: absolute;
  width: 50%;
  background: linear-gradient(var(--soft-blue), var(--whitesmoke));
  min-height: 5px;
  top: 0;
  left: 50%;
  transform: translate(-50%);
}

.signture {
  font-size: 1rem;
  text-align: center;
}
</style>
