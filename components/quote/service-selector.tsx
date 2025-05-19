'use client'

import { Card, CardContent } from '@/components/ui/card'
import { RadioGroup } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { services } from '@/lib/services-data'

interface ServiceSelectorProps {
  selectedService: string
  onSelectService: (service: string) => void
}

export function ServiceSelector({ selectedService, onSelectService }: ServiceSelectorProps) {
  const popularServices = [
    { id: 'business-cards', name: 'Визитные карточки', icon: '📇' },
    { id: 'flyers', name: 'Листовки и брошюры', icon: '📄' },
    { id: 'banners', name: 'Баннеры и вывески', icon: '🏷️' },
    { id: 'stickers', name: 'Наклейки и этикетки', icon: '🏷️' },
    { id: 'promotional', name: 'Рекламные товары', icon: '🎁' },
    { id: 'custom', name: 'Пользовательский проект', icon: '✨' },
  ]
  
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold mb-4">Выберите тип услуги</h3>
      
      <RadioGroup 
        value={selectedService} 
        onValueChange={onSelectService}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {popularServices.map((service) => (
          <Label
            key={service.id}
            htmlFor={service.id}
            className="cursor-pointer"
          >
            <Card className={`h-full transition-all ${
              selectedService === service.id 
                ? 'border-primary bg-primary/5' 
                : 'hover:border-primary/50'
            }`}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <span className="text-4xl mb-4">{service.icon}</span>
                <h4 className="font-medium">{service.name}</h4>
                <input
                  type="radio"
                  id={service.id}
                  value={service.id}
                  className="sr-only"
                  checked={selectedService === service.id}
                  onChange={() => onSelectService(service.id)}
                />
              </CardContent>
            </Card>
          </Label>
        ))}
      </RadioGroup>
    </div>
  )
}