<script setup>
// import { RouterLink } from "vue-router";
import { onMounted, ref } from "vue";
let activeLink = ref(0);
let navToggler = ref(null);
let nav = ref(null);
let header = ref(null);
const navLinks = [
  { name: "Home", hash: "#home", class: "active" },
  { name: "About", hash: "#about" },
  { name: "Portfolio", hash: "#portfolio" },
  { name: "Testimonials", hash: "#testimonials" },
  { name: "Contact", hash: "#contact" },
];

function openNav() {
  navToggler.value.setAttribute("aria-expanded", "true");
  navToggler.value.classList.add("opened");
  nav.value.setAttribute("data-visible", "true");
  // prevent body from scrolling when menu is opened
  // document.querySelector("body").style.overflow = "hidden";
}
function closeNav() {
  navToggler.value.setAttribute("aria-expanded", "false");
  navToggler.value.classList.remove("opened");
  nav.value.setAttribute("data-visible", "false");
  // document.querySelector("body").style.overflow = "scroll";
}
function toggleNav() {
  const visibility = nav.value.getAttribute("data-visible");
  visibility === "false" ? openNav() : closeNav();
}
// navbar animation
onMounted(() => {
  navToggler.value = document.querySelector(".nav-toggler");
  nav.value = document.querySelector("#main-nav");
  header.value = document.querySelector("header");

  // Change between transparent and colored nav
  window.addEventListener("scroll", () => {
    window.scrollY > 25
      ? header.value.classList.add("colored-nav")
      : header.value.classList.remove("colored-nav");
  });
});
// Change active state and close nav if opened
function setActiveClass(index) {
  activeLink.value = index;
  const visibility = nav.value.getAttribute("data-visible");
  if (visibility === "true") closeNav();
}
</script>
<template>
  <header>
    <a class="logo" href="#"><img src="@images/favicon.png" alt="logo" /></a>
    <button
      class="nav-toggler"
      @click="toggleNav"
      aria-expanded="false"
      aria-controls="main-nav"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav>
      <ul id="main-nav" class="nav-links" data-visible="false">
        <li class="nav-link" v-for="(link, idx) in navLinks" :key="link">
          <a
            :href="link.hash"
            @click="setActiveClass(idx)"
            :class="activeLink == idx ? 'active' : ''"
            >{{ link.name }}</a
          >
        </li>
        <li class="cv">
          <a
            download="Mohab _Mohammed_Resume"
            href="cv.pdf"
            class="btn btn-primary"
            >Download CV
          </a>
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
  display: flex;
  position: absolute;
  right: 2rem;
}
.colored-nav {
  background-color: var(--rich-black);
  background-size: 300% 300%;
  background-image: var(--gradient);
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
  color: var(--whitesmoke);
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
@media (width>991px) {
  .nav-toggler {
    display: none;
  }
  header {
    width: 100%;
    height: 80px;
    inset: unset;
  }
  .nav-links {
    position: static;
    padding-top: 0;
    flex-direction: row;
    transform: none;
    background: transparent;
  }
  .nav-link > a {
    font-size: 1.2rem;
    -webkit-text-stroke: unset;
    color: var(--whitesmoke);
  }
}
.active {
  color: var(--soft-blue) !important;
}
.active::after {
  width: 100% !important;
}
</style>
