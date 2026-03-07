import Hero from '@/components/sections/Hero'
import ForWho from '@/components/sections/ForWho'
import Integration from '@/components/sections/Integration'
import FeaturesSlider from '@/components/sections/FeaturesSlider'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ForWho />
      <Integration /> 
      <FeaturesSlider />
    </main>
  )
}
