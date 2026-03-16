# Custom LED PCBs for Hardware Craft Night

**Date:** March 13, 2026
**Category:** Hardware Projects

## Event Details
- **When:** April 9, 6:30pm
- **Where:** Vizcom
- **Co-hosting with:** Shivani Patel (Telemetron)
- **Logos on back:** Vizcom + Telemetron

## Shapes
- Heart
- Star
- Flower

## Design Requirements
- Simple circuit: CR2032 → switch → resistor → LEDs → GND (no microcontroller)
- Through-hole components only (beginners will solder)
- Hole at top for keychain/jewelry attachment
- Size: ~30-40mm

---

## Design Tools

### tscircuit (recommended by Seve @seveibar)
- React/TypeScript PCB design tool
- Write code → generates schematic, PCB, 3D preview, fabrication files
- Built-in autorouting
- Exports directly to JLCPCB
- https://tscircuit.com
- Docs: https://docs.tscircuit.com

### EasyEDA (traditional)
- Draw shape in Inkscape, import SVG
- Manual component placement and routing
- Export gerbers for JLCPCB

---

## Open Source References

### Heart
- PCBWay Heart Necklace by Arnov Sharma (best looking, but SMD + MCU): https://www.pcbway.com/project/shareproject/PCB_Heart_Necklace_3c1cbe5a.html
- CAROBOT Glowing Heart (KiCad, more beginner-friendly): https://github.com/carobot/CAROBOT-Glowing-Heart-LED-Kit

### Star
- led-star-pcb by HeyJoFlyer (MIT license, simple): https://github.com/HeyJoFlyer/led-star-pcb

### Flower
- No good open source exists - design from scratch

---

## Workshop Supplies (~$220 for 25 people)

### Soldering
- 8-10 soldering stations (1 per 3 people)
- Solder 63/37 rosin core 0.6mm (2 spools)
- Brass tip cleaners (8-10)
- Helping hands (8-10)

### Electronics (30 kits = 25 + spares)
- 35 custom PCBs from JLCPCB (~$2-5 each, order in 5 colors)
- 60 CR2032 batteries
- 35 CR2032 coin cell holders (through-hole)
- 300 5mm LEDs assorted colors
- 200 68Ω resistors (1/4W through-hole)
- 35 slide switches

### Jewelry Findings
- 50 split key rings (25mm)
- 30 ball chain necklaces (18-24")
- 200 jump rings (6mm, gold + silver mix)
- 30 pairs earring hooks
- 50 lobster claw clasps

### Craft/Decoration
- 30 small sorting trays
- Printed instruction cards (laminated)
- 30 zip bags
- Nail polish for decorating edges
- Stickers/washi tape

### Safety
- 25 safety glasses (required)
- 2-3 fume extractors or box fan

---

## Claude Prompt for Designing

```
i need to design 3 simple LED PCBs for a beginner craft workshop using tscircuit (or EasyEDA/JLCPCB):

1. heart shaped
2. star shaped  
3. flower shaped

requirements:
- simple circuit: coin cell battery (CR2032), 2-4 LEDs, resistors
- through-hole components only (beginners will solder)
- hole at top for keychain/jewelry attachment
- back silkscreen should have space for two company logos
- size: roughly 30-40mm
- should light up when battery inserted

please walk me through:
1. the schematic design (component values)
2. creating custom board shapes
3. component placement
4. routing traces
5. adding silkscreen logos
6. generating fabrication files for JLCPCB
```

---

## Timeline
- Order PCBs 3-4 weeks before April 9 (by ~March 12-16)
- JLCPCB turnaround: ~1 week production + shipping
