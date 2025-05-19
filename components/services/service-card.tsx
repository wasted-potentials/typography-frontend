'use client'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Service } from '@/lib/services-data'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="aspect-[4/3] relative overflow-hidden">
        <img 
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
        <p className="text-muted-foreground mb-4">{service.description}</p>
        {service.features && (
          <ul className="space-y-2 mb-4">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter className="pt-2">
        <Link href={`/services/${service.id}`} className="w-full">
          <Button variant="outline" className="w-full group">
            <span>Узнать больше</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}