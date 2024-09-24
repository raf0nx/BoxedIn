import * as THREE from 'three'

import { CABIN } from '../../../helpers/constants'

export function getCustomEdgesGeometry() {
  const edgesGeometry = new THREE.BufferGeometry()
  const filteredEdges = filterEdgesGeometry()

  edgesGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(filteredEdges, 3)
  )

  return edgesGeometry
}

function filterEdgesGeometry() {
  const { edges, vertices } = CABIN
  const edgeVertices = new Float32Array(edges.length * 3)

  for (let i = 0; i < edges.length; i++) {
    edgeVertices[i * 3] = vertices[edges[i] * 3]
    edgeVertices[i * 3 + 1] = vertices[edges[i] * 3 + 1]
    edgeVertices[i * 3 + 2] = vertices[edges[i] * 3 + 2]
  }

  return edgeVertices
}
