// Real screenshots for the site, recorded from the live pages. Usage: node tools/figures/real.mjs
import { createRequire } from "module";
import path from "path";
import { fileURLToPath } from "url";
const here = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(here, "..", "..", "public", "images", "proof");
const require = createRequire(process.env.PUPPETEER_DIR || "C:/Users/georg/Desktop/Claude Workstation/fobip-website/scripts/");
const puppeteer = require("puppeteer-core");
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new" });
const p = await b.newPage();
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
async function shot(url, file, w = 1440, h = 1080, scale = 1) {
  await p.setViewport({ width: w, height: h, deviceScaleFactor: scale });
  const r = await p.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await p.evaluate(() => { const x = [...document.querySelectorAll("button")].find((e) => /Reject Non-Essential/i.test(e.textContent)); if (x) x.click(); });
  await wait(2500);
  await p.screenshot({ path: path.join(OUT, file), type: "jpeg", quality: 84 });
  console.log(r.status(), file, await p.title());
}
const G = "https://www.genetargeting.com";
await shot(`${G}/all-catalog-mouse-models/gene/Il6/`, "genetargeting-catalog-il6.jpg");
await shot(`${G}/custom-mouse-models/gene/Il6/`, "genetargeting-gene-il6.jpg");
await shot(`${G}/ctla4-humanized-mice/`, "genetargeting-ctla4-humanized.jpg");
await shot("https://isovertic.com/pricing", "isovertic-pricing.jpg", 1440, 1080);
await shot(`${G}/ctla4-humanized-mice/`, "_size-phone.jpg", 390, 780, 2);
await shot(`${G}/ctla4-humanized-mice/`, "_size-laptop.jpg", 1366, 800, 1);
await shot(`${G}/ctla4-humanized-mice/`, "_size-monitor.jpg", 1920, 1080, 1);
await b.close();
