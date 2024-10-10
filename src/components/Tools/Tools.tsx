import { useEffect, useState } from 'react'

import { getCargoDistribution } from '../../helpers/ai-helpers'
import { CARGO_MOCK } from '../../helpers/mocks'

import { SpaceDimensionsTool } from './SpaceDimensionsTool'
import { CargoDimensionsTool } from './CargoDimensionsTool'
import { transformCargoToArray } from './helpers'

import './Tools.css'

export function Tools() {
  const [response, setResponse] = useState('')

  // TODO: temp, to be deleted
  useEffect(() => {
    console.log(response)
  }, [response])

  async function sendPrompt() {
    const cargoDistribution = await getCargoDistribution()
    setResponse(cargoDistribution ?? '')
  }

  return (
    <aside className="tools">
      <div className="tools__content">
        <SpaceDimensionsTool />
        <CargoDimensionsTool cargo={transformCargoToArray(CARGO_MOCK)} />
      </div>
      <button className="tools__action" onClick={sendPrompt}>
        Get boxed!
      </button>
    </aside>
  )
}
