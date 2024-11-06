import { describe, it, expect } from 'vitest'
import * as THREE from 'three'

import { getCustomEdgesGeometry } from '../components/CargoContainer/Cabin/helpers'
import { CABIN } from '../helpers/constants'

describe('getCustomEdgesGeometry', () => {
  it('returns a BufferGeometry instance', () => {
    // When
    const geometry = getCustomEdgesGeometry()

    // Then
    expect(geometry).toBeInstanceOf(THREE.BufferGeometry)
  })

  it('sets the position attribute correctly based on CABIN edges and vertices', () => {
    // Given
    const expectedLength = CABIN.edges.length * 3

    // When
    const geometry = getCustomEdgesGeometry()
    const positionAttribute = geometry.getAttribute('position')

    // Then
    expect(positionAttribute).toBeInstanceOf(THREE.BufferAttribute)
    expect(positionAttribute.array).toBeInstanceOf(Float32Array)
    expect(positionAttribute.array.length).toBe(expectedLength)

    // Validate that each edge's coordinates in position array match CABIN vertices and edges
    for (let i = 0; i < CABIN.edges.length; i++) {
      const edgeIndex = CABIN.edges[i]
      expect(positionAttribute.array[i * 3]).toBe(CABIN.vertices[edgeIndex * 3])
      expect(positionAttribute.array[i * 3 + 1]).toBe(
        CABIN.vertices[edgeIndex * 3 + 1]
      )
      expect(positionAttribute.array[i * 3 + 2]).toBe(
        CABIN.vertices[edgeIndex * 3 + 2]
      )
    }
  })

  it('creates a position attribute with the correct item size', () => {
    // When
    const geometry = getCustomEdgesGeometry()
    const positionAttribute = geometry.getAttribute('position')

    // Then
    // Each position attribute should have an item size of 3 (x, y, z coordinates per vertex)
    expect(positionAttribute.itemSize).toBe(3)
  })

  it('ensures the resulting geometry does not share references with CABIN data', () => {
    // Given
    const cabinVerticesCopy = new Float32Array(CABIN.vertices)

    // When
    const geometry = getCustomEdgesGeometry()
    const positionAttribute = geometry.getAttribute('position')

    // Modify the original CABIN vertices to check for unintended shared references
    CABIN.vertices[0] += 10

    // Then
    expect(positionAttribute.array[0]).toBe(cabinVerticesCopy[0])

    // Restore CABIN vertices for clean-up after test
    CABIN.vertices[0] -= 10
  })
})
