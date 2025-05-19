'use client'

import { Badge } from '@/components/ui/badge'
import { Category } from '@/lib/services-data'

interface ServiceCategoryListProps {
  categories: Category[]
  selectedCategory: string | null
  onSelectCategory: (categoryId: string | null) => void
}

export function ServiceCategoryList({ 
  categories,
  selectedCategory,
  onSelectCategory
}: ServiceCategoryListProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      <Badge 
        variant={selectedCategory === null ? "default" : "outline"}
        className="cursor-pointer text-sm py-2 px-4"
        onClick={() => onSelectCategory(null)}
      >
          Все услуги
      </Badge>
      
      {categories.map((category) => (
        <Badge
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          className="cursor-pointer text-sm py-2 px-4"
          onClick={() => onSelectCategory(category.id)}
        >
          {category.name}
        </Badge>
      ))}
    </div>
  )
}