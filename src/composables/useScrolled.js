import { onBeforeUnmount, onMounted, ref } from "vue";

// True once the page has scrolled past `offset` px.
// Passive listener + requestAnimationFrame: at most one cheap read per frame, and the
// ref only changes when the threshold is crossed, so Vue re-renders twice per round trip.
export function useScrolled(offset = 80) {
  const scrolled = ref(false);
  let frame = 0;
  const update = () => {
    frame = 0;
    const next = window.scrollY > offset;
    if (next !== scrolled.value) scrolled.value = next;
  };
  const onScroll = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };
  onMounted(() => {
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
  });
  onBeforeUnmount(() => {
    cancelAnimationFrame(frame);
    window.removeEventListener("scroll", onScroll);
  });
  return scrolled;
}
