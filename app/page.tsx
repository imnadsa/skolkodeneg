import Hero from '@/components/sections/Hero'
import ForWho from '@/components/sections/ForWho'
import Integration from '@/components/sections/Integration' 

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ForWho />
      <Integration /> 
    </main>
  )
}
