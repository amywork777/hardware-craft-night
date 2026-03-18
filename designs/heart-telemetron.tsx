/**
 * Heart-Shaped LED PCB — Telemetron branded
 * 1 LED socket, spread layout, rounded tip
 */
import { SmtBattery, SmtSwitch, LedSocket } from "./components"
import { TelemetronIconFront, TelemetronTextFront, TelemetronIconBig, TelemetronTextBig } from "./logos"

const heartOutline = [
  // Bail/tab for keychain
  { x: 0.00, y: -20.00 },
  { x: 2.00, y: -19.50 }, { x: 3.20, y: -18.50 }, { x: 3.80, y: -16.80 },
  { x: 4.00, y: -15.50 }, { x: 4.00, y: -14.80 },
  // Fillet: bail to right lobe (simple radius)
  { x: 4.05, y: -14.60 }, { x: 4.15, y: -14.50 },
  { x: 4.30, y: -14.48 }, { x: 4.45, y: -14.52 },
  { x: 4.57, y: -14.62 }, { x: 6.74, y: -15.88 }, { x: 9.24, y: -16.62 },
  { x: 11.91, y: -16.73 }, { x: 14.61, y: -16.17 }, { x: 17.16, y: -14.96 },
  { x: 19.35, y: -13.18 }, { x: 21.05, y: -10.94 }, { x: 22.13, y: -8.37 },
  { x: 22.50, y: -5.62 }, { x: 22.13, y: -2.81 }, { x: 21.05, y: -0.03 },
  { x: 19.35, y: 2.67 }, { x: 17.16, y: 5.26 }, { x: 14.61, y: 7.73 },
  { x: 11.91, y: 10.11 }, { x: 9.24, y: 12.40 }, { x: 6.74, y: 14.60 },
  // Bottom tip — heart V-shape with rounded end
  { x: 4.57, y: 16.69 }, { x: 2.81, y: 18.65 },
  { x: 1.8, y: 19.5 }, { x: 1.2, y: 19.8 }, { x: 0.6, y: 19.95 },
  { x: 0.00, y: 20.00 },
  { x: -0.6, y: 19.95 }, { x: -1.2, y: 19.8 }, { x: -1.8, y: 19.5 },
  { x: -2.81, y: 18.65 }, { x: -4.57, y: 16.69 },
  // Left lobe
  { x: -6.74, y: 14.60 }, { x: -9.24, y: 12.40 }, { x: -11.91, y: 10.11 },
  { x: -14.61, y: 7.73 }, { x: -17.16, y: 5.26 }, { x: -19.35, y: 2.67 },
  { x: -21.05, y: -0.03 }, { x: -22.13, y: -2.81 }, { x: -22.50, y: -5.62 },
  { x: -22.13, y: -8.37 }, { x: -21.05, y: -10.94 }, { x: -19.35, y: -13.18 },
  { x: -17.16, y: -14.96 }, { x: -14.61, y: -16.17 }, { x: -11.91, y: -16.73 },
  { x: -9.24, y: -16.62 }, { x: -6.74, y: -15.88 },
  // Fillet: left lobe to bail (simple radius)
  { x: -4.57, y: -14.62 }, { x: -4.45, y: -14.52 },
  { x: -4.30, y: -14.48 }, { x: -4.15, y: -14.50 },
  { x: -4.05, y: -14.60 }, { x: -4.00, y: -14.80 },
  { x: -4.00, y: -15.50 }, { x: -3.80, y: -16.80 },
  { x: -3.20, y: -18.50 }, { x: -2.00, y: -19.50 },
]

export default () => (
  <board width="47mm" height="46mm" outline={heartOutline}>
    <hole diameter="2.5mm" pcbX={0} pcbY={-16} />

    {/* Components spread out to avoid battery overlap */}
    <SmtBattery name="BAT1" pcbX={0} pcbY={5} />
    <SmtSwitch name="SW1" pcbX={15} pcbY={-8} />
    <resistor name="R1" resistance="68" footprint="0603" pcbX={10} pcbY={-8} connections={{ pin1: "net.VSWITCHED", pin2: "net.VLED" }} />
    <LedSocket name="J1" pcbX={0} pcbY={-10} />

    <trace from=".BAT1 > .pos" to="net.VBAT" />
    <trace from=".BAT1 > .neg" to="net.GND" />
    <trace from=".SW1 > .pin1" to="net.VBAT" />
    <trace from=".SW1 > .pin2" to="net.VSWITCHED" />
    <trace from=".J1 > .pin1" to="net.VLED" />
    <trace from=".J1 > .pin2" to="net.GND" />

    {/* Telemetron logo + text on front, left lobe */}
    <TelemetronIconFront pcbX={-10} pcbY={-7} />
    <TelemetronTextFront pcbX={-10} pcbY={-4} />

    {/* BIG Telemetron on back */}
    <TelemetronIconBig pcbX={0} pcbY={-2} />
    <TelemetronTextBig pcbX={0} pcbY={6} />
  </board>
)
