import './ColorIndicator.css'

interface ColorIndicatorProps {
  color: string
  width?: number
  height?: number
}

export function ColorIndicator({
  color,
  width = 1,
  height = 1,
}: ColorIndicatorProps) {
  return (
    <span
      style={{
        backgroundColor: color,
        width: `${width}rem`,
        height: `${height}rem`,
      }}
      className="color-indicator"
    />
  )
}
