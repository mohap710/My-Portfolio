<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/layout/NavBar.vue";
import Footer from "./components/layout/MyFooter.vue";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped></style>
