import './DimensionsTool.css'

interface DimensionToolProps {
  children: JSX.Element | JSX.Element[]
  title: string
}

export function DimensionsTool({ children, title }: DimensionToolProps) {
  return (
    <div className="dimensions-tool">
      <h4 className="dimensions-tool__title">{title}</h4>
      <div className="dimensions-tool__data">{children}</div>
    </div>
  )
}
