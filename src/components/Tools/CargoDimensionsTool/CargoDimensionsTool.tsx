import { ToolsInput } from '../ToolsInput'
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
            <span className="cargo-dimensions-tool__cargo-color-indicator" />
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
            <ToolsInput label="Length" />
            <ToolsInput label="Height" />
            <ToolsInput label="Width" />
          </div>
        </div>
      ))}
    </div>
  )
}
