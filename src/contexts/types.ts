import type { AI_DISTRIBUTED_CARGO, DIMENSIONS_3D } from '../helpers/types'

export interface CargoDistributionContextProps {
  loadingSpaceDimensions: DIMENSIONS_3D
  cargoDistribution: AI_DISTRIBUTED_CARGO
  setLoadingSpaceDimensions: React.Dispatch<React.SetStateAction<DIMENSIONS_3D>>
  setCargoDistribution: React.Dispatch<
    React.SetStateAction<AI_DISTRIBUTED_CARGO>
  >
}
