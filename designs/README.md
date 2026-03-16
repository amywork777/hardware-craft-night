# Hardware Craft Night - LED PCB Designs

Three shaped LED PCBs designed with [tscircuit](https://tscircuit.com) for a beginner workshop.

**Event:** April 9, 2026 at 6:30pm at Vizcom  
**Co-hosts:** Vizcom + Telemetron (Shivani Patel)

## Assembly Strategy

### Pre-assembled by JLCPCB (SMD):
- **R1:** 68Ω resistor (0603 SMD)
- **SW1:** Slide switch (SMD)
- **BAT1:** CR2032 battery holder (SMD or THT, whatever JLCPCB stocks)

### Through-hole pads only (workshop assembly):
- **LED footprints:** 5mm through-hole LED size (2.54mm pin spacing, 1.0mm holes)
- Just holes/pads on the PCB - no components pre-installed

### At the workshop, people will:
1. Pick their LED colors from a selection
2. Push LED legs through the holes
3. Bend legs flat on the back to make contact (no soldering needed!)
4. Pop in a CR2032 battery

## Designs

### 1. ❤️ Heart (heart.tsx)
- **Shape:** Parametric heart curve, ~32mm × 29mm
- **LEDs:** 3× through-hole pads arranged in heart pattern
- **Color:** Red PCB recommended

### 2. ⭐ Star (star.tsx)
- **Shape:** 5-pointed star, ~32mm × 31mm
- **LEDs:** 5× through-hole pads (one at each tip!)
- **Color:** Blue or black PCB recommended

### 3. 🌸 Flower (flower.tsx)
- **Shape:** 6-petal flower, ~32mm × 28mm
- **LEDs:** 4× through-hole pads in alternating petals
- **Color:** Green or purple PCB recommended

## Circuit (same for all 3)

```
CR2032 (3V) → Slide Switch → 68Ω Resistor → LED pads (parallel) → GND
```

All LED pads are wired in parallel. Each gets ~15mA through the shared 68Ω resistor.

**Note:** The star board draws the most current (5 LEDs × 15mA = 75mA). Consider using 100Ω resistors for the star to extend CR2032 battery life.

## Component Values

| Component | Value | Package | Assembly | Qty/Board |
|-----------|-------|---------|----------|-----------|
| Battery holder | CR2032 | SMD coin cell | JLCPCB | 1 |
| Slide switch | SPST | SMD | JLCPCB | 1 |
| Resistor | 68Ω | 0603 SMD | JLCPCB | 1 |
| LED pads | 5mm THT | 2.54mm pitch holes | Workshop | 3-5 |
| Mounting hole | 2.5mm | — | — | 1 |

## Bill of Materials (25 people, ~35 PCBs total)

### JLCPCB Order (PCBs + SMT Assembly)
| Item | Qty | Notes |
|------|-----|-------|
| Heart PCBs (assembled) | 12 | With R1, SW1, BAT1 pre-soldered |
| Star PCBs (assembled) | 12 | With R1, SW1, BAT1 pre-soldered |
| Flower PCBs (assembled) | 12 | With R1, SW1, BAT1 pre-soldered |

### Workshop Supplies
| Item | Qty | Notes |
|------|-----|-------|
| CR2032 batteries | 60 | Spares (people pop these in) |
| 5mm Red LEDs | 40 | Assorted for picking |
| 5mm Yellow LEDs | 40 | |
| 5mm Green LEDs | 40 | |
| 5mm Blue LEDs | 40 | |
| 5mm White LEDs | 20 | |
| Jump rings (8mm) | 40 | For keychain attachment |
| Key rings | 15 | |
| Ball chain necklaces (24") | 15 | |
| Earring hooks | 10 pairs | |
| Safety glasses | 25 | For LED leg bending |

## How to Use

### Preview locally
```bash
npm install
npx tsci dev heart.tsx
```

### Export for manufacturing
```bash
npx tsci export heart.tsx -f gerber
npx tsci export star.tsx -f gerber
npx tsci export flower.tsx -f gerber
```

Upload the gerber ZIP files to [JLCPCB](https://jlcpcb.com).

### Recommended JLCPCB settings
- Quantity: 10-15 per design
- Layers: 2
- Thickness: 1.6mm
- Solder mask color: match the design theme
- Silkscreen: white
- Surface finish: HASL (lead-free)
- **SMT Assembly: Yes** (select Economic PCBA)
- Upload BOM + pick and place files for R1, SW1, BAT1

## PCB Order Timeline
**Order by March 16** for delivery before April 9.
- JLCPCB standard shipping + assembly: ~2-3 weeks

## Estimated Total Cost: ~$180

| Category | Est. Cost |
|----------|-----------|
| PCBs + SMT assembly (3 designs × 12) | $80 |
| LEDs (bulk 5mm assorted) | $15 |
| CR2032 batteries (60) | $15 |
| Jewelry hardware | $20 |
| Safety glasses + misc | $50 |
| **Total** | **~$180** |

**Note:** No soldering stations needed! People just push LEDs through holes and bend legs. Much simpler workshop setup than before.
