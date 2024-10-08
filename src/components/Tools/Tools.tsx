import { useEffect, useState } from 'react'

import { getCargoDistribution } from '../../helpers/ai-helpers'

import { DimensionsTool } from './DimensionsTool'
import { ToolsInput } from './ToolsInput'

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
        <DimensionsTool title="LOADING SPACE DIMENSIONS">
          <ToolsInput label="Length" />
          <ToolsInput label="Height" />
          <ToolsInput label="Width" />
        </DimensionsTool>
        <DimensionsTool title="CARGO" isCargo>
          <ToolsInput label="Length" isCargo />
          <ToolsInput label="Height" isCargo />
          <ToolsInput label="Width" isCargo />
        </DimensionsTool>
      </div>
      <button className="tools__action" onClick={sendPrompt}>
        Get boxed!
      </button>
    </aside>
  )
}
