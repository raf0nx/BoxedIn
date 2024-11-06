import { describe, it, expect } from 'vitest'

import { getCargoLabelData } from '../components/Cargo/helpers'
import type { CargoLabelData } from '../components/Cargo/types'
import type { DIMENSIONS_3D } from '../helpers/types'

describe('getCargoLabelData', () => {
  it('calculates the correct label data for each face based on input dimensions', () => {
    // Given
    const dimensions: DIMENSIONS_3D = [2, 4, 6]
    const frontFaceOffset = dimensions[0] / 2 + 0.01
    const baseFaceOffset = dimensions[1] / 2 + 0.001
    const sideFaceOffset = dimensions[2] / 2 + 0.001

    // When
    const result: CargoLabelData = getCargoLabelData(dimensions)

    // Then
    expect(result).toEqual({
      leftFace: {
        position: [0, 0, sideFaceOffset],
        rotation: [0, 0, 0],
        maxWidth: dimensions[0],
      },
      rightFace: {
        position: [0, 0, -sideFaceOffset],
        rotation: [0, Math.PI, 0],
        maxWidth: dimensions[0],
      },
      topFace: {
        position: [0, baseFaceOffset, 0],
        rotation: [-Math.PI / 2, 0, 0],
        maxWidth: dimensions[0],
      },
      bottomFace: {
        position: [0, -baseFaceOffset, 0],
        rotation: [Math.PI / 2, 0, 0],
        maxWidth: dimensions[0],
      },
      frontFace: {
        position: [frontFaceOffset, 0, 0],
        rotation: [0, Math.PI / 2, 0],
        maxWidth: dimensions[2],
      },
      backFace: {
        position: [-frontFaceOffset, 0, 0],
        rotation: [0, -Math.PI / 2, 0],
        maxWidth: dimensions[2],
      },
    })
  })

  it('returns correct label data when dimensions are all zeros', () => {
    // Given
    const dimensions: DIMENSIONS_3D = [0, 0, 0]

    // When
    const result: CargoLabelData = getCargoLabelData(dimensions)

    // Then
    expect(result).toEqual({
      leftFace: {
        position: [0, 0, 0.001],
        rotation: [0, 0, 0],
        maxWidth: 0,
      },
      rightFace: {
        position: [0, 0, -0.001],
        rotation: [0, Math.PI, 0],
        maxWidth: 0,
      },
      topFace: {
        position: [0, 0.001, 0],
        rotation: [-Math.PI / 2, 0, 0],
        maxWidth: 0,
      },
      bottomFace: {
        position: [0, -0.001, 0],
        rotation: [Math.PI / 2, 0, 0],
        maxWidth: 0,
      },
      frontFace: {
        position: [0.01, 0, 0],
        rotation: [0, Math.PI / 2, 0],
        maxWidth: 0,
      },
      backFace: {
        position: [-0.01, 0, 0],
        rotation: [0, -Math.PI / 2, 0],
        maxWidth: 0,
      },
    })
  })

  it('calculates correct offsets and positions for each face when dimensions are negative', () => {
    // Given
    const dimensions: DIMENSIONS_3D = [-2, -4, -6]
    const frontFaceOffset = dimensions[0] / 2 + 0.01
    const baseFaceOffset = dimensions[1] / 2 + 0.001
    const sideFaceOffset = dimensions[2] / 2 + 0.001

    // When
    const result: CargoLabelData = getCargoLabelData(dimensions)

    // Then
    expect(result).toEqual({
      leftFace: {
        position: [0, 0, sideFaceOffset],
        rotation: [0, 0, 0],
        maxWidth: dimensions[0],
      },
      rightFace: {
        position: [0, 0, -sideFaceOffset],
        rotation: [0, Math.PI, 0],
        maxWidth: dimensions[0],
      },
      topFace: {
        position: [0, baseFaceOffset, 0],
        rotation: [-Math.PI / 2, 0, 0],
        maxWidth: dimensions[0],
      },
      bottomFace: {
        position: [0, -baseFaceOffset, 0],
        rotation: [Math.PI / 2, 0, 0],
        maxWidth: dimensions[0],
      },
      frontFace: {
        position: [frontFaceOffset, 0, 0],
        rotation: [0, Math.PI / 2, 0],
        maxWidth: dimensions[2],
      },
      backFace: {
        position: [-frontFaceOffset, 0, 0],
        rotation: [0, -Math.PI / 2, 0],
        maxWidth: dimensions[2],
      },
    })
  })
})
