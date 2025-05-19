'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from '@/lib/motion'
import { PercentIcon, Clock, TrendingUp } from 'lucide-react'

export function SpecialOffer() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="bg-gradient-to-r from-primary/90 to-blue-600/90 rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Быстрая печать в обратном порядке
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Ускорьте выполнение ваших полиграфических проектов с помощью нашего ускоренного сервиса.
                Мы предлагаем быстрые сроки выполнения работ без ущерба для качества.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <PercentIcon className="h-8 w-8 text-white mb-2" />
                  <h3 className="font-bold text-white text-xl">Скидка 20%</h3>
                  <p className="text-white/80 text-sm">на Ваш первый заказ</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <Clock className="h-8 w-8 text-white mb-2" />
                  <h3 className="font-bold text-white text-xl">24 часа</h3>
                  <p className="text-white/80 text-sm">Экспресс-доставка</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <TrendingUp className="h-8 w-8 text-white mb-2" />
                  <h3 className="font-bold text-white text-xl">Высочайшее качество</h3>
                  <p className="text-white/80 text-sm">Высококачественные материалы</p>
                </div>
              </div>
              
              <Link href="/quote">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-medium">
                  Получите Ваше предложение уже сегодня
                </Button>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/5691634/pexels-photo-5691634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Printing process"
                className="rounded-lg object-cover h-full max-h-[400px] w-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}