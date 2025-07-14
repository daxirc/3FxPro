import { Suspense } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Features from './components/Features'
import FAQ from './components/FAQ'
import Support from './components/Support'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import RefundPolicy from './pages/RefundPolicy'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faClock 
} from '@fortawesome/free-solid-svg-icons'
import { 
  faCcVisa, 
  faCcMastercard, 
  faCcPaypal, 
  faCcAmex,
  faCcDiscover,
  faBitcoin,
  faTwitter, 
  faFacebook, 
  faLinkedin, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons'

library.add(
  // Solid icons
  faEnvelope, faPhone, faMapMarkerAlt, faClock,
  // Brand icons
  faCcVisa, faCcMastercard, faCcPaypal, 
  faCcAmex, faCcDiscover, faBitcoin,
  faTwitter, faFacebook, faLinkedin, faYoutube
)

export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Pricing />
                  <Features />
                  <FAQ />
                  <Support />
                </>
              } />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  )
}
