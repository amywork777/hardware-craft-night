import re
from svgpathtools import svg2paths2

# Read the SVG
paths, attributes, svg_attr = svg2paths2('logos/vizcom-clean.svg')

# Find bounding box
min_x, max_x = float('inf'), float('-inf')
min_y, max_y = float('inf'), float('-inf')

for path in paths:
    for t in range(0, 101, 2):
        try:
            pt = path.point(t / 100.0)
            min_x = min(min_x, pt.real)
            max_x = max(max_x, pt.real)
            min_y = min(min_y, pt.imag)
            max_y = max(max_y, pt.imag)
        except:
            pass

svg_width = max_x - min_x
svg_height = max_y - min_y

# Target: 12mm wide (smaller to fit in organic shapes)
target_width_mm = 12
scale = target_width_mm / svg_width

# Center at (0, 10) - in lower half of PCB back, below components
center_x = 0
center_y = 10

print(f"Logo dimensions: {target_width_mm}mm x {svg_height * scale:.1f}mm")
print(f"Centered at: ({center_x}, {center_y})")

# Output as tscircuit silkscreenpath - compact format
print("\n    {/* === VIZCOM LOGO (back layer) === */}")
for i, path in enumerate(paths):
    points = []
    for t in range(0, 101, 4):  # Sample every 4%
        try:
            pt = path.point(t / 100.0)
            x = (pt.real - (min_x + svg_width/2)) * scale + center_x
            y = -((pt.imag - (min_y + svg_height/2)) * scale) + center_y
            points.append(f"{{ x: {x:.2f}, y: {y:.2f} }}")
        except:
            pass
    
    if len(points) > 2:
        print(f"    <silkscreenpath layer=\"bottom\" route={{[")
        # Print 5 points per line
        for j in range(0, len(points), 5):
            chunk = ", ".join(points[j:j+5])
            print(f"      {chunk},")
        print("    ]} />")
