<script setup>
import { useId } from "vue";

// Label + control + error message, wired together for screen readers.
defineProps({
  label: { type: String, required: true },
  as: { type: String, default: "input" }, // input | textarea | select
  type: { type: String, default: "text" },
  error: { type: String, default: "" },
  options: { type: Array, default: () => [] }, // for select: [{ value, label }]
  placeholder: { type: String, default: "" },
  autocomplete: { type: String, default: undefined },
});
const model = defineModel({ type: String, default: "" });
const id = useId();
const base =
  "w-full rounded-2xl border-2 bg-cream px-5 py-4 text-navy placeholder:text-muted/60 transition focus:border-royal focus:outline-none";
</script>

<template>
  <div class="flex flex-col gap-2">
    <label :for="id" class="text-sm font-extrabold">{{ label }}</label>
    <textarea
      v-if="as === 'textarea'"
      :id="id"
      v-model="model"
      rows="5"
      :placeholder="placeholder"
      :aria-invalid="!!error"
      :aria-describedby="error ? `${id}-err` : undefined"
      :class="[base, 'resize-y', error ? 'border-red-600' : 'border-navy/15']"
    />
    <select
      v-else-if="as === 'select'"
      :id="id"
      v-model="model"
      :class="[base, 'appearance-none', error ? 'border-red-600' : 'border-navy/15']"
    >
      <option v-for="o in options" :key="o.value" :value="o.value">{{ o.label }}</option>
    </select>
    <input
      v-else
      :id="id"
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :aria-invalid="!!error"
      :aria-describedby="error ? `${id}-err` : undefined"
      :class="[base, error ? 'border-red-600' : 'border-navy/15']"
    />
    <p v-if="error" :id="`${id}-err`" class="text-sm font-bold text-red-700">{{ error }}</p>
  </div>
</template>
