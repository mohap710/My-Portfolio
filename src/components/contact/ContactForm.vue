<script setup>
import { useRoute } from "vue-router";
import { services } from "@/data/services.js";
import { site } from "@/data/site.js";
import { useContactForm } from "@/composables/useContactForm.js";
import FormField from "./FormField.vue";
import BaseButton from "@/components/base/BaseButton.vue";

// ?service=frontend pre-selects the project type (e.g. from a services link)
const route = useRoute();
const preset = services.some((s) => s.id === route.query.service) ? route.query.service : "";
const { fields, errors, status, errorMessage, isSending, submit, reset } = useContactForm({ service: preset });

const serviceOptions = [
  { value: "", label: "Not sure yet" },
  ...services.map((s) => ({ value: s.id, label: s.title })),
];
</script>

<template>
  <div class="rounded-[32px] border border-navy/10 bg-cream/70 p-6 shadow-soft sm:p-10">
    <div v-if="status === 'sent'" class="py-10 text-center" role="status">
      <p class="font-display text-5xl font-extrabold uppercase font-stretch-condensed">Message sent</p>
      <p class="mt-3 text-muted">Thanks, {{ fields.name || "friend" }}. I'll reply to {{ fields.email }} within two days.</p>
      <BaseButton variant="outline" class="mt-8" @click="reset">Send another</BaseButton>
    </div>

    <form v-else novalidate class="grid gap-5" @submit.prevent="submit">
      <div class="grid gap-5 sm:grid-cols-2">
        <FormField v-model="fields.name" label="Your name" autocomplete="name" :error="errors.name" />
        <FormField v-model="fields.email" label="Email" type="email" autocomplete="email" :error="errors.email" />
      </div>
      <FormField v-model="fields.service" as="select" label="What do you need?" :options="serviceOptions" />
      <FormField
        v-model="fields.message"
        as="textarea"
        label="Tell me about your project"
        placeholder="Goals, timeline, links…"
        :error="errors.message"
      />
      <!-- honeypot: hidden from people, bots fill it in -->
      <input v-model="fields.botcheck" type="checkbox" name="botcheck" class="hidden" tabindex="-1" autocomplete="off" />

      <p v-if="status === 'error'" class="rounded-2xl bg-red-50 px-5 py-4 text-sm font-bold text-red-800" role="alert">
        {{ errorMessage }}
        <a :href="`mailto:${site.email}`" class="underline">{{ site.email }}</a>
      </p>

      <BaseButton variant="primary" size="lg" type="submit" class="justify-self-start" :disabled="isSending">
        {{ isSending ? "Sending…" : "Send message →" }}
      </BaseButton>
    </form>
  </div>
</template>
