// The two maps and the picture of one real page at three screen sizes.
import fs from "fs";
import { pathToFileURL } from "url";
const coast = JSON.parse(fs.readFileSync(new URL("./coast.json", import.meta.url), "utf8"));
const proof = (f) => new URL(`../../public/images/proof/${f}`, import.meta.url).href;

// Plain projection: longitude scaled by the cosine of the middle latitude, which is accurate enough at this size.
function map({ box: [w, s, e, n], width, points, labels }) {
  const k = Math.cos(((s + n) / 2) * Math.PI / 180);
  const sx = width / ((e - w) * k), height = Math.round((n - s) * sx);
  const X = (lon) => ((lon - w) * k * sx).toFixed(1), Y = (lat) => ((n - lat) * sx).toFixed(1);
  const land = coast.map((r) => "M" + r.map(([x, y]) => `${X(x)},${Y(y)}`).join("L") + "Z").join("");
  return `<svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" style="display:block;background:#DCEBF2;border:2px solid #E0DED8;border-radius:4px">
    <path d="${land}" fill="#FBFAF7" stroke="#B9B6AE" stroke-width="1.5" stroke-linejoin="round"/>
    ${labels.map(([t, lat, lon, size = 15, fill = "#5E6670", sp = ".16em"]) => `<text x="${X(lon)}" y="${Y(lat)}" font-size="${size}" fill="${fill}" letter-spacing="${sp}" text-anchor="middle" font-weight="600" style="text-transform:uppercase">${t}</text>`).join("")}
    ${points.map(([t, lat, lon, main, dx = 12, dy = 5, anchor = "start"]) => `<circle cx="${X(lon)}" cy="${Y(lat)}" r="${main ? 9 : 5.5}" fill="${main ? "#0AB1FF" : "#0F2C3F"}" stroke="#fff" stroke-width="2"/><text x="${+X(lon) + dx}" y="${+Y(lat) + dy}" font-size="${main ? 19 : 16}" font-weight="${main ? 700 : 500}" fill="#14181B" text-anchor="${anchor}" paint-order="stroke" stroke="#FBFAF7" stroke-width="4">${t}</text>`).join("")}
  </svg>`;
}

export const d = {
  "map-connecticut-long-island": {
    tag: "Map",
    title: "Connecticut is across the Sound from our office",
    html: () => map({ box: [-74.05, 40.55, -71.75, 42.08], width: 920,
      labels: [["Connecticut", 41.62, -72.45, 17], ["Long Island Sound", 41.085, -72.75, 13, "#4E7F99", ".2em"], ["Long Island", 40.87, -72.72, 14], ["New York", 41.45, -73.85, 15]],
      points: [["Farmington", 41.72, -72.832], ["Hamden", 41.396, -72.897, false, -12, 5, "end"], ["New Haven", 41.308, -72.928, false, -12, 14, "end"], ["Branford", 41.279, -72.815], ["Danbury", 41.395, -73.454], ["Stamford", 41.053, -73.539, false, -12, 5, "end"], ["Isovertic, Bohemia", 40.776, -73.103, true, 15, 6]] }),
  },
  "map-office-bohemia": {
    tag: "Map",
    title: "600 Johnson Ave, Suite D5, Bohemia, NY 11716",
    html: () => map({ box: [-74.05, 40.52, -71.8, 41.2], width: 920,
      labels: [["Long Island", 40.9, -72.75, 15], ["Long Island Sound", 41.1, -72.9, 13, "#4E7F99", ".2em"], ["Atlantic Ocean", 40.6, -72.75, 13, "#4E7F99", ".2em"], ["New York City", 40.72, -73.74, 12]],
      points: [["Isovertic, Bohemia", 40.776, -73.103, true, 15, 6]] }) + `<p class="sm s" style="margin-top:14px">The office is in Bohemia, in Suffolk County, off Veterans Memorial Highway.</p>`,
  },
  "three-screen-sizes": {
    tag: "Recorded",
    title: "One page of genetargeting.com on a phone, a laptop, and a lab monitor",
    html: () => `<div style="display:flex;align-items:flex-end;gap:22px">
      ${[["_size-phone.jpg", 150, "Phone"], ["_size-laptop.jpg", 320, "Laptop"], ["_size-monitor.jpg", 404, "Lab workstation monitor"]].map(([f, w, l]) => `<div><img src="${proof(f)}" style="display:block;width:${w}px;border:6px solid #14181B;border-radius:${w < 200 ? 16 : 6}px;background:#fff"><p class="xs s b" style="margin-top:10px;letter-spacing:.1em;text-transform:uppercase">${l}</p></div>`).join("")}</div>
      <p class="sm s" style="margin-top:14px">The CTLA4 humanized mice page at genetargeting.com, recorded November 2026.</p>`,
  },
};
