import type { DIMENSIONS_3D } from '../helpers/types'

export interface CargoDistributionContextProps {
  loadingSpaceDimensions: DIMENSIONS_3D
  setLoadingSpaceDimensions: (dimensions: DIMENSIONS_3D) => void
}
