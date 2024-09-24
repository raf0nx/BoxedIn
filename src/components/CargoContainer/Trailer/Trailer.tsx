import * as THREE from 'three'

import { TRAILER } from '../../../helpers/constants'

interface TrailerProps {
  dimensions: {
    x: number
    y: number
    z: number
  }
}

export function Trailer({
  dimensions = { x: 7.2, y: 2.4, z: 2.45 },
}: TrailerProps) {
  const { x, y, z } = dimensions

  return (
    <lineSegments position={TRAILER.position}>
      <edgesGeometry args={[new THREE.BoxGeometry(x, y, z)]} />
      <lineBasicMaterial color={TRAILER.edgeColor} />
    </lineSegments>
  )
}
