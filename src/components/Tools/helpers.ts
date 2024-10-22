import type { CARGO, PROMPT_TRANSFORMED_CARGO } from '../../helpers/types'

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

export function transformCargoForPrompt(cargo: CARGO) {
  const transformedCargo: PROMPT_TRANSFORMED_CARGO = {}

  Object.keys(cargo).forEach(id => {
    const box = cargo[id]

    for (let i = 1; i <= box.count; i++) {
      const newId = `${id}-${i}`

      transformedCargo[newId] = {
        name: box.name,
        color: box.color,
        dimensions: box.dimensions,
      }
    }
  })

  return transformedCargo
}
