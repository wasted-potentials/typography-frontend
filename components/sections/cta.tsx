'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from '@/lib/motion'

export function CTA() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div 
          className="bg-primary/10 rounded-2xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div 
            className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/20 to-transparent"
            style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
          />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы приступить к своему полиграфическому проекту?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Независимо от того, нужны ли вам визитные карточки, брошюры, баннеры или товары на заказ,
              мы всегда готовы воплотить ваше видение в жизнь благодаря исключительному качеству и сервису.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/quote">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Получите бесплатное предложение
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Свяжитесь с нашей командой
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}