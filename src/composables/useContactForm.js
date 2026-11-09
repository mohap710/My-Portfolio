import { computed, reactive, ref } from "vue";

const ENDPOINT = "https://api.web3forms.com/submit";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Web3Forms submission with client-side validation and a honeypot field.
// The access key is public by design; restrict it to your domain in the Web3Forms dashboard.
export function useContactForm(initial = {}) {
  const fields = reactive({ name: "", email: "", service: "", message: "", botcheck: false, ...initial });
  const errors = reactive({});
  const status = ref("idle"); // idle | sending | sent | error
  const errorMessage = ref("");

  const validate = () => {
    for (const k of Object.keys(errors)) delete errors[k];
    if (fields.name.trim().length < 2) errors.name = "Please tell me your name.";
    if (!EMAIL_RE.test(fields.email.trim())) errors.email = "That email doesn't look right.";
    if (fields.message.trim().length < 10) errors.message = "A couple of sentences helps me reply properly.";
    return Object.keys(errors).length === 0;
  };

  const submit = async () => {
    if (status.value === "sending" || !validate()) return;
    if (fields.botcheck) {
      status.value = "sent"; // silently accept bots
      return;
    }
    const key = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!key) {
      status.value = "error";
      errorMessage.value = "The contact form isn't configured yet. Please email me directly.";
      return;
    }
    status.value = "sending";
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: key,
          subject: `New portfolio enquiry from ${fields.name}`,
          from_name: "Portfolio contact form",
          name: fields.name,
          email: fields.email,
          service: fields.service || "Not specified",
          message: fields.message,
          botcheck: false,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.message || "Request failed");
      status.value = "sent";
    } catch {
      status.value = "error";
      errorMessage.value = "Something went wrong sending your message. Please try again or email me directly.";
    }
  };

  const reset = () => {
    Object.assign(fields, { name: "", email: "", service: "", message: "", botcheck: false });
    status.value = "idle";
  };

  const isSending = computed(() => status.value === "sending");
  return { fields, errors, status, errorMessage, isSending, submit, reset };
}
