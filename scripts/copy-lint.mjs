// ISOVERTIC copy lint: blocks em dashes, en dashes, and AI filler phrases in content and pages.
import fs from "fs";
import path from "path";

const ROOTS = ["app", "components", "content"];
const EXT = new Set([".md", ".mdx", ".tsx", ".ts"]);
const BANNED = [
  { re: /[\u2014\u2013]/g, label: "em or en dash" },
  { re: /clean and professional/gi, label: "banned phrase: clean and professional" },
  { re: /this framing/gi, label: "banned phrase: this framing" },
  { re: /happy to/gi, label: "banned phrase: happy to" },
  { re: /through line/gi, label: "banned phrase: through line" },
  { re: /operationally/gi, label: "banned phrase: operationally" },
  { re: /delve|leverag(e|ing) the power|in today's (fast|ever)/gi, label: "AI filler" },
];

let failures = 0;
function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) walk(p);
    else if (EXT.has(path.extname(p))) check(p);
  }
}
function check(file) {
  const lines = fs.readFileSync(file, "utf8").split("\n");
  lines.forEach((line, i) => {
    for (const b of BANNED) {
      b.re.lastIndex = 0;
      if (b.re.test(line)) {
        console.error(`${file}:${i + 1}  ${b.label}`);
        failures++;
      }
    }
  });
}
ROOTS.forEach((r) => fs.existsSync(r) && walk(r));
if (failures) {
  console.error(`\nCopy lint failed: ${failures} violation(s).`);
  process.exit(1);
}
console.log("Copy lint clean.");
