import { ToolsInput } from '../ToolsInput'
import { TRAILER } from '../../../helpers/constants'

import './SpaceDimensionsTool.css'

export function SpaceDimensionsTool() {
  return (
    <div className="space-dimensions-tool">
      <h4 className="space-dimensions-tool__title">LOADING SPACE DIMENSIONS</h4>
      <div className="space-dimensions-tool__data">
        <ToolsInput value={TRAILER.dimensions[0]} label="Length" />
        <ToolsInput value={TRAILER.dimensions[1]} label="Height" />
        <ToolsInput value={TRAILER.dimensions[2]} label="Width" />
      </div>
    </div>
  )
}
