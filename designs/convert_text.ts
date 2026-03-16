/**
 * Convert "Telemetron" text to silkscreen path coordinates using a real font.
 * Run: bun run convert_text.ts
 */
import opentype from "opentype.js";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";

// Find a system font
const fontPaths = [
  "/System/Library/Fonts/Helvetica.ttc",
  "/System/Library/Fonts/SFNSText.ttf",
  "/System/Library/Fonts/SFNS.ttf",
  "/Library/Fonts/Arial.ttf",
  "/System/Library/Fonts/Supplemental/Arial.ttf",
];

let font: any = null;
for (const fp of fontPaths) {
  try {
    font = opentype.loadSync(fp);
    console.log(`Loaded font: ${fp}`);
    break;
  } catch (e) {
    continue;
  }
}

if (!font) {
  console.error("No font found, trying Helvetica Neue");
  try {
    font = opentype.loadSync("/System/Library/Fonts/HelveticaNeue.ttc");
    console.log("Loaded HelveticaNeue");
  } catch (e) {
    console.error("Could not load any font");
    process.exit(1);
  }
}

const text = "Telemetron";
const fontSize = 72; // render large then scale down
const path = font.getPath(text, 0, 0, fontSize);

// Get bounding box
const bbox = path.getBoundingBox();
const svgWidth = bbox.x2 - bbox.x1;
const svgHeight = bbox.y2 - bbox.y1;
const centerX = (bbox.x1 + bbox.x2) / 2;
const centerY = (bbox.y1 + bbox.y2) / 2;

// Target: ~6mm wide text for PCB
const targetWidth = 6; // mm
const scale = targetWidth / svgWidth;

interface Point { x: number; y: number }

// Convert path commands to polyline segments
const allPaths: Point[][] = [];
let currentPath: Point[] = [];
let cx = 0, cy = 0;

for (const cmd of path.commands) {
  switch (cmd.type) {
    case "M":
      if (currentPath.length > 0) allPaths.push(currentPath);
      currentPath = [];
      cx = cmd.x; cy = cmd.y;
      currentPath.push({ x: cx, y: cy });
      break;
    case "L":
      cx = cmd.x; cy = cmd.y;
      currentPath.push({ x: cx, y: cy });
      break;
    case "Q": {
      // Quadratic bezier - approximate with line segments
      const steps = 4;
      const x0 = cx, y0 = cy;
      for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        const u = 1 - t;
        const px = u * u * x0 + 2 * u * t * cmd.x1 + t * t * cmd.x;
        const py = u * u * y0 + 2 * u * t * cmd.y1 + t * t * cmd.y;
        currentPath.push({ x: px, y: py });
      }
      cx = cmd.x; cy = cmd.y;
      break;
    }
    case "C": {
      // Cubic bezier
      const steps = 6;
      const x0 = cx, y0 = cy;
      for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        const u = 1 - t;
        const px = u*u*u*x0 + 3*u*u*t*cmd.x1 + 3*u*t*t*cmd.x2 + t*t*t*cmd.x;
        const py = u*u*u*y0 + 3*u*u*t*cmd.y1 + 3*u*t*t*cmd.y2 + t*t*t*cmd.y;
        currentPath.push({ x: px, y: py });
      }
      cx = cmd.x; cy = cmd.y;
      break;
    }
    case "Z":
      if (currentPath.length > 0) {
        currentPath.push({ ...currentPath[0] }); // close
        allPaths.push(currentPath);
        currentPath = [];
      }
      break;
  }
}
if (currentPath.length > 0) allPaths.push(currentPath);

// Output as TSX silkscreen paths, centered at origin, X-negated for bottom layer
console.log(`\n// "${text}" - ${allPaths.length} paths, ${targetWidth}mm wide`);
console.log(`// Generated from ${font.names.fontFamily?.en || 'system font'}`);

for (let i = 0; i < allPaths.length; i++) {
  const route = allPaths[i].map(p => {
    // Center, scale, negate X for bottom layer
    const x = Math.round((-(p.x - centerX) * scale) * 100) / 100;
    const y = Math.round(((p.y - centerY) * scale) * 100) / 100;
    return `{ x: pcbX + ${x}, y: pcbY + ${y} }`;
  }).join(", ");
  console.log(`    <silkscreenpath layer="bottom" route={[${route}]} />`);
}
