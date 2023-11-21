<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/layout/NavBar.vue";
import Footer from "@/components/layout/MyFooter.vue";
</script>
