import * as THREE from 'three'

import { TRAILER } from '../../../helpers/constants'

export function Trailer() {
  const [x, y, z] = TRAILER.dimensions

  return (
    <lineSegments position={TRAILER.position}>
      <edgesGeometry args={[new THREE.BoxGeometry(x, y, z)]} />
      <lineBasicMaterial color={TRAILER.edgeColor} />
    </lineSegments>
  )
}
