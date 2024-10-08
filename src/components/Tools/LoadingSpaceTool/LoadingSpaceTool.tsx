import { ToolsInput } from '../ToolsInput'

import './LoadingSpaceTool.css'

export function LoadingSpaceTool() {
  return (
    <div className="loading-space-tool">
      <h4 className="loading-space-tool__title">LOADING SPACE DIMENSIONS</h4>
      <div className="loading-space-tool__data">
        <ToolsInput label="Length" />
        <ToolsInput label="Height" />
        <ToolsInput label="Width" />
      </div>
    </div>
  )
}
