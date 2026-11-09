import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useReducedMotion } from "./useReducedMotion.js";

// Cycles through phrases: hold → "out" (letters lift away) → next phrase "in".
// Pauses while the tab is hidden; stays on the first phrase under reduced motion.
export function usePhraseRotator(phrases, { hold = 3200, outDuration = 650 } = {}) {
  const index = ref(0);
  const leaving = ref(false);
  const cycle = ref(0); // bumps every phrase so progress bars restart
  const reduced = useReducedMotion();
  let holdTimer;
  let outTimer;

  const clear = () => {
    clearTimeout(holdTimer);
    clearTimeout(outTimer);
  };
  const schedule = () => {
    clear();
    if (reduced.value || document.hidden || phrases.length < 2) return;
    holdTimer = setTimeout(() => {
      leaving.value = true;
      outTimer = setTimeout(() => {
        index.value = (index.value + 1) % phrases.length;
        leaving.value = false;
        cycle.value++;
        schedule();
      }, outDuration);
    }, hold);
  };
  const onVisibility = () => (document.hidden ? clear() : schedule());

  onMounted(() => {
    document.addEventListener("visibilitychange", onVisibility);
    schedule();
  });
  watch(reduced, schedule);
  onBeforeUnmount(() => {
    clear();
    document.removeEventListener("visibilitychange", onVisibility);
  });

  return { index, leaving, cycle, hold };
}
