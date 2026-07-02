import { useState, useEffect } from 'react'
import { NavCtx, PAGES, type Page } from './context/nav'
import { triggerWipe } from './components/PageWipe'
import Nav from './components/Nav'
import PageWipe from './components/PageWipe'
import PageDots from './components/PageDots'
import About from './pages/About'
import Skills from './pages/Skills'
import CaseStudies from './pages/CaseStudies'
import Contact from './pages/Contact'
import Hero from './pages/Hero'

export default function App() {
  const [current, setCurrent] = useState<Page>('home')

  const navigate = (page: Page) => {
    if (page === current) return
    triggerWipe(() => setCurrent(page))
  }

  // Keyboard arrow navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const idx = PAGES.indexOf(current)
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        navigate(PAGES[Math.min(idx + 1, PAGES.length - 1)])
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        navigate(PAGES[Math.max(idx - 1, 0)])
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current])

  return (
    <NavCtx.Provider value={navigate}>
      <PageWipe />
      <Nav current={current} />
      <main className="page-main">
        {current === 'home' && <Hero />}
        {current === 'about' && <About />}
        {current === 'skills' && <Skills />}
        {current === 'case-studies' && <CaseStudies />}
        {current === 'contact' && <Contact />}
      </main>
      <PageDots current={current} navigate={navigate} />
    </NavCtx.Provider>
  )
}
