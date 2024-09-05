import type { DIMENSIONS_2D, DIMENSIONS_3D } from './types'

const DEGREES_88 = (22 * Math.PI) / 45

export const CAMERA = {
  minDistance: 10,
  maxDistance: 50,
  minVerticalRotation: DEGREES_88,
  initialPosition: { position: [15, 10, 15] as DIMENSIONS_3D },
} as const

export const LIGHT = {
  position: [5, 5, 5] as DIMENSIONS_3D,
  intensity: 1,
} as const

export const BASE = {
  rotation: [-Math.PI / 2, 0, 0] as DIMENSIONS_3D,
  dimensions: [96, 54] as DIMENSIONS_2D,
} as const

export const CARGO_EDGE = {
  width: 1,
  threshold: 1,
  color: 0xffffff,
} as const
