// Case studies live in src/content/projects/<slug>.md and compile to Vue components at build time.
// Returns the component for a slug, or null if that project has no write-up yet.
const studies = import.meta.glob("../content/projects/*.md", { eager: true, import: "default" });

export function caseStudy(slug) {
  return studies[`../content/projects/${slug}.md`] ?? null;
}
