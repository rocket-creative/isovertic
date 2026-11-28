// The real pricing page, scrolled to the price list. Usage: node tools/figures/pricing.mjs
import { createRequire } from "module";
const require = createRequire(process.env.PUPPETEER_DIR || "C:/Users/georg/Desktop/Claude Workstation/fobip-website/scripts/");
const puppeteer = require("puppeteer-core");
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new" });
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 1500, deviceScaleFactor: 1 });
await p.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
await p.goto("https://isovertic.com/pricing", { waitUntil: "networkidle2" });
const info = await p.evaluate(() => { const t = document.querySelector("table"); if (!t) return null; const s = t.closest("section") || t; s.scrollIntoView({ block: "start" }); return { tables: document.querySelectorAll("table").length, h: s.getBoundingClientRect().height }; });
console.log(info);
await new Promise((r) => setTimeout(r, 1500));
await p.screenshot({ path: new URL("../../public/images/proof/isovertic-pricing.jpg", import.meta.url).pathname.slice(1).replace(/%20/g, " "), type: "jpeg", quality: 84 });
await b.close();
