import { useState, useEffect } from 'react'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className="nav" style={{ boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.4)' : 'none' }}>
        <div className="nav-inner">
          <a className="nav-logo" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            Tarra <span>Ananda</span>
          </a>
          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a className="nav-link" href={l.href} onClick={(e) => { e.preventDefault(); handleNav(l.href) }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="nav-cta" href="#contact" onClick={(e) => { e.preventDefault(); handleNav('#contact') }}>
            Work with me
          </a>
          <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div className={`nav-mobile${open ? ' is-open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.label} className="nav-link" href={l.href} onClick={(e) => { e.preventDefault(); handleNav(l.href) }}>
            {l.label}
          </a>
        ))}
        <a className="nav-link" style={{ color: 'var(--red)' }} href="#contact" onClick={(e) => { e.preventDefault(); handleNav('#contact') }}>
          Work with me →
        </a>
      </div>
    </>
  )
}
