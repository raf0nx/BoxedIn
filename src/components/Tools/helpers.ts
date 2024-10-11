import type { CARGO } from '../../helpers/types'

export function transformCargoToArray(cargo: CARGO) {
  return Object.entries(cargo).map(([id, cargoData]) => ({
    id,
    ...cargoData,
  }))
}

export function generateCargoId() {
  const uniquePart = Math.random().toString(36).substring(2, 8)

  return `box-${uniquePart}`
}

export function generateRandomHexColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  return `#${randomColor.padStart(6, '0')}`
}
