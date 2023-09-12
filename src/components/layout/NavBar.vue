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
<!-- <template>
  <div class="nav-wrapper">
    <a href="#" class="logo">&lt;MOHAB/&gt;</a>
    <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
    <label for="menu-icon"></label>
    <nav class="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/">About</router-link></li>
        <li><router-link to="/">Portfolio</router-link></li>
        <li><router-link to="/">Testimonial</router-link></li>
        <li><router-link to="/">Contact</router-link></li>
      </ul>
    </nav>
  </div>
</template> -->

<!-- <style scoped>
.colored-nav {
  background-color: whitesmoke;
  filter: drop-shadow(5px);
}
.colored-nav .menu-btn > span {
  background-color: #2254c7;
}
.colored-nav .nav-link {
  color: #2254c7;
}
.colored-nav .logo {
  filter: unset;
}
/* Vertical nav */
/* width: 100vh;
  height: 45px;
  position: fixed;
  background: #4c4c4c;
  -webkit-transform-origin: left top;
  -webkit-transform: rotate(-90deg) translateX(-100%); */
.nav-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 200;
  transition: 500ms;
}
.logo {
  font-size: calc(1rem + 1.5vw);
  font-weight: 800;
  filter: brightness(0) invert(1);
  -webkit-text-stroke: 2px var(--dark-blue);
  color: transparent;
}
[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
.menu-icon:checked + label,
.menu-icon:not(:checked) + label {
  position: fixed;
  top: 45px;
  right: 65px;
  display: block;
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
  cursor: pointer;
  z-index: 10;
}
.menu-icon:checked + label:before,
.menu-icon:not(:checked) + label:before {
  position: absolute;
  content: "";
  display: block;
  width: 30px;
  height: 20px;
  z-index: 20;
  top: 0;
  left: 0;
  border-top: 2px solid #ececee;
  border-bottom: 2px solid #ececee;
  transition: border-width 100ms 1500ms ease,
    top 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1),
    height 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1),
    background-color 200ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}
.menu-icon:checked + label:after,
.menu-icon:not(:checked) + label:after {
  position: absolute;
  content: "";
  display: block;
  width: 22px;
  height: 2px;
  z-index: 20;
  top: 10px;
  right: 4px;
  background-color: #ececee;
  margin-top: -1px;
  transition: width 100ms 1750ms ease, right 100ms 1750ms ease,
    margin-top 100ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}
.menu-icon:checked + label:before {
  top: 10px;
  transform: rotate(45deg);
  height: 2px;
  background-color: #ececee;
  border-width: 0;
  transition: border-width 100ms 340ms ease,
    top 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
    height 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
    background-color 200ms 500ms ease,
    transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
}
.menu-icon:checked + label:after {
  width: 30px;
  margin-top: 0;
  right: 0;
  transform: rotate(-45deg);
  transition: width 100ms ease, right 100ms ease, margin-top 100ms 500ms ease,
    transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav {
  position: fixed;
  top: 21px;
  right: 50px;
  display: block;
  width: 60px;
  height: 60px;
  padding: 0;
  margin: 0;
  z-index: 9;
  overflow: hidden;
  box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.3);
  background-color: var(--dark-blue);
  animation: border-transform 7s linear infinite;
  transition: top 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1),
    right 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 250ms 1100ms ease,
    width 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1),
    height 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1);
}
@keyframes border-transform {
  0%,
  100% {
    border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
  }
  14% {
    border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
  }
  28% {
    border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
  }
  42% {
    border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
  }
  56% {
    border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
  }
  70% {
    border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
  }
  84% {
    border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
  }
}

.menu-icon:checked ~ .nav {
  animation-play-state: paused;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 200%;
  height: 200%;
  transition: top 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1),
    right 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms 700ms ease,
    width 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1),
    height 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav ul {
  position: absolute;
  top: 50%;
  left: 0;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  z-index: 6;
  text-align: center;
  transform: translateY(-50%);
  list-style: none;
}
.nav ul li {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  margin: 10px 0;
  text-align: center;
  list-style: none;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transform: translateY(30px);
  transition: all 250ms linear;
}
.nav ul li:nth-child(1) {
  transition-delay: 200ms;
}
.nav ul li:nth-child(2) {
  transition-delay: 150ms;
}
.nav ul li:nth-child(3) {
  transition-delay: 100ms;
}
.nav ul li:nth-child(4) {
  transition-delay: 50ms;
}
.nav ul li a {
  font-size: 9vh;
  text-transform: uppercase;
  line-height: 1.2;
  font-weight: 800;
  display: inline-block;
  position: relative;
  color: #ececee;
  transition: all 250ms linear;
}
.nav ul li a:hover {
  text-decoration: none;
  color: #a7d7ff;
}
.nav ul li a:after {
  display: block;
  position: absolute;
  top: 50%;
  content: "";
  height: 2vh;
  margin-top: -1vh;
  width: 0;
  left: 0;
  background-color: #353746;
  opacity: 0.8;
  transition: width 250ms linear;
}
.nav ul li a:hover:after {
  width: 100%;
}

.menu-icon:checked ~ .nav ul li {
  pointer-events: auto;
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 350ms ease, transform 250ms ease;
}
.menu-icon:checked ~ .nav ul li:nth-child(1) {
  transition-delay: 1400ms;
}
.menu-icon:checked ~ .nav ul li:nth-child(2) {
  transition-delay: 1480ms;
}
.menu-icon:checked ~ .nav ul li:nth-child(3) {
  transition-delay: 1560ms;
}
.menu-icon:checked ~ .nav ul li:nth-child(4) {
  transition-delay: 1640ms;
}

@media screen and (max-width: 991px) {
  .menu-icon:checked + label,
  .menu-icon:not(:checked) + label {
    right: 59px;
  }
  .nav {
    right: 45px;
  }
  .nav ul li a {
    font-size: 8vh;
  }
}
</style> -->
