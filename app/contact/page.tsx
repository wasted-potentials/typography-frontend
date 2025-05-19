import { ContactForm } from '@/components/contact/contact-form'
import { ContactInfo } from '@/components/contact/contact-info'

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-8">Связаться с нами</h1>
      <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-muted-foreground">
          У вас есть вопросы или вам нужна помощь? Свяжитесь с нашей дружной командой по любому из указанных ниже каналов.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  )
}