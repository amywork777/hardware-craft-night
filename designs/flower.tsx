/**
 * Flower-Shaped LED PCB for Hardware Craft Night
 * 2 LEDs as stamens in the center
 */
import { VizcomLogo, TelemetronIcon } from "./logos"

const flowerOutline = [
  { x: 22.50, y: -0.00 }, { x: 22.30, y: -1.17 }, { x: 21.70, y: -2.28 },
  { x: 20.71, y: -3.28 }, { x: 19.38, y: -4.12 }, { x: 17.76, y: -4.75 },
  { x: 15.89, y: -5.16 }, { x: 13.84, y: -5.32 }, { x: 11.67, y: -5.20 },
  { x: 9.48, y: -4.82 }, { x: 7.31, y: -4.22 },
  { x: 8.92, y: -5.79 }, { x: 10.34, y: -7.51 }, { x: 11.52, y: -9.32 },
  { x: 12.42, y: -11.18 }, { x: 12.99, y: -12.99 }, { x: 13.26, y: -14.72 },
  { x: 13.19, y: -16.30 }, { x: 12.82, y: -17.65 }, { x: 12.16, y: -18.73 },
  { x: 11.25, y: -19.49 },
  { x: 10.14, y: -19.90 }, { x: 8.87, y: -19.93 }, { x: 7.51, y: -19.57 },
  { x: 6.12, y: -18.84 }, { x: 4.75, y: -17.76 }, { x: 3.47, y: -16.34 },
  { x: 2.32, y: -14.64 }, { x: 1.34, y: -12.71 }, { x: 0.56, y: -10.62 },
  { x: 0.00, y: -8.44 },
  { x: -0.56, y: -10.62 }, { x: -1.34, y: -12.71 }, { x: -2.32, y: -14.64 },
  { x: -3.47, y: -16.34 }, { x: -4.75, y: -17.76 }, { x: -6.12, y: -18.84 },
  { x: -7.51, y: -19.57 }, { x: -8.87, y: -19.93 }, { x: -10.14, y: -19.90 },
  { x: -11.25, y: -19.49 },
  { x: -12.16, y: -18.73 }, { x: -12.82, y: -17.65 }, { x: -13.19, y: -16.30 },
  { x: -13.26, y: -14.72 }, { x: -12.99, y: -12.99 }, { x: -12.42, y: -11.18 },
  { x: -11.52, y: -9.32 }, { x: -10.34, y: -7.51 }, { x: -8.92, y: -5.79 },
  { x: -7.31, y: -4.22 },
  { x: -9.48, y: -4.82 }, { x: -11.67, y: -5.20 }, { x: -13.84, y: -5.32 },
  { x: -15.89, y: -5.16 }, { x: -17.76, y: -4.75 }, { x: -19.38, y: -4.12 },
  { x: -20.71, y: -3.28 }, { x: -21.70, y: -2.28 }, { x: -22.30, y: -1.17 },
  { x: -22.50, y: -0.00 },
  { x: -22.30, y: 1.17 }, { x: -21.70, y: 2.28 }, { x: -20.71, y: 3.28 },
  { x: -19.38, y: 4.12 }, { x: -17.76, y: 4.75 }, { x: -15.89, y: 5.16 },
  { x: -13.84, y: 5.32 }, { x: -11.67, y: 5.20 }, { x: -9.48, y: 4.82 },
  { x: -7.31, y: 4.22 },
  { x: -8.92, y: 5.79 }, { x: -10.34, y: 7.51 }, { x: -11.52, y: 9.32 },
  { x: -12.42, y: 11.18 }, { x: -12.99, y: 12.99 }, { x: -13.26, y: 14.72 },
  { x: -13.19, y: 16.30 }, { x: -12.82, y: 17.65 }, { x: -12.16, y: 18.73 },
  { x: -11.25, y: 19.49 },
  { x: -10.14, y: 19.90 }, { x: -8.87, y: 19.93 }, { x: -7.51, y: 19.57 },
  { x: -6.12, y: 18.84 }, { x: -4.75, y: 17.76 }, { x: -3.47, y: 16.34 },
  { x: -2.32, y: 14.64 }, { x: -1.34, y: 12.71 }, { x: -0.56, y: 10.62 },
  { x: -0.00, y: 8.44 },
  { x: 0.56, y: 10.62 }, { x: 1.34, y: 12.71 }, { x: 2.32, y: 14.64 },
  { x: 3.47, y: 16.34 }, { x: 4.75, y: 17.76 }, { x: 6.12, y: 18.84 },
  { x: 7.51, y: 19.57 }, { x: 8.87, y: 19.93 }, { x: 10.14, y: 19.90 },
  { x: 11.25, y: 19.49 },
  { x: 12.16, y: 18.73 }, { x: 12.82, y: 17.65 }, { x: 13.19, y: 16.30 },
  { x: 13.26, y: 14.72 }, { x: 12.99, y: 12.99 }, { x: 12.42, y: 11.18 },
  { x: 11.52, y: 9.32 }, { x: 10.34, y: 7.51 }, { x: 8.92, y: 5.79 },
  { x: 7.31, y: 4.22 },
  { x: 9.48, y: 4.82 }, { x: 11.67, y: 5.20 }, { x: 13.84, y: 5.32 },
  { x: 15.89, y: 5.16 }, { x: 17.76, y: 4.75 }, { x: 19.38, y: 4.12 },
  { x: 20.71, y: 3.28 }, { x: 21.70, y: 2.28 }, { x: 22.30, y: 1.17 },
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
        { x: 3.52, y: 0.00 }, { x: 3.05, y: 1.76 }, { x: 1.76, y: 3.05 },
        { x: 0.00, y: 3.52 }, { x: -1.76, y: 3.05 }, { x: -3.05, y: 1.76 },
        { x: -3.52, y: 0.00 }, { x: -3.05, y: -1.76 }, { x: -1.76, y: -3.05 },
        { x: 0.00, y: -3.52 }, { x: 1.76, y: -3.05 }, { x: 3.05, y: -1.76 },
        { x: 3.52, y: 0.00 },
      ]} />
      <silkscreenpath route={[{ x: 2.53, y: -2.39 }, { x: 2.53, y: 2.39 }]} />
      <silkscreentext text="+" pcbX={-1.27} pcbY={-2} fontSize={0.8} />
    </footprint>
  </chip>
)

export default () => (
  <board width="47mm" height="42mm" outline={flowerOutline}>
    <hole diameter="2.5mm" pcbX={9} pcbY={17} />
    <SmtBattery name="BAT1" pcbX={0} pcbY={1} />
    <SmtSwitch name="SW1" pcbX={0} pcbY={5} />
    <resistor name="R1" resistance="68" footprint="0603" pcbX={0} pcbY={7} connections={{ pin1: "net.VSWITCHED", pin2: "net.VLED" }} />

    {/* 1 LED as stamen in the flower center */}
    <ThruHoleLed name="LED1" pcbX={0} pcbY={-3} />

    <trace from=".BAT1 > .pos" to="net.VBAT" />
    <trace from=".BAT1 > .neg" to="net.GND" />
    <trace from=".SW1 > .pin1" to="net.VBAT" />
    <trace from=".SW1 > .pin2" to="net.VSWITCHED" />
    <trace from=".LED1 > .pin1" to="net.VLED" />
    <trace from=".LED1 > .pin2" to="net.GND" />

    {/* Logos on back silkscreen — one on each side petal */}
    <VizcomLogo pcbX={-15} pcbY={0} />
    <TelemetronIcon pcbX={15} pcbY={0} />
    <silkscreentext layer="bottom" text="Telemetron" pcbX={15} pcbY={2.5} fontSize={1} />
  </board>
)
