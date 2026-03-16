#!/usr/bin/env python3
"""Convert SVG logos to tscircuit silkscreenpath coordinates."""

from svgpathtools import svg2paths2, parse_path
import numpy as np
import json

def sample_path(path, num_points=20):
    """Sample points along an SVG path."""
    points = []
    for i in range(num_points + 1):
        t = i / num_points
        point = path.point(t)
        points.append((point.real, point.imag))
    return points

def path_to_silkscreen(path_d, scale=0.15, offset_x=0, offset_y=0, num_points=15):
    """Convert SVG path d attribute to silkscreenpath route."""
    path = parse_path(path_d)
    points = sample_path(path, num_points)
    
    route = []
    for x, y in points:
        # Scale and offset
        sx = (x * scale) + offset_x
        sy = (y * scale) + offset_y
        route.append({"x": round(sx, 2), "y": round(sy, 2)})
    
    return route

def convert_vizcom_logo():
    """Convert Vizcom logo SVG to silkscreenpath routes."""
    # Vizcom logo paths (V, I, Z, C, O, M)
    paths = [
        # V
        "M4.15642 10.5461L0 0.287248H3.99099L5.99682 5.99116L8.00266 0.287248H11.8696L7.71315 10.5461H4.15642Z",
        # I
        "M16.3311 10.5461H12.5469V0.287248H16.3311V10.5461Z",
        # Z
        "M26.6803 0.287248V2.62626L22.2964 7.55051H26.763V10.5461H17.3542V8.16604L21.6967 3.28283H17.5817V0.287248H26.6803Z",
        # C
        "M27.0684 5.41667C27.0684 2.27746 29.3844 0 32.6517 0C33.4581 0 34.3473 0.184659 35.0711 0.533459V3.93939C34.4714 3.54956 33.851 3.3649 33.1893 3.3649C31.8866 3.3649 30.894 4.18561 30.894 5.41667C30.894 6.64773 31.8659 7.46843 33.1893 7.46843C33.851 7.46843 34.4921 7.26326 35.0711 6.8529V10.2588C34.2646 10.6692 33.3754 10.8333 32.5896 10.8333C29.4671 10.8333 27.0684 8.74053 27.0684 5.41667Z",
        # O
        "M41.4653 0C44.7326 0 47.1933 2.3185 47.1933 5.41667C47.1933 8.51484 44.7326 10.8333 41.4653 10.8333C38.1981 10.8333 35.7373 8.51484 35.7373 5.41667C35.7373 2.3185 38.1981 0 41.4653 0ZM41.4653 3.40593C40.39 3.40593 39.4388 4.2882 39.4388 5.41667C39.4388 6.54514 40.39 7.4274 41.4653 7.4274C42.5406 7.4274 43.4918 6.54514 43.4918 5.41667C43.4918 4.2882 42.5406 3.40593 41.4653 3.40593Z",
        # M
        "M51.6354 5.02534V10.5651H47.8512V0.306278H51.6354V1.51682C52.173 0.63456 53.1242 0.0190307 54.4477 0.0190307C55.7918 0.0190307 56.7844 0.634561 57.3427 1.66044C58.0664 0.47042 59.3279 0.0190307 60.5686 0.0190307C62.9053 0.0190307 64.1667 1.55786 64.1667 3.95842V10.5651H60.3825V4.98431C60.3825 3.99946 59.9275 3.44548 59.1624 3.44548C58.3973 3.44548 57.901 4.01998 57.901 5.02534V10.5651H54.1168V4.98431C54.1168 3.99946 53.6619 3.44548 52.8968 3.44548C52.1317 3.44548 51.6354 4.01998 51.6354 5.02534Z",
    ]
    
    # Scale to fit ~10mm width, center at origin
    # Original SVG is 65 wide x 11 tall
    # Target: ~10mm wide = scale of 10/65 ≈ 0.15
    scale = 0.15
    offset_x = -65 * scale / 2  # Center horizontally
    offset_y = -11 * scale / 2  # Center vertically
    
    routes = []
    for i, path_d in enumerate(paths):
        try:
            route = path_to_silkscreen(path_d, scale, offset_x, offset_y, num_points=20)
            routes.append(route)
        except Exception as e:
            print(f"Error processing path {i}: {e}")
    
    return routes

def convert_telemetron_icon():
    """Convert Telemetron icon (3 overlapping squares) to silkscreenpath routes."""
    # Telemetron icon: 3 overlapping squares
    # Original viewBox: 0 0 200 50
    # Icon is roughly x=5-35, y=10-40
    
    # Scale to fit ~5mm, center
    scale = 0.15
    
    # Three squares as closed paths
    routes = []
    
    # Square 1: x=5, y=10, 15x15
    sq1 = [
        {"x": 5, "y": 10}, {"x": 20, "y": 10}, {"x": 20, "y": 25}, {"x": 5, "y": 25}, {"x": 5, "y": 10}
    ]
    
    # Square 2: x=12.5, y=17.5, 15x15
    sq2 = [
        {"x": 12.5, "y": 17.5}, {"x": 27.5, "y": 17.5}, {"x": 27.5, "y": 32.5}, {"x": 12.5, "y": 32.5}, {"x": 12.5, "y": 17.5}
    ]
    
    # Square 3: x=20, y=25, 15x15
    sq3 = [
        {"x": 20, "y": 25}, {"x": 35, "y": 25}, {"x": 35, "y": 40}, {"x": 20, "y": 40}, {"x": 20, "y": 25}
    ]
    
    # Diagonal lines
    line1 = [{"x": 12.5, "y": 17.5}, {"x": 20, "y": 25}]
    line2 = [{"x": 20, "y": 25}, {"x": 27.5, "y": 32.5}]
    
    # Scale and center all
    offset_x = -20 * scale  # Center roughly
    offset_y = -25 * scale
    
    for shape in [sq1, sq2, sq3, line1, line2]:
        route = []
        for pt in shape:
            route.append({
                "x": round(pt["x"] * scale + offset_x, 2),
                "y": round(pt["y"] * scale + offset_y, 2)
            })
        routes.append(route)
    
    return routes

def generate_tscircuit_code():
    """Generate tscircuit silkscreenpath JSX code."""
    
    vizcom_routes = convert_vizcom_logo()
    telemetron_routes = convert_telemetron_icon()
    
    print("// === VIZCOM LOGO (paste into board) ===")
    print("// Position: adjust pcbX/pcbY offsets as needed")
    for i, route in enumerate(vizcom_routes):
        print(f"""<silkscreenpath
  layer="bottom"
  route={{[
    {', '.join([f'{{ x: {p["x"]}, y: {p["y"]} }}' for p in route])}
  ]}}
/>""")
        print()
    
    print("\n// === TELEMETRON ICON (paste into board) ===")
    for i, route in enumerate(telemetron_routes):
        print(f"""<silkscreenpath
  layer="bottom"
  route={{[
    {', '.join([f'{{ x: {p["x"]}, y: {p["y"]} }}' for p in route])}
  ]}}
/>""")
        print()

if __name__ == "__main__":
    generate_tscircuit_code()
