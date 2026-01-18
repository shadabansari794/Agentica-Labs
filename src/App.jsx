import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Credibility from './components/Credibility'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Credibility />
      <CTA />
      <Footer />
    </div>
  )
}

export default App


