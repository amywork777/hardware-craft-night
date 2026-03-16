/**
 * Convert Vizcom and Telemetron SVG logos to tscircuit silkscreenpath coordinates.
 * Run with: bun run convert_svg_logos.ts
 */

// --- SVG Path Parser ---

interface Point { x: number; y: number }

function cubicBezier(p0: Point, p1: Point, p2: Point, p3: Point, steps: number): Point[] {
  const pts: Point[] = [];
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const u = 1 - t;
    pts.push({
      x: u*u*u*p0.x + 3*u*u*t*p1.x + 3*u*t*t*p2.x + t*t*t*p3.x,
      y: u*u*u*p0.y + 3*u*u*t*p1.y + 3*u*t*t*p2.y + t*t*t*p3.y,
    });
  }
  return pts;
}

function parseSVGPath(d: string): Point[][] {
  const allPaths: Point[][] = [];
  let currentPath: Point[] = [];
  let x = 0, y = 0;
  let startX = 0, startY = 0;

  const tokens = d.match(/[MmLlHhVvCcSsZz]|[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?/g) || [];
  let i = 0;
  let cmd = "";

  function num(): number { return parseFloat(tokens[i++]); }

  while (i < tokens.length) {
    if (/[A-Za-z]/.test(tokens[i])) {
      cmd = tokens[i++];
    }

    switch (cmd) {
      case "M":
        if (currentPath.length > 0) allPaths.push(currentPath);
        currentPath = [];
        x = num(); y = num();
        startX = x; startY = y;
        currentPath.push({ x, y });
        cmd = "L";
        break;
      case "m":
        if (currentPath.length > 0) allPaths.push(currentPath);
        currentPath = [];
        x += num(); y += num();
        startX = x; startY = y;
        currentPath.push({ x, y });
        cmd = "l";
        break;
      case "L":
        x = num(); y = num();
        currentPath.push({ x, y });
        break;
      case "l":
        x += num(); y += num();
        currentPath.push({ x, y });
        break;
      case "H":
        x = num();
        currentPath.push({ x, y });
        break;
      case "h":
        x += num();
        currentPath.push({ x, y });
        break;
      case "V":
        y = num();
        currentPath.push({ x, y });
        break;
      case "v":
        y += num();
        currentPath.push({ x, y });
        break;
      case "C": {
        const x1 = num(), y1 = num();
        const x2 = num(), y2 = num();
        const x3 = num(), y3 = num();
        const pts = cubicBezier({ x, y }, { x: x1, y: y1 }, { x: x2, y: y2 }, { x: x3, y: y3 }, 8);
        currentPath.push(...pts);
        x = x3; y = y3;
        break;
      }
      case "c": {
        const dx1 = num(), dy1 = num();
        const dx2 = num(), dy2 = num();
        const dx3 = num(), dy3 = num();
        const pts = cubicBezier(
          { x, y },
          { x: x + dx1, y: y + dy1 },
          { x: x + dx2, y: y + dy2 },
          { x: x + dx3, y: y + dy3 },
          8
        );
        currentPath.push(...pts);
        x += dx3; y += dy3;
        break;
      }
      case "Z":
      case "z":
        currentPath.push({ x: startX, y: startY });
        allPaths.push(currentPath);
        currentPath = [];
        x = startX; y = startY;
        cmd = "";
        break;
      default:
        i++;
    }
  }

  if (currentPath.length > 0) allPaths.push(currentPath);
  return allPaths;
}

// --- Vizcom Logo SVG paths (from vizcom-logo.svg, viewBox 0 0 65 11) ---

const vizcomPaths: Record<string, string> = {
  V: "M4.15642 10.5461L0 0.287248H3.99099L5.99682 5.99116L8.00266 0.287248H11.8696L7.71315 10.5461H4.15642Z",
  I: "M16.3311 10.5461H12.5469V0.287248H16.3311V10.5461Z",
  Z: "M26.6803 0.287248V2.62626L22.2964 7.55051H26.763V10.5461H17.3542V8.16604L21.6967 3.28283H17.5817V0.287248H26.6803Z",
  C: "M27.0684 5.41667C27.0684 2.27746 29.3844 0 32.6517 0C33.4581 0 34.3473 0.184659 35.0711 0.533459V3.93939C34.4714 3.54956 33.851 3.3649 33.1893 3.3649C31.8866 3.3649 30.894 4.18561 30.894 5.41667C30.894 6.64773 31.8659 7.46843 33.1893 7.46843C33.851 7.46843 34.4921 7.26326 35.0711 6.8529V10.2588C34.2646 10.6692 33.3754 10.8333 32.5896 10.8333C29.4671 10.8333 27.0684 8.74053 27.0684 5.41667Z",
  O: "M41.4653 0C44.7326 0 47.1933 2.3185 47.1933 5.41667C47.1933 8.51484 44.7326 10.8333 41.4653 10.8333C38.1981 10.8333 35.7373 8.51484 35.7373 5.41667C35.7373 2.3185 38.1981 0 41.4653 0ZM41.4653 3.40593C40.39 3.40593 39.4388 4.2882 39.4388 5.41667C39.4388 6.54514 40.39 7.4274 41.4653 7.4274C42.5406 7.4274 43.4918 6.54514 43.4918 5.41667C43.4918 4.2882 42.5406 3.40593 41.4653 3.40593Z",
  M: "M51.6354 5.02534V10.5651H47.8512V0.306278H51.6354V1.51682C52.173 0.63456 53.1242 0.0190307 54.4477 0.0190307C55.7918 0.0190307 56.7844 0.634561 57.3427 1.66044C58.0664 0.47042 59.3279 0.0190307 60.5686 0.0190307C62.9053 0.0190307 64.1667 1.55786 64.1667 3.95842V10.5651H60.3825V4.98431C60.3825 3.99946 59.9275 3.44548 59.1624 3.44548C58.3973 3.44548 57.901 4.01998 57.901 5.02534V10.5651H54.1168V4.98431C54.1168 3.99946 53.6619 3.44548 52.8968 3.44548C52.1317 3.44548 51.6354 4.01998 51.6354 5.02534Z",
};

// SVG coordinate system: origin top-left, y down
// We want: centered at origin, scaled to targetWidth mm
const svgWidth = 65;
const svgHeight = 11;
const targetWidth = 12; // mm
const scale = targetWidth / svgWidth;
const cx = svgWidth / 2;
const cy = svgHeight / 2;

function transformPoint(p: Point): Point {
  return {
    x: Math.round(((p.x - cx) * scale) * 100) / 100,
    y: Math.round(((p.y - cy) * scale) * 100) / 100,
  };
}

console.log("// ====== VIZCOM LOGO (12mm wide, centered at origin) ======");
console.log("// Generated from vizcom-logo.svg");
console.log("");

for (const [letter, d] of Object.entries(vizcomPaths)) {
  const paths = parseSVGPath(d);
  console.log(`    {/* ${letter} */}`);
  for (const path of paths) {
    const route = path.map(transformPoint);
    const routeStr = route.map(p => `{ x: pcbX + ${p.x}, y: pcbY + ${p.y} }`).join(", ");
    console.log(`    <silkscreenpath layer="bottom" route={[${routeStr}]} />`);
  }
}

// --- Telemetron Logo (3 overlapping squares + diagonals, from telemetron-logo.svg) ---
// SVG has rects at: (5,10,15x15), (12.5,17.5,15x15), (20,25,15x15) within viewBox 0 0 200 50
// Plus diagonal lines
// Scale to ~3.5mm wide icon (just the squares part, which spans from x=5 to x=35, y=10 to y=40)

console.log("");
console.log("// ====== TELEMETRON ICON (3.5mm, centered at origin) ======");
console.log("// Generated from telemetron-logo.svg");
console.log("");

const telScale = 3.5 / 30; // icon spans 30 SVG units (x: 5-35)
const telCx = 20; // center of icon in SVG space (5+35)/2
const telCy = 25; // center of icon in SVG space (10+40)/2

function telTransform(p: Point): Point {
  return {
    x: Math.round(((p.x - telCx) * telScale) * 100) / 100,
    y: Math.round(((p.y - telCy) * telScale) * 100) / 100,
  };
}

// Rectangle 1: (5,10) to (20,25)
const rect1 = [{ x: 5, y: 10 }, { x: 20, y: 10 }, { x: 20, y: 25 }, { x: 5, y: 25 }, { x: 5, y: 10 }];
// Rectangle 2: (12.5,17.5) to (27.5,32.5)
const rect2 = [{ x: 12.5, y: 17.5 }, { x: 27.5, y: 17.5 }, { x: 27.5, y: 32.5 }, { x: 12.5, y: 32.5 }, { x: 12.5, y: 17.5 }];
// Rectangle 3: (20,25) to (35,40)
const rect3 = [{ x: 20, y: 25 }, { x: 35, y: 25 }, { x: 35, y: 40 }, { x: 20, y: 40 }, { x: 20, y: 25 }];
// Diagonal 1: (12.5,17.5) to (20,25)
const diag1 = [{ x: 12.5, y: 17.5 }, { x: 20, y: 25 }];
// Diagonal 2: (20,25) to (27.5,32.5)
const diag2 = [{ x: 20, y: 25 }, { x: 27.5, y: 32.5 }];

for (const [name, pts] of [["Square 1", rect1], ["Square 2", rect2], ["Square 3", rect3], ["Diagonal 1", diag1], ["Diagonal 2", diag2]] as const) {
  const route = (pts as Point[]).map(telTransform);
  const routeStr = route.map(p => `{ x: pcbX + ${p.x}, y: pcbY + ${p.y} }`).join(", ");
  console.log(`    {/* ${name} */}`);
  console.log(`    <silkscreenpath layer="bottom" route={[${routeStr}]} />`);
}

// Also output the Telemetron wordmark "Telemetron" as silkscreentext
console.log("");
console.log('    <silkscreentext layer="bottom" text="Telemetron" pcbX={pcbX + 5} pcbY={pcbY} fontSize={1.2} />');
