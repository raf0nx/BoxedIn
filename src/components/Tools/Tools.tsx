import { useState } from 'react'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

import { LoadingScreen } from '../LoadingScreen'
import { ErrorToast } from '../ErrorToast'
import {
  getCargoDistribution,
  extractCargoDistributionFromAIResponse,
} from '../../helpers/ai-helpers'
import { useCargoDistributionContext } from '../../hooks'
import { CARGO_COUNT } from '../../helpers/constants'
import type { CARGO, DIMENSIONS_3D } from '../../helpers/types'

import { SpaceDimensionsTool } from './SpaceDimensionsTool'
import { CargoDimensionsTool } from './CargoDimensionsTool'
import {
  generateCargoId,
  generateRandomHexColor,
  transformCargoForPrompt,
  transformCargoToArray,
} from './helpers'

import './Tools.css'

export function Tools() {
  const [cargo, setCargo] = useState<CARGO>({})
  const [isCargoLoading, setIsCargoLoading] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const { loadingSpaceDimensions, setCargoDistribution } =
    useCargoDistributionContext()

  async function getOptimizedCargoDistribution() {
    setIsCargoLoading(true)

    try {
      const cargoDistribution = extractCargoDistributionFromAIResponse(
        await getCargoDistribution(
          transformCargoForPrompt(cargo),
          loadingSpaceDimensions
        )
      )

      if (cargoDistribution.errorMessage)
        throw new Error(cargoDistribution.errorMessage as unknown as string)

      setCargoDistribution(cargoDistribution)
    } catch (error) {
      if (error instanceof Error) {
        handleError(error.message)
      } else {
        handleError('An unknown error occurred. Please try again.')
      }
    }

    setIsCargoLoading(false)
  }

  function handleAddCargo() {
    const id = generateCargoId()

    setCargo(prevCargo => ({
      ...prevCargo,
      [id]: {
        name: id,
        color: generateRandomHexColor(),
        dimensions: [1, 1, 1],
        count: 1,
      },
    }))
  }

  function handleCargoNameUpdate(id: string, value: string) {
    setCargo(prevCargo => ({
      ...prevCargo,
      [id]: {
        ...prevCargo[id],
        name: value,
      },
    }))
  }

  function handleCargoDimensionsUpdate(
    id: string,
    value: number,
    dimensionIdx: number
  ) {
    setCargo(prevCargo => ({
      ...prevCargo,
      [id]: {
        ...prevCargo[id],
        dimensions: prevCargo[id].dimensions.map((el, idx) =>
          idx === dimensionIdx ? value : el
        ) as DIMENSIONS_3D,
      },
    }))
  }

  function handleCargoCountUpdate(id: string, value: number) {
    if (value < CARGO_COUNT.min || value > CARGO_COUNT.max) return

    setCargo(prevCargo => ({
      ...prevCargo,
      [id]: {
        ...prevCargo[id],
        count: value,
      },
    }))
  }

  function handleCargoDelete(id: string) {
    setCargo(prevCargo =>
      Object.fromEntries(
        Object.entries(prevCargo).filter(([key]) => key !== id)
      )
    )
  }

  function handleError(message: string) {
    setShowError(true)
    setErrorMessage(message)
  }

  return (
    <aside className="tools">
      <OverlayScrollbarsComponent defer>
        <div className="tools__content">
          <SpaceDimensionsTool />
          <CargoDimensionsTool
            cargo={transformCargoToArray(cargo)}
            onAddCargo={handleAddCargo}
            onCargoNameUpdate={handleCargoNameUpdate}
            onCargoDimensionsUpdate={handleCargoDimensionsUpdate}
            onCargoCountUpdate={handleCargoCountUpdate}
            onCargoDelete={handleCargoDelete}
          />
        </div>
      </OverlayScrollbarsComponent>
      <button className="tools__action" onClick={getOptimizedCargoDistribution}>
        Get boxed!
      </button>
      <LoadingScreen show={isCargoLoading} />
      <ErrorToast
        show={showError}
        message={errorMessage}
        onClose={() => setShowError(false)}
      />
    </aside>
  )
}
