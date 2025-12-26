import Navigation from './components/Navigation'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import HealthcareSolutions from './components/HealthcareSolutions'
import FinancialSolutions from './components/FinancialSolutions'
import Features from './components/Features'
import Results from './components/Results'
import Testimonial from './components/Testimonial'
import Security from './components/Security'
import Integrations from './components/Integrations'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <SocialProof />
        <HealthcareSolutions />
        <FinancialSolutions />
        <Features />
        <Results />
        <Testimonial />
        <Security />
        <Integrations />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
