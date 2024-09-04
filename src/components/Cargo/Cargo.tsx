import { Box, Edges } from '@react-three/drei'

import { CARGO_EDGE } from '../../helpers/constants'
import type { DIMENSIONS_3D } from '../../helpers/types'

interface CargoProps {
  dimensions: DIMENSIONS_3D
  position: DIMENSIONS_3D
  color: string
}

export function Cargo({ dimensions, position, color }: CargoProps) {
  return (
    <Box args={dimensions} position={position}>
      <meshStandardMaterial color={color} />
      <Edges
        linewidth={CARGO_EDGE.width}
        threshold={CARGO_EDGE.threshold}
        color={CARGO_EDGE.color}
      />
    </Box>
  )
}
