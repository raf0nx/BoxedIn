import * as THREE from 'three'

export function Cabin() {
  const geometry = new THREE.BufferGeometry()

  const vertices = new Float32Array([
    // Bottom face
    // bottom-left
    -0.75, -1, 1,
    // bottom-right
    0.75, -1, 1,
    // top-right
    0.75, -1, -1,
    // top-left
    -0.75, -1, -1,

    // Top face
    // bottom-left
    -0.5, 1, 1,
    // bottom-right
    0.75, 1, 1,
    // top-right
    0.75, 1, -1,
    // top-left
    -0.5, 1, -1,
  ])

  const edges = [
    // bottom-front
    0, 3,
    // bottom-left
    0, 1,
    // bottom-right
    2, 3,
    // vertical-left
    0, 4,
    // vertical-right
    3, 7,
    // top-front
    4, 7,
    // top-left
    4, 5,
    // top-right
    7, 6,
  ]

  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))

  const edgesGeometry = new THREE.BufferGeometry()
  const edgeVertices = new Float32Array(edges.length * 3)

  for (let i = 0; i < edges.length; i++) {
    edgeVertices[i * 3] = vertices[edges[i] * 3]
    edgeVertices[i * 3 + 1] = vertices[edges[i] * 3 + 1]
    edgeVertices[i * 3 + 2] = vertices[edges[i] * 3 + 2]
  }

  edgesGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(edgeVertices, 3)
  )

  return (
    <lineSegments position={[-0.75, 1, 0]}>
      <bufferGeometry attach="geometry" {...edgesGeometry} />
      <lineBasicMaterial color={0x808080} />
    </lineSegments>
  )
}
