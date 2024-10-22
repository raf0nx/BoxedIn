import { createContext, useState } from 'react'

import { TRAILER } from '../helpers/constants'
import type { AI_DISTRIBUTED_CARGO } from '../helpers/types'

import type { CargoDistributionContextProps } from './types'

interface CargoDistributionProviderProps {
  children: JSX.Element | JSX.Element[]
}

export const CargoDistributionContext =
  createContext<CargoDistributionContextProps | null>(null)

export function CargoDistributionProvider({
  children,
}: CargoDistributionProviderProps) {
  const [loadingSpaceDimensions, setLoadingSpaceDimensions] = useState(
    TRAILER.dimensions
  )
  const [cargoDistribution, setCargoDistribution] =
    useState<AI_DISTRIBUTED_CARGO>({})

  const value: CargoDistributionContextProps = {
    loadingSpaceDimensions,
    cargoDistribution,
    setLoadingSpaceDimensions,
    setCargoDistribution,
  }

  return (
    <CargoDistributionContext.Provider value={value}>
      {children}
    </CargoDistributionContext.Provider>
  )
}
