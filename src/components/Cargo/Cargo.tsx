import { Box, Edges, Text } from '@react-three/drei'

import { CARGO_EDGE, CARGO_LABEL } from '../../helpers/constants'
import { useAdjustedPosition } from '../../hooks'

import { getCargoLabelData } from './helpers'
import type { CargoProps } from './types'

export function Cargo({ id, dimensions, position, color, label }: CargoProps) {
  const [adjustedPosition, boxRef] = useAdjustedPosition(position)

  return (
    <Box ref={boxRef} args={dimensions} position={adjustedPosition}>
      <meshStandardMaterial color={color} />
      <Edges
        linewidth={CARGO_EDGE.width}
        threshold={CARGO_EDGE.threshold}
        color={CARGO_EDGE.color}
      />
      {Object.entries(getCargoLabelData(dimensions)).map(
        ([side, labelData]) => (
          <Text
            key={`${id}-${side}`}
            position={labelData.position}
            rotation={labelData.rotation}
            maxWidth={labelData.maxWidth}
            fontSize={CARGO_LABEL.fontSize}
            textAlign={CARGO_LABEL.textAlign}
            overflowWrap={CARGO_LABEL.overflowWrap}
            outlineWidth={CARGO_LABEL.outlineWidth}
          >
            {label}
          </Text>
        )
      )}
    </Box>
  )
}
