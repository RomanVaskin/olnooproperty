export type Settlement = {
  slug: string
  name: string
  type: string
  format: string
  priceFrom: string
  distance: string
  location: string
  image: string
  tag?: string
  houses: number
  plots: number
}

export const settlements: Settlement[] = [
  {
    slug: 'maloe-isakovo',
    name: 'Малое Исаково',
    type: 'Коттеджный посёлок',
    format: 'Дома и участки',
    priceFrom: 'от 12 млн ₽',
    distance: '35 км от города',
    location: 'Калининградская область',
    image: '/images/settlement-maloe-isakovo.png',
    tag: 'Премиум',
    houses: 24,
    plots: 38,
  },
  {
    slug: 'sosnovy-bereg',
    name: 'Сосновый Берег',
    type: 'Коттеджный посёлок',
    format: 'Дома и участки',
    priceFrom: 'от 9,5 млн ₽',
    distance: '28 км от города',
    location: 'у озера',
    image: '/images/settlement-3.png',
    tag: 'Featured',
    houses: 31,
    plots: 20,
  },
  {
    slug: 'lesnaya-usadba',
    name: 'Лесная Усадьба',
    type: 'Посёлок бизнес-класса',
    format: 'Готовые дома',
    priceFrom: 'от 18 млн ₽',
    distance: '42 км от города',
    location: 'сосновый лес',
    image: '/images/settlement-2.png',
    houses: 16,
    plots: 0,
  },
  {
    slug: 'ozernyy',
    name: 'Озёрный',
    type: 'Дачный посёлок',
    format: 'Участки',
    priceFrom: 'от 2,8 млн ₽',
    distance: '50 км от города',
    location: 'первая линия воды',
    image: '/images/plot-2.png',
    houses: 0,
    plots: 54,
  },
]

export type Listing = {
  id: string
  title: string
  kind: 'Дом' | 'Участок'
  price: string
  area: string
  settlement: string
  image: string
  specs: string[]
}

export const houses: Listing[] = [
  {
    id: 'h1',
    title: 'Дом с панорамным остеклением',
    kind: 'Дом',
    price: '18,4 млн ₽',
    area: '186 м²',
    settlement: 'Малое Исаково',
    image: '/images/house-1.png',
    specs: ['4 спальни', 'Участок 12 сот.', 'Терраса'],
  },
  {
    id: 'h2',
    title: 'Вилла с вечерним светом',
    kind: 'Дом',
    price: '24,9 млн ₽',
    area: '240 м²',
    settlement: 'Сосновый Берег',
    image: '/images/house-2.png',
    specs: ['5 спален', 'Участок 15 сот.', 'Гараж'],
  },
  {
    id: 'h3',
    title: 'Скандинавский одноэтажный дом',
    kind: 'Дом',
    price: '15,2 млн ₽',
    area: '148 м²',
    settlement: 'Лесная Усадьба',
    image: '/images/house-3.png',
    specs: ['3 спальни', 'Участок 10 сот.', 'Сауна'],
  },
]

export const plots: Listing[] = [
  {
    id: 'p1',
    title: 'Участок у соснового леса',
    kind: 'Участок',
    price: '3,6 млн ₽',
    area: '12 соток',
    settlement: 'Малое Исаково',
    image: '/images/plot-1.png',
    specs: ['ИЖС', 'Газ по границе', 'Свет 15 кВт'],
  },
  {
    id: 'p2',
    title: 'Участок на первой линии',
    kind: 'Участок',
    price: '5,9 млн ₽',
    area: '18 соток',
    settlement: 'Озёрный',
    image: '/images/plot-2.png',
    specs: ['ИЖС', 'У воды', 'Все коммуникации'],
  },
  {
    id: 'p3',
    title: 'Участок с видом на озеро',
    kind: 'Участок',
    price: '4,2 млн ₽',
    area: '15 соток',
    settlement: 'Сосновый Берег',
    image: '/images/nature-lake.png',
    specs: ['ИЖС', 'Лес рядом', 'Дорога круглый год'],
  },
]

export const crmStages = [
  'Новый лид',
  'Контакт',
  'Подборка',
  'Показ',
  'Переговоры',
  'Бронь',
  'Сделка',
] as const

export type Lead = {
  name: string
  phone: string
  source: string
  budget: string
  direction: string
  object: string
  manager: string
  nextAction: string
  stage: (typeof crmStages)[number]
}

export const leads: Lead[] = [
  {
    name: 'Игорь Смирнов',
    phone: '+7 900 128-44-10',
    source: 'Сайт · подборка',
    budget: '12–16 млн ₽',
    direction: 'Северное',
    object: 'Малое Исаково · дом',
    manager: 'А. Орлова',
    nextAction: 'Звонок сегодня 15:00',
    stage: 'Новый лид',
  },
  {
    name: 'Мария Ковалёва',
    phone: '+7 921 553-09-77',
    source: 'Реклама · Директ',
    budget: '8–10 млн ₽',
    direction: 'Западное',
    object: 'Озёрный · участок',
    manager: 'А. Орлова',
    nextAction: 'Отправить подборку',
    stage: 'Контакт',
  },
  {
    name: 'Дмитрий Лебедев',
    phone: '+7 905 210-31-08',
    source: 'Рекомендация',
    budget: '18–24 млн ₽',
    direction: 'Северное',
    object: 'Сосновый Берег · дом',
    manager: 'П. Гущин',
    nextAction: 'Показ в субботу',
    stage: 'Показ',
  },
  {
    name: 'Елена Титова',
    phone: '+7 911 447-62-30',
    source: 'Сайт · форма',
    budget: '14–18 млн ₽',
    direction: 'Восточное',
    object: 'Лесная Усадьба · дом',
    manager: 'П. Гущин',
    nextAction: 'Согласовать договор',
    stage: 'Переговоры',
  },
  {
    name: 'Сергей Панов',
    phone: '+7 903 700-15-22',
    source: 'Партнёр',
    budget: '20+ млн ₽',
    direction: 'Северное',
    object: 'Малое Исаково · дом',
    manager: 'А. Орлова',
    nextAction: 'Внести предоплату',
    stage: 'Бронь',
  },
]
