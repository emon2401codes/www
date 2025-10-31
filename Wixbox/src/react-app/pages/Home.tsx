import Header from '@/react-app/components/Header'
import Hero from '@/react-app/components/Hero'
import ClientResultsGallery from '@/react-app/components/ClientResultsGallery'
import PainPoints from '@/react-app/components/PainPoints'
import WhyRankingMatters from '@/react-app/components/WhyRankingMatters'
import OurWork from '@/react-app/components/OurWork'
import BeforeAfter from '@/react-app/components/BeforeAfter'
import HowItWorks from '@/react-app/components/HowItWorks'
import Testimonials from '@/react-app/components/Testimonials'
import FAQ from '@/react-app/components/FAQ'
import FinalCTA from '@/react-app/components/FinalCTA'

import Footer from '@/react-app/components/Footer'
import MobileCTA from '@/react-app/components/MobileCTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ClientResultsGallery />
        <PainPoints />
        <WhyRankingMatters />
        <OurWork />
        <BeforeAfter />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  )
}
