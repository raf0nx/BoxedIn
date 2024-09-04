import { Box, Edges } from '@react-three/drei'

import { CARGO_EDGE } from '../../helpers/constants'

interface CargoProps {
  dimensions: [number, number, number]
  position: [number, number, number]
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
