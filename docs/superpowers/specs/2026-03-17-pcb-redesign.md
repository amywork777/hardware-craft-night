# PCB Redesign Spec — Hardware Craft Night

## Context

Feedback from EE friends identified mechanical interference (battery covering switch), unreliable LED connection (loose through-holes), sharp heart tip, and unnecessary vias. Also splitting into Vizcom and Telemetron branded variants.

## Changes

### 1. File Structure

Split each shape into two brand variants. Extract shared components.

| File | Description |
|---|---|
| `components.tsx` | Shared SmtBattery, SmtSwitch, LedSocket footprints |
| `heart-vizcom.tsx` | Heart PCB with Vizcom logo on back |
| `heart-telemetron.tsx` | Heart PCB with Telemetron logo + text on back |
| `flower-vizcom.tsx` | Flower PCB with Vizcom logo on back |
| `flower-telemetron.tsx` | Flower PCB with Telemetron logo + text on back |
| `logos.tsx` | Logo silkscreen paths (unchanged) |

Old `heart.tsx` and `flower.tsx` are removed.

### 2. Component Layout — Heart

Spread components to avoid battery overlap. CR2032 is 20mm diameter.

| Component | Position | Rationale |
|---|---|---|
| BAT1 (CR2032 holder) | (0, 5) | Center of heart, biggest component |
| SW1 (slide switch) | (-10, -8) | Left lobe, accessible, not under battery |
| R1 (68Ω 0603) | (-7, -5) | Near switch, along trace path |
| LED1 (2-pin socket) | (0, -5) | Center-top, visible, clear of battery |
| Keychain hole | (0, -16) | In bail tab between lobes |

### 3. Component Layout — Flower

| Component | Position | Rationale |
|---|---|---|
| BAT1 (CR2032 holder) | (0, 3) | Center |
| SW1 (slide switch) | (-5, -3) | Offset left, clear of battery |
| R1 (68Ω 0603) | (-3, -5) | Near switch |
| LED1 (2-pin socket) | (0, -6) | Center stamen |
| Keychain hole | (10, 17) | Lower-right petal |

### 4. LED Socket

Replace `ThruHoleLed` plated holes (1.0mm holes, 2.54mm pitch) with a **2-pin 2.54mm female pin header** pre-soldered by JLCPCB.

- LCSC part: C49661 (1x2P 2.54mm female header) or equivalent
- JLCPCB solders it during assembly
- Attendees push 5mm LED legs straight into the socket — no tools, no soldering
- LED legs are exactly 2.54mm pitch, so they click right in

Update BOM files to include the header. Update the footprint to use standard 2.54mm pitch through-hole pads with appropriate hole size for the header pins (~1.0mm).

### 5. Round Heart Tip

Replace the sharp point at (0, 23.91) with a rounded end (~2mm radius). Modify the outline points near the tip to curve smoothly instead of converging to a needle point.

Before: `(0.20, 22.96), (0.03, 23.67), (0.00, 23.91), (-0.03, 23.67), (-0.20, 22.96)`

After: Replace with points that form a ~2mm radius semicircle at the bottom.

### 6. Back Silkscreen Logos

Each board variant gets ONE logo on the back:

- `*-vizcom.tsx`: VizcomLogo centered on back
- `*-telemetron.tsx`: TelemetronIcon + TelemetronText centered on back

Logo positions adjusted per shape to be centered and visible.

### 7. BOM/CPL Updates

Add LED socket header to BOM for all 4 variants:

```
Comment,Designator,Footprint,LCSC Part #
68R,R1,0603,C22966
Slide Switch,SW1,SW_MK-12C02,C128955
CR2032 Holder,BAT1,BAT_CR2032_SMD,C70377
1x2P Female Header 2.54mm,J1,HDR_1x2_2.54mm,C49661
```

CPL files updated with new component positions per variant.

### 8. Circuit

Unchanged: `CR2032 → SW1 → R1 (68Ω) → LED socket → GND`

All LEDs in parallel if multiple (currently 1 per board).

### 9. What We're NOT Changing

- Board outlines (except rounding heart tip)
- Circuit schematic
- Board dimensions
- Keychain hole positions
- Manufacturing process (JLCPCB PCBA)

## Acceptance Criteria

- All components inside board outlines with no physical overlap
- Battery does not cover switch or LED socket
- Switch accessible with battery installed
- LED socket uses 2-pin female header (JLCPCB pre-soldered)
- Heart tip rounded, not sharp
- 4 board variants exported with gerbers + BOM/CPL
- Each variant has correct single-brand logo on back
