const PILLARS = [
  { icon: '🎯', title: 'Strategy', desc: 'Turning founder vision into clear, executable roadmaps.' },
  { icon: '⚙️', title: 'Operations', desc: 'Building systems that let founders focus on what matters most.' },
  { icon: '✍️', title: 'Creative', desc: 'Crafting content and campaigns that capture attention and drive action.' },
  { icon: '🤝', title: 'Partnerships', desc: 'Managing relationships that generate real business outcomes.' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-inner">

          <div className="about-photo-col">
            <div className="about-photo-frame">
              <img src="/profile.jpg" alt="Tarra Ananda" className="about-photo" />
              <div className="about-photo-accent" />
            </div>
            <div className="about-quote">
              <div className="about-quote-mark">"</div>
              <p className="about-text">
                Helping founders grow their business through{' '}
                <strong>strategy, operations,</strong> and{' '}
                <strong>creative execution.</strong>
              </p>
            </div>
          </div>

          <div>
            <div className="section-eyebrow">About</div>
            <p className="about-body">
              I work at the intersection of operations and creativity — stepping in as a trusted partner to founders who need more than task execution. Whether it's managing the moving pieces of a creator business, building community around a new product, or developing content that reaches millions, I bring clarity and momentum to complex challenges.
            </p>
            <p className="about-body">
              With experience across hospitality, real estate, recruitment, e-commerce, and AI startups, I adapt quickly and think strategically — always focused on outcomes, not just outputs.
            </p>
            <div className="about-pillars">
              {PILLARS.map((p) => (
                <div className="about-pillar" key={p.title}>
                  <div className="about-pillar-icon">{p.icon}</div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
