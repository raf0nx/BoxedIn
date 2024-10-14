import { ToolsInput } from '../ToolsInput'
import type { DIMENSIONS_3D } from '../../../helpers/types'

import './SpaceDimensionsTool.css'

interface SpaceDimensionsToolProps {
  dimensions: DIMENSIONS_3D
  onLoadingSpaceDimensionsUpdate: (dimensionIdx: number, value: number) => void
}

export function SpaceDimensionsTool({
  dimensions,
  onLoadingSpaceDimensionsUpdate,
}: SpaceDimensionsToolProps) {
  const [length, height, width] = dimensions

  return (
    <div className="space-dimensions-tool">
      <h4 className="space-dimensions-tool__title">LOADING SPACE DIMENSIONS</h4>
      <div className="space-dimensions-tool__data">
        <ToolsInput
          value={length}
          label="Length"
          onChange={value => onLoadingSpaceDimensionsUpdate(0, value)}
        />
        <ToolsInput
          value={height}
          label="Height"
          onChange={value => onLoadingSpaceDimensionsUpdate(1, value)}
        />
        <ToolsInput
          value={width}
          label="Width"
          onChange={value => onLoadingSpaceDimensionsUpdate(2, value)}
        />
      </div>
    </div>
  )
}
