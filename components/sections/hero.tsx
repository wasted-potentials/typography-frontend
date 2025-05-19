'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from '@/lib/motion'

const backgrounds = [
  'https://as2.ftcdn.net/jpg/01/64/87/45/1000_F_164874591_fWq7SzSzP7q8Y9hxd971tz5NCzZfjAlF.jpg'
]

export function HeroSection() {
  const [currentBg, setCurrentBg] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg(prev => (prev + 1) % backgrounds.length)
    }, 6000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="relative h-[80vh] min-h-[600px] overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center"
          style={{
            backgroundImage: `url(${bg})`,
            opacity: currentBg === index ? 1 : 0,
          }}
        />
      ))}
      
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative h-full container mx-auto px-4 md:px-6 flex items-center">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Высококачественные решения для печати на любой вкус
          </h1>
          <p className="text-xl text-white/90 mb-8">
            От визитных карточек до широкоформатной печати - мы предоставляем качественные результаты в короткие сроки.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Исследуйте сервисы
              </Button>
            </Link>
            <Link href="/quote">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Получите ценовое предложение
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}