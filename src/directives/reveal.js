// v-reveal: fades/slides an element in the first time it enters the viewport.
// Optional value = delay in seconds, e.g. v-reveal="0.1".
// SSR-safe: getSSRProps renders the hidden class so there is no flash before hydration.
let observer;

const getObserver = () => {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );
  return observer;
};

export default {
  getSSRProps: () => ({ class: "reveal" }),
  mounted(el, { value }) {
    el.classList.add("reveal");
    if (value) el.style.setProperty("--reveal-delay", `${value}s`);
    getObserver().observe(el);
  },
  unmounted(el) {
    observer?.unobserve(el);
  },
};
