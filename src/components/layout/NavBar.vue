<script setup>
import { RouterLink } from "vue-router";
import { onMounted } from "vue";
// navbar animation

onMounted(() => {
  const navToggler = document.querySelector(".nav-toggler");
  const nav = document.querySelector("#main-nav");
  const header = document.querySelector("header");
  navToggler.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    if (visibility === "false") {
      navToggler.setAttribute("aria-expanded", "true");
      navToggler.classList.add("opened");
      nav.setAttribute("data-visible", "true");
      // prevent body from scrolling when menu is opened
      // document.querySelector("body").style.overflow = "hidden";
    } else {
      navToggler.setAttribute("aria-expanded", "false");
      navToggler.classList.remove("opened");
      nav.setAttribute("data-visible", "false");
      // document.querySelector("body").style.overflow = "scroll";
    }
  });
  window.addEventListener("scroll", () => {
    window.scrollY > 25
      ? header.classList.add("colored-nav")
      : header.classList.remove("colored-nav");
  });
});
</script>
<template>
  <header>
    <a class="logo" href="#">Mohab.</a>
    <button class="nav-toggler" aria-expanded="false" aria-controls="main-nav">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav>
      <ul id="main-nav" class="nav-links" data-visible="false">
        <li class="nav-link"><router-link to="/">Home</router-link></li>
        <li class="nav-link"><router-link to="/">About</router-link></li>
        <li class="nav-link"><router-link to="/">Portfolio</router-link></li>
        <li class="nav-link"><router-link to="/">Testimonial</router-link></li>
        <li class="nav-link"><router-link to="/">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
header {
  padding: 2rem;
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
  font-size: calc(1rem + 1.5vw);
  font-weight: 900;
  color: var(--whitesmoke);
  filter: brightness(0) invert(0.8);
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
.colored-nav .logo {
  color: var(--whitesmoke);
}
.nav-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  padding-top: 3rem;
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
  -webkit-text-stroke: 1px #ececee;
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
  height: 2vh;
  margin-top: -1vh;
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
    width: 100vh;
    height: 45px;
    inset: unset;
    /* background-color: var(--whitesmoke); */
    transform-origin: left top;
    transform: rotate(-90deg) translateX(-100%);
  }
  .logo {
    filter: unset;
  }
  .nav-links {
    position: absolute;
    padding-top: 0;
    flex-direction: row;
    top: 0;
    right: 35vh;
    bottom: 0;
  }
  .nav-link > a {
    font-size: 1rem;
    -webkit-text-stroke: unset;
    color: var(--whitesmoke);
  }
}
</style>
