'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { useEffect, useState } from 'react'

interface QuoteFormProps {
  serviceType: string
  details: any
  onUpdateDetails: (details: any) => void
}

export function QuoteForm({ serviceType, details, onUpdateDetails }: QuoteFormProps) {
  const [formData, setFormData] = useState(details || {})
  
  useEffect(() => {
    onUpdateDetails(formData)
  }, [formData, onUpdateDetails])
  
  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }
  
  if (serviceType === 'business-cards') {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold mb-4">Данные визитной карточки</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="quantity">Количество</Label>
            <Input 
              id="quantity" 
              type="number" 
              placeholder="500" 
              value={formData.quantity || ''} 
              onChange={(e) => handleChange('quantity', e.target.value)} 
            />
          </div>
          
          <div className="space-y-2">
            <Label>Тип бумаги</Label>
            <RadioGroup 
              value={formData.paperType || 'standard'} 
              onValueChange={(value) => handleChange('paperType', value)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="standard" id="standard" />
                <Label htmlFor="standard">Стандартный (14pt)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="premium" id="premium" />
                <Label htmlFor="premium">Премия (16pt)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ultrapremium" id="ultrapremium" />
                <Label htmlFor="ultrapremium">Ультра Премиум (32pt)</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Финал</Label>
            <RadioGroup 
              value={formData.finish || 'matte'} 
              onValueChange={(value) => handleChange('finish', value)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="matte" id="matte" />
                <Label htmlFor="matte">Матовый</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="glossy" id="glossy" />
                <Label htmlFor="glossy">Глянцевый</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="spot-uv" id="spot-uv" />
                <Label htmlFor="spot-uv">Точечное УФ</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <Label>Стороны</Label>
            <RadioGroup 
              value={formData.sides || 'single'} 
              onValueChange={(value) => handleChange('sides', value)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="single" id="single" />
                <Label htmlFor="single">Односторонний</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="double" id="double" />
                <Label htmlFor="double">Двусторонний</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="additionalNotes">Дополнительные примечания</Label>
          <Textarea 
            id="additionalNotes" 
            placeholder="Какие-либо особые требования или подробности о ваших визитных карточках"
            value={formData.additionalNotes || ''} 
            onChange={(e) => handleChange('additionalNotes', e.target.value)}
          />
        </div>
      </div>
    )
  }
  
  if (serviceType === 'flyers') {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold mb-4">Подробная информация о листовке</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="quantity">Количество</Label>
            <Input 
              id="quantity" 
              type="number" 
              placeholder="1000" 
              value={formData.quantity || ''} 
              onChange={(e) => handleChange('quantity', e.target.value)} 
            />
          </div>
          
          <div className="space-y-2">
            <Label>Размер</Label>
            <RadioGroup 
              value={formData.size || 'standard'} 
              onValueChange={(value) => handleChange('size', value)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="standard" id="standard-size" />
                <Label htmlFor="standard-size">Стандарт (8.5" x 11")</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="half" id="half-size" />
                <Label htmlFor="half-size">Половина листа (5.5" x 8.5")</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="custom" id="custom-size" />
                <Label htmlFor="custom-size">Нестандартный размер</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Тип бумаги</Label>
            <RadioGroup 
              value={formData.paperType || 'standard'} 
              onValueChange={(value) => handleChange('paperType', value)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="text" id="text" />
                <Label htmlFor="text">Текст (100lb)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cover" id="cover" />
                <Label htmlFor="cover">Покрытие (100lb)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="gloss" id="gloss" />
                <Label htmlFor="gloss">Блеск (100lb)</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <Label>Стороны</Label>
            <RadioGroup 
              value={formData.sides || 'single'} 
              onValueChange={(value) => handleChange('sides', value)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="single" id="single-side" />
                <Label htmlFor="single-side">Односторонний</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="double" id="double-side" />
                <Label htmlFor="double-side">Двусторонний</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Дополнительные опции</Label>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="folding" 
                checked={formData.folding || false} 
                onCheckedChange={(checked) => handleChange('folding', checked)} 
              />
              <Label htmlFor="folding">Складной</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="perforation" 
                checked={formData.perforation || false} 
                onCheckedChange={(checked) => handleChange('perforation', checked)} 
              />
              <Label htmlFor="perforation">Перфорация</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="numbering" 
                checked={formData.numbering || false} 
                onCheckedChange={(checked) => handleChange('numbering', checked)} 
              />
              <Label htmlFor="numbering">Нумерация</Label>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="additionalNotes">Дополнительные примечания</Label>
          <Textarea 
            id="additionalNotes" 
            placeholder=""
            value={formData.additionalNotes || ''} 
            onChange={(e) => handleChange('additionalNotes', e.target.value)}
          />
        </div>
      </div>
    )
  }
  
  // Generic form for other service types
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold mb-4">Детали проекта</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="quantity">Quantity</Label>
          <Input 
            id="quantity" 
            type="number" 
            placeholder="Введите количество"
            value={formData.quantity || ''} 
            onChange={(e) => handleChange('quantity', e.target.value)} 
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="size">Размер/габариты</Label>
          <Input 
            id="size" 
            placeholder="Например, 8.5x11 дюймы"
            value={formData.size || ''} 
            onChange={(e) => handleChange('size', e.target.value)} 
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="projectDescription">Описание проекта</Label>
        <Textarea 
          id="projectDescription" 
          placeholder="Пожалуйста, подробно опишите ваш проект"
          className="min-h-[120px]"
          value={formData.projectDescription || ''} 
          onChange={(e) => handleChange('projectDescription', e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="deadline">Крайний срок</Label>
        <Input 
          id="deadline" 
          type="date" 
          value={formData.deadline || ''} 
          onChange={(e) => handleChange('deadline', e.target.value)} 
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="additionalNotes">Дополнительные примечания</Label>
        <Textarea 
          id="additionalNotes" 
          placeholder="Любая другая информация, которую нам следует знать о вашем проекте"
          value={formData.additionalNotes || ''} 
          onChange={(e) => handleChange('additionalNotes', e.target.value)}
        />
      </div>
    </div>
  )
}