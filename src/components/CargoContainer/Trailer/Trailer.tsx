import * as THREE from 'three'

export function Trailer() {
  return (
    <lineSegments position={[3.6, 1.2, 0]}>
      <edgesGeometry args={[new THREE.BoxGeometry(7.2, 2.4, 2.45)]} />
      <lineBasicMaterial color={0x808080} />
    </lineSegments>
  )
}
