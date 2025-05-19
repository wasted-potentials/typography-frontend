'use client'

import { motion } from '@/lib/motion'
import { Clock, Award, Truck, ThumbsUp, BadgeCheck, BarChart3 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const benefits = [
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'Быстрый поворот',
    description: 'Наши ускоренные услуги помогут вам быстро завершить ваши полиграфические проекты.',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Высочайшее качество',
    description: 'Мы используем только материалы самого высокого качества и передовые технологии печати.',
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: 'Бесплатная доставка',
    description: 'Бесплатная доставка при заказе на сумму свыше 100 долларов в пределах местной зоны обслуживания.',
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-primary" />,
    title: 'Удовлетворенность клиента',
    description: 'Наша команда стремится обеспечить ваше полное удовлетворение.',
  },
  {
    icon: <BadgeCheck className="h-8 w-8 text-primary" />,
    title: 'Экологически чистые варианты',
    description: 'Для клиентов, заботящихся об окружающей среде, доступны экологически безопасные варианты печати.',
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: 'Кастомизация',
    description: 'Индивидуальные решения, соответствующие вашим конкретным требованиям и стандартам бренда.',
  },
]

export function Benefits() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему мы?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Мы стремимся предоставлять исключительные полиграфические услуги с учетом этих ключевых преимуществ.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="font-bold text-xl mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}