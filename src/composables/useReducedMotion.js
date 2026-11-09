import { onBeforeUnmount, onMounted, ref } from "vue";

// SSR-safe: false on the server, real value after mount, updates live.
export function useReducedMotion() {
  const reduced = ref(false);
  let mq;
  const update = () => (reduced.value = mq.matches);
  onMounted(() => {
    mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    update();
    mq.addEventListener("change", update);
  });
  onBeforeUnmount(() => mq?.removeEventListener("change", update));
  return reduced;
}
