import { ColorIndicator } from '../../../ColorIndicator'
import type { CARGO_DATA_WITH_ID } from '../../../../helpers/types'

import './CargoControls.css'

interface CargoControlsProps {
  cargoItem: CARGO_DATA_WITH_ID
  onCargoNameUpdate: (id: string, value: string) => void
}

export function CargoControls({
  cargoItem,
  onCargoNameUpdate,
}: CargoControlsProps) {
  return (
    <div className="cargo-dimensions-tool__cargo-controls">
      <ColorIndicator color={cargoItem.color} />
      <div className="cargo-dimensions-tool__cargo-name">
        <label
          htmlFor={cargoItem.id}
          className="cargo-dimensions-tool__cargo-name-label"
        >
          Name:
        </label>
        <input
          id={cargoItem.id}
          type="text"
          className="cargo-dimensions-tool__cargo-name-input"
          value={cargoItem.name}
          onChange={event =>
            onCargoNameUpdate(cargoItem.id, event.target.value)
          }
        />
      </div>
      <div className="cargo-dimensions-tool__cargo-count">
        <button className="cargo-dimensions-tool__cargo-count-btn">-</button>
        <span>1</span>
        <button className="cargo-dimensions-tool__cargo-count-btn">+</button>
      </div>
    </div>
  )
}
