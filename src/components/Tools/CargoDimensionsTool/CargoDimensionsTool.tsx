import { ToolsInput } from '../ToolsInput'
import { ColorIndicator } from '../../ColorIndicator'
import type { CARGO_ARRAY } from '../../../helpers/types'

import './CargoDimensionsTool.css'

interface CargoDimensionsToolProps {
  cargo: CARGO_ARRAY
  onAddCargo: () => void
  onCargoNameUpdate: (id: string, value: string) => void
  onCargoDimensionsUpdate: (
    id: string,
    value: number,
    dimensionIdx: number
  ) => void
}

export function CargoDimensionsTool({
  cargo,
  onAddCargo,
  onCargoNameUpdate,
  onCargoDimensionsUpdate,
}: CargoDimensionsToolProps) {
  function handleNameUpdate(id: string, value: string) {
    onCargoNameUpdate(id, value)
  }

  function handleDimensionsChange(
    id: string,
    value: string,
    dimensionIdx: number
  ) {
    onCargoDimensionsUpdate(id, +value, dimensionIdx)
  }

  return (
    <div className="cargo-dimensions-tool">
      <h4 className="cargo-dimensions-tool__title">CARGO</h4>
      <button
        className="cargo-dimensions-tool__add-cargo"
        aria-label="Add a Cargo"
        onClick={onAddCargo}
      >
        +
      </button>
      {!cargo.length && (
        <p className="cargo-dimensions-tool__empty-cargo">No Cargo added</p>
      )}
      {cargo.map(c => (
        <div key={c.id} className="cargo-dimensions-tool__cargo">
          <div className="cargo-dimensions-tool__cargo-controls">
            <ColorIndicator color={c.color} />
            <div className="cargo-dimensions-tool__cargo-name">
              <label
                htmlFor={c.id}
                className="cargo-dimensions-tool__cargo-name-label"
              >
                Name:
              </label>
              <input
                id={c.id}
                type="text"
                className="cargo-dimensions-tool__cargo-name-input"
                value={c.name}
                onChange={event => handleNameUpdate(c.id, event.target.value)}
              />
            </div>
          </div>
          <div className="cargo-dimensions-tool__cargo-dimensions">
            <ToolsInput
              value={c.dimensions[0]}
              label="Length"
              step={0.5}
              min={0.5}
              max={5}
              onChange={value => handleDimensionsChange(c.id, value, 0)}
            />
            <ToolsInput
              value={c.dimensions[1]}
              label="Height"
              step={0.5}
              min={0.5}
              max={5}
              onChange={value => handleDimensionsChange(c.id, value, 1)}
            />
            <ToolsInput
              value={c.dimensions[2]}
              label="Width"
              step={0.5}
              min={0.5}
              max={5}
              onChange={value => handleDimensionsChange(c.id, value, 2)}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
