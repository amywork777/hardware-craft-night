import { convertSoupToGerberCommands, stringifyGerberCommandLayers, convertSoupToExcellonDrillCommands, stringifyExcellonDrill } from './node_modules/circuit-json-to-gerber/dist/index.js'
import fs from 'fs'
import { execSync } from 'child_process'

for (const shape of ['flower', 'star', 'heart']) {
  const soup = JSON.parse(fs.readFileSync(`exports/${shape}.json`, 'utf-8'))
  const gerberLayers = convertSoupToGerberCommands(soup)
  const stringifiedLayers = stringifyGerberCommandLayers(gerberLayers)
  // drill uses { circuitJson }
  const drillCommands = convertSoupToExcellonDrillCommands({ circuitJson: soup })
  const drillStr = stringifyExcellonDrill(drillCommands)

  const dir = `exports/gerbers_${shape}`
  fs.mkdirSync(dir, { recursive: true })
  for (const f of fs.readdirSync(dir)) fs.unlinkSync(`${dir}/${f}`)
  for (const [layer, content] of Object.entries(stringifiedLayers)) {
    fs.writeFileSync(`${dir}/${shape}_${layer}.gbr`, content)
  }
  if (drillStr) fs.writeFileSync(`${dir}/${shape}.drl`, drillStr)
  execSync(`cd exports && rm -f ${shape}-gerbers.zip && zip -r ${shape}-gerbers.zip gerbers_${shape}/`)
  const size = fs.statSync(`exports/${shape}-gerbers.zip`).size
  console.log(`✓ ${shape}: ${Object.keys(stringifiedLayers).length} layers, zip=${size}b`)
}
