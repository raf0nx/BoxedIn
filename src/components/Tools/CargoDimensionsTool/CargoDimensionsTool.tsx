import { ToolsInput } from '../ToolsInput'

import './CargoDimensionsTool.css'

export function CargoDimensionsTool() {
  return (
    <div className="cargo-dimensions-tool">
      <h4 className="cargo-dimensions-tool__title">CARGO</h4>
      <button
        className="cargo-dimensions-tool__add-cargo"
        aria-label="Add a Cargo"
      >
        +
      </button>
      <div className="cargo-dimensions-tool__data">
        <ToolsInput label="Length" />
        <ToolsInput label="Height" />
        <ToolsInput label="Width" />
      </div>
    </div>
  )
}
