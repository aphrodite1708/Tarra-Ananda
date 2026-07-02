import { useState } from 'react'
import { founderStudies, creativeStudies, personalStudies, type CaseStudy } from '../data/caseStudies'
import Lightbox from '../components/Lightbox'

type Category = 'founder' | 'creative' | 'personal'

const PROCESS_STEPS = [
  { num: '01', label: 'Research', desc: 'Audience, competitors, trends, platform data, and market gaps.' },
  { num: '02', label: 'Strategy', desc: 'Content pillars, messaging, brand positioning, and campaign concepts.' },
  { num: '03', label: 'Creative', desc: 'Briefs, scripts, storyboards, hooks, UGC angles, and visual references.' },
  { num: '04', label: 'Production', desc: 'Collaborating with editors, creators, designers, and founders.' },
  { num: '05', label: 'Iterate', desc: 'Review performance, ask what to improve, and refine the work.' },
]

const TOOLKIT = [
  { title: 'Research', items: ['Audience Research', 'Competitor Analysis', 'Market Research', 'Consumer Insights'] },
  { title: 'Strategy', items: ['Content Strategy', 'Messaging Framework', 'Campaign Planning', 'Brand Positioning'] },
  { title: 'Creative', items: ['Scriptwriting', 'Creative Briefs', 'Storyboarding', 'Copywriting', 'UGC Strategy'] },
  { title: 'Production', items: ['Creator Management', 'Creative Direction', 'Cross-functional Collaboration'] },
  { title: 'Optimisation', items: ['Performance Analysis', 'Content Iteration', 'Trend Research', 'Community Insights'] },
]

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [open, setOpen] = useState(false)
  const [lightbox, setLightbox] = useState<{ src: string; type: 'image' | 'video'; alt?: string } | null>(null)

  return (
    <div className={`cs-card${open ? ' is-open' : ''}`}>
      <div className="cs-card-header" onClick={() => setOpen(!open)}>
        <div className="cs-card-num">{study.number}</div>
        <div className="cs-card-meta">
          <h3 className="cs-card-title">{study.title}</h3>
          <p className="cs-card-role">{study.role}</p>
          <div className="cs-tags">
            {study.tags.map((t) => <span className="cs-tag" key={t}>{t}</span>)}
          </div>
        </div>
        <div className="cs-chevron">{open ? '▲' : '▼'}</div>
      </div>

      <div className="cs-body">
        <div className="cs-body-inner">
          <p className="cs-overview">{study.overview}</p>
          <div className="cs-sections">
            {study.sections.map((sec) => (
              <div key={sec.heading}>
                <div className="cs-sec-title">{sec.heading}</div>
                {Array.isArray(sec.content) && (
                  <ul className="cs-sec-list">
                    {(sec.content as string[]).map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                )}
                {typeof sec.content === 'string' && (
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>{sec.content}</p>
                )}
              </div>
            ))}
          </div>
          {study.media && study.media.length > 0 && (
            <div className="cs-media">
              {study.media.map((m, i) =>
                m.type === 'image' ? (
                  <button key={i} className="cs-media-btn" onClick={() => setLightbox(m)} title="View full image">
                    <img src={m.src} alt={m.alt ?? ''} className="cs-media-img" />
                    <div className="cs-media-zoom">⤢ View full</div>
                  </button>
                ) : (
                  <button key={i} className="cs-media-btn" onClick={() => setLightbox(m)} title="Watch video">
                    <video src={m.src} className="cs-media-video" playsInline muted />
                    <div className="cs-media-zoom">▶ Play video</div>
                  </button>
                )
              )}
            </div>
          )}
          <div className="cs-impact">{study.impact}</div>
        </div>
      </div>
      {lightbox && (
        <Lightbox src={lightbox.src} type={lightbox.type} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </div>
  )
}

export default function CaseStudies() {
  const [category, setCategory] = useState<Category>('founder')

  return (
    <section className="case-studies" id="case-studies">
      <div className="container">
        <div className="section-eyebrow">Case Studies</div>
        <h2 className="section-title">The Work</h2>

        <div className="cs-tabs">
          <button className={`cs-tab${category === 'founder' ? ' active' : ''}`} onClick={() => setCategory('founder')}>
            Founder Support
          </button>
          <button className={`cs-tab${category === 'creative' ? ' active' : ''}`} onClick={() => setCategory('creative')}>
            Creative Strategy
          </button>
          <button className={`cs-tab${category === 'personal' ? ' active' : ''}`} onClick={() => setCategory('personal')}>
            Personal Projects
          </button>
        </div>

        {category === 'creative' && (
          <div className="cs-process">
            <div className="cs-process-label">◆ My Process</div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', marginBottom: '2rem', maxWidth: '560px', lineHeight: 1.75 }}>
              Great creative doesn't start with an idea — it starts with understanding people. Every campaign begins with asking the right questions: <em>Who are we speaking to? What motivates them? What emotion do we want them to feel?</em>
            </p>
            <div className="cs-process-steps">
              {PROCESS_STEPS.map((s) => (
                <div className="cs-step" key={s.num}>
                  <div className="cs-step-num">{s.num}</div>
                  <h4>{s.label}</h4>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="cs-grid">
          {category === 'founder' && founderStudies.map((s) => <CaseStudyCard key={s.id} study={s} />)}
          {category === 'creative' && creativeStudies.map((s) => <CaseStudyCard key={s.id} study={s} />)}
          {category === 'personal' && personalStudies.map((s) => <CaseStudyCard key={s.id} study={s} />)}
        </div>

        {category === 'creative' && (
          <div className="cs-toolkit">
            <div className="cs-toolkit-label">◆ Creative Toolkit</div>
            <div className="cs-toolkit-grid">
              {TOOLKIT.map((cat) => (
                <div className="cs-toolkit-cat" key={cat.title}>
                  <h4>{cat.title}</h4>
                  <ul>
                    {cat.items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
