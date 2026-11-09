// GitHub Pages serves dist/404.html for unknown paths. With dirStyle "flat", vite-ssg already
// writes the prerendered /404 route to dist/404.html; this just confirms it exists.
import { existsSync } from "node:fs";

if (existsSync("dist/404.html")) console.log("postbuild: dist/404.html ready");
else console.warn("postbuild: dist/404.html missing; unknown URLs will get GitHub's default 404");

// the home route is listed twice ("/" and the layout's "" child); drop the stray "dist/.html"
import { rmSync } from "node:fs";
rmSync("dist/.html", { force: true });
