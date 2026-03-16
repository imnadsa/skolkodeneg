import Hero from '@/components/sections/Hero'
import ForWho from '@/components/sections/ForWho'
import Integration from '@/components/sections/Integration'
import FeaturesSlider from '@/components/sections/FeaturesSlider'
import Pricing from '@/components/sections/Pricing'
import Security from '@/components/sections/Security'
import Gift from '@/components/sections/Gift'
import Сta from '@/components/sections/Cta'
import Faq from '@/components/sections/Faq'
import Footer from '@/components/sections/Footer'


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ForWho />
      <Integration /> 
      <FeaturesSlider />
      <Pricing />
      <Security />
      <Gift />
      <Cta />
      <Faq />
      <Footer />
    </main>
  )
}
