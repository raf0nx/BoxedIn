import { useEffect, useRef, useState } from 'react'
import { Box, Edges } from '@react-three/drei'
import * as THREE from 'three'

import { CARGO_EDGE, TRAILER } from '../../helpers/constants'
import type { DIMENSIONS_3D } from '../../helpers/types'

interface CargoProps {
  dimensions: DIMENSIONS_3D
  position: DIMENSIONS_3D
  color: string
}

const TRAILER_WIDTH = TRAILER.dimensions[2]

export function Cargo({ dimensions, position, color }: CargoProps) {
  const boxRef = useRef<THREE.Mesh>(null)
  const [adjustedPosition, setAdjustedPosition] = useState(position)

  useEffect(() => {
    if (!boxRef.current) return

    const boundingBox = new THREE.Box3().setFromObject(boxRef.current)
    const size = new THREE.Vector3()

    boundingBox.getSize(size)

    const halfLength = size.x / 2
    const halfWidth = size.z / 2
    const adjustedZPosition = TRAILER_WIDTH / 2 - halfWidth

    setAdjustedPosition(initialPosition => {
      const [x, y, z] = initialPosition

      return [halfLength + x, y, adjustedZPosition - z]
    })
  }, [])

  return (
    <Box ref={boxRef} args={dimensions} position={adjustedPosition}>
      <meshStandardMaterial color={color} />
      <Edges
        linewidth={CARGO_EDGE.width}
        threshold={CARGO_EDGE.threshold}
        color={CARGO_EDGE.color}
      />
    </Box>
  )
}
