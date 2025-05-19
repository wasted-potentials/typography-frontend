'use client'

import { Card, CardContent } from '@/components/ui/card'
import { motion } from '@/lib/motion'
import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'Marketing Director',
    company: 'Acme Inc.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600',
    quote: 'The quality of PrintPro\'s work exceeded our expectations. Their business cards and brochures helped us make a strong impression at our industry conference.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    position: 'Small Business Owner',
    company: 'Chen Design Studio',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600',
    quote: 'I\'ve been using PrintPro for all my business printing needs for over two years. Their service is always reliable, and the quality is consistently excellent.',
    rating: 5,
  },
  {
    name: 'Jessica Rivera',
    position: 'Event Coordinator',
    company: 'Events Plus',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600',
    quote: 'The team at PrintPro helped us with last-minute banner printing for our corporate event. They delivered everything on time and the results were stunning!',
    rating: 4,
  },
  {
    name: 'David Thompson',
    position: 'Creative Director',
    company: 'Thompson Creative',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    quote: 'I appreciate PrintPro\'s attention to detail and color accuracy. As a designer, print quality is crucial, and they never disappoint.',
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  
  const prev = () => {
    setDirection(-1)
    setCurrent(current => (current === 0 ? testimonials.length - 1 : current - 1))
  }
  
  const next = () => {
    setDirection(1)
    setCurrent(current => (current === testimonials.length - 1 ? 0 : current + 1))
  }
  
  const getVisibleTestimonials = () => {
    // For mobile we show 1, for desktop we show 2
    return testimonials.slice(current, current + (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 2))
      .concat(
        current + (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 2) > testimonials.length 
          ? testimonials.slice(0, (current + (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 2)) % testimonials.length) 
          : []
      );
  }
  
  return (
    <section className="py-20 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Что говорят наши клиенты?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Не верьте нам на слово. Вот что говорят наши довольные клиенты о наших полиграфических услугах.
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="flex space-x-6 overflow-hidden">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                className="w-full md:w-1/2 flex-shrink-0"
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="flex justify-center items-center h-16 w-16 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-muted-foreground text-sm">{testimonial.position}, {testimonial.company}</p>
                        <div className="flex mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}