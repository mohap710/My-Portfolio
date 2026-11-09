<script setup>
// One accordion row built on native <details>, so it works without JavaScript and with the keyboard.
defineProps({
  number: { type: Number, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  open: { type: Boolean, default: false },
});
</script>

<template>
  <details :open="open" class="group border-t-2 border-beige/30 py-6 last:border-b-2">
    <summary
      class="flex cursor-pointer list-none items-center gap-6 font-display text-[clamp(32px,5vw,66px)] leading-none font-extrabold uppercase transition-[color,padding] duration-300 font-stretch-condensed hover:pl-3.5 hover:text-sand [&::-webkit-details-marker]:hidden"
    >
      <small class="font-sans text-[15px] font-extrabold text-sky">0{{ number }}</small>
      {{ title }}
      <span
        class="ml-auto grid size-[52px] shrink-0 place-items-center rounded-full border-2 border-current font-sans text-[28px] font-bold transition duration-300 group-open:rotate-180 group-open:border-sand group-open:bg-sand group-open:text-navy"
        aria-hidden="true"
        ><span class="group-open:hidden">+</span><span class="hidden group-open:inline">–</span></span
      >
    </summary>
    <p class="max-w-[54ch] pt-[18px] pb-1 pl-0 text-beige/80 md:pl-16">{{ body }}</p>
  </details>
</template>
