import { ColorIndicator } from '../../../ColorIndicator'
import type { CARGO_DATA_WITH_ID } from '../../../../helpers/types'

import './CargoControls.css'

interface CargoControlsProps {
  cargoItem: CARGO_DATA_WITH_ID
  onCargoNameUpdate: (id: string, value: string) => void
  onCargoCountUpdate: (id: string, value: number) => void
}

export function CargoControls({
  cargoItem,
  onCargoNameUpdate,
  onCargoCountUpdate,
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
        <button
          className="cargo-dimensions-tool__cargo-count-btn"
          aria-label={`Decrease "${cargoItem.name}" cargo count by 1`}
          onClick={() => onCargoCountUpdate(cargoItem.id, cargoItem.count - 1)}
        >
          -
        </button>
        <span className="cargo-dimensions-tool__cargo-count-value">
          {cargoItem.count}
        </span>
        <button
          className="cargo-dimensions-tool__cargo-count-btn"
          aria-label={`Increase "${cargoItem.name}" cargo count by 1`}
          onClick={() => onCargoCountUpdate(cargoItem.id, cargoItem.count + 1)}
        >
          +
        </button>
      </div>
    </div>
  )
}
