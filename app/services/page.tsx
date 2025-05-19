'use client'

import { useState } from 'react'
import { ServiceCategoryList } from '@/components/services/service-category-list'
import { ServiceGrid } from '@/components/services/service-grid'
import { services, categories } from '@/lib/services-data'

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  const filteredServices = selectedCategory 
    ? services.filter(service => service.category === selectedCategory)
    : services

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-8">Наши услуги</h1>
      <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-muted-foreground">
          Откройте для себя наш широкий спектр полиграфических услуг, призванных удовлетворить все ваши потребности,
          от визитных карточек до широкоформатной печати и всего остального.
      </p>
      
      <div className="mb-8">
        <ServiceCategoryList 
          categories={categories} 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>
      
      <ServiceGrid services={filteredServices} />
    </div>
  )
}