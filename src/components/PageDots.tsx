import type { Page } from '../context/nav'

const DOTS: { id: Page; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'contact', label: 'Contact' },
]

export default function PageDots({ current, navigate }: { current: Page; navigate: (p: Page) => void }) {
  return (
    <div className="page-dots">
      {DOTS.map(d => (
        <button
          key={d.id}
          className={`page-dot${current === d.id ? ' active' : ''}`}
          onClick={() => navigate(d.id)}
          title={d.label}
          aria-label={d.label}
        />
      ))}
    </div>
  )
}
