import './App.css'
import Hero from './Hero.jsx'
import Features from './Features.jsx'
import Voices from './Voices.jsx'
import Plans from './Plans.jsx'
import SiteFooter from './SiteFooter.jsx'
import AnimatedSection from './AnimatedSection.jsx'

function App() {
  return (
    <div>
      <Hero />
      <AnimatedSection>
        <Features />
      </AnimatedSection>
      <AnimatedSection>
        <Voices />
      </AnimatedSection>
      <AnimatedSection>
        <Plans />
      </AnimatedSection>
      <SiteFooter />
    </div>
  )
}

export default App
