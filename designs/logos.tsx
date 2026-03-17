/**
 * Logo silkscreen components for Hardware Craft Night PCBs
 * Generated from vizcom-logo.svg and telemetron-logo.svg
 */

// Vizcom wordmark (~12mm wide, centered at pcbX/pcbY on bottom silkscreen)
// Y-flipped so it reads correctly when pendant hangs from top
export const VizcomLogo = ({ pcbX = 0, pcbY = 0 }: { pcbX?: number; pcbY?: number }) => (
  <>
    {/* V */}
    <silkscreenpath layer="bottom" route={[
      { x: pcbX + 5.23, y: pcbY + 0.93 }, { x: pcbX + 6, y: pcbY + -0.96 },
      { x: pcbX + 5.26, y: pcbY + -0.96 }, { x: pcbX + 4.89, y: pcbY + 0.09 },
      { x: pcbX + 4.52, y: pcbY + -0.96 }, { x: pcbX + 3.81, y: pcbY + -0.96 },
      { x: pcbX + 4.58, y: pcbY + 0.93 }, { x: pcbX + 5.23, y: pcbY + 0.93 },
    ]} />
    {/* I */}
    <silkscreenpath layer="bottom" route={[
      { x: pcbX + 2.99, y: pcbY + 0.93 }, { x: pcbX + 3.68, y: pcbY + 0.93 },
      { x: pcbX + 3.68, y: pcbY + -0.96 }, { x: pcbX + 2.99, y: pcbY + -0.96 },
      { x: pcbX + 2.99, y: pcbY + 0.93 },
    ]} />
    {/* Z */}
    <silkscreenpath layer="bottom" route={[
      { x: pcbX + 1.07, y: pcbY + -0.96 }, { x: pcbX + 1.07, y: pcbY + -0.53 },
      { x: pcbX + 1.88, y: pcbY + 0.38 }, { x: pcbX + 1.06, y: pcbY + 0.38 },
      { x: pcbX + 1.06, y: pcbY + 0.93 }, { x: pcbX + 2.8, y: pcbY + 0.93 },
      { x: pcbX + 2.8, y: pcbY + 0.49 }, { x: pcbX + 1.99, y: pcbY + -0.41 },
      { x: pcbX + 2.75, y: pcbY + -0.41 }, { x: pcbX + 2.75, y: pcbY + -0.96 },
      { x: pcbX + 1.07, y: pcbY + -0.96 },
    ]} />
    {/* C */}
    <silkscreenpath layer="bottom" route={[
      { x: pcbX + 1, y: pcbY + -0.02 }, { x: pcbX + 0.98, y: pcbY + -0.22 },
      { x: pcbX + 0.93, y: pcbY + -0.42 }, { x: pcbX + 0.84, y: pcbY + -0.59 },
      { x: pcbX + 0.71, y: pcbY + -0.73 }, { x: pcbX + 0.56, y: pcbY + -0.85 },
      { x: pcbX + 0.39, y: pcbY + -0.94 }, { x: pcbX + 0.19, y: pcbY + -1 },
      { x: pcbX + -0.03, y: pcbY + -1.02 }, { x: pcbX + -0.2, y: pcbY + -1 },
      { x: pcbX + -0.37, y: pcbY + -0.96 }, { x: pcbX + -0.47, y: pcbY + -0.92 },
      { x: pcbX + -0.47, y: pcbY + -0.29 }, { x: pcbX + -0.35, y: pcbY + -0.35 },
      { x: pcbX + -0.22, y: pcbY + -0.39 }, { x: pcbX + -0.13, y: pcbY + -0.39 },
      { x: pcbX + 0.04, y: pcbY + -0.37 }, { x: pcbX + 0.17, y: pcbY + -0.29 },
      { x: pcbX + 0.26, y: pcbY + -0.17 }, { x: pcbX + 0.3, y: pcbY + -0.02 },
      { x: pcbX + 0.26, y: pcbY + 0.14 }, { x: pcbX + 0.18, y: pcbY + 0.26 },
      { x: pcbX + 0.04, y: pcbY + 0.34 }, { x: pcbX + -0.13, y: pcbY + 0.36 },
      { x: pcbX + -0.22, y: pcbY + 0.36 }, { x: pcbX + -0.35, y: pcbY + 0.32 },
      { x: pcbX + -0.47, y: pcbY + 0.25 }, { x: pcbX + -0.47, y: pcbY + 0.88 },
      { x: pcbX + -0.3, y: pcbY + 0.95 }, { x: pcbX + -0.13, y: pcbY + 0.98 },
      { x: pcbX + -0.02, y: pcbY + 0.98 }, { x: pcbX + 0.19, y: pcbY + 0.97 },
      { x: pcbX + 0.39, y: pcbY + 0.91 }, { x: pcbX + 0.56, y: pcbY + 0.83 },
      { x: pcbX + 0.71, y: pcbY + 0.71 }, { x: pcbX + 0.83, y: pcbY + 0.57 },
      { x: pcbX + 0.92, y: pcbY + 0.4 }, { x: pcbX + 0.98, y: pcbY + 0.2 },
      { x: pcbX + 1, y: pcbY + -0.02 },
    ]} />
    {/* O outer */}
    <silkscreenpath layer="bottom" route={[
      { x: pcbX + -1.66, y: pcbY + -1.02 }, { x: pcbX + -1.87, y: pcbY + -1 },
      { x: pcbX + -2.07, y: pcbY + -0.94 }, { x: pcbX + -2.25, y: pcbY + -0.85 },
      { x: pcbX + -2.41, y: pcbY + -0.73 }, { x: pcbX + -2.54, y: pcbY + -0.58 },
      { x: pcbX + -2.63, y: pcbY + -0.41 }, { x: pcbX + -2.69, y: pcbY + -0.22 },
      { x: pcbX + -2.71, y: pcbY + -0.02 }, { x: pcbX + -2.69, y: pcbY + 0.19 },
      { x: pcbX + -2.63, y: pcbY + 0.38 }, { x: pcbX + -2.54, y: pcbY + 0.55 },
      { x: pcbX + -2.41, y: pcbY + 0.7 }, { x: pcbX + -2.25, y: pcbY + 0.82 },
      { x: pcbX + -2.07, y: pcbY + 0.91 }, { x: pcbX + -1.87, y: pcbY + 0.97 },
      { x: pcbX + -1.66, y: pcbY + 0.98 }, { x: pcbX + -1.44, y: pcbY + 0.97 },
      { x: pcbX + -1.24, y: pcbY + 0.91 }, { x: pcbX + -1.06, y: pcbY + 0.82 },
      { x: pcbX + -0.9, y: pcbY + 0.7 }, { x: pcbX + -0.77, y: pcbY + 0.55 },
      { x: pcbX + -0.68, y: pcbY + 0.38 }, { x: pcbX + -0.62, y: pcbY + 0.19 },
      { x: pcbX + -0.6, y: pcbY + -0.02 }, { x: pcbX + -0.62, y: pcbY + -0.22 },
      { x: pcbX + -0.68, y: pcbY + -0.41 }, { x: pcbX + -0.77, y: pcbY + -0.58 },
      { x: pcbX + -0.9, y: pcbY + -0.73 }, { x: pcbX + -1.06, y: pcbY + -0.85 },
      { x: pcbX + -1.24, y: pcbY + -0.94 }, { x: pcbX + -1.44, y: pcbY + -1 },
      { x: pcbX + -1.66, y: pcbY + -1.02 },
    ]} />
    {/* O inner */}
    <silkscreenpath layer="bottom" route={[
      { x: pcbX + -1.66, y: pcbY + -0.39 }, { x: pcbX + -1.51, y: pcbY + -0.36 },
      { x: pcbX + -1.39, y: pcbY + -0.28 }, { x: pcbX + -1.31, y: pcbY + -0.16 },
      { x: pcbX + -1.28, y: pcbY + -0.02 }, { x: pcbX + -1.31, y: pcbY + 0.13 },
      { x: pcbX + -1.39, y: pcbY + 0.25 }, { x: pcbX + -1.51, y: pcbY + 0.33 },
      { x: pcbX + -1.66, y: pcbY + 0.36 }, { x: pcbX + -1.8, y: pcbY + 0.33 },
      { x: pcbX + -1.92, y: pcbY + 0.25 }, { x: pcbX + -2, y: pcbY + 0.13 },
      { x: pcbX + -2.03, y: pcbY + -0.02 }, { x: pcbX + -2, y: pcbY + -0.16 },
      { x: pcbX + -1.92, y: pcbY + -0.28 }, { x: pcbX + -1.8, y: pcbY + -0.36 },
      { x: pcbX + -1.66, y: pcbY + -0.39 },
    ]} />
    {/* M */}
    <silkscreenpath layer="bottom" route={[
      { x: pcbX + -3.53, y: pcbY + -0.09 }, { x: pcbX + -3.53, y: pcbY + 0.94 },
      { x: pcbX + -2.83, y: pcbY + 0.94 }, { x: pcbX + -2.83, y: pcbY + -0.96 },
      { x: pcbX + -3.53, y: pcbY + -0.96 }, { x: pcbX + -3.53, y: pcbY + -0.74 },
      { x: pcbX + -3.68, y: pcbY + -0.89 }, { x: pcbX + -3.88, y: pcbY + -0.99 },
      { x: pcbX + -4.05, y: pcbY + -1.01 }, { x: pcbX + -4.23, y: pcbY + -0.99 },
      { x: pcbX + -4.44, y: pcbY + -0.89 }, { x: pcbX + -4.59, y: pcbY + -0.71 },
      { x: pcbX + -4.77, y: pcbY + -0.9 }, { x: pcbX + -5.01, y: pcbY + -1 },
      { x: pcbX + -5.18, y: pcbY + -1.01 }, { x: pcbX + -5.47, y: pcbY + -0.96 },
      { x: pcbX + -5.68, y: pcbY + -0.81 }, { x: pcbX + -5.8, y: pcbY + -0.59 },
      { x: pcbX + -5.85, y: pcbY + -0.28 }, { x: pcbX + -5.85, y: pcbY + 0.94 },
      { x: pcbX + -5.15, y: pcbY + 0.94 }, { x: pcbX + -5.15, y: pcbY + -0.1 },
      { x: pcbX + -5.11, y: pcbY + -0.26 }, { x: pcbX + -5.02, y: pcbY + -0.36 },
      { x: pcbX + -4.92, y: pcbY + -0.38 }, { x: pcbX + -4.83, y: pcbY + -0.36 },
      { x: pcbX + -4.73, y: pcbY + -0.26 }, { x: pcbX + -4.69, y: pcbY + -0.09 },
      { x: pcbX + -4.69, y: pcbY + 0.94 }, { x: pcbX + -3.99, y: pcbY + 0.94 },
      { x: pcbX + -3.99, y: pcbY + -0.1 }, { x: pcbX + -3.96, y: pcbY + -0.26 },
      { x: pcbX + -3.86, y: pcbY + -0.36 }, { x: pcbX + -3.77, y: pcbY + -0.38 },
      { x: pcbX + -3.67, y: pcbY + -0.36 }, { x: pcbX + -3.57, y: pcbY + -0.26 },
      { x: pcbX + -3.53, y: pcbY + -0.09 },
    ]} />
  </>
)

// Telemetron icon (3 overlapping squares + diagonals, ~3.5mm, centered at pcbX/pcbY)
export const TelemetronIcon = ({ pcbX = 0, pcbY = 0 }: { pcbX?: number; pcbY?: number }) => (
  <>
    {/* Square 1 */}
    <silkscreenpath layer="bottom" route={[
      { x: pcbX + 1.75, y: pcbY + 1.75 }, { x: pcbX + 0, y: pcbY + 1.75 },
      { x: pcbX + 0, y: pcbY + 0 }, { x: pcbX + 1.75, y: pcbY + 0 },
      { x: pcbX + 1.75, y: pcbY + 1.75 },
    ]} />
    {/* Square 2 */}
    <silkscreenpath layer="bottom" route={[
      { x: pcbX + 0.87, y: pcbY + 0.87 }, { x: pcbX + -0.88, y: pcbY + 0.87 },
      { x: pcbX + -0.88, y: pcbY + -0.88 }, { x: pcbX + 0.87, y: pcbY + -0.88 },
      { x: pcbX + 0.87, y: pcbY + 0.87 },
    ]} />
    {/* Square 3 */}
    <silkscreenpath layer="bottom" route={[
      { x: pcbX + 0, y: pcbY + 0 }, { x: pcbX + -1.75, y: pcbY + 0 },
      { x: pcbX + -1.75, y: pcbY + -1.75 }, { x: pcbX + 0, y: pcbY + -1.75 },
      { x: pcbX + 0, y: pcbY + 0 },
    ]} />
    {/* Diagonal 1 */}
    <silkscreenpath layer="bottom" route={[
      { x: pcbX + 0.87, y: pcbY + 0.87 }, { x: pcbX + 0, y: pcbY + 0 },
    ]} />
    {/* Diagonal 2 */}
    <silkscreenpath layer="bottom" route={[
      { x: pcbX + 0, y: pcbY + 0 }, { x: pcbX + -0.88, y: pcbY + -0.88 },
    ]} />
  </>
)

// "Telemetron" text as manual silkscreen paths (~6mm wide, from SF system font, X-negated for bottom layer)
export const TelemetronText = ({ pcbX = 0, pcbY = 0 }: { pcbX?: number; pcbY?: number }) => (
  <>
    {/* T */}
    <silkscreenpath layer="bottom" route={[{ x: pcbX + 2.61, y: pcbY + 0.44 }, { x: pcbX + 2.72, y: pcbY + 0.44 }, { x: pcbX + 2.72, y: pcbY + -0.35 }, { x: pcbX + 3, y: pcbY + -0.35 }, { x: pcbX + 3, y: pcbY + -0.45 }, { x: pcbX + 2.32, y: pcbY + -0.45 }, { x: pcbX + 2.32, y: pcbY + -0.35 }, { x: pcbX + 2.61, y: pcbY + -0.35 }, { x: pcbX + 2.61, y: pcbY + 0.44 }]} />
    {/* e1 */}
    <silkscreenpath layer="bottom" route={[{ x: pcbX + 1.96, y: pcbY + 0.45 }, { x: pcbX + 2, y: pcbY + 0.45 }, { x: pcbX + 2.04, y: pcbY + 0.44 }, { x: pcbX + 2.08, y: pcbY + 0.43 }, { x: pcbX + 2.11, y: pcbY + 0.41 }, { x: pcbX + 2.15, y: pcbY + 0.39 }, { x: pcbX + 2.17, y: pcbY + 0.36 }, { x: pcbX + 2.2, y: pcbY + 0.33 }, { x: pcbX + 2.22, y: pcbY + 0.3 }, { x: pcbX + 2.23, y: pcbY + 0.26 }, { x: pcbX + 2.24, y: pcbY + 0.22 }, { x: pcbX + 2.25, y: pcbY + 0.17 }, { x: pcbX + 2.25, y: pcbY + 0.12 }, { x: pcbX + 2.25, y: pcbY + 0.07 }, { x: pcbX + 2.24, y: pcbY + 0.03 }, { x: pcbX + 2.23, y: pcbY + -0.02 }, { x: pcbX + 2.22, y: pcbY + -0.06 }, { x: pcbX + 2.2, y: pcbY + -0.09 }, { x: pcbX + 2.17, y: pcbY + -0.12 }, { x: pcbX + 2.15, y: pcbY + -0.15 }, { x: pcbX + 2.12, y: pcbY + -0.17 }, { x: pcbX + 2.08, y: pcbY + -0.19 }, { x: pcbX + 2.04, y: pcbY + -0.21 }, { x: pcbX + 2, y: pcbY + -0.21 }, { x: pcbX + 1.96, y: pcbY + -0.22 }, { x: pcbX + 1.92, y: pcbY + -0.21 }, { x: pcbX + 1.88, y: pcbY + -0.21 }, { x: pcbX + 1.84, y: pcbY + -0.19 }, { x: pcbX + 1.81, y: pcbY + -0.18 }, { x: pcbX + 1.78, y: pcbY + -0.15 }, { x: pcbX + 1.75, y: pcbY + -0.13 }, { x: pcbX + 1.73, y: pcbY + -0.1 }, { x: pcbX + 1.71, y: pcbY + -0.06 }, { x: pcbX + 1.7, y: pcbY + -0.02 }, { x: pcbX + 1.69, y: pcbY + 0.02 }, { x: pcbX + 1.68, y: pcbY + 0.06 }, { x: pcbX + 1.68, y: pcbY + 0.11 }, { x: pcbX + 1.68, y: pcbY + 0.15 }, { x: pcbX + 2.2, y: pcbY + 0.15 }, { x: pcbX + 2.2, y: pcbY + 0.06 }, { x: pcbX + 1.73, y: pcbY + 0.06 }, { x: pcbX + 1.79, y: pcbY + 0.1 }, { x: pcbX + 1.79, y: pcbY + 0.06 }, { x: pcbX + 1.8, y: pcbY + 0 }, { x: pcbX + 1.82, y: pcbY + -0.05 }, { x: pcbX + 1.85, y: pcbY + -0.08 }, { x: pcbX + 1.89, y: pcbY + -0.11 }, { x: pcbX + 1.94, y: pcbY + -0.12 }, { x: pcbX + 1.96, y: pcbY + -0.12 }, { x: pcbX + 1.99, y: pcbY + -0.12 }, { x: pcbX + 2.03, y: pcbY + -0.11 }, { x: pcbX + 2.06, y: pcbY + -0.1 }, { x: pcbX + 2.09, y: pcbY + -0.06 }, { x: pcbX + 2.12, y: pcbY + -0.02 }, { x: pcbX + 2.14, y: pcbY + 0.03 }, { x: pcbX + 2.14, y: pcbY + 0.1 }, { x: pcbX + 2.14, y: pcbY + 0.17 }, { x: pcbX + 2.13, y: pcbY + 0.23 }, { x: pcbX + 2.11, y: pcbY + 0.28 }, { x: pcbX + 2.09, y: pcbY + 0.3 }, { x: pcbX + 2.05, y: pcbY + 0.33 }, { x: pcbX + 2.01, y: pcbY + 0.35 }, { x: pcbX + 1.95, y: pcbY + 0.36 }, { x: pcbX + 1.91, y: pcbY + 0.36 }, { x: pcbX + 1.88, y: pcbY + 0.35 }, { x: pcbX + 1.85, y: pcbY + 0.33 }, { x: pcbX + 1.83, y: pcbY + 0.31 }, { x: pcbX + 1.81, y: pcbY + 0.29 }, { x: pcbX + 1.79, y: pcbY + 0.26 }, { x: pcbX + 1.69, y: pcbY + 0.26 }, { x: pcbX + 1.7, y: pcbY + 0.3 }, { x: pcbX + 1.72, y: pcbY + 0.34 }, { x: pcbX + 1.74, y: pcbY + 0.37 }, { x: pcbX + 1.78, y: pcbY + 0.4 }, { x: pcbX + 1.81, y: pcbY + 0.42 }, { x: pcbX + 1.86, y: pcbY + 0.44 }, { x: pcbX + 1.9, y: pcbY + 0.45 }, { x: pcbX + 1.96, y: pcbY + 0.45 }]} />
    {/* l */}
    <silkscreenpath layer="bottom" route={[{ x: pcbX + 1.46, y: pcbY + 0.44 }, { x: pcbX + 1.56, y: pcbY + 0.44 }, { x: pcbX + 1.56, y: pcbY + -0.45 }, { x: pcbX + 1.46, y: pcbY + -0.45 }, { x: pcbX + 1.46, y: pcbY + 0.44 }]} />
    {/* e2 */}
    <silkscreenpath layer="bottom" route={[{ x: pcbX + 1.04, y: pcbY + 0.45 }, { x: pcbX + 1.09, y: pcbY + 0.45 }, { x: pcbX + 1.13, y: pcbY + 0.44 }, { x: pcbX + 1.17, y: pcbY + 0.43 }, { x: pcbX + 1.2, y: pcbY + 0.41 }, { x: pcbX + 1.23, y: pcbY + 0.39 }, { x: pcbX + 1.26, y: pcbY + 0.36 }, { x: pcbX + 1.29, y: pcbY + 0.33 }, { x: pcbX + 1.31, y: pcbY + 0.3 }, { x: pcbX + 1.32, y: pcbY + 0.26 }, { x: pcbX + 1.33, y: pcbY + 0.22 }, { x: pcbX + 1.34, y: pcbY + 0.17 }, { x: pcbX + 1.34, y: pcbY + 0.12 }, { x: pcbX + 1.34, y: pcbY + 0.07 }, { x: pcbX + 1.33, y: pcbY + 0.03 }, { x: pcbX + 1.32, y: pcbY + -0.02 }, { x: pcbX + 1.31, y: pcbY + -0.06 }, { x: pcbX + 1.29, y: pcbY + -0.09 }, { x: pcbX + 1.26, y: pcbY + -0.12 }, { x: pcbX + 1.24, y: pcbY + -0.15 }, { x: pcbX + 1.2, y: pcbY + -0.17 }, { x: pcbX + 1.17, y: pcbY + -0.19 }, { x: pcbX + 1.13, y: pcbY + -0.21 }, { x: pcbX + 1.09, y: pcbY + -0.21 }, { x: pcbX + 1.05, y: pcbY + -0.22 }, { x: pcbX + 1.01, y: pcbY + -0.21 }, { x: pcbX + 0.97, y: pcbY + -0.21 }, { x: pcbX + 0.93, y: pcbY + -0.19 }, { x: pcbX + 0.9, y: pcbY + -0.18 }, { x: pcbX + 0.87, y: pcbY + -0.15 }, { x: pcbX + 0.84, y: pcbY + -0.13 }, { x: pcbX + 0.82, y: pcbY + -0.1 }, { x: pcbX + 0.8, y: pcbY + -0.06 }, { x: pcbX + 0.79, y: pcbY + -0.02 }, { x: pcbX + 0.78, y: pcbY + 0.02 }, { x: pcbX + 0.77, y: pcbY + 0.06 }, { x: pcbX + 0.77, y: pcbY + 0.11 }, { x: pcbX + 0.77, y: pcbY + 0.15 }, { x: pcbX + 1.29, y: pcbY + 0.15 }, { x: pcbX + 1.29, y: pcbY + 0.06 }, { x: pcbX + 0.82, y: pcbY + 0.06 }, { x: pcbX + 0.87, y: pcbY + 0.1 }, { x: pcbX + 0.88, y: pcbY + 0.06 }, { x: pcbX + 0.89, y: pcbY + 0 }, { x: pcbX + 0.91, y: pcbY + -0.05 }, { x: pcbX + 0.94, y: pcbY + -0.08 }, { x: pcbX + 0.98, y: pcbY + -0.11 }, { x: pcbX + 1.03, y: pcbY + -0.12 }, { x: pcbX + 1.05, y: pcbY + -0.12 }, { x: pcbX + 1.08, y: pcbY + -0.12 }, { x: pcbX + 1.12, y: pcbY + -0.11 }, { x: pcbX + 1.16, y: pcbY + -0.08 }, { x: pcbX + 1.2, y: pcbY + -0.04 }, { x: pcbX + 1.22, y: pcbY + 0 }, { x: pcbX + 1.23, y: pcbY + 0.07 }, { x: pcbX + 1.23, y: pcbY + 0.1 }, { x: pcbX + 1.23, y: pcbY + 0.17 }, { x: pcbX + 1.22, y: pcbY + 0.23 }, { x: pcbX + 1.2, y: pcbY + 0.28 }, { x: pcbX + 1.18, y: pcbY + 0.3 }, { x: pcbX + 1.14, y: pcbY + 0.33 }, { x: pcbX + 1.1, y: pcbY + 0.35 }, { x: pcbX + 1.04, y: pcbY + 0.36 }, { x: pcbX + 1, y: pcbY + 0.36 }, { x: pcbX + 0.97, y: pcbY + 0.35 }, { x: pcbX + 0.94, y: pcbY + 0.33 }, { x: pcbX + 0.91, y: pcbY + 0.31 }, { x: pcbX + 0.9, y: pcbY + 0.29 }, { x: pcbX + 0.88, y: pcbY + 0.26 }, { x: pcbX + 0.77, y: pcbY + 0.26 }, { x: pcbX + 0.79, y: pcbY + 0.3 }, { x: pcbX + 0.81, y: pcbY + 0.34 }, { x: pcbX + 0.83, y: pcbY + 0.37 }, { x: pcbX + 0.86, y: pcbY + 0.4 }, { x: pcbX + 0.9, y: pcbY + 0.42 }, { x: pcbX + 0.95, y: pcbY + 0.44 }, { x: pcbX + 0.99, y: pcbY + 0.45 }, { x: pcbX + 1.04, y: pcbY + 0.45 }]} />
    {/* m */}
    <silkscreenpath layer="bottom" route={[{ x: pcbX + 0.55, y: pcbY + 0.44 }, { x: pcbX + 0.66, y: pcbY + 0.44 }, { x: pcbX + 0.66, y: pcbY + -0.2 }, { x: pcbX + 0.55, y: pcbY + -0.2 }, { x: pcbX + 0.55, y: pcbY + -0.11 }, { x: pcbX + 0.54, y: pcbY + -0.13 }, { x: pcbX + 0.52, y: pcbY + -0.15 }, { x: pcbX + 0.5, y: pcbY + -0.17 }, { x: pcbX + 0.48, y: pcbY + -0.19 }, { x: pcbX + 0.45, y: pcbY + -0.2 }, { x: pcbX + 0.43, y: pcbY + -0.21 }, { x: pcbX + 0.4, y: pcbY + -0.21 }, { x: pcbX + 0.37, y: pcbY + -0.22 }, { x: pcbX + 0.35, y: pcbY + -0.22 }, { x: pcbX + 0.33, y: pcbY + -0.21 }, { x: pcbX + 0.29, y: pcbY + -0.2 }, { x: pcbX + 0.26, y: pcbY + -0.18 }, { x: pcbX + 0.24, y: pcbY + -0.17 }, { x: pcbX + 0.22, y: pcbY + -0.15 }, { x: pcbX + 0.2, y: pcbY + -0.11 }, { x: pcbX + 0.19, y: pcbY + -0.09 }, { x: pcbX + 0.18, y: pcbY + -0.11 }, { x: pcbX + 0.15, y: pcbY + -0.14 }, { x: pcbX + 0.12, y: pcbY + -0.17 }, { x: pcbX + 0.09, y: pcbY + -0.19 }, { x: pcbX + 0.05, y: pcbY + -0.21 }, { x: pcbX + 0.01, y: pcbY + -0.22 }, { x: pcbX + -0.02, y: pcbY + -0.22 }, { x: pcbX + -0.05, y: pcbY + -0.21 }, { x: pcbX + -0.1, y: pcbY + -0.2 }, { x: pcbX + -0.15, y: pcbY + -0.18 }, { x: pcbX + -0.19, y: pcbY + -0.14 }, { x: pcbX + -0.21, y: pcbY + -0.09 }, { x: pcbX + -0.23, y: pcbY + -0.04 }, { x: pcbX + -0.23, y: pcbY + 0 }, { x: pcbX + -0.23, y: pcbY + 0.44 }, { x: pcbX + -0.12, y: pcbY + 0.44 }, { x: pcbX + -0.12, y: pcbY + 0.02 }, { x: pcbX + -0.11, y: pcbY + -0.02 }, { x: pcbX + -0.1, y: pcbY + -0.06 }, { x: pcbX + -0.08, y: pcbY + -0.08 }, { x: pcbX + -0.06, y: pcbY + -0.1 }, { x: pcbX + -0.02, y: pcbY + -0.12 }, { x: pcbX + 0.02, y: pcbY + -0.12 }, { x: pcbX + 0.06, y: pcbY + -0.12 }, { x: pcbX + 0.09, y: pcbY + -0.1 }, { x: pcbX + 0.12, y: pcbY + -0.08 }, { x: pcbX + 0.14, y: pcbY + -0.05 }, { x: pcbX + 0.16, y: pcbY + -0.01 }, { x: pcbX + 0.16, y: pcbY + 0.03 }, { x: pcbX + 0.16, y: pcbY + 0.44 }, { x: pcbX + 0.27, y: pcbY + 0.44 }, { x: pcbX + 0.27, y: pcbY + 0.01 }, { x: pcbX + 0.28, y: pcbY + -0.04 }, { x: pcbX + 0.3, y: pcbY + -0.07 }, { x: pcbX + 0.32, y: pcbY + -0.1 }, { x: pcbX + 0.35, y: pcbY + -0.11 }, { x: pcbX + 0.38, y: pcbY + -0.12 }, { x: pcbX + 0.4, y: pcbY + -0.12 }, { x: pcbX + 0.44, y: pcbY + -0.12 }, { x: pcbX + 0.48, y: pcbY + -0.1 }, { x: pcbX + 0.51, y: pcbY + -0.08 }, { x: pcbX + 0.53, y: pcbY + -0.04 }, { x: pcbX + 0.55, y: pcbY + -0.01 }, { x: pcbX + 0.55, y: pcbY + 0.04 }, { x: pcbX + 0.55, y: pcbY + 0.44 }]} />
    {/* e3 */}
    <silkscreenpath layer="bottom" route={[{ x: pcbX + -0.63, y: pcbY + 0.45 }, { x: pcbX + -0.59, y: pcbY + 0.45 }, { x: pcbX + -0.54, y: pcbY + 0.44 }, { x: pcbX + -0.51, y: pcbY + 0.43 }, { x: pcbX + -0.47, y: pcbY + 0.41 }, { x: pcbX + -0.44, y: pcbY + 0.39 }, { x: pcbX + -0.41, y: pcbY + 0.36 }, { x: pcbX + -0.39, y: pcbY + 0.33 }, { x: pcbX + -0.37, y: pcbY + 0.3 }, { x: pcbX + -0.35, y: pcbY + 0.26 }, { x: pcbX + -0.34, y: pcbY + 0.22 }, { x: pcbX + -0.33, y: pcbY + 0.17 }, { x: pcbX + -0.33, y: pcbY + 0.12 }, { x: pcbX + -0.33, y: pcbY + 0.07 }, { x: pcbX + -0.34, y: pcbY + 0.03 }, { x: pcbX + -0.35, y: pcbY + -0.02 }, { x: pcbX + -0.37, y: pcbY + -0.06 }, { x: pcbX + -0.39, y: pcbY + -0.09 }, { x: pcbX + -0.41, y: pcbY + -0.12 }, { x: pcbX + -0.44, y: pcbY + -0.15 }, { x: pcbX + -0.47, y: pcbY + -0.17 }, { x: pcbX + -0.5, y: pcbY + -0.19 }, { x: pcbX + -0.54, y: pcbY + -0.21 }, { x: pcbX + -0.58, y: pcbY + -0.21 }, { x: pcbX + -0.62, y: pcbY + -0.22 }, { x: pcbX + -0.67, y: pcbY + -0.21 }, { x: pcbX + -0.71, y: pcbY + -0.21 }, { x: pcbX + -0.74, y: pcbY + -0.19 }, { x: pcbX + -0.78, y: pcbY + -0.18 }, { x: pcbX + -0.81, y: pcbY + -0.15 }, { x: pcbX + -0.83, y: pcbY + -0.13 }, { x: pcbX + -0.85, y: pcbY + -0.1 }, { x: pcbX + -0.87, y: pcbY + -0.06 }, { x: pcbX + -0.89, y: pcbY + -0.02 }, { x: pcbX + -0.9, y: pcbY + 0.02 }, { x: pcbX + -0.91, y: pcbY + 0.06 }, { x: pcbX + -0.91, y: pcbY + 0.11 }, { x: pcbX + -0.91, y: pcbY + 0.15 }, { x: pcbX + -0.39, y: pcbY + 0.15 }, { x: pcbX + -0.39, y: pcbY + 0.06 }, { x: pcbX + -0.85, y: pcbY + 0.06 }, { x: pcbX + -0.8, y: pcbY + 0.1 }, { x: pcbX + -0.8, y: pcbY + 0.06 }, { x: pcbX + -0.79, y: pcbY + 0 }, { x: pcbX + -0.76, y: pcbY + -0.05 }, { x: pcbX + -0.73, y: pcbY + -0.08 }, { x: pcbX + -0.69, y: pcbY + -0.11 }, { x: pcbX + -0.65, y: pcbY + -0.12 }, { x: pcbX + -0.62, y: pcbY + -0.12 }, { x: pcbX + -0.6, y: pcbY + -0.12 }, { x: pcbX + -0.55, y: pcbY + -0.11 }, { x: pcbX + -0.51, y: pcbY + -0.08 }, { x: pcbX + -0.48, y: pcbY + -0.04 }, { x: pcbX + -0.46, y: pcbY + 0 }, { x: pcbX + -0.44, y: pcbY + 0.07 }, { x: pcbX + -0.44, y: pcbY + 0.1 }, { x: pcbX + -0.44, y: pcbY + 0.17 }, { x: pcbX + -0.45, y: pcbY + 0.23 }, { x: pcbX + -0.48, y: pcbY + 0.28 }, { x: pcbX + -0.49, y: pcbY + 0.3 }, { x: pcbX + -0.53, y: pcbY + 0.33 }, { x: pcbX + -0.55, y: pcbY + 0.34 }, { x: pcbX + -0.6, y: pcbY + 0.36 }, { x: pcbX + -0.63, y: pcbY + 0.36 }, { x: pcbX + -0.67, y: pcbY + 0.36 }, { x: pcbX + -0.71, y: pcbY + 0.35 }, { x: pcbX + -0.74, y: pcbY + 0.33 }, { x: pcbX + -0.76, y: pcbY + 0.31 }, { x: pcbX + -0.78, y: pcbY + 0.29 }, { x: pcbX + -0.79, y: pcbY + 0.26 }, { x: pcbX + -0.9, y: pcbY + 0.26 }, { x: pcbX + -0.89, y: pcbY + 0.3 }, { x: pcbX + -0.87, y: pcbY + 0.34 }, { x: pcbX + -0.84, y: pcbY + 0.37 }, { x: pcbX + -0.81, y: pcbY + 0.4 }, { x: pcbX + -0.77, y: pcbY + 0.42 }, { x: pcbX + -0.73, y: pcbY + 0.44 }, { x: pcbX + -0.68, y: pcbY + 0.45 }, { x: pcbX + -0.63, y: pcbY + 0.45 }]} />
    {/* t */}
    <silkscreenpath layer="bottom" route={[{ x: pcbX + -1.23, y: pcbY + 0.45 }, { x: pcbX + -1.18, y: pcbY + 0.45 }, { x: pcbX + -1.15, y: pcbY + 0.44 }, { x: pcbX + -1.12, y: pcbY + 0.43 }, { x: pcbX + -1.09, y: pcbY + 0.41 }, { x: pcbX + -1.07, y: pcbY + 0.39 }, { x: pcbX + -1.06, y: pcbY + 0.36 }, { x: pcbX + -1.05, y: pcbY + 0.32 }, { x: pcbX + -1.05, y: pcbY + 0.28 }, { x: pcbX + -1.05, y: pcbY + -0.11 }, { x: pcbX + -0.95, y: pcbY + -0.11 }, { x: pcbX + -0.95, y: pcbY + -0.2 }, { x: pcbX + -1.05, y: pcbY + -0.2 }, { x: pcbX + -1.05, y: pcbY + -0.38 }, { x: pcbX + -1.16, y: pcbY + -0.38 }, { x: pcbX + -1.16, y: pcbY + -0.2 }, { x: pcbX + -1.28, y: pcbY + -0.2 }, { x: pcbX + -1.28, y: pcbY + -0.11 }, { x: pcbX + -1.16, y: pcbY + -0.11 }, { x: pcbX + -1.16, y: pcbY + 0.28 }, { x: pcbX + -1.17, y: pcbY + 0.32 }, { x: pcbX + -1.18, y: pcbY + 0.35 }, { x: pcbX + -1.21, y: pcbY + 0.36 }, { x: pcbX + -1.23, y: pcbY + 0.36 }, { x: pcbX + -1.25, y: pcbY + 0.37 }, { x: pcbX + -1.28, y: pcbY + 0.36 }, { x: pcbX + -1.28, y: pcbY + 0.45 }, { x: pcbX + -1.27, y: pcbY + 0.45 }, { x: pcbX + -1.25, y: pcbY + 0.45 }, { x: pcbX + -1.23, y: pcbY + 0.45 }]} />
    {/* r */}
    <silkscreenpath layer="bottom" route={[{ x: pcbX + -1.51, y: pcbY + 0.44 }, { x: pcbX + -1.4, y: pcbY + 0.44 }, { x: pcbX + -1.4, y: pcbY + -0.2 }, { x: pcbX + -1.51, y: pcbY + -0.2 }, { x: pcbX + -1.51, y: pcbY + -0.09 }, { x: pcbX + -1.52, y: pcbY + -0.12 }, { x: pcbX + -1.55, y: pcbY + -0.17 }, { x: pcbX + -1.59, y: pcbY + -0.2 }, { x: pcbX + -1.63, y: pcbY + -0.21 }, { x: pcbX + -1.66, y: pcbY + -0.22 }, { x: pcbX + -1.68, y: pcbY + -0.22 }, { x: pcbX + -1.7, y: pcbY + -0.21 }, { x: pcbX + -1.7, y: pcbY + -0.11 }, { x: pcbX + -1.68, y: pcbY + -0.11 }, { x: pcbX + -1.66, y: pcbY + -0.11 }, { x: pcbX + -1.63, y: pcbY + -0.11 }, { x: pcbX + -1.59, y: pcbY + -0.1 }, { x: pcbX + -1.56, y: pcbY + -0.08 }, { x: pcbX + -1.53, y: pcbY + -0.06 }, { x: pcbX + -1.52, y: pcbY + -0.02 }, { x: pcbX + -1.51, y: pcbY + 0.02 }, { x: pcbX + -1.51, y: pcbY + 0.04 }, { x: pcbX + -1.51, y: pcbY + 0.44 }]} />
    {/* o */}
    <silkscreenpath layer="bottom" route={[{ x: pcbX + -2.06, y: pcbY + 0.45 }, { x: pcbX + -2.02, y: pcbY + 0.45 }, { x: pcbX + -1.98, y: pcbY + 0.44 }, { x: pcbX + -1.94, y: pcbY + 0.43 }, { x: pcbX + -1.9, y: pcbY + 0.41 }, { x: pcbX + -1.87, y: pcbY + 0.39 }, { x: pcbX + -1.84, y: pcbY + 0.36 }, { x: pcbX + -1.82, y: pcbY + 0.33 }, { x: pcbX + -1.8, y: pcbY + 0.3 }, { x: pcbX + -1.78, y: pcbY + 0.26 }, { x: pcbX + -1.77, y: pcbY + 0.21 }, { x: pcbX + -1.76, y: pcbY + 0.17 }, { x: pcbX + -1.76, y: pcbY + 0.12 }, { x: pcbX + -1.76, y: pcbY + 0.07 }, { x: pcbX + -1.77, y: pcbY + 0.02 }, { x: pcbX + -1.78, y: pcbY + -0.02 }, { x: pcbX + -1.8, y: pcbY + -0.06 }, { x: pcbX + -1.82, y: pcbY + -0.1 }, { x: pcbX + -1.84, y: pcbY + -0.13 }, { x: pcbX + -1.87, y: pcbY + -0.15 }, { x: pcbX + -1.9, y: pcbY + -0.18 }, { x: pcbX + -1.94, y: pcbY + -0.19 }, { x: pcbX + -1.98, y: pcbY + -0.21 }, { x: pcbX + -2.02, y: pcbY + -0.21 }, { x: pcbX + -2.06, y: pcbY + -0.22 }, { x: pcbX + -2.1, y: pcbY + -0.21 }, { x: pcbX + -2.14, y: pcbY + -0.21 }, { x: pcbX + -2.18, y: pcbY + -0.19 }, { x: pcbX + -2.22, y: pcbY + -0.18 }, { x: pcbX + -2.25, y: pcbY + -0.15 }, { x: pcbX + -2.28, y: pcbY + -0.13 }, { x: pcbX + -2.3, y: pcbY + -0.1 }, { x: pcbX + -2.32, y: pcbY + -0.06 }, { x: pcbX + -2.34, y: pcbY + -0.02 }, { x: pcbX + -2.35, y: pcbY + 0.02 }, { x: pcbX + -2.36, y: pcbY + 0.07 }, { x: pcbX + -2.36, y: pcbY + 0.12 }, { x: pcbX + -2.36, y: pcbY + 0.17 }, { x: pcbX + -2.35, y: pcbY + 0.22 }, { x: pcbX + -2.34, y: pcbY + 0.26 }, { x: pcbX + -2.32, y: pcbY + 0.3 }, { x: pcbX + -2.3, y: pcbY + 0.33 }, { x: pcbX + -2.28, y: pcbY + 0.36 }, { x: pcbX + -2.25, y: pcbY + 0.39 }, { x: pcbX + -2.22, y: pcbY + 0.41 }, { x: pcbX + -2.18, y: pcbY + 0.43 }, { x: pcbX + -2.14, y: pcbY + 0.44 }, { x: pcbX + -2.1, y: pcbY + 0.45 }, { x: pcbX + -2.06, y: pcbY + 0.45 }]} />
    {/* o inner */}
    <silkscreenpath layer="bottom" route={[{ x: pcbX + -2.06, y: pcbY + 0.36 }, { x: pcbX + -2.09, y: pcbY + 0.36 }, { x: pcbX + -2.14, y: pcbY + 0.34 }, { x: pcbX + -2.18, y: pcbY + 0.31 }, { x: pcbX + -2.21, y: pcbY + 0.27 }, { x: pcbX + -2.23, y: pcbY + 0.22 }, { x: pcbX + -2.25, y: pcbY + 0.16 }, { x: pcbX + -2.25, y: pcbY + 0.12 }, { x: pcbX + -2.25, y: pcbY + 0.08 }, { x: pcbX + -2.23, y: pcbY + 0.02 }, { x: pcbX + -2.21, y: pcbY + -0.04 }, { x: pcbX + -2.18, y: pcbY + -0.08 }, { x: pcbX + -2.14, y: pcbY + -0.11 }, { x: pcbX + -2.09, y: pcbY + -0.12 }, { x: pcbX + -2.06, y: pcbY + -0.12 }, { x: pcbX + -2.03, y: pcbY + -0.12 }, { x: pcbX + -1.98, y: pcbY + -0.1 }, { x: pcbX + -1.94, y: pcbY + -0.08 }, { x: pcbX + -1.91, y: pcbY + -0.04 }, { x: pcbX + -1.88, y: pcbY + 0.02 }, { x: pcbX + -1.87, y: pcbY + 0.08 }, { x: pcbX + -1.87, y: pcbY + 0.12 }, { x: pcbX + -1.87, y: pcbY + 0.16 }, { x: pcbX + -1.88, y: pcbY + 0.22 }, { x: pcbX + -1.91, y: pcbY + 0.27 }, { x: pcbX + -1.94, y: pcbY + 0.31 }, { x: pcbX + -1.98, y: pcbY + 0.34 }, { x: pcbX + -2.03, y: pcbY + 0.36 }, { x: pcbX + -2.06, y: pcbY + 0.36 }]} />
    {/* n */}
    <silkscreenpath layer="bottom" route={[{ x: pcbX + -2.57, y: pcbY + 0.44 }, { x: pcbX + -2.47, y: pcbY + 0.44 }, { x: pcbX + -2.47, y: pcbY + -0.2 }, { x: pcbX + -2.57, y: pcbY + -0.2 }, { x: pcbX + -2.57, y: pcbY + -0.11 }, { x: pcbX + -2.59, y: pcbY + -0.13 }, { x: pcbX + -2.63, y: pcbY + -0.17 }, { x: pcbX + -2.68, y: pcbY + -0.2 }, { x: pcbX + -2.74, y: pcbY + -0.21 }, { x: pcbX + -2.78, y: pcbY + -0.22 }, { x: pcbX + -2.83, y: pcbY + -0.21 }, { x: pcbX + -2.91, y: pcbY + -0.18 }, { x: pcbX + -2.97, y: pcbY + -0.12 }, { x: pcbX + -3, y: pcbY + -0.03 }, { x: pcbX + -3, y: pcbY + 0.02 }, { x: pcbX + -3, y: pcbY + 0.44 }, { x: pcbX + -2.89, y: pcbY + 0.44 }, { x: pcbX + -2.89, y: pcbY + 0.04 }, { x: pcbX + -2.88, y: pcbY + -0.03 }, { x: pcbX + -2.85, y: pcbY + -0.08 }, { x: pcbX + -2.81, y: pcbY + -0.11 }, { x: pcbX + -2.78, y: pcbY + -0.12 }, { x: pcbX + -2.74, y: pcbY + -0.12 }, { x: pcbX + -2.7, y: pcbY + -0.12 }, { x: pcbX + -2.65, y: pcbY + -0.1 }, { x: pcbX + -2.62, y: pcbY + -0.07 }, { x: pcbX + -2.6, y: pcbY + -0.03 }, { x: pcbX + -2.58, y: pcbY + 0.01 }, { x: pcbX + -2.57, y: pcbY + 0.06 }, { x: pcbX + -2.57, y: pcbY + 0.44 }]} />
  </>
)


// ====== FRONT LAYER VERSIONS ======

export const VizcomLogoFront = ({ pcbX = 0, pcbY = 0 }: { pcbX?: number; pcbY?: number }) => (
  <>
    {/* V */}
    <silkscreenpath layer="top" route={[
      { x: pcbX + -5.23, y: pcbY + 0.93 }, { x: pcbX + -6, y: pcbY + -0.96 },
      { x: pcbX + -5.26, y: pcbY + -0.96 }, { x: pcbX + -4.89, y: pcbY + 0.09 },
      { x: pcbX + -4.52, y: pcbY + -0.96 }, { x: pcbX + -3.81, y: pcbY + -0.96 },
      { x: pcbX + -4.58, y: pcbY + 0.93 }, { x: pcbX + -5.23, y: pcbY + 0.93 },
    ]} />
    {/* I */}
    <silkscreenpath layer="top" route={[
      { x: pcbX + -2.99, y: pcbY + 0.93 }, { x: pcbX + -3.68, y: pcbY + 0.93 },
      { x: pcbX + -3.68, y: pcbY + -0.96 }, { x: pcbX + -2.99, y: pcbY + -0.96 },
      { x: pcbX + -2.99, y: pcbY + 0.93 },
    ]} />
    {/* Z */}
    <silkscreenpath layer="top" route={[
      { x: pcbX + -1.07, y: pcbY + -0.96 }, { x: pcbX + -1.07, y: pcbY + -0.53 },
      { x: pcbX + -1.88, y: pcbY + 0.38 }, { x: pcbX + -1.06, y: pcbY + 0.38 },
      { x: pcbX + -1.06, y: pcbY + 0.93 }, { x: pcbX + -2.8, y: pcbY + 0.93 },
      { x: pcbX + -2.8, y: pcbY + 0.49 }, { x: pcbX + -1.99, y: pcbY + -0.41 },
      { x: pcbX + -2.75, y: pcbY + -0.41 }, { x: pcbX + -2.75, y: pcbY + -0.96 },
      { x: pcbX + -1.07, y: pcbY + -0.96 },
    ]} />
    {/* C */}
    <silkscreenpath layer="top" route={[
      { x: pcbX + -1, y: pcbY + -0.02 }, { x: pcbX + -0.98, y: pcbY + -0.22 },
      { x: pcbX + -0.93, y: pcbY + -0.42 }, { x: pcbX + -0.84, y: pcbY + -0.59 },
      { x: pcbX + -0.71, y: pcbY + -0.73 }, { x: pcbX + -0.56, y: pcbY + -0.85 },
      { x: pcbX + -0.39, y: pcbY + -0.94 }, { x: pcbX + -0.19, y: pcbY + -1 },
      { x: pcbX + 0.03, y: pcbY + -1.02 }, { x: pcbX + 0.2, y: pcbY + -1 },
      { x: pcbX + 0.37, y: pcbY + -0.96 }, { x: pcbX + 0.47, y: pcbY + -0.92 },
      { x: pcbX + 0.47, y: pcbY + -0.29 }, { x: pcbX + 0.35, y: pcbY + -0.35 },
      { x: pcbX + 0.22, y: pcbY + -0.39 }, { x: pcbX + 0.13, y: pcbY + -0.39 },
      { x: pcbX + -0.04, y: pcbY + -0.37 }, { x: pcbX + -0.17, y: pcbY + -0.29 },
      { x: pcbX + -0.26, y: pcbY + -0.17 }, { x: pcbX + -0.3, y: pcbY + -0.02 },
      { x: pcbX + -0.26, y: pcbY + 0.14 }, { x: pcbX + -0.18, y: pcbY + 0.26 },
      { x: pcbX + -0.04, y: pcbY + 0.34 }, { x: pcbX + 0.13, y: pcbY + 0.36 },
      { x: pcbX + 0.22, y: pcbY + 0.36 }, { x: pcbX + 0.35, y: pcbY + 0.32 },
      { x: pcbX + 0.47, y: pcbY + 0.25 }, { x: pcbX + 0.47, y: pcbY + 0.88 },
      { x: pcbX + 0.3, y: pcbY + 0.95 }, { x: pcbX + 0.13, y: pcbY + 0.98 },
      { x: pcbX + 0.02, y: pcbY + 0.98 }, { x: pcbX + -0.19, y: pcbY + 0.97 },
      { x: pcbX + -0.39, y: pcbY + 0.91 }, { x: pcbX + -0.56, y: pcbY + 0.83 },
      { x: pcbX + -0.71, y: pcbY + 0.71 }, { x: pcbX + -0.83, y: pcbY + 0.57 },
      { x: pcbX + -0.92, y: pcbY + 0.4 }, { x: pcbX + -0.98, y: pcbY + 0.2 },
      { x: pcbX + -1, y: pcbY + -0.02 },
    ]} />
    {/* O outer */}
    <silkscreenpath layer="top" route={[
      { x: pcbX + 1.66, y: pcbY + -1.02 }, { x: pcbX + 1.87, y: pcbY + -1 },
      { x: pcbX + 2.07, y: pcbY + -0.94 }, { x: pcbX + 2.25, y: pcbY + -0.85 },
      { x: pcbX + 2.41, y: pcbY + -0.73 }, { x: pcbX + 2.54, y: pcbY + -0.58 },
      { x: pcbX + 2.63, y: pcbY + -0.41 }, { x: pcbX + 2.69, y: pcbY + -0.22 },
      { x: pcbX + 2.71, y: pcbY + -0.02 }, { x: pcbX + 2.69, y: pcbY + 0.19 },
      { x: pcbX + 2.63, y: pcbY + 0.38 }, { x: pcbX + 2.54, y: pcbY + 0.55 },
      { x: pcbX + 2.41, y: pcbY + 0.7 }, { x: pcbX + 2.25, y: pcbY + 0.82 },
      { x: pcbX + 2.07, y: pcbY + 0.91 }, { x: pcbX + 1.87, y: pcbY + 0.97 },
      { x: pcbX + 1.66, y: pcbY + 0.98 }, { x: pcbX + 1.44, y: pcbY + 0.97 },
      { x: pcbX + 1.24, y: pcbY + 0.91 }, { x: pcbX + 1.06, y: pcbY + 0.82 },
      { x: pcbX + 0.9, y: pcbY + 0.7 }, { x: pcbX + 0.77, y: pcbY + 0.55 },
      { x: pcbX + 0.68, y: pcbY + 0.38 }, { x: pcbX + 0.62, y: pcbY + 0.19 },
      { x: pcbX + 0.6, y: pcbY + -0.02 }, { x: pcbX + 0.62, y: pcbY + -0.22 },
      { x: pcbX + 0.68, y: pcbY + -0.41 }, { x: pcbX + 0.77, y: pcbY + -0.58 },
      { x: pcbX + 0.9, y: pcbY + -0.73 }, { x: pcbX + 1.06, y: pcbY + -0.85 },
      { x: pcbX + 1.24, y: pcbY + -0.94 }, { x: pcbX + 1.44, y: pcbY + -1 },
      { x: pcbX + 1.66, y: pcbY + -1.02 },
    ]} />
    {/* O inner */}
    <silkscreenpath layer="top" route={[
      { x: pcbX + 1.66, y: pcbY + -0.39 }, { x: pcbX + 1.51, y: pcbY + -0.36 },
      { x: pcbX + 1.39, y: pcbY + -0.28 }, { x: pcbX + 1.31, y: pcbY + -0.16 },
      { x: pcbX + 1.28, y: pcbY + -0.02 }, { x: pcbX + 1.31, y: pcbY + 0.13 },
      { x: pcbX + 1.39, y: pcbY + 0.25 }, { x: pcbX + 1.51, y: pcbY + 0.33 },
      { x: pcbX + 1.66, y: pcbY + 0.36 }, { x: pcbX + 1.8, y: pcbY + 0.33 },
      { x: pcbX + 1.92, y: pcbY + 0.25 }, { x: pcbX + 2, y: pcbY + 0.13 },
      { x: pcbX + 2.03, y: pcbY + -0.02 }, { x: pcbX + 2, y: pcbY + -0.16 },
      { x: pcbX + 1.92, y: pcbY + -0.28 }, { x: pcbX + 1.8, y: pcbY + -0.36 },
      { x: pcbX + 1.66, y: pcbY + -0.39 },
    ]} />
    {/* M */}
    <silkscreenpath layer="top" route={[
      { x: pcbX + 3.53, y: pcbY + -0.09 }, { x: pcbX + 3.53, y: pcbY + 0.94 },
      { x: pcbX + 2.83, y: pcbY + 0.94 }, { x: pcbX + 2.83, y: pcbY + -0.96 },
      { x: pcbX + 3.53, y: pcbY + -0.96 }, { x: pcbX + 3.53, y: pcbY + -0.74 },
      { x: pcbX + 3.68, y: pcbY + -0.89 }, { x: pcbX + 3.88, y: pcbY + -0.99 },
      { x: pcbX + 4.05, y: pcbY + -1.01 }, { x: pcbX + 4.23, y: pcbY + -0.99 },
      { x: pcbX + 4.44, y: pcbY + -0.89 }, { x: pcbX + 4.59, y: pcbY + -0.71 },
      { x: pcbX + 4.77, y: pcbY + -0.9 }, { x: pcbX + 5.01, y: pcbY + -1 },
      { x: pcbX + 5.18, y: pcbY + -1.01 }, { x: pcbX + 5.47, y: pcbY + -0.96 },
      { x: pcbX + 5.68, y: pcbY + -0.81 }, { x: pcbX + 5.8, y: pcbY + -0.59 },
      { x: pcbX + 5.85, y: pcbY + -0.28 }, { x: pcbX + 5.85, y: pcbY + 0.94 },
      { x: pcbX + 5.15, y: pcbY + 0.94 }, { x: pcbX + 5.15, y: pcbY + -0.1 },
      { x: pcbX + 5.11, y: pcbY + -0.26 }, { x: pcbX + 5.02, y: pcbY + -0.36 },
      { x: pcbX + 4.92, y: pcbY + -0.38 }, { x: pcbX + 4.83, y: pcbY + -0.36 },
      { x: pcbX + 4.73, y: pcbY + -0.26 }, { x: pcbX + 4.69, y: pcbY + -0.09 },
      { x: pcbX + 4.69, y: pcbY + 0.94 }, { x: pcbX + 3.99, y: pcbY + 0.94 },
      { x: pcbX + 3.99, y: pcbY + -0.1 }, { x: pcbX + 3.96, y: pcbY + -0.26 },
      { x: pcbX + 3.86, y: pcbY + -0.36 }, { x: pcbX + 3.77, y: pcbY + -0.38 },
      { x: pcbX + 3.67, y: pcbY + -0.36 }, { x: pcbX + 3.57, y: pcbY + -0.26 },
      { x: pcbX + 3.53, y: pcbY + -0.09 },
    ]} />
  </>
)

export const TelemetronIconFront = ({ pcbX = 0, pcbY = 0 }: { pcbX?: number; pcbY?: number }) => (
  <>
    {/* Square 1 */}
    <silkscreenpath layer="top" route={[
      { x: pcbX + -1.75, y: pcbY + 1.75 }, { x: pcbX + 0, y: pcbY + 1.75 },
      { x: pcbX + 0, y: pcbY + 0 }, { x: pcbX + -1.75, y: pcbY + 0 },
      { x: pcbX + -1.75, y: pcbY + 1.75 },
    ]} />
    {/* Square 2 */}
    <silkscreenpath layer="top" route={[
      { x: pcbX + -0.87, y: pcbY + 0.87 }, { x: pcbX + 0.88, y: pcbY + 0.87 },
      { x: pcbX + 0.88, y: pcbY + -0.88 }, { x: pcbX + -0.87, y: pcbY + -0.88 },
      { x: pcbX + -0.87, y: pcbY + 0.87 },
    ]} />
    {/* Square 3 */}
    <silkscreenpath layer="top" route={[
      { x: pcbX + 0, y: pcbY + 0 }, { x: pcbX + 1.75, y: pcbY + 0 },
      { x: pcbX + 1.75, y: pcbY + -1.75 }, { x: pcbX + 0, y: pcbY + -1.75 },
      { x: pcbX + 0, y: pcbY + 0 },
    ]} />
    {/* Diagonal 1 */}
    <silkscreenpath layer="top" route={[
      { x: pcbX + -0.87, y: pcbY + 0.87 }, { x: pcbX + 0, y: pcbY + 0 },
    ]} />
    {/* Diagonal 2 */}
    <silkscreenpath layer="top" route={[
      { x: pcbX + 0, y: pcbY + 0 }, { x: pcbX + 0.88, y: pcbY + -0.88 },
    ]} />
  </>
)

export const TelemetronTextFront = ({ pcbX = 0, pcbY = 0 }: { pcbX?: number; pcbY?: number }) => (
  <>
    {/* T */}
    <silkscreenpath layer="top" route={[{ x: pcbX + -2.61, y: pcbY + 0.44 }, { x: pcbX + -2.72, y: pcbY + 0.44 }, { x: pcbX + -2.72, y: pcbY + -0.35 }, { x: pcbX + -3, y: pcbY + -0.35 }, { x: pcbX + -3, y: pcbY + -0.45 }, { x: pcbX + -2.32, y: pcbY + -0.45 }, { x: pcbX + -2.32, y: pcbY + -0.35 }, { x: pcbX + -2.61, y: pcbY + -0.35 }, { x: pcbX + -2.61, y: pcbY + 0.44 }]} />
    {/* e1 */}
    <silkscreenpath layer="top" route={[{ x: pcbX + -1.96, y: pcbY + 0.45 }, { x: pcbX + -2, y: pcbY + 0.45 }, { x: pcbX + -2.04, y: pcbY + 0.44 }, { x: pcbX + -2.08, y: pcbY + 0.43 }, { x: pcbX + -2.11, y: pcbY + 0.41 }, { x: pcbX + -2.15, y: pcbY + 0.39 }, { x: pcbX + -2.17, y: pcbY + 0.36 }, { x: pcbX + -2.2, y: pcbY + 0.33 }, { x: pcbX + -2.22, y: pcbY + 0.3 }, { x: pcbX + -2.23, y: pcbY + 0.26 }, { x: pcbX + -2.24, y: pcbY + 0.22 }, { x: pcbX + -2.25, y: pcbY + 0.17 }, { x: pcbX + -2.25, y: pcbY + 0.12 }, { x: pcbX + -2.25, y: pcbY + 0.07 }, { x: pcbX + -2.24, y: pcbY + 0.03 }, { x: pcbX + -2.23, y: pcbY + -0.02 }, { x: pcbX + -2.22, y: pcbY + -0.06 }, { x: pcbX + -2.2, y: pcbY + -0.09 }, { x: pcbX + -2.17, y: pcbY + -0.12 }, { x: pcbX + -2.15, y: pcbY + -0.15 }, { x: pcbX + -2.12, y: pcbY + -0.17 }, { x: pcbX + -2.08, y: pcbY + -0.19 }, { x: pcbX + -2.04, y: pcbY + -0.21 }, { x: pcbX + -2, y: pcbY + -0.21 }, { x: pcbX + -1.96, y: pcbY + -0.22 }, { x: pcbX + -1.92, y: pcbY + -0.21 }, { x: pcbX + -1.88, y: pcbY + -0.21 }, { x: pcbX + -1.84, y: pcbY + -0.19 }, { x: pcbX + -1.81, y: pcbY + -0.18 }, { x: pcbX + -1.78, y: pcbY + -0.15 }, { x: pcbX + -1.75, y: pcbY + -0.13 }, { x: pcbX + -1.73, y: pcbY + -0.1 }, { x: pcbX + -1.71, y: pcbY + -0.06 }, { x: pcbX + -1.7, y: pcbY + -0.02 }, { x: pcbX + -1.69, y: pcbY + 0.02 }, { x: pcbX + -1.68, y: pcbY + 0.06 }, { x: pcbX + -1.68, y: pcbY + 0.11 }, { x: pcbX + -1.68, y: pcbY + 0.15 }, { x: pcbX + -2.2, y: pcbY + 0.15 }, { x: pcbX + -2.2, y: pcbY + 0.06 }, { x: pcbX + -1.73, y: pcbY + 0.06 }, { x: pcbX + -1.79, y: pcbY + 0.1 }, { x: pcbX + -1.79, y: pcbY + 0.06 }, { x: pcbX + -1.8, y: pcbY + 0 }, { x: pcbX + -1.82, y: pcbY + -0.05 }, { x: pcbX + -1.85, y: pcbY + -0.08 }, { x: pcbX + -1.89, y: pcbY + -0.11 }, { x: pcbX + -1.94, y: pcbY + -0.12 }, { x: pcbX + -1.96, y: pcbY + -0.12 }, { x: pcbX + -1.99, y: pcbY + -0.12 }, { x: pcbX + -2.03, y: pcbY + -0.11 }, { x: pcbX + -2.06, y: pcbY + -0.1 }, { x: pcbX + -2.09, y: pcbY + -0.06 }, { x: pcbX + -2.12, y: pcbY + -0.02 }, { x: pcbX + -2.14, y: pcbY + 0.03 }, { x: pcbX + -2.14, y: pcbY + 0.1 }, { x: pcbX + -2.14, y: pcbY + 0.17 }, { x: pcbX + -2.13, y: pcbY + 0.23 }, { x: pcbX + -2.11, y: pcbY + 0.28 }, { x: pcbX + -2.09, y: pcbY + 0.3 }, { x: pcbX + -2.05, y: pcbY + 0.33 }, { x: pcbX + -2.01, y: pcbY + 0.35 }, { x: pcbX + -1.95, y: pcbY + 0.36 }, { x: pcbX + -1.91, y: pcbY + 0.36 }, { x: pcbX + -1.88, y: pcbY + 0.35 }, { x: pcbX + -1.85, y: pcbY + 0.33 }, { x: pcbX + -1.83, y: pcbY + 0.31 }, { x: pcbX + -1.81, y: pcbY + 0.29 }, { x: pcbX + -1.79, y: pcbY + 0.26 }, { x: pcbX + -1.69, y: pcbY + 0.26 }, { x: pcbX + -1.7, y: pcbY + 0.3 }, { x: pcbX + -1.72, y: pcbY + 0.34 }, { x: pcbX + -1.74, y: pcbY + 0.37 }, { x: pcbX + -1.78, y: pcbY + 0.4 }, { x: pcbX + -1.81, y: pcbY + 0.42 }, { x: pcbX + -1.86, y: pcbY + 0.44 }, { x: pcbX + -1.9, y: pcbY + 0.45 }, { x: pcbX + -1.96, y: pcbY + 0.45 }]} />
    {/* l */}
    <silkscreenpath layer="top" route={[{ x: pcbX + -1.46, y: pcbY + 0.44 }, { x: pcbX + -1.56, y: pcbY + 0.44 }, { x: pcbX + -1.56, y: pcbY + -0.45 }, { x: pcbX + -1.46, y: pcbY + -0.45 }, { x: pcbX + -1.46, y: pcbY + 0.44 }]} />
    {/* e2 */}
    <silkscreenpath layer="top" route={[{ x: pcbX + -1.04, y: pcbY + 0.45 }, { x: pcbX + -1.09, y: pcbY + 0.45 }, { x: pcbX + -1.13, y: pcbY + 0.44 }, { x: pcbX + -1.17, y: pcbY + 0.43 }, { x: pcbX + -1.2, y: pcbY + 0.41 }, { x: pcbX + -1.23, y: pcbY + 0.39 }, { x: pcbX + -1.26, y: pcbY + 0.36 }, { x: pcbX + -1.29, y: pcbY + 0.33 }, { x: pcbX + -1.31, y: pcbY + 0.3 }, { x: pcbX + -1.32, y: pcbY + 0.26 }, { x: pcbX + -1.33, y: pcbY + 0.22 }, { x: pcbX + -1.34, y: pcbY + 0.17 }, { x: pcbX + -1.34, y: pcbY + 0.12 }, { x: pcbX + -1.34, y: pcbY + 0.07 }, { x: pcbX + -1.33, y: pcbY + 0.03 }, { x: pcbX + -1.32, y: pcbY + -0.02 }, { x: pcbX + -1.31, y: pcbY + -0.06 }, { x: pcbX + -1.29, y: pcbY + -0.09 }, { x: pcbX + -1.26, y: pcbY + -0.12 }, { x: pcbX + -1.24, y: pcbY + -0.15 }, { x: pcbX + -1.2, y: pcbY + -0.17 }, { x: pcbX + -1.17, y: pcbY + -0.19 }, { x: pcbX + -1.13, y: pcbY + -0.21 }, { x: pcbX + -1.09, y: pcbY + -0.21 }, { x: pcbX + -1.05, y: pcbY + -0.22 }, { x: pcbX + -1.01, y: pcbY + -0.21 }, { x: pcbX + -0.97, y: pcbY + -0.21 }, { x: pcbX + -0.93, y: pcbY + -0.19 }, { x: pcbX + -0.9, y: pcbY + -0.18 }, { x: pcbX + -0.87, y: pcbY + -0.15 }, { x: pcbX + -0.84, y: pcbY + -0.13 }, { x: pcbX + -0.82, y: pcbY + -0.1 }, { x: pcbX + -0.8, y: pcbY + -0.06 }, { x: pcbX + -0.79, y: pcbY + -0.02 }, { x: pcbX + -0.78, y: pcbY + 0.02 }, { x: pcbX + -0.77, y: pcbY + 0.06 }, { x: pcbX + -0.77, y: pcbY + 0.11 }, { x: pcbX + -0.77, y: pcbY + 0.15 }, { x: pcbX + -1.29, y: pcbY + 0.15 }, { x: pcbX + -1.29, y: pcbY + 0.06 }, { x: pcbX + -0.82, y: pcbY + 0.06 }, { x: pcbX + -0.87, y: pcbY + 0.1 }, { x: pcbX + -0.88, y: pcbY + 0.06 }, { x: pcbX + -0.89, y: pcbY + 0 }, { x: pcbX + -0.91, y: pcbY + -0.05 }, { x: pcbX + -0.94, y: pcbY + -0.08 }, { x: pcbX + -0.98, y: pcbY + -0.11 }, { x: pcbX + -1.03, y: pcbY + -0.12 }, { x: pcbX + -1.05, y: pcbY + -0.12 }, { x: pcbX + -1.08, y: pcbY + -0.12 }, { x: pcbX + -1.12, y: pcbY + -0.11 }, { x: pcbX + -1.16, y: pcbY + -0.08 }, { x: pcbX + -1.2, y: pcbY + -0.04 }, { x: pcbX + -1.22, y: pcbY + 0 }, { x: pcbX + -1.23, y: pcbY + 0.07 }, { x: pcbX + -1.23, y: pcbY + 0.1 }, { x: pcbX + -1.23, y: pcbY + 0.17 }, { x: pcbX + -1.22, y: pcbY + 0.23 }, { x: pcbX + -1.2, y: pcbY + 0.28 }, { x: pcbX + -1.18, y: pcbY + 0.3 }, { x: pcbX + -1.14, y: pcbY + 0.33 }, { x: pcbX + -1.1, y: pcbY + 0.35 }, { x: pcbX + -1.04, y: pcbY + 0.36 }, { x: pcbX + -1, y: pcbY + 0.36 }, { x: pcbX + -0.97, y: pcbY + 0.35 }, { x: pcbX + -0.94, y: pcbY + 0.33 }, { x: pcbX + -0.91, y: pcbY + 0.31 }, { x: pcbX + -0.9, y: pcbY + 0.29 }, { x: pcbX + -0.88, y: pcbY + 0.26 }, { x: pcbX + -0.77, y: pcbY + 0.26 }, { x: pcbX + -0.79, y: pcbY + 0.3 }, { x: pcbX + -0.81, y: pcbY + 0.34 }, { x: pcbX + -0.83, y: pcbY + 0.37 }, { x: pcbX + -0.86, y: pcbY + 0.4 }, { x: pcbX + -0.9, y: pcbY + 0.42 }, { x: pcbX + -0.95, y: pcbY + 0.44 }, { x: pcbX + -0.99, y: pcbY + 0.45 }, { x: pcbX + -1.04, y: pcbY + 0.45 }]} />
    {/* m */}
    <silkscreenpath layer="top" route={[{ x: pcbX + -0.55, y: pcbY + 0.44 }, { x: pcbX + -0.66, y: pcbY + 0.44 }, { x: pcbX + -0.66, y: pcbY + -0.2 }, { x: pcbX + -0.55, y: pcbY + -0.2 }, { x: pcbX + -0.55, y: pcbY + -0.11 }, { x: pcbX + -0.54, y: pcbY + -0.13 }, { x: pcbX + -0.52, y: pcbY + -0.15 }, { x: pcbX + -0.5, y: pcbY + -0.17 }, { x: pcbX + -0.48, y: pcbY + -0.19 }, { x: pcbX + -0.45, y: pcbY + -0.2 }, { x: pcbX + -0.43, y: pcbY + -0.21 }, { x: pcbX + -0.4, y: pcbY + -0.21 }, { x: pcbX + -0.37, y: pcbY + -0.22 }, { x: pcbX + -0.35, y: pcbY + -0.22 }, { x: pcbX + -0.33, y: pcbY + -0.21 }, { x: pcbX + -0.29, y: pcbY + -0.2 }, { x: pcbX + -0.26, y: pcbY + -0.18 }, { x: pcbX + -0.24, y: pcbY + -0.17 }, { x: pcbX + -0.22, y: pcbY + -0.15 }, { x: pcbX + -0.2, y: pcbY + -0.11 }, { x: pcbX + -0.19, y: pcbY + -0.09 }, { x: pcbX + -0.18, y: pcbY + -0.11 }, { x: pcbX + -0.15, y: pcbY + -0.14 }, { x: pcbX + -0.12, y: pcbY + -0.17 }, { x: pcbX + -0.09, y: pcbY + -0.19 }, { x: pcbX + -0.05, y: pcbY + -0.21 }, { x: pcbX + -0.01, y: pcbY + -0.22 }, { x: pcbX + 0.02, y: pcbY + -0.22 }, { x: pcbX + 0.05, y: pcbY + -0.21 }, { x: pcbX + 0.1, y: pcbY + -0.2 }, { x: pcbX + 0.15, y: pcbY + -0.18 }, { x: pcbX + 0.19, y: pcbY + -0.14 }, { x: pcbX + 0.21, y: pcbY + -0.09 }, { x: pcbX + 0.23, y: pcbY + -0.04 }, { x: pcbX + 0.23, y: pcbY + 0 }, { x: pcbX + 0.23, y: pcbY + 0.44 }, { x: pcbX + 0.12, y: pcbY + 0.44 }, { x: pcbX + 0.12, y: pcbY + 0.02 }, { x: pcbX + 0.11, y: pcbY + -0.02 }, { x: pcbX + 0.1, y: pcbY + -0.06 }, { x: pcbX + 0.08, y: pcbY + -0.08 }, { x: pcbX + 0.06, y: pcbY + -0.1 }, { x: pcbX + 0.02, y: pcbY + -0.12 }, { x: pcbX + -0.02, y: pcbY + -0.12 }, { x: pcbX + -0.06, y: pcbY + -0.12 }, { x: pcbX + -0.09, y: pcbY + -0.1 }, { x: pcbX + -0.12, y: pcbY + -0.08 }, { x: pcbX + -0.14, y: pcbY + -0.05 }, { x: pcbX + -0.16, y: pcbY + -0.01 }, { x: pcbX + -0.16, y: pcbY + 0.03 }, { x: pcbX + -0.16, y: pcbY + 0.44 }, { x: pcbX + -0.27, y: pcbY + 0.44 }, { x: pcbX + -0.27, y: pcbY + 0.01 }, { x: pcbX + -0.28, y: pcbY + -0.04 }, { x: pcbX + -0.3, y: pcbY + -0.07 }, { x: pcbX + -0.32, y: pcbY + -0.1 }, { x: pcbX + -0.35, y: pcbY + -0.11 }, { x: pcbX + -0.38, y: pcbY + -0.12 }, { x: pcbX + -0.4, y: pcbY + -0.12 }, { x: pcbX + -0.44, y: pcbY + -0.12 }, { x: pcbX + -0.48, y: pcbY + -0.1 }, { x: pcbX + -0.51, y: pcbY + -0.08 }, { x: pcbX + -0.53, y: pcbY + -0.04 }, { x: pcbX + -0.55, y: pcbY + -0.01 }, { x: pcbX + -0.55, y: pcbY + 0.04 }, { x: pcbX + -0.55, y: pcbY + 0.44 }]} />
    {/* e3 */}
    <silkscreenpath layer="top" route={[{ x: pcbX + 0.63, y: pcbY + 0.45 }, { x: pcbX + 0.59, y: pcbY + 0.45 }, { x: pcbX + 0.54, y: pcbY + 0.44 }, { x: pcbX + 0.51, y: pcbY + 0.43 }, { x: pcbX + 0.47, y: pcbY + 0.41 }, { x: pcbX + 0.44, y: pcbY + 0.39 }, { x: pcbX + 0.41, y: pcbY + 0.36 }, { x: pcbX + 0.39, y: pcbY + 0.33 }, { x: pcbX + 0.37, y: pcbY + 0.3 }, { x: pcbX + 0.35, y: pcbY + 0.26 }, { x: pcbX + 0.34, y: pcbY + 0.22 }, { x: pcbX + 0.33, y: pcbY + 0.17 }, { x: pcbX + 0.33, y: pcbY + 0.12 }, { x: pcbX + 0.33, y: pcbY + 0.07 }, { x: pcbX + 0.34, y: pcbY + 0.03 }, { x: pcbX + 0.35, y: pcbY + -0.02 }, { x: pcbX + 0.37, y: pcbY + -0.06 }, { x: pcbX + 0.39, y: pcbY + -0.09 }, { x: pcbX + 0.41, y: pcbY + -0.12 }, { x: pcbX + 0.44, y: pcbY + -0.15 }, { x: pcbX + 0.47, y: pcbY + -0.17 }, { x: pcbX + 0.5, y: pcbY + -0.19 }, { x: pcbX + 0.54, y: pcbY + -0.21 }, { x: pcbX + 0.58, y: pcbY + -0.21 }, { x: pcbX + 0.62, y: pcbY + -0.22 }, { x: pcbX + 0.67, y: pcbY + -0.21 }, { x: pcbX + 0.71, y: pcbY + -0.21 }, { x: pcbX + 0.74, y: pcbY + -0.19 }, { x: pcbX + 0.78, y: pcbY + -0.18 }, { x: pcbX + 0.81, y: pcbY + -0.15 }, { x: pcbX + 0.83, y: pcbY + -0.13 }, { x: pcbX + 0.85, y: pcbY + -0.1 }, { x: pcbX + 0.87, y: pcbY + -0.06 }, { x: pcbX + 0.89, y: pcbY + -0.02 }, { x: pcbX + 0.9, y: pcbY + 0.02 }, { x: pcbX + 0.91, y: pcbY + 0.06 }, { x: pcbX + 0.91, y: pcbY + 0.11 }, { x: pcbX + 0.91, y: pcbY + 0.15 }, { x: pcbX + 0.39, y: pcbY + 0.15 }, { x: pcbX + 0.39, y: pcbY + 0.06 }, { x: pcbX + 0.85, y: pcbY + 0.06 }, { x: pcbX + 0.8, y: pcbY + 0.1 }, { x: pcbX + 0.8, y: pcbY + 0.06 }, { x: pcbX + 0.79, y: pcbY + 0 }, { x: pcbX + 0.76, y: pcbY + -0.05 }, { x: pcbX + 0.73, y: pcbY + -0.08 }, { x: pcbX + 0.69, y: pcbY + -0.11 }, { x: pcbX + 0.65, y: pcbY + -0.12 }, { x: pcbX + 0.62, y: pcbY + -0.12 }, { x: pcbX + 0.6, y: pcbY + -0.12 }, { x: pcbX + 0.55, y: pcbY + -0.11 }, { x: pcbX + 0.51, y: pcbY + -0.08 }, { x: pcbX + 0.48, y: pcbY + -0.04 }, { x: pcbX + 0.46, y: pcbY + 0 }, { x: pcbX + 0.44, y: pcbY + 0.07 }, { x: pcbX + 0.44, y: pcbY + 0.1 }, { x: pcbX + 0.44, y: pcbY + 0.17 }, { x: pcbX + 0.45, y: pcbY + 0.23 }, { x: pcbX + 0.48, y: pcbY + 0.28 }, { x: pcbX + 0.49, y: pcbY + 0.3 }, { x: pcbX + 0.53, y: pcbY + 0.33 }, { x: pcbX + 0.55, y: pcbY + 0.34 }, { x: pcbX + 0.6, y: pcbY + 0.36 }, { x: pcbX + 0.63, y: pcbY + 0.36 }, { x: pcbX + 0.67, y: pcbY + 0.36 }, { x: pcbX + 0.71, y: pcbY + 0.35 }, { x: pcbX + 0.74, y: pcbY + 0.33 }, { x: pcbX + 0.76, y: pcbY + 0.31 }, { x: pcbX + 0.78, y: pcbY + 0.29 }, { x: pcbX + 0.79, y: pcbY + 0.26 }, { x: pcbX + 0.9, y: pcbY + 0.26 }, { x: pcbX + 0.89, y: pcbY + 0.3 }, { x: pcbX + 0.87, y: pcbY + 0.34 }, { x: pcbX + 0.84, y: pcbY + 0.37 }, { x: pcbX + 0.81, y: pcbY + 0.4 }, { x: pcbX + 0.77, y: pcbY + 0.42 }, { x: pcbX + 0.73, y: pcbY + 0.44 }, { x: pcbX + 0.68, y: pcbY + 0.45 }, { x: pcbX + 0.63, y: pcbY + 0.45 }]} />
    {/* t */}
    <silkscreenpath layer="top" route={[{ x: pcbX + 1.23, y: pcbY + 0.45 }, { x: pcbX + 1.18, y: pcbY + 0.45 }, { x: pcbX + 1.15, y: pcbY + 0.44 }, { x: pcbX + 1.12, y: pcbY + 0.43 }, { x: pcbX + 1.09, y: pcbY + 0.41 }, { x: pcbX + 1.07, y: pcbY + 0.39 }, { x: pcbX + 1.06, y: pcbY + 0.36 }, { x: pcbX + 1.05, y: pcbY + 0.32 }, { x: pcbX + 1.05, y: pcbY + 0.28 }, { x: pcbX + 1.05, y: pcbY + -0.11 }, { x: pcbX + 0.95, y: pcbY + -0.11 }, { x: pcbX + 0.95, y: pcbY + -0.2 }, { x: pcbX + 1.05, y: pcbY + -0.2 }, { x: pcbX + 1.05, y: pcbY + -0.38 }, { x: pcbX + 1.16, y: pcbY + -0.38 }, { x: pcbX + 1.16, y: pcbY + -0.2 }, { x: pcbX + 1.28, y: pcbY + -0.2 }, { x: pcbX + 1.28, y: pcbY + -0.11 }, { x: pcbX + 1.16, y: pcbY + -0.11 }, { x: pcbX + 1.16, y: pcbY + 0.28 }, { x: pcbX + 1.17, y: pcbY + 0.32 }, { x: pcbX + 1.18, y: pcbY + 0.35 }, { x: pcbX + 1.21, y: pcbY + 0.36 }, { x: pcbX + 1.23, y: pcbY + 0.36 }, { x: pcbX + 1.25, y: pcbY + 0.37 }, { x: pcbX + 1.28, y: pcbY + 0.36 }, { x: pcbX + 1.28, y: pcbY + 0.45 }, { x: pcbX + 1.27, y: pcbY + 0.45 }, { x: pcbX + 1.25, y: pcbY + 0.45 }, { x: pcbX + 1.23, y: pcbY + 0.45 }]} />
    {/* r */}
    <silkscreenpath layer="top" route={[{ x: pcbX + 1.51, y: pcbY + 0.44 }, { x: pcbX + 1.4, y: pcbY + 0.44 }, { x: pcbX + 1.4, y: pcbY + -0.2 }, { x: pcbX + 1.51, y: pcbY + -0.2 }, { x: pcbX + 1.51, y: pcbY + -0.09 }, { x: pcbX + 1.52, y: pcbY + -0.12 }, { x: pcbX + 1.55, y: pcbY + -0.17 }, { x: pcbX + 1.59, y: pcbY + -0.2 }, { x: pcbX + 1.63, y: pcbY + -0.21 }, { x: pcbX + 1.66, y: pcbY + -0.22 }, { x: pcbX + 1.68, y: pcbY + -0.22 }, { x: pcbX + 1.7, y: pcbY + -0.21 }, { x: pcbX + 1.7, y: pcbY + -0.11 }, { x: pcbX + 1.68, y: pcbY + -0.11 }, { x: pcbX + 1.66, y: pcbY + -0.11 }, { x: pcbX + 1.63, y: pcbY + -0.11 }, { x: pcbX + 1.59, y: pcbY + -0.1 }, { x: pcbX + 1.56, y: pcbY + -0.08 }, { x: pcbX + 1.53, y: pcbY + -0.06 }, { x: pcbX + 1.52, y: pcbY + -0.02 }, { x: pcbX + 1.51, y: pcbY + 0.02 }, { x: pcbX + 1.51, y: pcbY + 0.04 }, { x: pcbX + 1.51, y: pcbY + 0.44 }]} />
    {/* o */}
    <silkscreenpath layer="top" route={[{ x: pcbX + 2.06, y: pcbY + 0.45 }, { x: pcbX + 2.02, y: pcbY + 0.45 }, { x: pcbX + 1.98, y: pcbY + 0.44 }, { x: pcbX + 1.94, y: pcbY + 0.43 }, { x: pcbX + 1.9, y: pcbY + 0.41 }, { x: pcbX + 1.87, y: pcbY + 0.39 }, { x: pcbX + 1.84, y: pcbY + 0.36 }, { x: pcbX + 1.82, y: pcbY + 0.33 }, { x: pcbX + 1.8, y: pcbY + 0.3 }, { x: pcbX + 1.78, y: pcbY + 0.26 }, { x: pcbX + 1.77, y: pcbY + 0.21 }, { x: pcbX + 1.76, y: pcbY + 0.17 }, { x: pcbX + 1.76, y: pcbY + 0.12 }, { x: pcbX + 1.76, y: pcbY + 0.07 }, { x: pcbX + 1.77, y: pcbY + 0.02 }, { x: pcbX + 1.78, y: pcbY + -0.02 }, { x: pcbX + 1.8, y: pcbY + -0.06 }, { x: pcbX + 1.82, y: pcbY + -0.1 }, { x: pcbX + 1.84, y: pcbY + -0.13 }, { x: pcbX + 1.87, y: pcbY + -0.15 }, { x: pcbX + 1.9, y: pcbY + -0.18 }, { x: pcbX + 1.94, y: pcbY + -0.19 }, { x: pcbX + 1.98, y: pcbY + -0.21 }, { x: pcbX + 2.02, y: pcbY + -0.21 }, { x: pcbX + 2.06, y: pcbY + -0.22 }, { x: pcbX + 2.1, y: pcbY + -0.21 }, { x: pcbX + 2.14, y: pcbY + -0.21 }, { x: pcbX + 2.18, y: pcbY + -0.19 }, { x: pcbX + 2.22, y: pcbY + -0.18 }, { x: pcbX + 2.25, y: pcbY + -0.15 }, { x: pcbX + 2.28, y: pcbY + -0.13 }, { x: pcbX + 2.3, y: pcbY + -0.1 }, { x: pcbX + 2.32, y: pcbY + -0.06 }, { x: pcbX + 2.34, y: pcbY + -0.02 }, { x: pcbX + 2.35, y: pcbY + 0.02 }, { x: pcbX + 2.36, y: pcbY + 0.07 }, { x: pcbX + 2.36, y: pcbY + 0.12 }, { x: pcbX + 2.36, y: pcbY + 0.17 }, { x: pcbX + 2.35, y: pcbY + 0.22 }, { x: pcbX + 2.34, y: pcbY + 0.26 }, { x: pcbX + 2.32, y: pcbY + 0.3 }, { x: pcbX + 2.3, y: pcbY + 0.33 }, { x: pcbX + 2.28, y: pcbY + 0.36 }, { x: pcbX + 2.25, y: pcbY + 0.39 }, { x: pcbX + 2.22, y: pcbY + 0.41 }, { x: pcbX + 2.18, y: pcbY + 0.43 }, { x: pcbX + 2.14, y: pcbY + 0.44 }, { x: pcbX + 2.1, y: pcbY + 0.45 }, { x: pcbX + 2.06, y: pcbY + 0.45 }]} />
    {/* o inner */}
    <silkscreenpath layer="top" route={[{ x: pcbX + 2.06, y: pcbY + 0.36 }, { x: pcbX + 2.09, y: pcbY + 0.36 }, { x: pcbX + 2.14, y: pcbY + 0.34 }, { x: pcbX + 2.18, y: pcbY + 0.31 }, { x: pcbX + 2.21, y: pcbY + 0.27 }, { x: pcbX + 2.23, y: pcbY + 0.22 }, { x: pcbX + 2.25, y: pcbY + 0.16 }, { x: pcbX + 2.25, y: pcbY + 0.12 }, { x: pcbX + 2.25, y: pcbY + 0.08 }, { x: pcbX + 2.23, y: pcbY + 0.02 }, { x: pcbX + 2.21, y: pcbY + -0.04 }, { x: pcbX + 2.18, y: pcbY + -0.08 }, { x: pcbX + 2.14, y: pcbY + -0.11 }, { x: pcbX + 2.09, y: pcbY + -0.12 }, { x: pcbX + 2.06, y: pcbY + -0.12 }, { x: pcbX + 2.03, y: pcbY + -0.12 }, { x: pcbX + 1.98, y: pcbY + -0.1 }, { x: pcbX + 1.94, y: pcbY + -0.08 }, { x: pcbX + 1.91, y: pcbY + -0.04 }, { x: pcbX + 1.88, y: pcbY + 0.02 }, { x: pcbX + 1.87, y: pcbY + 0.08 }, { x: pcbX + 1.87, y: pcbY + 0.12 }, { x: pcbX + 1.87, y: pcbY + 0.16 }, { x: pcbX + 1.88, y: pcbY + 0.22 }, { x: pcbX + 1.91, y: pcbY + 0.27 }, { x: pcbX + 1.94, y: pcbY + 0.31 }, { x: pcbX + 1.98, y: pcbY + 0.34 }, { x: pcbX + 2.03, y: pcbY + 0.36 }, { x: pcbX + 2.06, y: pcbY + 0.36 }]} />
    {/* n */}
    <silkscreenpath layer="top" route={[{ x: pcbX + 2.57, y: pcbY + 0.44 }, { x: pcbX + 2.47, y: pcbY + 0.44 }, { x: pcbX + 2.47, y: pcbY + -0.2 }, { x: pcbX + 2.57, y: pcbY + -0.2 }, { x: pcbX + 2.57, y: pcbY + -0.11 }, { x: pcbX + 2.59, y: pcbY + -0.13 }, { x: pcbX + 2.63, y: pcbY + -0.17 }, { x: pcbX + 2.68, y: pcbY + -0.2 }, { x: pcbX + 2.74, y: pcbY + -0.21 }, { x: pcbX + 2.78, y: pcbY + -0.22 }, { x: pcbX + 2.83, y: pcbY + -0.21 }, { x: pcbX + 2.91, y: pcbY + -0.18 }, { x: pcbX + 2.97, y: pcbY + -0.12 }, { x: pcbX + 3, y: pcbY + -0.03 }, { x: pcbX + 3, y: pcbY + 0.02 }, { x: pcbX + 3, y: pcbY + 0.44 }, { x: pcbX + 2.89, y: pcbY + 0.44 }, { x: pcbX + 2.89, y: pcbY + 0.04 }, { x: pcbX + 2.88, y: pcbY + -0.03 }, { x: pcbX + 2.85, y: pcbY + -0.08 }, { x: pcbX + 2.81, y: pcbY + -0.11 }, { x: pcbX + 2.78, y: pcbY + -0.12 }, { x: pcbX + 2.74, y: pcbY + -0.12 }, { x: pcbX + 2.7, y: pcbY + -0.12 }, { x: pcbX + 2.65, y: pcbY + -0.1 }, { x: pcbX + 2.62, y: pcbY + -0.07 }, { x: pcbX + 2.6, y: pcbY + -0.03 }, { x: pcbX + 2.58, y: pcbY + 0.01 }, { x: pcbX + 2.57, y: pcbY + 0.06 }, { x: pcbX + 2.57, y: pcbY + 0.44 }]} />
  </>
)
