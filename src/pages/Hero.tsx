export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="hero-dots" />
      <div className="hero-glow" />

      <div className="hero-inner">
        <div>
          <div className="hero-eyebrow">Founder Associate · Creative Strategy</div>
          <h1 className="hero-name">
            Tarra
            <em>Ananda.</em>
          </h1>
          <p className="hero-tagline">
            Helping founders grow their business through strategy, operations, and creative execution.
          </p>
          <div className="hero-actions">
            <button className="btn-red" onClick={() => scrollTo('#case-studies')}>
              View Case Studies →
            </button>
            <button className="btn-outline" onClick={() => scrollTo('#contact')}>
              Get in Touch
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-emblem">
            <div className="hero-emblem-inner">
              <div className="hero-initial">TA</div>
              <div className="hero-initial-sub">◆ Portfolio 2025 ◆</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <span>↓</span>
      </div>
    </section>
  )
}
