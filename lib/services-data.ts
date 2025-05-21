export interface Service {
  id: string
  name: string
  description: string
  image: string
  category: string
  featured?: boolean
  features?: string[]
}

export interface Category {
  id: string
  name: string
}

export const categories: Category[] = [
    { id: 'business', name: 'Деловая полиграфия' },
    { id: 'marketing', name: 'Рекламная полиграфия' },
    { id: 'large-format', name: 'Широкоформатная печать' },
    { id: 'packaging', name: 'Упаковочные решения' },
    { id: 'promo', name: 'Промо-продукция' },
    { id: 'special', name: 'Специальные виды печати' },
    { id: 'office', name: 'Офисная продукция' },
    { id: 'branding', name: 'Брендирование' }
];

export const services: Service[] = [
    {
      "id": "assembly-circulation",
      "name": "Сборные тиражи",
      "description": "Экономичные решения для печати небольших тиражей с возможностью объединения заказов.",
      "image": "",
      "category": "special",
      "featured": false,
      "features": []
    },
    {
      "id": "digital-circulation",
      "name": "Цифровые тиражи",
      "description": "Высококачественная цифровая печать для быстрого выполнения заказов любого объема.",
      "image": "",
      "category": "special",
      "featured": false,
      "features": []
    },
    {
      "id": "individual-order",
      "name": "Индивидуальный заказ",
      "description": "Персонализированные решения для ваших уникальных потребностей в печати и дизайне.",
      "image": "",
      "category": "special",
      "featured": false,
      "features": []
    },
    {
      "id": "risograph-printing",
      "name": "Печать на ризографе",
      "description": "Экономичная печать для массовых тиражей с сохранением хорошего качества.",
      "image": "",
      "category": "special",
      "featured": false,
      "features": []
    },
    {
      "id": "multipage-products",
      "name": "Многостраничная продукция",
      "description": "Профессиональная печать брошюр, каталогов и других многостраничных материалов.",
      "image": "",
      "category": "office",
      "featured": false,
      "features": []
    },
    {
      "id": "large-format-printing",
      "name": "Широкоформатная печать",
      "description": "Печать плакатов, баннеров и других материалов большого формата с высоким качеством.",
      "image": "",
      "category": "large-format",
      "featured": false,
      "features": []
    },
    {
      "id": "canvas-paintings",
      "name": "Картины на подрамнике",
      "description": "Печать изображений на холсте с натяжкой на подрамник для создания художественных работ.",
      "image": "",
      "category": "large-format",
      "featured": false,
      "features": []
    },
    {
      "id": "business-card-templates",
      "name": "Шаблоны визиток",
      "description": "Готовые дизайны визитных карточек для быстрого заказа и печати.",
      "image": "",
      "category": "business",
      "featured": false,
      "features": []
    },
    {
      "id": "die-cut-products",
      "name": "Высечная продукция",
      "description": "Изготовление изделий сложной формы с помощью высечки.",
      "image": "",
      "category": "special",
      "featured": false,
      "features": []
    },
    {
      "id": "wobblers",
      "name": "Воблеры",
      "description": "Рекламные конструкции для привлечения внимания в торговых залах.",
      "image": "",
      "category": "marketing",
      "featured": false,
      "features": []
    },
    {
      "id": "placemats",
      "name": "Плейсмет",
      "description": "Печатные подставки под тарелки для кафе и ресторанов.",
      "image": "",
      "category": "marketing",
      "featured": false,
      "features": []
    },
    {
      "id": "cubes",
      "name": "Кубэрики",
      "description": "Рекламные кубики для промоакций и оформления точек продаж.",
      "image": "",
      "category": "promo",
      "featured": false,
      "features": []
    },
    {
      "id": "offset-folders",
      "name": "Папки офсетные",
      "description": "Качественные офсетные папки для презентаций и документов.",
      "image": "",
      "category": "business",
      "featured": false,
      "features": []
    },
    {
      "id": "digital-folders",
      "name": "Папки цифровые",
      "description": "Печать папок на цифровом оборудовании для небольших тиражей.",
      "image": "",
      "category": "business",
      "featured": false,
      "features": []
    },
    {
      "id": "hangers",
      "name": "Хенгеры",
      "description": "Рекламные подвесы для одежды в магазинах.",
      "image": "",
      "category": "promo",
      "featured": false,
      "features": []
    },
    {
      "id": "bags",
      "name": "Пакеты",
      "description": "Брендированные пакеты для упаковки и промоакций.",
      "image": "",
      "category": "branding",
      "featured": false,
      "features": []
    },
    {
      "id": "envelopes",
      "name": "Конверты",
      "description": "Печать конвертов для деловой и личной переписки.",
      "image": "",
      "category": "packaging",
      "featured": false,
      "features": []
    },
    {
      "id": "posters",
      "name": "Плакаты",
      "description": "Яркая и качественная печать плакатов любого размера.",
      "image": "",
      "category": "marketing",
      "featured": false,
      "features": []
    },
    {
      "id": "stickers",
      "name": "Наклейки",
      "description": "Наклейки для маркировки, рекламы и декора.",
      "image": "",
      "category": "marketing",
      "featured": false,
      "features": []
    },
    {
      "id": "calendars",
      "name": "Календари",
      "description": "Печать календарей различных форматов и дизайнов.",
      "image": "",
      "category": "office",
      "featured": false,
      "features": []
    },
    {
      "id": "notebooks",
      "name": "Блокноты",
      "description": "Брендированные блокноты для офиса и промоакций.",
      "image": "",
      "category": "office",
      "featured": false,
      "features": []
    },
    {
      "id": "magnets",
      "name": "Магниты",
      "description": "Рекламные магниты для продвижения бренда.",
      "image": "",
      "category": "promo",
      "featured": false,
      "features": []
    },
    {
      "id": "polypropylene-bags",
      "name": "Полипропилен пакеты",
      "description": "Прочные и экологичные пакеты с нанесением логотипа.",
      "image": "",
      "category": "packaging",
      "featured": false,
      "features": []
    },
    {
      "id": "car-branding",
      "name": "Брендирование автомобилей",
      "description": "Наклейки и полноцветная печать для оформления автомобилей.",
      "image": "",
      "category": "advertising",
      "featured": false,
      "features": []
    },
    {
      "id": "seals-stamps",
      "name": "Печати и штампы",
      "description": "Изготовление печатей и штампов для документов.",
      "image": "",
      "category": "office",
      "featured": false,
      "features": []
    },
    {
      "id": "souvenir-products",
      "name": "Сувенирная продукция",
      "description": "Подарочные и промо-изделия с вашим логотипом.",
      "image": "",
      "category": "branding",
      "featured": false,
      "features": []
    }
  ]