'use client'

import { useState } from 'react'
import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import ForWho from '@/components/sections/ForWho'
import Integration from '@/components/sections/Integration'
import FeaturesSlider from '@/components/sections/FeaturesSlider'
import Pricing from '@/components/sections/Pricing'
import Security from '@/components/sections/Security'
import Gift from '@/components/sections/Gift'
import CTA from '@/components/sections/CTA'
import Faq from '@/components/sections/Faq'
import Footer from '@/components/sections/Footer'
import LeadModal from '@/components/sections/LeadModal'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <Header onCta={() => setModalOpen(true)} />
      <Hero onCta={() => setModalOpen(true)} />
      <ForWho />
      <Integration />
      <FeaturesSlider />
      <Pricing />
      <Security />
      <Gift onCta={() => setModalOpen(true)} />
      <CTA onCta={() => setModalOpen(true)} />
      <Faq />
      <Footer onCta={() => setModalOpen(true)} />

      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  )
}
