<script setup>
import { onMounted, ref } from "vue";
import { FingerprintSpinner } from "epic-spinners";
import { getImageUrl } from "@/utils/imgUrl";
import timeoutDelay from "@/utils/timeoutDelay";
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/mohap710",
    img: "github.svg",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/mohab-mohammed-salman/",
    img: "linkedin.svg",
  },
  {
    name: "Email",
    url: "mailto:mohab.m.salman@gmail.com",
    img: "email.svg",
  },
];
let loading = ref(false);
function downloadCV() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 1500);
}
await timeoutDelay(2500);
onMounted(() => {
  // animate hero image

  const img = document.querySelector(".hero-image > img");
  const imgWrapper = document.querySelector(".hero-image");
  function changeImg(src) {
    img.setAttribute("src", getImageUrl(src));
  }
  // imgWrapper.addEventListener("mouseenter", () => {
  //   changeImg("hero2.png");
  //   img.classList.remove("fade-in-right");
  //   img.classList.add("fade-in-left");
  // });
  // imgWrapper.addEventListener("mouseleave", () => {
  //   changeImg("hero1.png");
  //   img.classList.remove("fade-in-left");
  //   img.classList.add("fade-in-right");
  // });

  // Change social links colors
  const linksContainer = document.querySelector(".social-links");
  window.addEventListener("scroll", () => {
    window.scrollY > 100
      ? linksContainer.style.setProperty("filter", "unset")
      : linksContainer.style.setProperty("filter", "brightness(0) invert(1)");
  });
});
</script>

<template>
  <section class="hero">
    <div class="intro pt-2">
      <ul class="social-links">
        <li v-for="link in socialLinks" :key="link">
          <a
            :href="link.url"
            data-toggle="tooltip"
            data-placement="left"
            title=""
            :data-original-title="link.name"
          >
            <img class="icon" :src="getImageUrl(link.img)" :alt="link.name" />
          </a>
        </li>
      </ul>
      <h1 class="typewriter title">I'm Mohab</h1>
      <h4 class="slogan">
        a <span class="marker">developer</span> with a difference. <br />I don't
        just <span class="marker">build</span> projects,<br />
        I build <span class="marker">relationships.</span>
      </h4>
      <div class="cta">
        <a href="#contact" class="btn btn-primary">
          Let's Bring your idea to life
        </a>
        <!-- <a
          @click="downloadCV"
          download="Mohab_Mohammed_Resume"
          href="cv.pdf"
          class="btn btn-outline-primary"
        >
          <fingerprint-spinner
            v-if="loading"
            :animation-duration="1500"
            :size="32"
            color="#f1edee"
            style="margin: auto"
          />
          <span v-else class="btn-text">Download CV</span>
        </a> -->
      </div>
    </div>

    <div class="hero-image">
      <div class="circle"></div>
      <img src="@/assets/images/mohab.png" loading="lazy" alt="ME" />
    </div>
  </section>
</template>

<style>
.hero {
  position: relative;
  padding-block: 5rem;
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  gap: 1rem;
  justify-content: space-around;
  align-items: center;
  color: var(--whitesmoke);
  background-color: var(--rich-black);
  background-size: 300% 300%;
  background-image: var(--gradient);
  transition: all cubic-bezier(0.215, 0.61, 0.355, 1) 1s;
}

.bottom-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.bottom-wave svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 98px;
}

.bottom-wave .shape-fill {
  fill: var(--body-bg);
}

.social-links {
  position: relative;
  display: flex;
  gap: 2rem;
  justify-content: start;
}
.social-links::after {
  content: "";
  position: absolute;
  width: 6rem;
  border-block: 2px solid #0c79b5;
  height: 5px;
  right: 4rem;
  top: 40%;
}
.intro {
  margin-top: 5rem;
  line-height: 1.4;
  /* word-spacing: 0.5rem; */
}
.title {
  font-size: calc(4rem + 1.5vw);
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  background: linear-gradient(to left, var(--soft-blue), var(--whitesmoke));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.slogan {
  font-size: calc(1rem + 1vw);
  font-weight: 700;
  color: var(--whitesmoke);
  text-transform: capitalize;
}
.marker {
  color: var(--soft-blue);
  font-size: calc(1.3rem + 1vw);
  font-weight: 800;
}

.cta {
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
}

.hero-image {
  position: relative;
  bottom: -116px;
  border-radius: 100vw;
  object-fit: cover;
  margin-block: 2rem;
  /* overflow: hidden; */
}

.hero-image .circle {
  width: 125%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: aliceblue;
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);
}

.circle::before {
  content: "";
  position: absolute;
  display: block;
  width: 125%;
  top: -56%;
  left: -50%;
  transform: translate(30%, 30%);
  aspect-ratio: 1;
  border: 1px solid #ffffff45;
  border-radius: 50%;
}

.social-links .icon {
  width: 2rem;
}
@media (width > 768px) {
  .hero {
    flex-direction: row;
  }
  .hero-image {
    max-width: 30%;
  }
  .social-links {
    position: fixed;
    flex-direction: column;
    gap: 1.5rem;
    top: 52vh;
    left: 6vh;
    z-index: 1000;
  }
  .social-links::before,
  .social-links::after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 5px double #0c79b5;
    height: 9rem;
    left: 0.8rem;
  }
  .social-links::before {
    top: -100%;
  }
  .social-links::after {
    top: unset;
    bottom: -100%;
  }
}
</style>
