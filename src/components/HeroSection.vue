<script setup>
import { onMounted } from "vue";
import { getImageUrl } from "@/utils/imgUrl";
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
    url: "mailto:mohap710@gmail.com",
    img: "email.svg",
  },
];
onMounted(() => {
  // animate hero image
  const img = document.querySelector(".hero-image > img");
  function changeImg(src) {
    img.setAttribute("src", getImageUrl(src));
  }
  img.addEventListener("mouseenter", () => {
    changeImg("hero2.webp");
    img.classList.remove("fade-in-right");
    img.classList.add("fade-in-left");
  });
  img.addEventListener("mouseleave", () => {
    changeImg("hero1.webp");
    img.classList.remove("fade-in-left");
    img.classList.add("fade-in-right");
  });
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
            <img :src="getImageUrl(link.img)" :alt="link.name" />
          </a>
        </li>
      </ul>
      <h1 class="typewriter">I'm Mohab</h1>
      <h4>
        a <span class="marker">web developer</span> with a difference. <br />I
        don't just <span class="marker">build</span> websites,<br />
        I build <span class="marker">relationships.</span>
      </h4>
      <div class="actions">
        <button class="btn btn-primary">Let's build websites</button>
        <a
          download="Mohab Mohammed resume"
          href="/cv.pdf"
          class="btn btn-outline-primary"
          >Download CV
          <img src="@images/cv.svg" class="icon" />
        </a>
      </div>
    </div>

    <div class="hero-image">
      <img src="@/assets/images/hero1.webp" alt="ME" />
    </div>
    <!-- wave shape -->
    <div class="bottom-wave">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          class="shape-fill"
        ></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          class="shape-fill"
        ></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  </section>
</template>

<style>
.hero {
  position: relative;
  padding-block: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-around;
  align-items: center;
  color: var(--whitesmoke);
  background-color: var(--rich-black);
  background-size: 300% 300%;
  background-image: radial-gradient(
      at 0% 0%,
      hsla(204, 48%, 45%, 0.64) 0px,
      transparent 50%
    ),
    radial-gradient(at 100% 5%, hsla(217, 91%, 31%, 0.74) 0px, transparent 50%),
    radial-gradient(at 82% 99%, hsla(213, 100%, 50%, 0.41) 0px, transparent 50%);
  transition: all cubic-bezier(0.215, 0.61, 0.355, 1) 1s;
  /* animation: gradient-wave ease 10s infinite; */
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
  fill: #ffffff;
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
  word-spacing: 0.5rem;
}
.intro > h1 {
  font-size: calc(4rem + 1.5vw);
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  -webkit-text-stroke: 1px var(--whitesmoke);
  background: linear-gradient(to left, var(--soft-blue), var(--whitesmoke));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.intro > h4 {
  font-size: calc(1.2rem + 1vw);
  font-weight: 800;
  color: transparent;
  -webkit-text-stroke: 1px var(--whitesmoke);
  text-transform: capitalize;
}
.marker {
  color: var(--whitesmoke);
  font-size: calc(1.3rem + 1vw);
}

.actions {
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
}

img.icon {
  width: 16px;
  vertical-align: middle;
  filter: invert(1);
}
.hero-image {
  position: relative;
  border-radius: 100%;
  width: 50%;
  transform: rotateY(180deg);
  overflow: hidden;
}

.social-links img {
  width: 2rem;
}
@media (width > 768px) {
  .hero {
    flex-direction: row;
  }
  .hero-image {
    max-width: 25%;
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
