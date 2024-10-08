import './DimensionsTool.css'

interface DimensionToolProps {
  children: JSX.Element | JSX.Element[]
  title: string
  isCargo?: boolean
}

export function DimensionsTool({
  children,
  title,
  isCargo = false,
}: DimensionToolProps) {
  return (
    <div className="dimensions-tool">
      {isCargo && (
        <button
          className="dimensions-tool__add-cargo-btn"
          aria-label="Add a Cargo"
        >
          +
        </button>
      )}
      <h4 className="dimensions-tool__title">{title}</h4>
      <div
        className={`dimensions-tool__data${
          isCargo ? ' dimensions-tool__data--cargo' : ''
        }`}
      >
        {children}
      </div>
    </div>
  )
}
