<template>
  <section class="hero">
    <div class="intro pt-2">
      <h1 class="typewriter">Hi, I'm Mohab</h1>
      <h4>
        a web developer with a difference. <br />I don't just build websites,<br />
        I build relationships.
      </h4>
      <!-- <p>
        <br />Join me on a journey of creating captivating web experiences that
        empower your brand to shine brightly in the vast online galaxy.
      </p> -->

      <div class="actions">
        <button class="btn btn-primary">Hire Me</button>
        <button class="btn btn-outline-primary">Discover My Art</button>
      </div>
    </div>

    <div class="hero-image">
      <img
        src="@/assets/images/20230806_055708-removebg-preview.png"
        alt="ME"
      />
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

<script setup></script>

<style>
.hero {
  position: relative;
  padding-bottom: 6rem;
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
/* .hero::after {
  content: "";
  display: block;
  width: 100%;
  position: absolute;
  bottom: 10px;
  background-image: url("../assets/images/wave.svg");
  background-repeat: no-repeat;
} */
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

.intro {
  margin-top: 5rem;
  line-height: 1.4;
  word-spacing: 0.5rem;
}
.intro > h4 {
  font-size: calc(1rem + 1vw);
  font-weight: 800;
  color: var(--whitesmoke);
  text-transform: capitalize;
}
.intro > h1 {
  font-size: calc(4rem + 1.5vw);
  font-weight: 900;
  text-transform: capitalize;
  margin-bottom: 1.5rem;
  -webkit-text-stroke: 0.5px var(--whitesmoke);
  background: linear-gradient(to left, var(--soft-blue), var(--whitesmoke));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.actions {
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
}

.hero-image {
  position: relative;
  border-radius: 100%;
  width: 50%;
  transition: 0.5s ease-in-out;
  filter: brightness(0) invert(1);
}
.hero-image:hover {
  opacity: 0.7;
}
.hero-image > img {
  transform: rotateY(180deg);
}

@media (width >= 768px) {
  .hero {
    flex-direction: row;
  }
  .hero-image {
    max-width: 25%;
  }
}
</style>
