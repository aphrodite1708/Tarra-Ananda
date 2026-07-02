import { lazy, Suspense } from 'react'
import { useTilt } from '../hooks/useTilt'
import { useNav } from '../context/nav'

const HeroCanvas = lazy(() => import('../components/HeroCanvas'))

export default function Hero() {
  const emblemRef = useTilt(8)
  const navigate = useNav()

  return (
    <section className="hero" id="home">
      <Suspense fallback={null}><HeroCanvas /></Suspense>
      <div className="hero-glow" />
      <div className="hero-inner">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-eyebrow">Founder Associate · Creative Strategy</div>
          <h1 className="hero-name">
            Tarra
            <em>Ananda.</em>
          </h1>
          <p className="hero-tagline">
            Helping founders grow their business through strategy, operations, and creative execution.
          </p>
          <div className="hero-actions">
            <button className="btn-red" onClick={() => navigate('case-studies')}>
              View Case Studies →
            </button>
            <button className="btn-outline" onClick={() => navigate('contact')}>
              Get in Touch
            </button>
          </div>
        </div>

        <div className="hero-right" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-emblem" ref={emblemRef} style={{ transition: 'transform 0.15s ease-out' }}>
            <div className="hero-emblem-inner">
              <div className="hero-initial">TA</div>
              <div className="hero-initial-sub">◆ Portfolio 2025 ◆</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
