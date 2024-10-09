import { ToolsInput } from '../ToolsInput'

import './SpaceDimensionsTool.css'

export function SpaceDimensionsTool() {
  return (
    <div className="space-dimensions-tool">
      <h4 className="space-dimensions-tool__title">LOADING SPACE DIMENSIONS</h4>
      <div className="space-dimensions-tool__data">
        <ToolsInput label="Length" />
        <ToolsInput label="Height" />
        <ToolsInput label="Width" />
      </div>
    </div>
  )
}
