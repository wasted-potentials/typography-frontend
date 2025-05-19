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
  { id: 'business', name: 'Деловые материалы' },
  { id: 'marketing', name: 'Маркетинговые материалы' },
  { id: 'largef', name: 'Большой формат' },
  { id: 'packaging', name: 'Упаковка' },
  { id: 'promotional', name: 'Рекламные товары' },
  { id: 'specialty', name: 'Специальные товары' },
]

export const services: Service[] = [
  {
    id: 'business-cards',
    name: 'Визитные карточки',
    description: 'Произведите неизгладимое впечатление с помощью наших визитных карточек премиум-класса, доступных в различных вариантах исполнения.',
    image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'business',
    featured: true,
    features: [
      'Стандартные, премиальные и ультрапремиальные акции',
      'Матовая, глянцевая или приятная на ощупь отделка',
      'Дополнительное точечное УФ-тиснение, тиснение фольгой или рельефное тиснение',
      'Полноцветная печать с обеих сторон',
      'Доступны быстрые сроки выполнения работ'
    ]
  },
  {
    id: 'brochures',
    name: 'Брошюры и флаеры',
    description: 'Продемонстрируйте свои товары или услуги с помощью наших высококачественных брошюр и листовок.',
    image: 'https://images.pexels.com/photos/6847584/pexels-photo-6847584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'marketing',
    featured: true,
    features: [
      'Варианты сгибания вдвое, втрое или z-образно',
      'Несколько вариантов запаса бумаги',
      'Полноцветная печать с обеих сторон',
      'Доступны различные размеры',
      'Оптовые цены для крупных заказов'
    ]
  },
  {
    id: 'posters',
    name: 'Плакаты и вывески',
    description: 'Привлекайте внимание яркими плакатами и вывесками для ваших мероприятий, рекламных акций или витрин магазинов.',
    image: 'https://images.pexels.com/photos/7173026/pexels-photo-7173026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'largef',
    featured: true,
    features: [
      'Долговечные варианты для внутренних и наружных работ',
      'Размеры от 11 "x17" до 36 "x48" и больше',
      'Доступны материалы, защищающие от атмосферных воздействий',
      'Варианты монтажа, включая пенопластовую сердцевину и ПВХ',
      'Доступны срочные услуги в тот же день'
    ]
  },
  {
    id: 'banners',
    name: 'Баннеры',
    description: 'Создавайте привлекательные баннеры и дисплеи для торговых выставок, розничной торговли или мероприятий.',
    image: 'https://images.pexels.com/photos/1449775/pexels-photo-1449775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'largef',
    featured: true,
    features: [
      'Виниловые, сетчатые или тканевые материалы',
      'Нестандартные размеры и формы',
      'Усиленные кромки и втулки',
      'Доступны выдвижные подставки для баннеров',
      'Внутренние и наружные варианты'
    ]
  },
  {
    id: 'labels',
    name: 'Этикетки и наклейки',
    description: 'Изготовленные на заказ этикетки и стикеры для продуктов, упаковки или рекламных целей.',
    image: 'https://images.pexels.com/photos/5691703/pexels-photo-5691703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'packaging',
    featured: true,
    features: [
      'Нестандартные формы и размеры',
      'Водонепроницаемые и устойчивые к атмосферным воздействиям варианты',
      'Форматы в рулонах или листах',
      'Съемные или постоянные клеи',
      'Прозрачные, белые или металлические материалы'
    ]
  },
  {
    id: 'letterheads',
    name: 'Фирменные бланки и конверты',
    description: 'Профессиональные бланки и конверты, которые украсят вашу деловую переписку.',
    image: 'https://images.pexels.com/photos/3285209/pexels-photo-3285209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'business',
    featured: false,
    features: [
      'Акции бумаги премиум-класса',
      'Полноцветная или точечная печать',
      'Доступны конверты различных размеров',
      'Дополнительные оконные ограждения',
      'Соответствующий дизайну стиль вашего бренда'
    ]
  },
  {
    id: 'folders',
    name: 'Папки для презентаций',
    description: 'Упорядочивайте свои документы с помощью пользовательских папок для презентаций.',
    image: 'https://images.pexels.com/photos/6332/coffee-cup-books-home.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'business',
    featured: false,
    features: [
      'Сандартный размер 9 "x12" или нестандартные размеры',
      'Прорези для визитных карточек необязательны',
      'Дополнительные карманы для документов',
      'Глянцевая, матовая или приятная на ощупь отделка',
      'Варианты крепления позвоночника и увеличения вместимости'
    ]
  },
  {
    id: 'notebooks',
    name: 'Пользовательские записные книжки',
    description: 'Персонализированные блокноты и журналы для вашего бизнеса или специальных мероприятий.',
    image: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'promotional',
    featured: false,
    features: [
      'Варианты твердой или мягкой обложки',
      'Различные типы бумаги и переплетов',
      'Пользовательские макеты и дизайн страниц',
      'Доступно тиснение фольгой или удаление оловянной пленки',
      'Оптовые скидки при крупных заказах'
    ]
  },
  {
    id: 'calendars',
    name: 'Календари',
    description: 'Изготовленные на заказ настенные или настольные календари для маркетинга или личного использования.',
    image: 'https://images.pexels.com/photos/6443088/pexels-photo-6443088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'promotional',
    featured: false,
    features: [
      'Настенные, настольные или карманные размеры',
      'Переплет со спиральным или седловидным швом',
      'Настраиваемые даты и праздники',
      'Варианты бумаги премиум-класса',
      'Фирменный знак с информацией о вашей компании'
    ]
  },
  {
    id: 'tshirts',
    name: 'Футболки на заказ',
    description: 'Высококачественные футболки на заказ для команд, мероприятий или других товаров.',
    image: 'https://images.pexels.com/photos/5698853/pexels-photo-5698853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'promotional',
    featured: false,
    features: [
      'Варианты трафаретной печати или нанесения непосредственно на одежду',
      'Различные бренды рубашек и материалы из которых они изготовлены',
      'Полноцветная или точечная печать',
      'Размеры от XS до 3XL',
      'Низкие минимальные объемы заказа'
    ]
  },
  {
    id: 'packaging',
    name: 'Изготовленная на заказ упаковка',
    description: 'Выделяйтесь благодаря уникальной упаковке продукта и коробкам.',
    image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'packaging',
    featured: false,
    features: [
      'Нестандартные размеры и формы коробок',
      'Крафт-бумага, гофрокартон или товары премиум-класса',
      'Полноцветная печать и специальная отделка',
      'Доступны оконные вырезы',
      'Экологически чистые варианты'
    ]
  },
  {
    id: 'wedding',
    name: 'Свадебные канцелярские принадлежности',
    description: 'Красивые свадебные приглашения, с сохранением дат и открытки с благодарностями.',
    image: 'https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'specialty',
    featured: false,
    features: [
      'Высококачественные варианты бумаги, включая хлопчатобумажную и льняную',
      'Тиснение фольгой, печатная форма или цифровая печать',
      'Печать конвертов на заказ',
      'Доступны полные наборы приглашений',
      'Срочные услуги в сжатые сроки'
    ]
  }
]