import { useContext } from 'react'

import { CargoDistributionContext } from '../contexts'

export function useCargoDistributionContext() {
  const context = useContext(CargoDistributionContext)

  if (!context) {
    throw new Error(
      'useCargoDistributionContext must be used within a CargoDistributionProvider'
    )
  }

  return context
}
