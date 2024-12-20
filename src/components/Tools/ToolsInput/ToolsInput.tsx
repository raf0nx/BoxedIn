import { useId } from 'react'

import './ToolsInput.css'

interface ToolsInputProps {
  label: string
  value: number
  step?: number
  min?: number
  max?: number
  onChange: (value: number) => void
}

export function ToolsInput({
  label,
  value,
  step = 0.1,
  min = 1,
  max = 10,
  onChange,
}: ToolsInputProps) {
  const id = useId()

  function handleBlur() {
    if (value < min) onChange(min)
    else if (value > max) onChange(max)
  }

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
        onChange={event => onChange(+event.target.value)}
        onBlur={handleBlur}
        aria-describedby={`${id}-description`}
      />
      <span className="tools-input__unit">m</span>
      <div id={`${id}-description`} className="tools-input__description">
        {`Please enter a value between ${min} and ${max} meters, in increments of ${step}.`}
      </div>
    </div>
  )
}
