import { useRef, useEffect } from 'react'

export function useTilt(strength = 12) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width / 2)
      const dy = (e.clientY - cy) / (rect.height / 2)
      el.style.transform = `perspective(600px) rotateY(${dx * strength}deg) rotateX(${-dy * strength * 0.6}deg) translateZ(8px)`
    }

    const onLeave = () => {
      el.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) translateZ(0px)'
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])

  return ref
}
