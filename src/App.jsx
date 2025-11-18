import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import CaseStudies from './components/CaseStudies'
import Services from './components/Services'
import MotionShowcase from './components/MotionShowcase'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F0F0F]">
      <Navbar />
      <Hero />
      <About />
      <CaseStudies />
      <Services />
      <MotionShowcase />
      <Contact />
      <footer className="py-10 text-center text-xs text-[#0F0F0F]/50">© {new Date().getFullYear()} — Minimal UI/UX Portfolio</footer>
    </div>
  )
}

export default App
