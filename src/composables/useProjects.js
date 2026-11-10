import { computed } from "vue";
import { projects as source } from "@/data/projects.js";
import { assetUrl } from "./useAsset.js";

// Adds resolved image URLs once; keeps data/projects.js plain and serialisable.
const projects = source
  .filter((p) => !p.hidden)
  .sort((a, b) => a.order - b.order)
  .map((p) => ({
    ...p,
    // raw full-page capture preferred; falls back to the first gallery image
    cover: assetUrl(`projects/${p.desktop ?? p.cover ?? p.gallery[0]}`),
    mobileShot: p.mobile ? assetUrl(`projects/${p.mobile}`) : null,
    images: p.gallery.map((g) => assetUrl(`projects/${g}`)),
  }));

export function useProjects() {
  const all = computed(() => projects);
  const featured = computed(() => projects.filter((p) => p.featured));
  const bySlug = (slug) => projects.find((p) => p.slug === slug) ?? null;
  const neighbours = (slug) => {
    const i = projects.findIndex((p) => p.slug === slug);
    if (i === -1) return { prev: null, next: null };
    return {
      prev: projects[(i - 1 + projects.length) % projects.length],
      next: projects[(i + 1) % projects.length],
    };
  };
  return { all, featured, bySlug, neighbours };
}
