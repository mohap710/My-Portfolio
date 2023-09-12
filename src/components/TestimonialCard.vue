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
    <div class="avatar">
      <img :src="img" alt="" />
    </div>
    <q>{{ quote }}</q>
    <h4 class="name mt-3">{{ name }}</h4>
    <h6 class="role">{{ role }}</h6>
  </div>
</template>

<style scoped>
.testimonial-card {
  position: relative;
  min-height: 150px;
  padding: 3rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--whitesmoke);
  border-radius: 10px;
  box-shadow: 2px 5px 10px var(--black);
}
.testimonial-card::before {
  content: "";
  display: block;
  position: absolute;
  top: -60px;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: white;
}
.avatar {
  position: absolute;
  top: -55px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  animation: floating-avatar both ease-in-out 800ms infinite alternate;
  transition: 2s;
  overflow: hidden;
}

q {
  color: var(--black);
  max-width: 45ch;
  margin-top: 0.5rem;
  text-align: justify;
  line-height: 1.6;
}
.name,
.role {
  color: var(--rich-black);
}
</style>
