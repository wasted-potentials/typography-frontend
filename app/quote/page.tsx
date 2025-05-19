'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { QuoteForm } from '@/components/quote/quote-form'
import { ServiceSelector } from '@/components/quote/service-selector'
import { FileUpload } from '@/components/quote/file-upload'
import { ReviewQuote } from '@/components/quote/review-quote'

type QuoteStep = 'service' | 'details' | 'files' | 'review'

export default function QuotePage() {
  const [step, setStep] = useState<QuoteStep>('service')
  const [quoteData, setQuoteData] = useState({
    service: '',
    details: {},
    files: [],
  })

  const updateQuoteData = (field: string, value: any) => {
    setQuoteData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const goToNextStep = () => {
    if (step === 'service') setStep('details')
    else if (step === 'details') setStep('files')
    else if (step === 'files') setStep('review')
  }

  const goToPreviousStep = () => {
    if (step === 'details') setStep('service')
    else if (step === 'files') setStep('details')
    else if (step === 'review') setStep('files')
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-8">Запросить ценовое предложение</h1>
      <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-muted-foreground">
        Расскажите нам о своем проекте, и мы предоставим вам индивидуальное предложение с учетом ваших конкретных требований.
      </p>
      
      <Card className="max-w-4xl mx-auto p-6 md:p-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-8">
            {['service', 'details', 'files', 'review'].map((s) => (
              <div 
                key={s} 
                className={`flex flex-col items-center ${
                  s === step ? 'text-primary font-medium' : 'text-muted-foreground'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  s === step ? 'bg-primary text-white' : 
                    ['service', 'details', 'files', 'review'].indexOf(s) < ['service', 'details', 'files', 'review'].indexOf(step) 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-muted text-muted-foreground'
                }`}>
                  {['service', 'details', 'files', 'review'].indexOf(s) + 1}
                </div>
                <span className="text-sm hidden md:block capitalize">{s}</span>
              </div>
            ))}
          </div>
        </div>
        
        {step === 'service' && (
          <ServiceSelector 
            selectedService={quoteData.service} 
            onSelectService={(service) => updateQuoteData('service', service)} 
          />
        )}
        
        {step === 'details' && (
          <QuoteForm 
            serviceType={quoteData.service}
            details={quoteData.details}
            onUpdateDetails={(details) => updateQuoteData('details', details)}
          />
        )}
        
        {step === 'files' && (
          <FileUpload 
            files={quoteData.files}
            onUpdateFiles={(files) => updateQuoteData('files', files)}
          />
        )}
        
        {step === 'review' && (
          <ReviewQuote quoteData={quoteData} />
        )}
        
        <div className="flex justify-between mt-8">
          {step !== 'service' && (
            <Button variant="outline" onClick={goToPreviousStep}>Назад</Button>
          )}
          <div className="ml-auto">
            {step !== 'review' ? (
              <Button onClick={goToNextStep}>Продолжить</Button>
            ) : (
              <Button>Отправить</Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}