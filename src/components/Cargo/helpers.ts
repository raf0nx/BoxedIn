import type { DIMENSIONS_3D } from '../../helpers/types'

import type { CargoLabelData } from './types'

export function getCargoLabelData(dimensions: DIMENSIONS_3D): CargoLabelData {
  const frontFaceOffset = dimensions[0] / 2 + 0.01
  const baseFaceOffset = dimensions[1] / 2 + 0.001
  const sideFaceOffset = dimensions[2] / 2 + 0.001

  return {
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
  }
}
