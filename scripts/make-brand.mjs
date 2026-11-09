// Generates the favicon set and the Open Graph share image from the brand assets.
// Renders small HTML pages with headless Chrome. Run: npm run brand
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const CHROME =
  process.env.CHROME_PATH ??
  (process.platform === "win32"
    ? "C:/Program Files/Google/Chrome/Application/chrome.exe"
    : process.platform === "darwin"
      ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
      : "/usr/bin/google-chrome");

const root = resolve(".");
const url = (p) => pathToFileURL(join(root, p)).href;
const tmp = join(tmpdir(), "portfolio-brand");
mkdirSync(tmp, { recursive: true });
mkdirSync("public/favicon", { recursive: true });

// the M monogram paths live in BrandLogo.vue; reuse them so there is one source of truth
const logo = readFileSync("src/components/base/BrandLogo.vue", "utf8");
const paths = [...logo.matchAll(/\sd="([^"]+)"/g)].map((m) => m[1]);
const mark = (color) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="380 520 5200 4920"><g fill="${color}" transform="translate(0,5920) scale(1,-1)">${paths
    .map((d) => `<path d="${d}"/>`)
    .join("")}</g></svg>`;

const NAVY = "#0f1c3f";
const BEIGE = "#f1e8d8";
const SAND = "#e8c98f";

const fonts = `
@font-face{font-family:Bricolage;src:url(${url("node_modules/@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wdth-normal.woff2")}) format("woff2");font-weight:200 800;font-stretch:75% 100%}
@font-face{font-family:Figtree;src:url(${url("node_modules/@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2")}) format("woff2");font-weight:300 900}
*{margin:0;box-sizing:border-box}`;

function shoot(name, html, w, h, out) {
  const file = join(tmp, `${name}.html`);
  writeFileSync(file, html);
  execFileSync(CHROME, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--default-background-color=00000000",
    `--window-size=${w},${h}`,
    "--virtual-time-budget=3000",
    `--screenshot=${resolve(out)}`,
    pathToFileURL(file).href,
  ]);
  console.log("wrote", out);
}

// 1) favicon: navy M on a beige rounded tile (reads on light and dark tabs)
const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${NAVY}"/><svg x="11" y="11" width="42" height="42" viewBox="380 520 5200 4920"><g fill="${BEIGE}" transform="translate(0,5920) scale(1,-1)">${paths
  .map((d) => `<path d="${d}"/>`)
  .join("")}</g></svg></svg>`;
writeFileSync("public/favicon/favicon.svg", svgIcon);
console.log("wrote public/favicon/favicon.svg");

const iconPage = (size, radius) =>
  `<!doctype html><style>${fonts}html,body{width:${size}px;height:${size}px;background:transparent}
  div{width:100%;height:100%;border-radius:${radius}px;background:${NAVY};display:grid;place-items:center}
  div svg{width:66%;height:66%}</style><div>${mark(BEIGE)}</div>`;

for (const [size, out, r] of [
  [16, "public/favicon/favicon-16x16.png", 3],
  [32, "public/favicon/favicon-32x32.png", 7],
  [180, "public/favicon/apple-touch-icon.png", 0], // iOS rounds it itself
  [192, "public/favicon/android-chrome-192x192.png", 42],
  [512, "public/favicon/android-chrome-512x512.png", 112],
]) {
  shoot(`icon-${size}`, iconPage(size, r), size, size, out);
}

// 2) Open Graph image, 1200x630
const og = `<!doctype html><style>${fonts}
html,body{width:1200px;height:630px;overflow:hidden;background:${BEIGE};font-family:Figtree;color:${NAVY}}
.glow{position:absolute;border-radius:50%;filter:blur(70px)}
.copy{position:absolute;left:72px;top:64px;bottom:64px;width:660px;display:flex;flex-direction:column}
.mark{width:76px;height:72px}
.eyebrow{margin-top:auto;font-weight:800;letter-spacing:.2em;font-size:20px;text-transform:uppercase;color:#1a3a9c}
h1{font-family:Bricolage;font-stretch:75%;font-weight:800;font-size:132px;line-height:.86;text-transform:uppercase;margin-top:14px}
p{margin-top:22px;font-size:26px;color:#5b6278;max-width:30ch}
.url{margin-top:26px;display:inline-flex;align-self:flex-start;padding:10px 20px;border-radius:99px;background:${NAVY};color:${BEIGE};font-weight:700;font-size:20px}
.photo{position:absolute;right:20px;bottom:0;height:600px}
.disc{position:absolute;right:40px;bottom:-140px;width:520px;height:520px;border-radius:50%;background:${SAND};opacity:.55}
</style>
<div class="glow" style="left:-120px;top:120px;width:380px;height:380px;background:#9db5f0;opacity:.45"></div>
<div class="glow" style="right:-80px;top:-60px;width:420px;height:420px;background:${SAND};opacity:.7"></div>
<div class="disc"></div>
<img class="photo" src="${url("src/assets/images/mohab.webp")}">
<div class="copy">
  <div class="mark">${mark(NAVY)}</div>
  <div class="eyebrow">Portfolio · Abu Dhabi</div>
  <h1>Mohab<br>Alhassan</h1>
  <p>Full-stack developer. Laravel, Node &amp; Vue — from API to interface.</p>
  <span class="url">mohap710.github.io/My-Portfolio</span>
</div>`;
shoot("og", og, 1200, 630, "public/og-image.jpg");

rmSync(tmp, { recursive: true, force: true });
