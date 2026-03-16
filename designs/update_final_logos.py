import re

# VIZCOM wordmark for each shape (just the text, no V chevron)
star_vizcom = """    {/* VIZCOM wordmark - 10mm wide at (0, 13) */}
    <silkscreenpath layer="bottom" route={[{ x: 1.68, y: 12.19 }, { x: 1.20, y: 12.59 }, { x: 1.15, y: 13.27 }, { x: 1.57, y: 13.76 }, { x: 2.20, y: 13.83 }, { x: 2.72, y: 13.46 }, { x: 2.82, y: 12.78 }, { x: 2.48, y: 12.28 }, { x: 1.82, y: 12.15 }, { x: 2.39, y: 12.92 }, { x: 2.09, y: 13.45 }, { x: 1.58, y: 13.15 }, { x: 1.78, y: 12.57 }]} />
    <silkscreenpath layer="bottom" route={[{ x: -5.00, y: 12.18 }, { x: -4.84, y: 12.57 }, { x: -4.53, y: 13.35 }, { x: -4.35, y: 13.78 }, { x: -3.87, y: 13.76 }, { x: -3.65, y: 13.24 }, { x: -3.39, y: 12.58 }, { x: -3.24, y: 12.21 }, { x: -3.72, y: 12.32 }, { x: -3.96, y: 12.92 }, { x: -4.13, y: 13.14 }, { x: -4.42, y: 12.45 }, { x: -4.71, y: 12.17 }]} />
    <silkscreenpath layer="bottom" route={[{ x: -2.94, y: 12.99 }, { x: -2.94, y: 13.32 }, { x: -2.94, y: 13.66 }, { x: -2.77, y: 13.82 }, { x: -2.51, y: 13.74 }, { x: -2.51, y: 13.41 }, { x: -2.51, y: 13.07 }, { x: -2.51, y: 12.74 }, { x: -2.51, y: 12.41 }, { x: -2.60, y: 12.17 }, { x: -2.94, y: 12.17 }, { x: -2.94, y: 12.49 }, { x: -2.94, y: 12.82 }]} />
    <silkscreenpath layer="bottom" route={[{ x: -2.15, y: 12.20 }, { x: -1.85, y: 12.54 }, { x: -1.46, y: 12.62 }, { x: -1.92, y: 13.21 }, { x: -2.18, y: 13.74 }, { x: -1.63, y: 13.81 }, { x: -1.01, y: 13.80 }, { x: -0.94, y: 13.47 }, { x: -1.59, y: 13.43 }, { x: -1.25, y: 12.97 }, { x: -0.86, y: 12.46 }, { x: -1.21, y: 12.17 }, { x: -2.02, y: 12.17 }]} />
    <silkscreenpath layer="bottom" route={[{ x: 0.04, y: 12.19 }, { x: -0.44, y: 12.48 }, { x: -0.62, y: 13.00 }, { x: -0.43, y: 13.53 }, { x: 0.03, y: 13.80 }, { x: 0.62, y: 13.74 }, { x: 0.73, y: 13.37 }, { x: 0.24, y: 13.45 }, { x: -0.16, y: 13.13 }, { x: 0.01, y: 12.61 }, { x: 0.54, y: 12.65 }, { x: 0.86, y: 12.41 }, { x: 0.32, y: 12.18 }]} />
    <silkscreenpath layer="bottom" route={[{ x: 3.17, y: 12.99 }, { x: 3.17, y: 13.81 }, { x: 3.58, y: 13.39 }, { x: 3.84, y: 13.42 }, { x: 4.28, y: 13.48 }, { x: 4.59, y: 13.37 }, { x: 4.99, y: 13.82 }, { x: 5.00, y: 13.00 }, { x: 4.99, y: 12.18 }, { x: 4.40, y: 12.56 }, { x: 4.02, y: 13.02 }, { x: 3.56, y: 12.22 }, { x: 3.17, y: 12.58 }]} />"""

flower_vizcom = """    {/* VIZCOM wordmark - 10mm wide at (0, 12) */}
    <silkscreenpath layer="bottom" route={[{ x: 1.68, y: 11.19 }, { x: 1.20, y: 11.59 }, { x: 1.15, y: 12.27 }, { x: 1.57, y: 12.76 }, { x: 2.20, y: 12.83 }, { x: 2.72, y: 12.46 }, { x: 2.82, y: 11.78 }, { x: 2.48, y: 11.28 }, { x: 1.82, y: 11.15 }, { x: 2.39, y: 11.92 }, { x: 2.09, y: 12.45 }, { x: 1.58, y: 12.15 }, { x: 1.78, y: 11.57 }]} />
    <silkscreenpath layer="bottom" route={[{ x: -5.00, y: 11.18 }, { x: -4.84, y: 11.57 }, { x: -4.53, y: 12.35 }, { x: -4.35, y: 12.78 }, { x: -3.87, y: 12.76 }, { x: -3.65, y: 12.24 }, { x: -3.39, y: 11.58 }, { x: -3.24, y: 11.21 }, { x: -3.72, y: 11.32 }, { x: -3.96, y: 11.92 }, { x: -4.13, y: 12.14 }, { x: -4.42, y: 11.45 }, { x: -4.71, y: 11.17 }]} />
    <silkscreenpath layer="bottom" route={[{ x: -2.94, y: 11.99 }, { x: -2.94, y: 12.32 }, { x: -2.94, y: 12.66 }, { x: -2.77, y: 12.82 }, { x: -2.51, y: 12.74 }, { x: -2.51, y: 12.41 }, { x: -2.51, y: 12.07 }, { x: -2.51, y: 11.74 }, { x: -2.51, y: 11.41 }, { x: -2.60, y: 11.17 }, { x: -2.94, y: 11.17 }, { x: -2.94, y: 11.49 }, { x: -2.94, y: 11.82 }]} />
    <silkscreenpath layer="bottom" route={[{ x: -2.15, y: 11.20 }, { x: -1.85, y: 11.54 }, { x: -1.46, y: 11.62 }, { x: -1.92, y: 12.21 }, { x: -2.18, y: 12.74 }, { x: -1.63, y: 12.81 }, { x: -1.01, y: 12.80 }, { x: -0.94, y: 12.47 }, { x: -1.59, y: 12.43 }, { x: -1.25, y: 11.97 }, { x: -0.86, y: 11.46 }, { x: -1.21, y: 11.17 }, { x: -2.02, y: 11.17 }]} />
    <silkscreenpath layer="bottom" route={[{ x: 0.04, y: 11.19 }, { x: -0.44, y: 11.48 }, { x: -0.62, y: 12.00 }, { x: -0.43, y: 12.53 }, { x: 0.03, y: 12.80 }, { x: 0.62, y: 12.74 }, { x: 0.73, y: 12.37 }, { x: 0.24, y: 12.45 }, { x: -0.16, y: 12.13 }, { x: 0.01, y: 11.61 }, { x: 0.54, y: 11.65 }, { x: 0.86, y: 11.41 }, { x: 0.32, y: 11.18 }]} />
    <silkscreenpath layer="bottom" route={[{ x: 3.17, y: 11.99 }, { x: 3.17, y: 12.81 }, { x: 3.58, y: 12.39 }, { x: 3.84, y: 12.42 }, { x: 4.28, y: 12.48 }, { x: 4.59, y: 12.37 }, { x: 4.99, y: 12.82 }, { x: 5.00, y: 12.00 }, { x: 4.99, y: 11.18 }, { x: 4.40, y: 11.56 }, { x: 4.02, y: 12.02 }, { x: 3.56, y: 11.22 }, { x: 3.17, y: 11.58 }]} />"""

heart_vizcom = """    {/* VIZCOM wordmark - 10mm wide at (0, 10) */}
    <silkscreenpath layer="bottom" route={[{ x: 1.68, y: 9.19 }, { x: 1.20, y: 9.59 }, { x: 1.15, y: 10.27 }, { x: 1.57, y: 10.76 }, { x: 2.20, y: 10.83 }, { x: 2.72, y: 10.46 }, { x: 2.82, y: 9.78 }, { x: 2.48, y: 9.28 }, { x: 1.82, y: 9.15 }, { x: 2.39, y: 9.92 }, { x: 2.09, y: 10.45 }, { x: 1.58, y: 10.15 }, { x: 1.78, y: 9.57 }]} />
    <silkscreenpath layer="bottom" route={[{ x: -5.00, y: 9.18 }, { x: -4.84, y: 9.57 }, { x: -4.53, y: 10.35 }, { x: -4.35, y: 10.78 }, { x: -3.87, y: 10.76 }, { x: -3.65, y: 10.24 }, { x: -3.39, y: 9.58 }, { x: -3.24, y: 9.21 }, { x: -3.72, y: 9.32 }, { x: -3.96, y: 9.92 }, { x: -4.13, y: 10.14 }, { x: -4.42, y: 9.45 }, { x: -4.71, y: 9.17 }]} />
    <silkscreenpath layer="bottom" route={[{ x: -2.94, y: 9.99 }, { x: -2.94, y: 10.32 }, { x: -2.94, y: 10.66 }, { x: -2.77, y: 10.82 }, { x: -2.51, y: 10.74 }, { x: -2.51, y: 10.41 }, { x: -2.51, y: 10.07 }, { x: -2.51, y: 9.74 }, { x: -2.51, y: 9.41 }, { x: -2.60, y: 9.17 }, { x: -2.94, y: 9.17 }, { x: -2.94, y: 9.49 }, { x: -2.94, y: 9.82 }]} />
    <silkscreenpath layer="bottom" route={[{ x: -2.15, y: 9.20 }, { x: -1.85, y: 9.54 }, { x: -1.46, y: 9.62 }, { x: -1.92, y: 10.21 }, { x: -2.18, y: 10.74 }, { x: -1.63, y: 10.81 }, { x: -1.01, y: 10.80 }, { x: -0.94, y: 10.47 }, { x: -1.59, y: 10.43 }, { x: -1.25, y: 9.97 }, { x: -0.86, y: 9.46 }, { x: -1.21, y: 9.17 }, { x: -2.02, y: 9.17 }]} />
    <silkscreenpath layer="bottom" route={[{ x: 0.04, y: 9.19 }, { x: -0.44, y: 9.48 }, { x: -0.62, y: 10.00 }, { x: -0.43, y: 10.53 }, { x: 0.03, y: 10.80 }, { x: 0.62, y: 10.74 }, { x: 0.73, y: 10.37 }, { x: 0.24, y: 10.45 }, { x: -0.16, y: 10.13 }, { x: 0.01, y: 9.61 }, { x: 0.54, y: 9.65 }, { x: 0.86, y: 9.41 }, { x: 0.32, y: 9.18 }]} />
    <silkscreenpath layer="bottom" route={[{ x: 3.17, y: 9.99 }, { x: 3.17, y: 10.81 }, { x: 3.58, y: 10.39 }, { x: 3.84, y: 10.42 }, { x: 4.28, y: 10.48 }, { x: 4.59, y: 10.37 }, { x: 4.99, y: 10.82 }, { x: 5.00, y: 10.00 }, { x: 4.99, y: 9.18 }, { x: 4.40, y: 9.56 }, { x: 4.02, y: 10.02 }, { x: 3.56, y: 9.22 }, { x: 3.17, y: 9.58 }]} />"""

# Telemetron squares - small, positioned next to VIZCOM
telemetron = """    {/* TELEMETRON squares */}
    <silkscreenpath layer="bottom" route={[{ x: 6, y: 12 }, { x: 7.5, y: 12 }, { x: 7.5, y: 13.5 }, { x: 6, y: 13.5 }, { x: 6, y: 12 }]} />
    <silkscreenpath layer="bottom" route={[{ x: 6.5, y: 12.5 }, { x: 8, y: 12.5 }, { x: 8, y: 14 }, { x: 6.5, y: 14 }, { x: 6.5, y: 12.5 }]} />
    <silkscreenpath layer="bottom" route={[{ x: 7, y: 13 }, { x: 8.5, y: 13 }, { x: 8.5, y: 14.5 }, { x: 7, y: 14.5 }, { x: 7, y: 13 }]} />"""

files = {
    'star.tsx': star_vizcom,
    'flower.tsx': flower_vizcom,
    'heart.tsx': heart_vizcom
}

for filename, vizcom in files.items():
    with open(filename, 'r') as f:
        content = f.read()
    
    # Remove all existing logo stuff
    # Find pattern from {/* to just before </board>
    content = re.sub(r'\s*\{/\*.*?VIZCOM.*?\]} />', '', content, flags=re.DOTALL)
    content = re.sub(r'\s*\{/\*.*?TELEMETRON.*?\]} />', '', content, flags=re.DOTALL)
    # Also clean up any leftover simple logos
    content = re.sub(r'\s*<silkscreenpath layer="bottom" route=\{\[\{ x: -12.*?\]} />', '', content, flags=re.DOTALL)
    content = re.sub(r'\s*<silkscreenpath layer="bottom" route=\{\[\{ x: 8.*?\]} />', '', content, flags=re.DOTALL)
    
    # Insert new logos before </board>
    logos = f"\n{vizcom}\n{telemetron}\n"
    content = content.replace('  </board>', f'{logos}  </board>')
    
    with open(filename, 'w') as f:
        f.write(content)
    
    print(f"Updated {filename}")

print("Done!")
