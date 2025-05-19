import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
        <p className="text-muted-foreground mb-8">
          У вас есть вопросы или вам нужна помощь? Наша служба поддержки клиентов готова помочь вам.
          Не стесняйтесь обращаться к нам любым из приведенных ниже способов.
        </p>
      </div>
      
      <div className="grid gap-6">
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-medium text-lg">Наш адрес</h4>
            <p className="text-muted-foreground">
              123 Print Street, Design District<br />
              New York, NY 10001
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-medium text-lg">Телефон</h4>
            <p className="text-muted-foreground">
              +1 (555) 123-4567<br />
              Monday to Friday, 9am to 6pm
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-medium text-lg">Email</h4>
            <p className="text-muted-foreground">
              info@printpro.com<br />
              sales@printpro.com
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-medium text-lg">Рабочие часы</h4>
            <p className="text-muted-foreground">
              Понедельник - Пятница: 9:00 - 18:00<br />
              Суббота: 10:00 - 16:00<br />
              Воскресенье: Не работаем
            </p>
          </div>
        </div>

        <div className="flex items-start">
        </div>
      </div>
    </div>
  )
}