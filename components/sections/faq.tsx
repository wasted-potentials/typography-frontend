'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from '@/lib/motion'

const faqs = [
  {
    question: 'Какие форматы файлов вы принимаете для печати?',
    answer: 'Мы принимаем различные форматы файлов, включая PDF, AI, PSD, JPEG, TIFF и EPS. Для получения наилучших результатов предпочтительны файлы PDF со встроенными шрифтами. Если у вас другой формат файла, пожалуйста, свяжитесь с нами, чтобы обсудить ваши варианты.'
  },
  {
    question: 'Сколько времени занимает выполнение типичного задания на печать?',
    answer: 'Сколько времени занимает выполнение типичного задания на печать?'
  },
  {
    question: 'Предлагаете ли вы услуги по дизайну?',
    answer: 'Да, у нас есть команда опытных дизайнеров, которые могут помочь в создании или доработке вашего дизайна. Наши услуги по дизайну включают в себя создание логотипа, разработку макета и подготовку ваших файлов к печати. Стоимость услуг по дизайну указана отдельно от стоимости печати.'
  },
  {
    question: 'Каков ваш минимальный объем заказа?',
    answer: 'Минимальный объем заказа зависит от продукта. Количество визитных карточек обычно начинается от 100 штук, в то время как количество листовок и буклетов обычно составляет не менее 50-100 штук. Цифровая печать позволяет снизить минимальные затраты по сравнению с офсетной печатью.'
  },
  {
    question: 'Предлагаете ли вы образцы до начала полного производства?',
    answer: 'Да, мы можем предоставить физические образцы или цифровые корректуры, прежде чем приступить к полномасштабному производству. За физические образцы взимается номинальная плата, в то время как цифровые корректуры обычно включены в стоимость услуги.'
  }
]

export function FAQ() {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
          <p className="text-lg text-muted-foreground">
            Найдите ответы на распространенные вопросы о наших полиграфических услугах.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}