import { createPortal } from 'react-dom'

import './LoadingScreen.css'

interface LoadingScreenProps {
  show: boolean
}

export function LoadingScreen({ show }: LoadingScreenProps) {
  if (!show) return null

  return createPortal(
    <div className="loading-screen">
      <div className="loading-screen__loader" />
    </div>,
    document.body
  )
}
