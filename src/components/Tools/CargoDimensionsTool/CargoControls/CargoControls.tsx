import { ColorIndicator } from '../../../ColorIndicator'
import { DeleteIcon } from '../../../DeleteIcon'
import { CARGO_COUNT } from '../../../../helpers/constants'
import type { CARGO_DATA_WITH_ID } from '../../../../helpers/types'

import './CargoControls.css'

interface CargoControlsProps {
  cargoItem: CARGO_DATA_WITH_ID
  onCargoNameUpdate: (id: string, value: string) => void
  onCargoCountUpdate: (id: string, value: number) => void
  onCargoDelete: (id: string) => void
}

export function CargoControls({
  cargoItem,
  onCargoNameUpdate,
  onCargoCountUpdate,
  onCargoDelete,
}: CargoControlsProps) {
  const { id, name, color, count } = cargoItem
  const isDecreaseCargoDisabled = count === CARGO_COUNT.min
  const isIncreaseCargoDisabled = count === CARGO_COUNT.max

  return (
    <div className="cargo-dimensions-tool__cargo-controls">
      <ColorIndicator color={color} />
      <div className="cargo-dimensions-tool__cargo-name">
        <label htmlFor={id} className="cargo-dimensions-tool__cargo-name-label">
          Name:
        </label>
        <input
          id={id}
          type="text"
          className="cargo-dimensions-tool__cargo-name-input"
          value={name}
          onChange={event => onCargoNameUpdate(id, event.target.value)}
        />
      </div>
      <div className="cargo-dimensions-tool__cargo-count">
        <button
          className="cargo-dimensions-tool__cargo-count-btn"
          aria-label={`Decrease "${name}" cargo count by 1`}
          onClick={() => onCargoCountUpdate(id, count - 1)}
          disabled={isDecreaseCargoDisabled}
        >
          -
        </button>
        <span className="cargo-dimensions-tool__cargo-count-value">
          {count}
        </span>
        <button
          className="cargo-dimensions-tool__cargo-count-btn"
          aria-label={`Increase "${name}" cargo count by 1`}
          onClick={() => onCargoCountUpdate(id, count + 1)}
          disabled={isIncreaseCargoDisabled}
        >
          +
        </button>
      </div>
      <div className="cargo-dimensions-tool__delete-btn">
        <DeleteIcon onClick={() => onCargoDelete(id)} itemToDeleteName={name} />
      </div>
    </div>
  )
}
