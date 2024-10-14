import { useEffect, useState } from 'react'

// import { getCargoDistribution } from '../../helpers/ai-helpers'
import type { CARGO, DIMENSIONS_3D } from '../../helpers/types'
import { TRAILER } from '../../helpers/constants'

import { SpaceDimensionsTool } from './SpaceDimensionsTool'
import { CargoDimensionsTool } from './CargoDimensionsTool'
import {
  generateCargoId,
  generateRandomHexColor,
  transformCargoToArray,
} from './helpers'

import './Tools.css'

export function Tools() {
  const [loadingSpaceDimensions, setLoadingSpaceDimensions] = useState(
    TRAILER.dimensions
  )
  const [cargo, setCargo] = useState<CARGO>({})
  const [response, setResponse] = useState('')

  // TODO: temp, to be deleted
  useEffect(() => {
    console.log(response)
  }, [response])

  async function sendPrompt() {
    // const cargoDistribution = await getCargoDistribution()
    // setResponse(cargoDistribution ?? '')
    setResponse('')
  }

  function handleLoadingSpaceDimensionsUpdate(
    dimensionIdx: number,
    value: number
  ) {
    setLoadingSpaceDimensions(
      prevLoadingSpaceDimensions =>
        prevLoadingSpaceDimensions.map((el, idx) =>
          idx === dimensionIdx ? value : el
        ) as DIMENSIONS_3D
    )
  }

  function handleAddCargo() {
    const id = generateCargoId()

    setCargo(prevCargo => ({
      ...prevCargo,
      [id]: {
        name: id,
        color: generateRandomHexColor(),
        dimensions: [1, 1, 1],
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

  return (
    <aside className="tools">
      <div className="tools__content">
        <SpaceDimensionsTool
          dimensions={loadingSpaceDimensions}
          onLoadingSpaceDimensionsUpdate={handleLoadingSpaceDimensionsUpdate}
        />
        <CargoDimensionsTool
          cargo={transformCargoToArray(cargo)}
          onAddCargo={handleAddCargo}
          onCargoNameUpdate={handleCargoNameUpdate}
          onCargoDimensionsUpdate={handleCargoDimensionsUpdate}
        />
      </div>
      <button className="tools__action" onClick={sendPrompt}>
        Get boxed!
      </button>
    </aside>
  )
}
