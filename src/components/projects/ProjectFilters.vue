<script setup>
import { onBeforeUnmount, ref, watch } from "vue";
import AppIcon from "@/components/base/AppIcon.vue";

// Search box + role segmented control. Pure UI: state lives in useProjectFilters.
const props = defineProps({
  roles: { type: Array, required: true },
  activeCount: { type: Number, default: 0 },
});
const emit = defineEmits(["reset"]);
const query = defineModel("query", { type: String, default: "" });
const role = defineModel("role", { type: String, default: "all" });

// debounce typing so the grid doesn't reshuffle on every keystroke
const draft = ref(query.value);
let t;
watch(draft, (v) => {
  clearTimeout(t);
  t = setTimeout(() => (query.value = v), 150);
});
watch(query, (v) => v !== draft.value && (draft.value = v));
onBeforeUnmount(() => clearTimeout(t));

const short = (r) => r.replace(/ Developer$/, "");
</script>

<template>
  <div class="rounded-[28px] border border-navy/10 bg-cream/95 p-3 shadow-soft sm:p-4">
    <div class="flex flex-col gap-3 lg:flex-row lg:items-center">
      <!-- search -->
      <label class="relative flex flex-1 items-center">
        <span class="sr-only">Search projects</span>
        <AppIcon name="search" class="pointer-events-none absolute left-4 text-muted" />
        <input
          v-model="draft"
          type="search"
          placeholder="Search by name, tech or role…"
          class="h-12 w-full rounded-full border-2 border-navy/10 bg-white pr-11 pl-11 font-bold text-navy placeholder:font-medium placeholder:text-muted/70 focus:border-royal focus:outline-none [&::-webkit-search-cancel-button]:hidden"
        />
        <button
          v-if="draft"
          type="button"
          class="absolute right-2 grid size-8 place-items-center rounded-full text-muted hover:bg-navy/5"
          aria-label="Clear search"
          @click="draft = ''"
        >
          <AppIcon name="x" class="!size-4" />
        </button>
      </label>

      <!-- role -->
      <fieldset class="flex shrink-0 rounded-full bg-navy/5 p-1">
        <legend class="sr-only">Role</legend>
        <label
          v-for="r in ['all', ...roles]"
          :key="r"
          :class="[
            'cursor-pointer rounded-full px-4 py-2 text-sm font-extrabold transition has-focus-visible:outline-3 has-focus-visible:outline-royal',
            role === r ? 'bg-navy text-cream' : 'text-navy hover:bg-navy/10',
          ]"
        >
          <input v-model="role" type="radio" name="role" :value="r" class="sr-only" />
          {{ r === "all" ? "All roles" : short(r) }}
        </label>
      </fieldset>
      <button
        v-if="activeCount"
        type="button"
        class="shrink-0 px-3 text-sm font-extrabold text-royal underline-offset-4 hover:underline"
        @click="emit('reset')"
      >
        Clear ({{ activeCount }})
      </button>
    </div>

  </div>
</template>
