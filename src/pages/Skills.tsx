import { useState, useRef, useEffect } from 'react'

const FOUNDER_SKILLS = [
  { icon: '📅', title: 'Executive Operations', items: ['Calendar & email management', 'Travel coordination', 'Visa & passport documentation', 'Legal & government paperwork', 'Meeting & interview scheduling'] },
  { icon: '🤝', title: 'Brand Partnerships', items: ['End-to-end campaign management', 'Partnership negotiation', 'MOU & agreement preparation', 'Invoice & payment follow-up', 'Creator & brand relations'] },
  { icon: '👥', title: 'Recruitment & Talent', items: ['Candidate sourcing & outreach', 'LinkedIn talent sourcing', 'Pipeline management', 'Role briefing & onboarding', 'Freelancer coordination'] },
  { icon: '🏢', title: 'Property Operations', items: ['Hotel, villa & apartment management', 'Cleaner & maintenance coordination', 'Tenant communications', 'Property marketing & leasing', 'Operational troubleshooting'] },
  { icon: '📈', title: 'Business Development', items: ['Lead generation & outreach', 'CRM management', 'Market research', 'Competitor analysis', 'Prospecting & tenant acquisition'] },
  { icon: '🛍️', title: 'Procurement & Logistics', items: ['Supplier research & negotiation', 'Purchase coordination', 'Delivery tracking', 'Asset management & liquidation', 'Vendor sourcing'] },
  { icon: '🌐', title: 'Cross-functional Leadership', items: ['Team coordination across departments', 'Stakeholder communications', 'Project management', 'Priority alignment', 'Independent problem-solving'] },
  { icon: '✨', title: 'Personal & Lifestyle Support', items: ['Personal styling & wardrobe', 'Event planning & logistics', 'Personal shopping', 'Travel & accommodation booking', 'Special project execution'] },
]

const CREATIVE_SKILLS = [
  { icon: '🔍', title: 'Research', items: ['Audience behavior analysis', 'Competitor landscape research', 'Industry trend tracking', 'Consumer pain point mapping', 'Social listening & platform analysis'] },
  { icon: '🧭', title: 'Strategy', items: ['Content strategy & pillars', 'Messaging framework development', 'Brand positioning', 'Campaign concept development', 'Content calendar planning'] },
  { icon: '✍️', title: 'Creative Development', items: ['Scriptwriting & copywriting', 'Creative brief development', 'Storyboarding & moodboards', 'Hook development', 'UGC strategy & creator briefs'] },
  { icon: '🎬', title: 'Production Support', items: ['Creative direction', 'Cross-functional collaboration', 'Editor & designer coordination', 'Founder content partnerships', 'UGC shooting & development'] },
  { icon: '📊', title: 'Performance & Optimisation', items: ['Views & watch time analysis', 'Engagement & CTR review', 'Content iteration strategy', 'Trend research & application', 'Audience feedback loops'] },
  { icon: '🤝', title: 'Creator & Community', items: ['Creator sourcing & management', 'Brand-creator relationship mgmt', 'Community strategy & building', 'Event planning & workshops', 'Influencer campaign coordination'] },
]

type Tab = 'founder' | 'creative'

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
      const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
      el.style.transform = `perspective(500px) rotateY(${dx * 10}deg) rotateX(${-dy * 6}deg) translateZ(10px)`
    }
    const onLeave = () => { el.style.transform = 'perspective(500px) rotateY(0deg) rotateX(0deg) translateZ(0)' }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave) }
  }, [])

  return (
    <div ref={ref} className="skill-card" style={{ transition: 'transform 0.15s ease-out', willChange: 'transform' }}>
      {children}
    </div>
  )
}

export default function Skills() {
  const [tab, setTab] = useState<Tab>('founder')

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-header">
          <div className="section-eyebrow" style={{ color: 'rgba(200,16,46,0.8)' }}>Skills</div>
          <h2 className="section-title section-title-light">What I Bring</h2>
        </div>

        <div className="skills-tabs">
          <button className={`skills-tab${tab === 'founder' ? ' active' : ''}`} onClick={() => setTab('founder')}>
            Founder Associate
          </button>
          <button className={`skills-tab${tab === 'creative' ? ' active' : ''}`} onClick={() => setTab('creative')}>
            Creative Strategy
          </button>
        </div>

        <div className="skills-grid">
          {(tab === 'founder' ? FOUNDER_SKILLS : CREATIVE_SKILLS).map((s) => (
            <TiltCard key={s.title}>
              <div className="skill-card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <ul>
                {s.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
