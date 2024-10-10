import { ToolsInput } from '../ToolsInput'
import { ColorIndicator } from '../../ColorIndicator'
import type { CARGO_ARRAY } from '../../../helpers/types'

import './CargoDimensionsTool.css'

interface CargoDimensionsToolProps {
  cargo: CARGO_ARRAY
}

export function CargoDimensionsTool({ cargo }: CargoDimensionsToolProps) {
  return (
    <div className="cargo-dimensions-tool">
      <h4 className="cargo-dimensions-tool__title">CARGO</h4>
      <button
        className="cargo-dimensions-tool__add-cargo"
        aria-label="Add a Cargo"
      >
        +
      </button>
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
            />
            <ToolsInput
              value={c.dimensions[1]}
              label="Height"
              step={0.5}
              min={0.5}
              max={5}
            />
            <ToolsInput
              value={c.dimensions[2]}
              label="Width"
              step={0.5}
              min={0.5}
              max={5}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
