import { Button } from '@/components/ui/button'

interface ReviewQuoteProps {
  quoteData: {
    service: string
    details: any
    files: any[]
  }
}

export function ReviewQuote({ quoteData }: ReviewQuoteProps) {
  const { service, details, files } = quoteData
  
  const getServiceName = (serviceId: string) => {
    const services = {
      'business-cards': 'Визитные карточки',
      'flyers': 'Листовки и брошюры',
      'banners': 'Баннеры и вывески',
      'stickers': 'Наклейки и этикетки',
      'promotional': 'Рекламные товары',
      'custom': 'Пользовательский проект',
    } as Record<string, string>
    
    return services[serviceId] || serviceId
  }
  
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold mb-4">Ознакомьтесь с Вашим запросом на ценовое предложение</h3>
      
      <div className="space-y-4">
        <div className="bg-muted/40 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Тип услуги</h4>
          <p>{getServiceName(service)}</p>
        </div>
        
        <div className="bg-muted/40 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Детали проекта</h4>
          <dl className="space-y-2">
            {Object.entries(details).map(([key, value]) => (
              <div key={key} className="grid grid-cols-3">
                <dt className="col-span-1 capitalize text-muted-foreground">{key.replace(/([A-Z])/g, ' $1').trim()}:</dt>
                <dd className="col-span-2">
                  {typeof value === 'boolean' 
                    ? (value ? 'Yes' : 'No') 
                    : (value === '' ? 'N/A' : String(value))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        
        {files.length > 0 && (
          <div className="bg-muted/40 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Загруженные файлы ({files.length})</h4>
            <ul className="space-y-1">
              {files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
        <h4 className="font-medium mb-2">Что будет дальше?</h4>
        <p className="text-muted-foreground text-sm">
          После отправки вашего запроса на ценовое предложение наша команда изучит детали вашего проекта и подготовит индивидуальное предложение.
          предложите цену в течение 24 часов. Вы получите электронное письмо с вашим предложением, и член нашей команды может связаться с вами
          , если потребуется дополнительная информация.
        </p>
      </div>
    </div>
  )
}