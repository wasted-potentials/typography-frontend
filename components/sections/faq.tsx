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
    question: 'Do you offer design services?',
    answer: 'Yes, we have a team of experienced designers who can help create or refine your designs. Our design services include logo creation, layout design, and preparing your files for print. Design services are billed separately from printing costs.'
  },
  {
    question: 'What is your minimum order quantity?',
    answer: 'Minimum order quantities vary by product. Business cards typically start at 100 cards, while flyers and brochures usually have a minimum of 50-100 pieces. Digital printing allows for lower minimums compared to offset printing.'
  },
  {
    question: 'Do you offer samples before full production?',
    answer: 'Yes, we can provide physical samples or digital proofs before proceeding with full production. Physical samples are charged at a nominal fee, while digital proofs are typically included in the service.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept credit cards (Visa, MasterCard, American Express), bank transfers, and PayPal. For corporate clients, we can also arrange net-30 payment terms after credit approval.'
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our printing services.
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