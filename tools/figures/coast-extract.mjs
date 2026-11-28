// One time: cut the Connecticut and Long Island coastline out of Natural Earth 1:10m land (public domain).
// Usage: node tools/figures/coast-extract.mjs path/to/ne_10m_land.geojson
import fs from "fs";
const g = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const B = [-74.6, 40.3, -71.3, 42.4];
const rings = [];
for (const f of g.features) {
  const polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
  for (const poly of polys) for (const ring of poly) {
    if (!ring.some(([x, y]) => x > B[0] && x < B[2] && y > B[1] && y < B[3])) continue;
    // Keep the points near the box, plus enough of the rest to close the shape off screen.
    const pad = 1.5;
    const pts = ring.filter(([x, y], i) => (x > B[0] - pad && x < B[2] + pad && y > B[1] - pad && y < B[3] + pad) || i % 400 === 0);
    rings.push(pts.map(([x, y]) => [+x.toFixed(4), +y.toFixed(4)]));
  }
}
fs.writeFileSync(new URL("./coast.json", import.meta.url), JSON.stringify(rings));
console.log(rings.length, "rings", rings.reduce((n, r) => n + r.length, 0), "points");
