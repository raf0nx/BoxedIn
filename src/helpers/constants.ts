import type { DIMENSIONS_2D, DIMENSIONS_3D } from './types'

const COLOR_CARGO_EDGE = 0xffffff
const COLOR_CONTAINER_EDGE = 0x808080

// CAMERA

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

// BACKGROUND

export const BASE = {
  rotation: [-Math.PI / 2, 0, 0] as DIMENSIONS_3D,
  dimensions: [96, 54] as DIMENSIONS_2D,
} as const

// CARGO

export const CARGO_EDGE = {
  width: 1,
  threshold: 1,
  color: COLOR_CARGO_EDGE,
} as const

// CARGO CONTAINER

const CABIN_VERTICES = {
  lowerBottomLeft: [-0.75, -1, 1],
  lowerBottomRight: [0.75, -1, 1],
  lowerTopRight: [0.75, -1, -1],
  lowerTopLeft: [-0.75, -1, -1],
  upperBottomLeft: [-0.5, 1, 1],
  upperBottomRight: [0.75, 1, 1],
  upperTopRight: [0.75, 1, -1],
  upperTopLeft: [-0.5, 1, -1],
} as const

const CABIN_EDGES = {
  bottomFront: [0, 3],
  bottomLeft: [0, 1],
  bottomRight: [2, 3],
  verticalLeft: [0, 4],
  verticalRight: [3, 7],
  topFront: [4, 7],
  topLeft: [4, 5],
  topRight: [7, 6],
} as const

export const CABIN = {
  position: [-0.75, 1, 0] as DIMENSIONS_3D,
  edgeColor: COLOR_CONTAINER_EDGE,
  edges: Object.values(CABIN_EDGES).flat(),
  vertices: new Float32Array(Object.values(CABIN_VERTICES).flat()),
} as const

export const TRAILER = {
  position: [3.6, 1.2, 0] as DIMENSIONS_3D,
  dimensions: [7.2, 2.4, 2.5] as DIMENSIONS_3D,
  edgeColor: COLOR_CONTAINER_EDGE,
} as const
