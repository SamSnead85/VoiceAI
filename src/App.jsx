import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
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
import ChatWidget from './components/ChatWidget'
import CookieConsent from './components/CookieConsent'
import ExitIntentPopup from './components/ExitIntentPopup'
import FloatingCTA from './components/FloatingCTA'

// Pages
import DemoPage from './pages/DemoPage'
import CalculatorPage from './pages/CalculatorPage'
import HealthcareHub from './pages/HealthcareHub'
import FinancialHub from './pages/FinancialHub'
import StatusPage from './pages/StatusPage'
import PricingPage from './pages/PricingPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import DocsPage from './pages/DocsPage'
import DashboardPreview from './pages/DashboardPreview'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import SecurityPage from './pages/SecurityPage'
import AccessibilityPage from './pages/AccessibilityPage'
import WebinarPage from './pages/WebinarPage'

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
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/dashboard" element={<DashboardPreview />} />
          <Route path="/webinar" element={<WebinarPage />} />

          {/* Solution Hubs */}
          <Route path="/solutions/healthcare" element={<HealthcareHub />} />
          <Route path="/solutions/financial" element={<FinancialHub />} />

          {/* Utility Pages */}
          <Route path="/status" element={<StatusPage />} />
          <Route path="/security" element={<SecurityPage />} />

          {/* Legal Pages */}
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
        </Routes>

        {/* Global Components */}
        <ChatWidget />
        <CookieConsent />
        <ExitIntentPopup />
        <FloatingCTA />
      </div>
    </Router>
  )
}

export default App
