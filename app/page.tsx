import { HeroSection } from '@/components/sections/hero'
import { FeaturedServices } from '@/components/sections/featured-services'
import { SpecialOffer } from '@/components/sections/special-offer'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQ } from '@/components/sections/faq'
import { CTA } from '@/components/sections/cta'
import { Benefits } from '@/components/sections/benefits'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <FeaturedServices />
      <SpecialOffer />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  )
}