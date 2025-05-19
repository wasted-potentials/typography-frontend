'use client'

import { Card, CardContent } from '@/components/ui/card'
import { ServiceCard } from '@/components/services/service-card'
import { services } from '@/lib/services-data'
import { motion } from '@/lib/motion'

export function FeaturedServices() {
  // Get featured services only (up to 6)
  const featuredServices = services
    .filter(service => service.featured)
    .slice(0, 6)
  
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши полиграфические услуги</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Откройте для себя наш ассортимент высококачественных полиграфических услуг, адаптированных к вашим деловым и личным потребностям.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/services" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium">
            Просмотреть все сервисы
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}