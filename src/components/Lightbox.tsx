import { useEffect } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  src: string
  type: 'image' | 'video'
  alt?: string
  onClose: () => void
}

export default function Lightbox({ src, type, alt, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return createPortal(
    <div className="lb-overlay" onClick={onClose}>
      <button className="lb-close" onClick={onClose} aria-label="Close">✕</button>
      <div className="lb-content" onClick={e => e.stopPropagation()}>
        {type === 'image' ? (
          <img src={src} alt={alt ?? ''} className="lb-img" />
        ) : (
          <video src={src} className="lb-video" controls autoPlay playsInline />
        )}
      </div>
    </div>,
    document.body
  )
}
