import { ToolsInput } from '../ToolsInput'
import { useCargoDistributionContext } from '../../../hooks'
import type { DIMENSIONS_3D } from '../../../helpers/types'

import './SpaceDimensionsTool.css'

export function SpaceDimensionsTool() {
  const {
    loadingSpaceDimensions: [length, height, width],
    setLoadingSpaceDimensions,
  } = useCargoDistributionContext()

  function handleLoadingSpaceDimensionsUpdate(
    dimensionIdx: number,
    value: number
  ) {
    setLoadingSpaceDimensions(
      prevLoadingSpaceDimensions =>
        prevLoadingSpaceDimensions.map((el, idx) =>
          idx === dimensionIdx ? value : el
        ) as DIMENSIONS_3D
    )
  }

  return (
    <div className="space-dimensions-tool">
      <h4 className="space-dimensions-tool__title">LOADING SPACE DIMENSIONS</h4>
      <div className="space-dimensions-tool__data">
        <ToolsInput
          value={length}
          label="Length"
          onChange={value => handleLoadingSpaceDimensionsUpdate(0, value)}
        />
        <ToolsInput
          value={height}
          label="Height"
          onChange={value => handleLoadingSpaceDimensionsUpdate(1, value)}
        />
        <ToolsInput
          value={width}
          label="Width"
          onChange={value => handleLoadingSpaceDimensionsUpdate(2, value)}
        />
      </div>
    </div>
  )
}
