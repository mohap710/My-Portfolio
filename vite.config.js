import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import Markdown from "unplugin-vue-markdown/vite";
import { projects } from "./src/data/projects.js";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // GitHub Pages serves the site under /My-Portfolio/. Set VITE_BASE=/ when moving to a custom domain.
    base: env.VITE_BASE || "/My-Portfolio/",
    // .md files compile to Vue components at build time (project case studies in src/content/)
    plugins: [vue({ include: [/\.vue$/, /\.md$/] }), Markdown({ wrapperClasses: "case-study" }), tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    ssgOptions: {
      script: "async",
      formatting: "minify",
      // flat = dist/projects.html, so /projects (no trailing slash) is served its own HTML
      // instead of the home page (which caused a flash of the hero on reload)
      dirStyle: "flat",
      // static routes + one prerendered page per project
      includedRoutes: (paths) => [
        ...paths.filter((p) => !p.includes(":")),
        ...projects.filter((p) => !p.hidden).map((p) => `/projects/${p.slug}`),
      ],
    },
  };
});
