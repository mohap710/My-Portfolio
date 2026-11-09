import { onBeforeUnmount, onMounted, ref } from "vue";

// Returns a reactive horizontal offset (px) that follows the pointer across `target`.
// Only active for fine pointers (mouse/trackpad); throttled with requestAnimationFrame.
export function usePointerParallax(target, strength = 20) {
  const x = ref(0);
  let frame = 0;
  let el;
  const onMove = (e) => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      x.value = (e.clientX / window.innerWidth - 0.5) * strength;
    });
  };
  onMounted(() => {
    el = target.value;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    el.addEventListener("pointermove", onMove, { passive: true });
  });
  onBeforeUnmount(() => {
    cancelAnimationFrame(frame);
    el?.removeEventListener("pointermove", onMove);
  });
  return x;
}
