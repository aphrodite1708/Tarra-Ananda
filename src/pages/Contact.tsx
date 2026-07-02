import { useReveal } from '../hooks/useReveal'

const LINKS = [
  { icon: '💼', label: 'LinkedIn', value: 'tarra-ananda777', href: 'https://www.linkedin.com/in/tarra-ananda777/' },
  { icon: '✈️', label: 'Telegram', value: '@aphroditestea', href: 'https://t.me/aphroditestea' },
  { icon: '📧', label: 'Email', value: 'tarranandava@gmail.com', href: 'mailto:tarranandava@gmail.com' },
  { icon: '📱', label: 'WhatsApp', value: '+62 812-8630-2213', href: 'https://wa.me/6281286302213' },
]

export default function Contact() {
  const sectionRef = useReveal()

  return (
    <section
      className="contact"
      id="contact"
      ref={sectionRef as React.RefObject<HTMLElement>}
      data-reveal="from-top"
    >
      <div className="contact-dots" />
      <div className="container">
        <div className="contact-inner">
          <div>
            <div className="section-eyebrow" style={{ color: 'rgba(200,16,46,0.8)' }} data-stagger="1">Contact</div>
            <h2 className="section-title section-title-light" data-stagger="2">Let's Work Together</h2>
            <p className="contact-sub" data-stagger="3">
              Whether you're a founder looking for a right-hand operator, a brand building its creative strategy, or you just want to connect — reach out. I'm always open to conversations about meaningful work.
            </p>
            <div className="contact-note" data-stagger="4">
              <h3>Open to new opportunities</h3>
              <p>Founder Associate roles, Creative Strategy projects, brand partnerships, and consulting engagements.</p>
            </div>
          </div>

          <div className="contact-links">
            {LINKS.map((l, i) => (
              <a key={l.label} className="contact-item" href={l.href} target="_blank" rel="noopener noreferrer" data-stagger={i + 5}>
                <div className="contact-item-icon">{l.icon}</div>
                <div className="contact-item-body">
                  <div className="contact-item-label">{l.label}</div>
                  <div className="contact-item-value">{l.value}</div>
                </div>
                <div className="contact-arrow">→</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-logo">Tarra <span>Ananda</span></div>
            <div className="footer-copy">◆ Founder Associate · Creative Strategy · 2025</div>
          </div>
        </div>
      </footer>
    </section>
  )
}
