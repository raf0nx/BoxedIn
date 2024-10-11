import { useEffect, useState } from 'react'

import { getCargoDistribution } from '../../helpers/ai-helpers'
import type { CARGO } from '../../helpers/types'

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
    const cargoDistribution = await getCargoDistribution()
    setResponse(cargoDistribution ?? '')
  }

  function handleAddCargo() {
    setCargo(prevCargo => ({
      ...prevCargo,
      [generateCargoId()]: {
        name: generateCargoId(),
        color: generateRandomHexColor(),
        dimensions: [1, 1, 1],
      },
    }))
  }

  return (
    <aside className="tools">
      <div className="tools__content">
        <SpaceDimensionsTool />
        <CargoDimensionsTool
          cargo={transformCargoToArray(cargo)}
          onAddCargo={handleAddCargo}
        />
      </div>
      <button className="tools__action" onClick={sendPrompt}>
        Get boxed!
      </button>
    </aside>
  )
}
