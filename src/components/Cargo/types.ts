import type { DIMENSIONS_3D } from '../../helpers/types'

export interface CargoProps {
  id: string
  dimensions: DIMENSIONS_3D
  position: DIMENSIONS_3D
  color: string
  label: string
}

export interface CargoLabelData {
  [key: string]: {
    position: DIMENSIONS_3D
    rotation: DIMENSIONS_3D
    maxWidth: number
  }
}
