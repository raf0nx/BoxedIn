import { useEffect, useState } from 'react'

// import { getCargoDistribution } from '../../helpers/ai-helpers'
import { CARGO_COUNT } from '../../helpers/constants'
import type { CARGO, DIMENSIONS_3D } from '../../helpers/types'

import { SpaceDimensionsTool } from './SpaceDimensionsTool'
import { CargoDimensionsTool } from './CargoDimensionsTool'
import {
  generateCargoId,
  generateRandomHexColor,
  transformCargoToArray,
} from './helpers'

import './Tools.css'

export function Tools() {
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

  return (
    <aside className="tools">
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
      <button className="tools__action" onClick={sendPrompt}>
        Get boxed!
      </button>
    </aside>
  )
}
