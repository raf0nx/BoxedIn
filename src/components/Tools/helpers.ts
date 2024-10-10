import type { CARGO } from '../../helpers/types'

export function transformCargoToArray(cargo: CARGO) {
  return Object.entries(cargo).map(([id, cargoData]) => ({
    id,
    ...cargoData,
  }))
}
