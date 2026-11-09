// Full-page screenshots of each project's live site, for the cards and project pages.
//
//   npm run capture                 -> every project in src/data/projects.js that has `desktop`
//   npm run capture -- sahem-uae    -> just these slugs
//
// Uses the locally installed Chrome through the DevTools protocol (no extra packages).
// To make animated sites capture completely, each page is:
//   1. loaded with prefers-reduced-motion: reduce (many sites skip their animations),
//   2. scrolled slowly from top to bottom so lazy images load and scroll-reveal sections trigger,
//   3. given a stylesheet that finishes every animation/transition and forces common
//      "reveal" states (AOS, WOW, Animate.css, .reveal, ...) to fully visible,
//   4. frozen: sliders/carousels are stopped on their first slide, videos paused.
// Output: src/assets/images/projects/<slug>/desktop.webp (1440px) and mobile.webp (390px).
//
// Per-project options in projects.js:
//   captureUrl   page to capture if different from liveLink (e.g. "https://site.ae/?lang=en")
//   captureMaxHeight  crop very long pages (default 7000px)
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { projects } from "../src/data/projects.js";

const CHROME_PATHS = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
];
const VIEWPORTS = [
  { file: "desktop.webp", width: 1440, height: 900, mobile: false },
  {
    file: "mobile.webp",
    width: 390,
    height: 844,
    mobile: true,
    ua: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
  },
];

const FREEZE_CSS = `
*, *::before, *::after {
  animation-duration: 0s !important; animation-delay: 0s !important;
  animation-iteration-count: 1 !important; animation-play-state: paused !important;
  transition: none !important; scroll-behavior: auto !important; caret-color: transparent !important;
}
[data-aos], .aos-init, .aos-animate, .wow, .animate__animated, .reveal, .reveal-up, .fade-in, .fade-up,
[class*="reveal"], [data-animate], [data-scroll], [x-intersect], [x-show] {
  opacity: 1 !important; visibility: visible !important; transform: none !important;
  filter: none !important; clip-path: none !important;
}`;

const FREEZE_JS = `(() => {
  const style = document.createElement("style");
  style.textContent = ${JSON.stringify(FREEZE_CSS)};
  document.head.appendChild(style);
  document.querySelectorAll(".swiper, .swiper-container").forEach((el) => {
    const s = el.swiper; if (!s) return;
    s.autoplay?.stop(); s.slideTo?.(0, 0);
  });
  if (window.jQuery) {
    try { jQuery(".slick-initialized").slick("slickPause").slick("slickGoTo", 0, true); } catch {}
    try { jQuery(".owl-carousel").trigger("stop.owl.autoplay").trigger("to.owl.carousel", [0, 0]); } catch {}
  }
  document.querySelectorAll("video").forEach((v) => { v.pause(); v.currentTime = 0; });
  document.querySelectorAll("[data-aos]").forEach((el) => el.classList.add("aos-animate"));
  scrollTo(0, 0);
})()`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function launch() {
  const exe = CHROME_PATHS.find((p) => existsSync(p));
  if (!exe) throw new Error("Chrome/Edge not found; add its path to CHROME_PATHS");
  const port = 9300 + Math.floor(Math.random() * 500);
  const proc = spawn(exe, [
    "--headless=new", `--remote-debugging-port=${port}`, "--hide-scrollbars", "--no-first-run",
    "--force-color-profile=srgb", `--user-data-dir=${join(tmpdir(), `capture-${port}`)}`, "about:blank",
  ], { stdio: "ignore" });
  let target;
  for (let i = 0; i < 60 && !target; i++) {
    await sleep(200);
    try { target = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find((t) => t.type === "page"); } catch {}
  }
  if (!target) throw new Error("Chrome did not start");
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
  let id = 0;
  const pending = new Map();
  ws.onmessage = (e) => {
    const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
  };
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const i = ++id;
      pending.set(i, (m) => (m.error ? reject(new Error(`${method}: ${m.error.message}`)) : resolve(m.result)));
      ws.send(JSON.stringify({ id: i, method, params }));
    });
  return { send, close: () => { ws.close(); proc.kill(); } };
}

async function capture(send, url, vp, maxHeight) {
  await send("Emulation.setDeviceMetricsOverride", { width: vp.width, height: vp.height, deviceScaleFactor: 1, mobile: vp.mobile });
  await send("Emulation.setUserAgentOverride", { userAgent: vp.ua ?? "" });
  await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
  await send("Page.navigate", { url });
  await sleep(6000);

  // slow scroll so lazy images load and scroll-triggered sections run their entrance
  await send("Runtime.evaluate", {
    awaitPromise: true,
    expression: `(async () => {
      for (let y = 0; y < document.documentElement.scrollHeight; y += Math.round(innerHeight * 0.6)) {
        scrollTo(0, y); await new Promise((r) => setTimeout(r, 450));
      }
      scrollTo(0, document.documentElement.scrollHeight); await new Promise((r) => setTimeout(r, 900));
      document.querySelectorAll('img[loading="lazy"]').forEach((i) => (i.loading = "eager"));
      await Promise.all([...document.images].filter((i) => !i.complete).map((i) => new Promise((r) => { i.onload = i.onerror = r; setTimeout(r, 4000); })));
    })()`,
  });
  await send("Runtime.evaluate", { expression: FREEZE_JS });
  await sleep(1200);

  const { result } = await send("Runtime.evaluate", { expression: "document.documentElement.scrollHeight", returnByValue: true });
  const height = Math.min(result.value, maxHeight);
  // keep the real viewport (so 100vh heroes keep their size) and render beyond it
  await send("Runtime.evaluate", { expression: "scrollTo(0, 0)" });
  await sleep(1500);
  const { data } = await send("Page.captureScreenshot", {
    format: "webp",
    quality: 80,
    clip: { x: 0, y: 0, width: vp.width, height, scale: 1 },
    captureBeyondViewport: true,
  });
  return { buffer: Buffer.from(data, "base64"), height };
}

const only = process.argv.slice(2);
const targets = projects.filter((p) => p.desktop && (!only.length || only.includes(p.slug)));
if (!targets.length) {
  console.log("No matching projects (they need a `desktop` field in src/data/projects.js).");
  process.exit(0);
}

const chrome = await launch();
await chrome.send("Page.enable");
let failed = 0;
for (const p of targets) {
  const url = p.captureUrl ?? p.liveLink;
  const dir = join("src/assets/images/projects", p.slug);
  mkdirSync(dir, { recursive: true });
  for (const vp of VIEWPORTS) {
    try {
      const { buffer, height } = await capture(chrome.send, url, vp, p.captureMaxHeight ?? 7000);
      if (!buffer.length) throw new Error("empty image");
      writeFileSync(join(dir, vp.file), buffer);
      console.log(`✓ ${p.slug}/${vp.file}  ${vp.width}x${height}  ${Math.round(buffer.length / 1024)} KB`);
    } catch (err) {
      failed++;
      console.error(`✗ ${p.slug}/${vp.file}: ${err.message}`);
    }
  }
}
chrome.close();
process.exit(failed ? 1 : 0);
