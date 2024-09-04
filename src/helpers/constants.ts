import { Euler } from '@react-three/fiber'

const DEGREES_88 = (22 * Math.PI) / 45

export const CAMERA = {
  minDistance: 10,
  maxDistance: 50,
  minVerticalRotation: DEGREES_88,
  initialPosition: { position: [15, 15, 15] as const },
} as const

export const LIGHT = {
  position: [5, 5, 5] as const,
  intensity: 1,
} as const

export const BASE = {
  rotation: [-Math.PI / 2, 0, 0] as Euler,
  dimensions: [96, 54] as [number, number],
} as const

export const CARGO_EDGE = {
  width: 1,
  threshold: 1,
  color: 0xffffff,
} as const
