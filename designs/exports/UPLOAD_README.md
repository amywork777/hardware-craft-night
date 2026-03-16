# JLCPCB Upload Instructions

## Files to Upload (for each board)

### HEART
- Gerbers: `heart-gerbers.zip`
- BOM: `heart_bom.csv`
- CPL: `heart_cpl.csv`

### FLOWER
- Gerbers: `flower-gerbers.zip`
- BOM: `flower_bom.csv`
- CPL: `flower_cpl.csv`

## JLCPCB Assembly Flow

1. Go to jlcpcb.com → Order Now
2. Upload gerbers ZIP for each board
3. Set: Qty 35, 2-layer, HASL lead-free, pick solder mask color
4. Toggle "PCB Assembly" ON → Economic PCBA
5. Upload BOM file when prompted
6. Upload CPL file when prompted
7. Match components (should auto-match with LCSC numbers)
8. Add to cart

## Components (same for all boards)

| Designator | Value | Footprint | LCSC Part # |
|------------|-------|-----------|-------------|
| R1 | 68Ω | 0603 | C22966 |
| SW1 | Slide Switch SPDT | SW_MK-12C02 | C128955 |
| BAT1 | CR2032 Holder | BAT_CR2032_SMD | C70377 |

LEDs are left empty — through-hole pads assembled at workshop.

## Recommended Settings per Board

| Board | Qty | Solder Mask Color |
|-------|-----|-------------------|
| Heart | 35 | Red |
| Flower | 35 | Green or Purple |

## Important Notes

- Gerbers need to be re-exported after design updates (LED additions)
- The BOM/CPL files use JLCPCB standard format
- Both boards use identical SMD components
