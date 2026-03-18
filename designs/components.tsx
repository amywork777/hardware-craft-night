/**
 * Shared PCB components for Hardware Craft Night boards
 */

// SMD CR2032 battery holder (LCSC C70377, Jingnuomei BH-CR2032-2P03)
export const SmtBattery = ({ name, pcbX, pcbY }: { name: string; pcbX: number; pcbY: number }) => (
  <chip name={name} pcbX={pcbX} pcbY={pcbY} connections={{ pos: "net.VBAT", neg: "net.GND" }}>
    <footprint>
      <smtpad portHints={["pos"]} pcbX={-7.25} pcbY={0} shape="rect" width={3.0} height={3.0} layer="top" />
      <smtpad portHints={["neg"]} pcbX={7.25} pcbY={0} shape="rect" width={3.0} height={3.0} layer="top" />
      <smtpad pcbX={0} pcbY={-5.1} shape="rect" width={2.0} height={2.0} layer="top" />
      <smtpad pcbX={0} pcbY={5.1} shape="rect" width={2.0} height={2.0} layer="top" />
      <silkscreenpath route={[{ x: -7.25, y: -2 }, { x: -7.25, y: 2 }]} />
      <silkscreenpath route={[{ x: -7.85, y: 0 }, { x: -6.65, y: 0 }]} />
      <silkscreentext text="+" pcbX={-7.25} pcbY={-3} fontSize={1} />
      <silkscreentext text="-" pcbX={7.25} pcbY={-3} fontSize={1} />
    </footprint>
  </chip>
)

// SMD Slide Switch (LCSC C128955, MK-12C02-G025, 3-pin SPDT, 1.0mm pitch)
export const SmtSwitch = ({ name, pcbX, pcbY }: { name: string; pcbX: number; pcbY: number }) => (
  <chip name={name} pcbX={pcbX} pcbY={pcbY} connections={{ pin1: "net.VBAT", pin2: "net.VSWITCHED" }}>
    <footprint>
      <smtpad portHints={["pin1"]} pcbX={-1.0} pcbY={0} shape="rect" width={0.7} height={1.5} layer="top" />
      <smtpad portHints={["pin2"]} pcbX={0} pcbY={0} shape="rect" width={0.7} height={1.5} layer="top" />
      <smtpad portHints={["pin3_nc"]} pcbX={1.0} pcbY={0} shape="rect" width={0.7} height={1.5} layer="top" />
      <smtpad pcbX={-3.5} pcbY={0} shape="rect" width={1.0} height={1.8} layer="top" />
      <smtpad pcbX={3.5} pcbY={0} shape="rect" width={1.0} height={1.8} layer="top" />
      <silkscreenpath route={[{ x: -2.0, y: -1.0 }, { x: 2.0, y: -1.0 }, { x: 2.0, y: 1.0 }, { x: -2.0, y: 1.0 }, { x: -2.0, y: -1.0 }]} />
    </footprint>
  </chip>
)

// 2-pin female header socket for LED (2.54mm pitch, JLCPCB pre-solders this)
// Attendees just push 5mm LED legs straight in — no tools needed
export const LedSocket = ({ name, pcbX, pcbY }: { name: string; pcbX: number; pcbY: number }) => (
  <chip name={name} pcbX={pcbX} pcbY={pcbY} connections={{ pin1: "net.VLED", pin2: "net.GND" }}>
    <footprint>
      <platedhole portHints={["pin1"]} pcbX={-1.27} pcbY={0} shape="circle" holeDiameter="1.0mm" outerDiameter="1.8mm" />
      <platedhole portHints={["pin2"]} pcbX={1.27} pcbY={0} shape="circle" holeDiameter="1.0mm" outerDiameter="1.8mm" />
      <silkscreenpath route={[
        { x: -2.5, y: -1.5 }, { x: 2.5, y: -1.5 },
        { x: 2.5, y: 1.5 }, { x: -2.5, y: 1.5 },
        { x: -2.5, y: -1.5 },
      ]} />
      <silkscreenpath route={[{ x: 1.27, y: -1.5 }, { x: 1.27, y: 1.5 }]} />
      <silkscreentext text="+" pcbX={-1.27} pcbY={-2.2} fontSize={0.8} />
      <silkscreentext text="LED" pcbX={0} pcbY={2.2} fontSize={0.8} />
    </footprint>
  </chip>
)
