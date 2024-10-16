import * as THREE from 'three'

import { useCargoDistributionContext } from '../../../hooks'
import { TRAILER } from '../../../helpers/constants'
import type { DIMENSIONS_3D } from '../../../helpers/types'

export function Trailer() {
  const {
    loadingSpaceDimensions: [x, y, z],
  } = useCargoDistributionContext()

  function getTrailerPosition(): DIMENSIONS_3D {
    const horizontallyCentered = x / 2
    const verticallyCentered = y / 2

    return [horizontallyCentered, verticallyCentered, 0]
  }

  return (
    <lineSegments position={getTrailerPosition()}>
      <edgesGeometry args={[new THREE.BoxGeometry(x, y, z)]} />
      <lineBasicMaterial color={TRAILER.edgeColor} />
    </lineSegments>
  )
}
