// Draws the example pictures for the site: each one is a small HTML page in the house style, saved as a WebP.
// Usage: node tools/figures/build.mjs [id ...]   (no ids = all). Output: public/images/examples/<id>.webp
// Every picture carries the word "Example" or "Sample" so nobody reads it as a client's real page or result.
import { createRequire } from "module";
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { figures } from "./figures.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, "..", "..");
const OUT = path.join(root, "public", "images", "examples");
// puppeteer-core is not a dependency of the site. Point PUPPETEER_DIR at any folder that has it installed.
const require = createRequire(process.env.PUPPETEER_DIR || "C:/Users/georg/Desktop/Claude Workstation/fobip-website/scripts/");
const puppeteer = require("puppeteer-core");
const font = pathToFileURL(path.join(root, "app", "fonts", "archivo-var.woff2")).href;

const CSS = `
@font-face { font-family: Archivo; src: url("${font}"); font-weight: 100 900; }
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { width: 1000px; background: #F5F4F0; color: #14181B; font-family: Archivo, "Helvetica Neue", Arial, sans-serif; font-size: 17px; line-height: 1.45; }
.page { padding: 38px 40px 42px; display: flex; flex-direction: column; }
.top { display: flex; align-items: flex-start; gap: 18px; margin-bottom: 24px; }
.tag { flex: none; margin-top: 7px; border: 1.5px solid #0F2C3F; color: #0F2C3F; font-size: 12px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; padding: 4px 9px 3px; border-radius: 2px; }
.title { font-size: 31px; font-weight: 600; line-height: 1.2; letter-spacing: -.005em; }
.win { flex: 1; min-height: 0; background: #fff; border: 2px solid #E0DED8; border-radius: 4px; display: flex; flex-direction: column; overflow: hidden; }
.bar { flex: none; display: flex; align-items: center; gap: 7px; padding: 11px 16px; border-bottom: 2px solid #E0DED8; background: #FAFAF8; }
.bar i { width: 10px; height: 10px; border-radius: 50%; background: #D5D2CA; display: block; }
.bar span { margin-left: 12px; font-size: 14px; color: #5E6670; background: #F0EEE9; padding: 3px 14px; border-radius: 3px; flex: 1; }
.body { flex: 1; min-height: 0; padding: 26px 30px 30px; overflow: hidden; }
.row { display: flex; gap: 22px; flex: 1; min-height: 0; }
.row > .win { flex: 1; }
h1 { font-size: 29px; font-weight: 600; line-height: 1.2; }
h2 { font-size: 21px; font-weight: 600; line-height: 1.25; }
h3 { font-size: 13px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: #5E6670; }
p { margin-top: 10px; }
.s { color: #5E6670; }
.sm { font-size: 15px; }
.xs { font-size: 13.5px; }
.navy { color: #0F2C3F; }
.blue { color: #0A8FCE; }
.b { font-weight: 600; }
.mt { margin-top: 18px; } .mt2 { margin-top: 28px; }
.cols { display: grid; grid-template-columns: 1fr 1fr; gap: 26px; } .cols3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; }
.card { border: 2px solid #E0DED8; border-radius: 4px; padding: 16px 18px; }
.card.on { border-color: #0F2C3F; }
.kv { width: 100%; border-collapse: collapse; margin-top: 14px; }
.kv td, .t td, .t th { border-top: 1.5px solid #E0DED8; padding: 8px 10px 8px 0; vertical-align: top; text-align: left; }
.kv td:first-child { color: #5E6670; width: 34%; }
.t { width: 100%; border-collapse: collapse; margin-top: 14px; }
.t th { border-top: 0; border-bottom: 2px solid #14181B; font-size: 13px; letter-spacing: .1em; text-transform: uppercase; color: #5E6670; font-weight: 600; }
.r { text-align: right !important; }
.chip { display: inline-block; border: 1.5px solid #B9B6AE; border-radius: 3px; padding: 2px 9px; font-size: 14px; margin: 0 6px 6px 0; }
.chip.on { border-color: #0F2C3F; background: #0F2C3F; color: #fff; }
.btn { display: inline-block; background: #0F2C3F; color: #fff; font-weight: 600; padding: 10px 20px; border-radius: 3px; margin-top: 16px; }
.btn.ghost { background: #fff; color: #0F2C3F; border: 2px solid #0F2C3F; padding: 8px 18px; }
.hl { background: #DDF3FF; box-shadow: 0 0 0 3px #DDF3FF; border-bottom: 2px solid #0AB1FF; }
.ring { outline: 3px solid #0AB1FF; outline-offset: 5px; border-radius: 3px; }
.x { text-decoration: line-through; text-decoration-color: #0AB1FF; text-decoration-thickness: 2.5px; color: #5E6670; }
.note { border-left: 4px solid #0AB1FF; background: #F1FAFF; padding: 9px 14px; font-size: 15px; margin-top: 14px; }
.lab { display: block; font-size: 13px; color: #5E6670; margin: 14px 0 4px; }
.in { border: 1.5px solid #B9B6AE; border-radius: 3px; padding: 8px 12px; min-height: 40px; background: #fff; }
.meter { height: 12px; background: #E0DED8; margin-top: 6px; position: relative; } .meter b { position: absolute; left: 0; top: 0; bottom: 0; background: #0AB1FF; display: block; }
.big { font-size: 58px; font-weight: 600; line-height: 1; color: #0F2C3F; }
.link { color: #0A6FA3; text-decoration: underline; text-underline-offset: 3px; }
.ph { background: repeating-linear-gradient(135deg, #EEECE6 0 10px, #F5F4F0 10px 20px); border: 1.5px solid #E0DED8; border-radius: 3px; display: flex; align-items: center; justify-content: center; color: #5E6670; font-size: 13.5px; text-align: center; }
.line { height: 11px; background: #E7E5DF; border-radius: 2px; margin-top: 10px; }
.hr { border-top: 1.5px solid #E0DED8; margin-top: 16px; }
.fl { display: flex; justify-content: space-between; align-items: baseline; gap: 16px; }
.num { flex: none; width: 30px; height: 30px; border-radius: 50%; background: #0F2C3F; color: #fff; font-weight: 600; display: inline-flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 15px; }
ol.plain, ul.plain { list-style: none; } ul.dot { margin: 10px 0 0 20px; } ul.dot li { margin-top: 5px; }
.nav { display: flex; gap: 22px; font-size: 14.5px; color: #5E6670; padding-bottom: 14px; border-bottom: 1.5px solid #E0DED8; margin-bottom: 20px; } .nav b { color: #14181B; margin-right: auto; }
.msg { border: 2px solid #E0DED8; border-radius: 4px; padding: 14px 18px; margin-top: 14px; } .msg.me { background: #F5F4F0; }
`;

const win = (url, html) => `<div class="win">${url ? `<div class="bar"><i></i><i></i><i></i><span>${url}</span></div>` : ""}<div class="body">${html}</div></div>`;
const page = (f) => `<!doctype html><meta charset="utf-8"><style>${CSS}</style><div class="page"><div class="top"><span class="tag">${f.tag ?? "Example"}</span><div class="title">${f.title}</div></div>${f.html({ win })}</div>`;

const ids = process.argv.slice(2);
fs.mkdirSync(OUT, { recursive: true });
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new", args: ["--allow-file-access-from-files"] });
const p = await b.newPage();
await p.setViewport({ width: 1000, height: 600, deviceScaleFactor: 1.6 });
const tmp = path.join(here, ".tmp.html");
for (const [id, f] of Object.entries(figures)) {
  if (ids.length && !ids.includes(id)) continue;
  fs.writeFileSync(tmp, page(f));
  await p.goto(pathToFileURL(tmp).href, { waitUntil: "load" });
  await p.evaluate(() => document.fonts.ready);
  // A picture whose content runs past its window is a bug, so say which one.
  const over = await p.evaluate(() => [...document.querySelectorAll(".body")].some((e) => e.scrollWidth > e.clientWidth + 2 || e.scrollHeight > e.clientHeight + 2));
  await p.screenshot({ path: path.join(OUT, `${id}.webp`), type: "webp", quality: 90, fullPage: true });
  console.log(over ? "OVERFLOW" : "ok", id);
}
fs.rmSync(tmp, { force: true });
await b.close();
