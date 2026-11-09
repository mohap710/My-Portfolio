<script setup>
// Two-line rotating headline. Rendered twice by HeroSection (behind the photo and masked in front),
// so the rotation state comes in as props and both copies animate in lockstep.
defineProps({
  lines: { type: Array, required: true }, // ["Full-stack", "Developer"]
  index: { type: Number, required: true },
  leaving: { type: Boolean, default: false },
});
</script>

<template>
  <p aria-hidden="true" :class="{ 'is-leaving': leaving }">
    <template v-for="(line, l) in lines" :key="`${index}-${l}`">
      <br v-if="l" />
      <span
        v-for="(ch, i) in [...line]"
        :key="`${index}-${l}-${i}`"
        class="char"
        :style="{ '--i': l * 6 + i }"
        >{{ ch === " " ? " " : ch }}</span
      >
    </template>
  </p>
</template>

<style scoped>
.char {
  display: inline-block;
  animation: char-in 0.8s var(--ease-spring) both;
  animation-delay: calc(var(--i) * 32ms);
}
.is-leaving .char {
  animation: char-out 0.5s cubic-bezier(0.5, 0, 0.8, 0.4) both;
  animation-delay: calc(var(--i) * 18ms);
}
@keyframes char-in {
  from {
    opacity: 0;
    transform: translateY(60px) rotate(8deg);
  }
}
@keyframes char-out {
  to {
    opacity: 0;
    transform: translateY(-50px) rotate(-6deg);
  }
}
</style>
