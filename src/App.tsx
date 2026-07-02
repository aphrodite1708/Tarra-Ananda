import Nav from './components/Nav'
import PageWipe from './components/PageWipe'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import CaseStudies from './pages/CaseStudies'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <PageWipe />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <CaseStudies />
      <Contact />
    </>
  )
}
