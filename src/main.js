import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { routes } from "./router/routes.js";
import reveal from "./directives/reveal.js";

import "@fontsource-variable/bricolage-grotesque/wdth.css";
import "@fontsource-variable/figtree/wght.css";
import "./assets/css/main.css";

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
    scrollBehavior(to, from, saved) {
      if (saved) return saved;
      if (to.hash) return { el: to.hash, behavior: "smooth", top: 80 };
      return { top: 0 };
    },
  },
  ({ app }) => {
    app.directive("reveal", reveal);
  },
);
