<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

// One button for every call to action. Renders a RouterLink (`to`), an anchor (`href`) or a <button>.
const props = defineProps({
  to: { type: [String, Object], default: null },
  href: { type: String, default: null },
  variant: { type: String, default: "navy" }, // primary | navy | outline | light
  size: { type: String, default: "md" }, // sm | md | lg
});

const variants = {
  primary: "bg-royal text-white shadow-[0_12px_26px_-10px_var(--color-royal)] hover:-translate-y-0.5 hover:-rotate-2",
  navy: "bg-navy text-cream hover:bg-royal",
  outline: "border-2 border-navy text-navy hover:bg-navy hover:text-cream",
  light: "bg-cream text-navy hover:bg-sand",
};
const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-[15px]",
  lg: "px-9 py-4 text-base",
};

const tag = computed(() => (props.to ? RouterLink : props.href ? "a" : "button"));
const classes = computed(() => [
  "inline-flex items-center justify-center gap-2 rounded-full font-extrabold transition duration-300 ease-out-expo disabled:pointer-events-none disabled:opacity-60",
  variants[props.variant],
  sizes[props.size],
]);
</script>

<template>
  <component :is="tag" :to="to ?? undefined" :href="href ?? undefined" :class="classes">
    <slot />
  </component>
</template>
