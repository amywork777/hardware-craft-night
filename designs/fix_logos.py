import re

# For all 3 PCB files, replace the complex logo with a simple small one
# Put a small Vizcom V on the left arm and Telemetron squares on right arm

# Simple Vizcom V chevron (6mm wide, 4mm tall)
vizcom_v = """    {/* VIZCOM V - small, on back layer */}
    <silkscreenpath layer="bottom" route={[
      { x: -12, y: -3 }, { x: -10, y: 1 }, { x: -8, y: -3 }
    ]} />
    <silkscreenpath layer="bottom" route={[
      { x: -11.5, y: -2 }, { x: -10, y: 0 }, { x: -8.5, y: -2 }
    ]} />"""

# Simple Telemetron icon (3 small overlapping squares, 5mm total)
telemetron = """    {/* TELEMETRON - small squares, on back layer */}
    <silkscreenpath layer="bottom" route={[
      { x: 8, y: -3 }, { x: 10, y: -3 }, { x: 10, y: -1 }, { x: 8, y: -1 }, { x: 8, y: -3 }
    ]} />
    <silkscreenpath layer="bottom" route={[
      { x: 9, y: -2 }, { x: 11, y: -2 }, { x: 11, y: 0 }, { x: 9, y: 0 }, { x: 9, y: -2 }
    ]} />
    <silkscreenpath layer="bottom" route={[
      { x: 10, y: -1 }, { x: 12, y: -1 }, { x: 12, y: 1 }, { x: 10, y: 1 }, { x: 10, y: -1 }
    ]} />"""

for filename in ['flower.tsx', 'star.tsx', 'heart.tsx']:
    with open(filename, 'r') as f:
        content = f.read()
    
    # Remove everything from {/* VIZCOM to just before </board>
    # Then add our simple logos back
    
    # Find where board content ends (before </board>)
    # Remove all existing logo silkscreenpath on bottom layer
    
    # Pattern to remove old logos - from {/* === VIZCOM or {/* VIZCOM to end of logos section
    pattern = r'\s*\{/\*.*?VIZCOM.*?(?=\s*</board>)'
    content = re.sub(pattern, '', content, flags=re.DOTALL)
    
    # Also remove any remaining TELEMETRON sections
    pattern2 = r'\s*\{/\*.*?TELEMETRON.*?(?=\s*</board>)'
    content = re.sub(pattern2, '', content, flags=re.DOTALL)
    
    # Insert new simple logos before </board>
    new_logos = f"\n{vizcom_v}\n{telemetron}\n"
    content = content.replace('</board>', f'{new_logos}  </board>')
    
    with open(filename, 'w') as f:
        f.write(content)
    
    print(f"Updated {filename}")

print("Done!")
