// Resolves image paths stored in data/ (e.g. "projects/pixatech/x.png") to hashed URLs.
// import.meta.glob keeps every image in the Vite pipeline, so paths are checked at build time.
// Only the folders data/ points at, so unused legacy images never reach the bundle.
const images = import.meta.glob(
  [
    "../assets/images/projects/**/*.{png,jpg,jpeg,webp}",
    "../assets/images/stack/*.{png,svg}",
    "../assets/images/testimonial/*.{jpg,jpeg}",
  ],
  { eager: true, import: "default" },
);

export function assetUrl(path) {
  const url = images[`../assets/images/${path}`];
  if (!url && import.meta.env.DEV) console.warn(`[assetUrl] missing image: ${path}`);
  return url ?? "";
}

// Tech logo for a stack id: stack/<id>.png, or stack/<id>.svg for newer logos.
export function stackIcon(id) {
  return images[`../assets/images/stack/${id}.png`] ?? images[`../assets/images/stack/${id}.svg`] ?? "";
}

export function useAsset() {
  return { assetUrl };
}
