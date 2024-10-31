import { useEffect } from 'react'
import { createPortal } from 'react-dom'

import './ErrorToast.css'

interface ErrorToastProps {
  show: boolean
  message: string
  onClose: () => void
}

export function ErrorToast({ show, message, onClose }: ErrorToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 5000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!show) {
    return null
  }

  return createPortal(
    <div className="error-toast">
      <div className="error-toast__content">
        <div className="error-toast__icon">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 50 50"
            xmlSpace="preserve"
            width="1.5rem"
            height="1.5rem"
          >
            <circle style={{ fill: '#D75A4A' }} cx="25" cy="25" r="25" />
            <polyline
              style={{
                fill: 'none',
                stroke: '#FFFFFF',
                strokeWidth: 2,
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
              }}
              points="16,34 25,25 34,16 
	"
            />
            <polyline
              style={{
                fill: 'none',
                stroke: '#FFFFFF',
                strokeWidth: 2,
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
              }}
              points="16,16 25,25 34,34 
	"
            />
          </svg>
        </div>
        <div className="error-toast__message">{message}</div>
        <button
          className="error-toast__close-btn"
          onClick={onClose}
          aria-label="Close error toast"
        >
          &times;
        </button>
      </div>
    </div>,
    document.body
  )
}
