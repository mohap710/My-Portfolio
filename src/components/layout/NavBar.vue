<script setup>
// import { RouterLink } from "vue-router";
import { onMounted } from "vue";
const navLinks = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Portfolio", hash: "#portfolio" },
  { name: "Testimonials", hash: "#testimonials" },
  { name: "Contact", hash: "#contact" },
];
// navbar animation

onMounted(() => {
  const navToggler = document.querySelector(".nav-toggler");
  const nav = document.querySelector("#main-nav");
  const header = document.querySelector("header");

  function openNav() {
    navToggler.setAttribute("aria-expanded", "true");
    navToggler.classList.add("opened");
    nav.setAttribute("data-visible", "true");
    // prevent body from scrolling when menu is opened
    // document.querySelector("body").style.overflow = "hidden";
  }
  function closeNav() {
    navToggler.setAttribute("aria-expanded", "false");
    navToggler.classList.remove("opened");
    nav.setAttribute("data-visible", "false");
    // document.querySelector("body").style.overflow = "scroll";
  }

  navToggler.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    visibility === "false" ? openNav() : closeNav();
  });
  // Change between transparent and colored nav
  window.addEventListener("scroll", () => {
    window.scrollY > 25
      ? header.classList.add("colored-nav")
      : header.classList.remove("colored-nav");
  });
});
</script>
<template>
  <header>
    <a class="logo" href="#"><img src="@images/favicon.png" alt="logo" /></a>
    <button class="nav-toggler" aria-expanded="false" aria-controls="main-nav">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav>
      <ul id="main-nav" class="nav-links" data-visible="false">
        <li class="nav-link" v-for="link in navLinks" :key="link">
          <router-link :to="{ hash: link.hash }" :class="link.class">{{
            link.name
          }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
header {
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  transition: all 300ms ease-in-out;
}
.logo {
  width: calc(2rem + 2vw);
  filter: brightness(0) invert(1);
  padding-block: 10px;
  margin-inline-start: 1rem;
  z-index: 1000;
}
nav {
  position: absolute;
  right: 2rem;
}
.colored-nav {
  background-color: var(--rich-black);
  background-size: 300% 300%;
  background-image: radial-gradient(
      at 0% 0%,
      hsla(204, 48%, 45%, 0.64) 0px,
      transparent 50%
    ),
    radial-gradient(at 100% 5%, hsla(217, 91%, 31%, 0.74) 0px, transparent 50%),
    radial-gradient(at 82% 99%, hsla(213, 100%, 50%, 0.41) 0px, transparent 50%);
}

.nav-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: var(--rich-black);
  background-size: 300% 300%;
  background-image: var(--gradient);
  transform: translateX(100%);
  transition: transform 350ms ease-out;
}

.nav-links[data-visible="true"] {
  transform: translateX(0%);
}

.nav-link > a {
  font-size: 6vh;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2px #ececee;
  line-height: 1.3;
  font-weight: 800;
  display: inline-block;
  position: relative;
  transition: all 250ms linear;
}
.nav-link a:hover {
  text-decoration: none;
  color: var(--soft-blue);
}
.nav-link a:after {
  display: block;
  position: absolute;
  top: 50%;
  content: "";
  height: 1vh;
  transform: skew(-12deg);
  margin-top: 1vh;
  width: 0;
  left: 0;
  background-color: var(--soft-blue);
  opacity: 0.5;
  transition: width 250ms linear;
}
.nav-link a:hover:after {
  width: 100%;
}

/* Mobile nav toggle */
.nav-toggler {
  padding: 0;
  aspect-ratio: 1;
  z-index: 1000;
  background-color: transparent;
  overflow: hidden;
}
.nav-toggler > span {
  display: block;
  width: 35px;
  height: 5px;
  margin-block: 5px;
  background-color: var(--soft-blue);
  border-radius: 1rem;
  transform-origin: center center;
  transition: all 300ms ease-out;
}
.nav-toggler[aria-expanded="true"] > span:nth-child(1) {
  transform: rotate(-315deg);
  top: 10px;
}
.nav-toggler[aria-expanded="true"] > span:nth-child(2) {
  transform: translate(-100%);
}
.nav-toggler[aria-expanded="true"] > span:nth-child(3) {
  transform: rotate(315deg);
  bottom: 10px;
}
/* Desktop version */
@media (width>800px) {
  .nav-toggler {
    display: none;
  }
  header {
    width: 100%;
    height: 80px;
    inset: unset;
  }
  .nav-links {
    position: absolute;
    padding-top: 0;
    flex-direction: row;
    top: 0;
    right: 15vw;
    bottom: 0;
  }
  .nav-link > a {
    font-size: 1.2rem;
    -webkit-text-stroke: unset;
    color: var(--whitesmoke);
  }
}
</style>
