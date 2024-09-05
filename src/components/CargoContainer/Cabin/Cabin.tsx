import * as THREE from 'three'

export function Cabin() {
  const geometry = new THREE.BufferGeometry()

  const vertices = new Float32Array([
    // Bottom face
    -0.75,
    -1,
    1, // bottom-left
    0.75,
    -1,
    1, // bottom-right
    0.75,
    -1,
    -1, // top-right
    -0.75,
    -1,
    -1, // top-left

    // Top face
    -0.5,
    1,
    1, // bottom-left
    0.75,
    1,
    1, // bottom-right
    0.75,
    1,
    -1, // top-right
    -0.5,
    1,
    -1, // top-left
  ])

  const indices = [
    0, 1, 2, 2, 3, 0, 4, 5, 6, 6, 7, 4, 0, 1, 5, 5, 4, 0, 1, 2, 6, 6, 5, 1, 2,
    3, 7, 7, 6, 2, 3, 0, 4, 4, 7, 3,
  ]

  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
  geometry.setIndex(indices)
  geometry.computeVertexNormals()

  return (
    <lineSegments position={[-0.75, 1, 0]}>
      <edgesGeometry args={[geometry]} />
      <lineBasicMaterial color={0x808080} />
    </lineSegments>
  )
}
