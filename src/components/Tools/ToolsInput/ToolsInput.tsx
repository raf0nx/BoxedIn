import { useId } from 'react'

import './ToolsInput.css'

interface ToolsInputProps {
  label: string
  value: number
  step?: number
  min?: number
  max?: number
}

export function ToolsInput({
  label,
  value,
  step = 0.1,
  min = 1,
  max = 10,
}: ToolsInputProps) {
  const id = useId()

  return (
    <div>
      <label htmlFor={id} className="tools-input__label">
        {label}:
      </label>
      <input
        id={id}
        className="tools-input"
        type="number"
        step={step}
        min={min}
        max={max}
        value={value}
        // onChange={handleChange}
        // onBlur={handleBlur}
        aria-describedby={`${id}-description`}
      />
      <span className="tools-input__unit">m</span>
      <div id={`${id}-description`} className="tools-input__description">
        {`Please enter a value between ${min} and ${max} meters, in increments of ${step}.`}
      </div>
    </div>
  )
}
