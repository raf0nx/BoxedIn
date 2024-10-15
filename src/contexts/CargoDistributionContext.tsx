import { createContext, useState } from 'react'

import { TRAILER } from '../helpers/constants'

import type { CargoDistributionContextProps } from './types'

interface CargoDistributionProviderProps {
  children: JSX.Element
}

export const CargoDistributionContext =
  createContext<CargoDistributionContextProps | null>(null)

export function CargoDistributionProvider({
  children,
}: CargoDistributionProviderProps) {
  const [loadingSpaceDimensions, setLoadingSpaceDimensions] = useState(
    TRAILER.dimensions
  )

  const value: CargoDistributionContextProps = {
    loadingSpaceDimensions,
    setLoadingSpaceDimensions,
  }

  return (
    <CargoDistributionContext.Provider value={value}>
      {children}
    </CargoDistributionContext.Provider>
  )
}
