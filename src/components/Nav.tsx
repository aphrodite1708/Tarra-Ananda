import { useState } from 'react'
import { useNav, type Page } from '../context/nav'

const LINKS: { label: string; page: Page }[] = [
  { label: 'About', page: 'about' },
  { label: 'Skills', page: 'skills' },
  { label: 'Case Studies', page: 'case-studies' },
  { label: 'Contact', page: 'contact' },
]

export default function Nav({ current }: { current: Page }) {
  const [open, setOpen] = useState(false)
  const navigate = useNav()

  const go = (page: Page) => { setOpen(false); navigate(page) }

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <button className="nav-logo" onClick={() => go('home')}>
            Tarra <span>Ananda</span>
          </button>
          <ul className="nav-links">
            {LINKS.map(l => (
              <li key={l.label}>
                <button
                  className={`nav-link${current === l.page ? ' active' : ''}`}
                  onClick={() => go(l.page)}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
          <button className="nav-cta" onClick={() => go('contact')}>
            Work with me
          </button>
          <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div className={`nav-mobile${open ? ' is-open' : ''}`}>
        {LINKS.map(l => (
          <button key={l.label} className="nav-link" onClick={() => go(l.page)}>
            {l.label}
          </button>
        ))}
        <button className="nav-link" style={{ color: 'var(--red)' }} onClick={() => go('contact')}>
          Work with me →
        </button>
      </div>
    </>
  )
}
