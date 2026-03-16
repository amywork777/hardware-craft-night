import re
from svgpathtools import svg2paths2

# Read the clean Vizcom logo SVG
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

# Generate logo paths at different scales/positions
def generate_logo_jsx(target_width, center_x, center_y):
    scale = target_width / svg_width
    lines = []
    lines.append("    {/* === VIZCOM LOGO (back layer) === */}")
    
    for path in paths:
        points = []
        for t in range(0, 101, 5):  # Sample every 5%
            try:
                pt = path.point(t / 100.0)
                x = (pt.real - (min_x + svg_width/2)) * scale + center_x
                y = -((pt.imag - (min_y + svg_height/2)) * scale) + center_y
                points.append(f"{{ x: {x:.2f}, y: {y:.2f} }}")
            except:
                pass
        
        if len(points) > 2:
            lines.append(f"    <silkscreenpath layer=\"bottom\" route={{[")
            # Print points in chunks
            for j in range(0, len(points), 6):
                chunk = ", ".join(points[j:j+6])
                lines.append(f"      {chunk},")
            lines.append("    ]} />")
    
    return "\n".join(lines)

# Generate Telemetron icon (3 overlapping squares) - keep simple
telemetron_jsx = """    {/* === TELEMETRON ICON (back layer) === */}
    <silkscreenpath layer="bottom" route={[
      { x: 4, y: 8 }, { x: 7, y: 8 }, { x: 7, y: 11 }, { x: 4, y: 11 }, { x: 4, y: 8 }
    ]} />
    <silkscreenpath layer="bottom" route={[
      { x: 5, y: 9.5 }, { x: 8, y: 9.5 }, { x: 8, y: 12.5 }, { x: 5, y: 12.5 }, { x: 5, y: 9.5 }
    ]} />
    <silkscreenpath layer="bottom" route={[
      { x: 6, y: 11 }, { x: 9, y: 11 }, { x: 9, y: 14 }, { x: 6, y: 14 }, { x: 6, y: 11 }
    ]} />"""

# For each PCB file, update the logos
for pcb_file in ['flower.tsx', 'star.tsx', 'heart.tsx']:
    with open(pcb_file, 'r') as f:
        content = f.read()
    
    # Find and remove old logo sections
    # Pattern: from {/* === VIZCOM to just before <silkscreentext
    pattern = r'\{/\* === VIZCOM LOGO.*?(?=\s*<silkscreentext)'
    
    # Generate new logo - smaller (10mm) and positioned at (-5, 12) on left side
    new_vizcom = generate_logo_jsx(10, -5, 12)
    
    # Replace old logos with new
    content = re.sub(pattern, '', content, flags=re.DOTALL)
    
    # Remove old Telemetron section  
    pattern2 = r'\{/\* === TELEMETRON.*?(?=\s*<silkscreentext)'
    content = re.sub(pattern2, '', content, flags=re.DOTALL)
    
    # Insert new logos before the CRAFT NIGHT text
    craft_night_pattern = r'(\s*<silkscreentext text="CRAFT NIGHT)'
    replacement = f"\n{new_vizcom}\n{telemetron_jsx}\n\\1"
    content = re.sub(craft_night_pattern, replacement, content)
    
    with open(pcb_file, 'w') as f:
        f.write(content)
    
    print(f"Updated {pcb_file}")

print("Done!")
