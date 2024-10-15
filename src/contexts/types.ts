import type { DIMENSIONS_3D } from '../helpers/types'

export interface CargoDistributionContextProps {
  loadingSpaceDimensions: DIMENSIONS_3D
  setLoadingSpaceDimensions: React.Dispatch<React.SetStateAction<DIMENSIONS_3D>>
}
