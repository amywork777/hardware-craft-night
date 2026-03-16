/**
 * Heart-Shaped LED PCB for Hardware Craft Night
 * 3 LEDs arranged in heart pattern
 */
import { VizcomLogo, TelemetronIcon } from "./logos"

const heartOutline = [
  // Bail/tab for keychain (extends between lobes)
  { x: 0.00, y: -19.00 },
  { x: 1.50, y: -18.50 }, { x: 2.30, y: -17.80 }, { x: 2.80, y: -16.80 },
  { x: 3.00, y: -15.50 }, { x: 3.00, y: -14.00 }, { x: 2.81, y: -13.02 },
  // Right lobe
  { x: 4.57, y: -14.62 }, { x: 6.74, y: -15.88 }, { x: 9.24, y: -16.62 },
  { x: 11.91, y: -16.73 }, { x: 14.61, y: -16.17 }, { x: 17.16, y: -14.96 },
  { x: 19.35, y: -13.18 }, { x: 21.05, y: -10.94 }, { x: 22.13, y: -8.37 },
  { x: 22.50, y: -5.62 }, { x: 22.13, y: -2.81 }, { x: 21.05, y: -0.03 },
  { x: 19.35, y: 2.67 }, { x: 17.16, y: 5.26 }, { x: 14.61, y: 7.73 },
  { x: 11.91, y: 10.11 }, { x: 9.24, y: 12.40 }, { x: 6.74, y: 14.60 },
  // Bottom tip
  { x: 4.57, y: 16.69 }, { x: 2.81, y: 18.65 }, { x: 1.52, y: 20.39 },
  { x: 0.66, y: 21.85 }, { x: 0.20, y: 22.96 }, { x: 0.03, y: 23.67 },
  { x: 0.00, y: 23.91 },
  { x: -0.03, y: 23.67 }, { x: -0.20, y: 22.96 }, { x: -0.66, y: 21.85 },
  { x: -1.52, y: 20.39 }, { x: -2.81, y: 18.65 }, { x: -4.57, y: 16.69 },
  // Left lobe
  { x: -6.74, y: 14.60 }, { x: -9.24, y: 12.40 }, { x: -11.91, y: 10.11 },
  { x: -14.61, y: 7.73 }, { x: -17.16, y: 5.26 }, { x: -19.35, y: 2.67 },
  { x: -21.05, y: -0.03 }, { x: -22.13, y: -2.81 }, { x: -22.50, y: -5.62 },
  { x: -22.13, y: -8.37 }, { x: -21.05, y: -10.94 }, { x: -19.35, y: -13.18 },
  { x: -17.16, y: -14.96 }, { x: -14.61, y: -16.17 }, { x: -11.91, y: -16.73 },
  { x: -9.24, y: -16.62 }, { x: -6.74, y: -15.88 }, { x: -4.57, y: -14.62 },
  // Left side of bail
  { x: -2.81, y: -13.02 },
  { x: -3.00, y: -14.00 }, { x: -3.00, y: -15.50 }, { x: -2.80, y: -16.80 },
  { x: -2.30, y: -17.80 }, { x: -1.50, y: -18.50 },
]

const SmtBattery = ({ name, pcbX, pcbY }: { name: string; pcbX: number; pcbY: number }) => (
  <chip name={name} pcbX={pcbX} pcbY={pcbY} connections={{ pos: "net.VBAT", neg: "net.GND" }}>
    <footprint>
      <smtpad portHints={["pos"]} pcbX={-5.9} pcbY={0} shape="rect" width={2.5} height={2.5} layer="top" />
      <smtpad portHints={["neg"]} pcbX={5.9} pcbY={0} shape="rect" width={2.5} height={2.5} layer="top" />
      <silkscreenpath route={[{ x: -5.9, y: -2 }, { x: -5.9, y: 2 }]} />
      <silkscreenpath route={[{ x: -6.5, y: 0 }, { x: -5.3, y: 0 }]} />
      <silkscreentext text="+" pcbX={-5.9} pcbY={-3} fontSize={1} />
      <silkscreentext text="-" pcbX={5.9} pcbY={-3} fontSize={1} />
    </footprint>
  </chip>
)

const SmtSwitch = ({ name, pcbX, pcbY }: { name: string; pcbX: number; pcbY: number }) => (
  <chip name={name} pcbX={pcbX} pcbY={pcbY} connections={{ pin1: "net.VBAT", pin2: "net.VSWITCHED" }}>
    <footprint>
      <smtpad portHints={["pin1"]} pcbX={-1.5} pcbY={0} shape="rect" width={1.2} height={0.9} layer="top" />
      <smtpad portHints={["pin2"]} pcbX={0} pcbY={0} shape="rect" width={1.2} height={0.9} layer="top" />
      <smtpad portHints={["pin3_nc"]} pcbX={1.5} pcbY={0} shape="rect" width={1.2} height={0.9} layer="top" />
      <silkscreenpath route={[{ x: -2.5, y: -1.5 }, { x: 2.5, y: -1.5 }, { x: 2.5, y: 1.5 }, { x: -2.5, y: 1.5 }, { x: -2.5, y: -1.5 }]} />
    </footprint>
  </chip>
)

const ThruHoleLed = ({ name, pcbX, pcbY }: { name: string; pcbX: number; pcbY: number }) => (
  <chip name={name} pcbX={pcbX} pcbY={pcbY} connections={{ pin1: "net.VLED", pin2: "net.GND" }}>
    <footprint>
      <platedhole portHints={["pin1"]} pcbX={-1.27} pcbY={0} shape="circle" holeDiameter="1.0mm" outerDiameter="1.8mm" />
      <platedhole portHints={["pin2"]} pcbX={1.27} pcbY={0} shape="circle" holeDiameter="1.0mm" outerDiameter="1.8mm" />
      <silkscreenpath route={[
        { x: 3.52, y: 0.00 }, { x: 3.05, y: 1.76 }, { x: 1.76, y: 3.05 }, { x: 0.00, y: 3.52 },
        { x: -1.76, y: 3.05 }, { x: -3.05, y: 1.76 }, { x: -3.52, y: 0.00 }, { x: -3.05, y: -1.76 },
        { x: -1.76, y: -3.05 }, { x: 0.00, y: -3.52 }, { x: 1.76, y: -3.05 }, { x: 3.05, y: -1.76 }, { x: 3.52, y: 0.00 },
      ]} />
      <silkscreenpath route={[{ x: 2.53, y: -2.39 }, { x: 2.53, y: 2.39 }]} />
      <silkscreentext text="+" pcbX={-1.27} pcbY={-2} fontSize={0.8} />
    </footprint>
  </chip>
)

export default () => (
  <board width="47mm" height="48mm" outline={heartOutline}>
    <hole diameter="2.5mm" pcbX={0} pcbY={-16} />
    <SmtBattery name="BAT1" pcbX={0} pcbY={5} />
    <SmtSwitch name="SW1" pcbX={0} pcbY={10} />
    <resistor name="R1" resistance="68" footprint="0603" pcbX={0} pcbY={13} connections={{ pin1: "net.VSWITCHED", pin2: "net.VLED" }} />

    <ThruHoleLed name="LED1" pcbX={0} pcbY={-3} />

    <trace from=".BAT1 > .pos" to="net.VBAT" />
    <trace from=".BAT1 > .neg" to="net.GND" />
    <trace from=".SW1 > .pin1" to="net.VBAT" />
    <trace from=".SW1 > .pin2" to="net.VSWITCHED" />
    <trace from=".LED1 > .pin1" to="net.VLED" />
    <trace from=".LED1 > .pin2" to="net.GND" />

    {/* Logos on back silkscreen — one in each lobe */}
    <VizcomLogo pcbX={-12} pcbY={-11} />
    <TelemetronIcon pcbX={14} pcbY={-11} />
  </board>
)
