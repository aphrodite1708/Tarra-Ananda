import { useRef } from 'react'

const DIRECTIONS = ['translateX(-100%)', 'translateX(100%)', 'translateY(-100%)', 'translateY(100%)']
const ENDS = ['translateX(100%)', 'translateX(-100%)', 'translateY(100%)', 'translateY(-100%)']

let lastDir = -1

export function triggerWipe(onMid: () => void) {
  // Pick a different direction each time
  let dir = Math.floor(Math.random() * 4)
  if (dir === lastDir) dir = (dir + 1) % 4
  lastDir = dir

  const el = document.getElementById('page-wipe')
  if (!el) { onMid(); return }

  el.style.transition = 'none'
  el.style.transform = DIRECTIONS[dir]
  el.style.opacity = '1'

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.style.transition = 'transform 0.28s cubic-bezier(0.77,0,0.18,1)'
      el.style.transform = 'translate(0,0)'

      setTimeout(() => {
        onMid()
        el.style.transition = 'transform 0.28s cubic-bezier(0.77,0,0.18,1)'
        el.style.transform = ENDS[dir]
        setTimeout(() => { el.style.opacity = '0' }, 300)
      }, 280)
    })
  })
}

export default function PageWipe() {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div
      id="page-wipe"
      ref={ref}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--red)',
        zIndex: 200,
        pointerEvents: 'none',
        opacity: 0,
        transform: 'translateX(-100%)',
      }}
    />
  )
}
