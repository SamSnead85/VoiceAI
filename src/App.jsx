import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import CaseStudies from './components/CaseStudies'
import TrustCenter from './components/TrustCenter'
import ComparisonTool from './components/ComparisonTool'
import LeadCapture from './components/LeadCapture'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import DemoPage from './pages/DemoPage'
import CalculatorPage from './pages/CalculatorPage'

// Home page component
const HomePage = () => (
  <>
    <Navigation />
    <main>
      <Hero />
      <SocialProof />
      <HealthcareSolutions />
      <FinancialSolutions />
      <Features />
      <CaseStudies />
      <Results />
      <Testimonial />
      <ComparisonTool />
      <Security />
      <TrustCenter />
      <Integrations />
      <LeadCapture />
      <FinalCTA />
    </main>
    <Footer />
  </>
)

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
