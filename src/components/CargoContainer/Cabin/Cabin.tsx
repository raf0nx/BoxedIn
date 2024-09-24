import { CABIN } from '../../../helpers/constants'

import { getCustomEdgesGeometry } from './helpers'

export function Cabin() {
  const edgesGeometry = getCustomEdgesGeometry()

  return (
    <lineSegments position={CABIN.position}>
      <bufferGeometry attach="geometry" {...edgesGeometry} />
      <lineBasicMaterial color={CABIN.edgeColor} />
    </lineSegments>
  )
}
