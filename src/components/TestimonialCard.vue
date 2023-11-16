<script setup>
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="testimonial-card">
    <div class="media"></div>
    <div class="avatar">
      <div class="img-wrapper">
        <img :src="img" alt="" />
      </div>
    </div>
    <div class="content">
      <q>{{ quote }}</q>
      <h4 class="name mt-3">{{ name }}</h4>
      <h6 class="role mb-3">{{ role }}</h6>
    </div>
  </div>
</template>

<style scoped>
.testimonial-card {
  position: relative;
  max-width: 300px;
  min-height: 400px;
  padding: 2rem;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--dark-blue);
  background: var(--soft-blue);
  border-radius: 32px;
  border-bottom-left-radius: 160px;
  border-bottom-right-radius: 160px;
  box-shadow: 0 15px 0 var(--dark-blue),
    inset 0 -15px 0 rgba(255, 255, 255, 0.25);
  overflow: hidden;
}
.testimonial-card::before {
  content: "";
  display: block;
  position: absolute;
  top: -120px;
  left: -34%;
  width: 100%;
  height: 110%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2));
  transform: rotate(35deg);
  pointer-events: none;
  filter: blur(5px);
}

.avatar {
  position: absolute;
  top: 0;
  width: 140px;
  height: 120px;
  background-color: white;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  box-shadow: 0 10px 0 var(--dark-blue),
    inset 0 -8px 0 rgba(255, 255, 255, 0.555);
  z-index: 10;
}
.avatar::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: -50px;
  width: 50px;
  aspect-ratio: 1;
  border-top-right-radius: 50px;
  box-shadow: 15px -15px 0 13px white;
  background-color: transparent;
}
.avatar::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: -50px;
  width: 50px;
  aspect-ratio: 1;
  border-top-left-radius: 50px;
  box-shadow: -15px -15px 0 10px white;
  background-color: transparent;
}

.img-wrapper {
  width: 90px;
  aspect-ratio: 1;
  border-radius: 50%;
  margin: auto;
  border-bottom: 5px solid black;
  overflow: hidden;
}
.content {
  margin-top: 50%;
}
q {
  font-weight: 900;
  margin-top: 0.5rem;
  text-align: justify;
  line-height: 1.7;
}
</style>
