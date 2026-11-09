<script setup>
// Eyebrow label + condensed display title, with an optional second line in the accent colour.
defineProps({
  eyebrow: { type: String, default: "" },
  title: { type: String, required: true },
  accent: { type: String, default: "" },
  tone: { type: String, default: "light" }, // light (on beige) | dark (on navy)
  as: { type: String, default: "h2" },
});
</script>

<template>
  <div>
    <span
      v-if="eyebrow"
      v-reveal
      :class="[
        'mb-3.5 block text-[13px] font-extrabold tracking-[0.2em] uppercase',
        tone === 'dark' ? 'text-sky' : 'text-royal',
      ]"
    >
      {{ eyebrow }}
    </span>
    <component
      :is="as"
      v-reveal
      class="font-display text-[clamp(52px,9vw,140px)] leading-[0.88] font-extrabold tracking-tight uppercase font-stretch-condensed"
    >
      {{ title }}
      <template v-if="accent">
        <br />
        <em
          :class="[
            'not-italic',
            tone === 'dark' ? 'text-sand' : 'text-royal',
          ]"
          >{{ accent }}</em
        >
      </template>
    </component>
  </div>
</template>
