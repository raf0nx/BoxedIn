import { createPortal } from 'react-dom'

import './ToolsToggle.css'

interface ToolsToggleProps {
  areToolsVisible: boolean
  onToolsToggle: () => void
}

const ChevronRight = (
  <svg
    width="18px"
    height="18px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 6L15 12L9 18"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ChevronLeft = (
  <svg
    width="18px"
    height="18px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 6L9 12L15 18"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export function ToolsToggle({
  areToolsVisible,
  onToolsToggle,
}: ToolsToggleProps) {
  return createPortal(
    <button
      className={`tools-toggle${
        areToolsVisible ? '' : ' tools-toggle--translated'
      }`}
      onClick={onToolsToggle}
      aria-label={areToolsVisible ? 'Hide Tools panel' : 'Show Tools panel'}
    >
      {areToolsVisible ? ChevronLeft : ChevronRight}
    </button>,
    document.body
  )
}
