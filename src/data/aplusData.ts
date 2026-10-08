export interface Project {
  id: string;
  name: string;
  subtitle: string;
  classType: 'Business+' | 'Premium' | 'Comfort+ / Business' | 'Club Premium';
  location: string;
  district: string;
  completion: string;
  floors: number;
  apartmentsCount: number;
  ceilingHeight: string;
  areaRange: string;
  pricePerSqM: number; // in USD
  mainImage: string;
  nightImage?: string;
  gallery: string[];
  description: string;
  advantages: string[];
  specs: { label: string; value: string }[];
  coordinates: { lat: number; lng: number };
}

export interface FloorPlan {
  id: string;
  projectId: string;
  projectName: string;
  rooms: 1 | 2 | 3 | 4 | 'penthouse';
  roomsLabel: string;
  area: number;
  floorRange: string;
  image: string;
  priceTotal: number;
  monthlyPaymentEstimate: number;
  features: string[];
  roomsBreakdown: { name: string; area: number }[];
}

export interface ConstructionUpdate {
  id: string;
  projectId: string;
  projectName: string;
  date: string;
  month: string;
  year: number;
  title: string;
  description: string;
  overallProgress: number; // percentage
  stages: { name: string; progress: number }[];
  images: string[];
}

export interface Leader {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface LandmarkProject {
  title: string;
  category: string;
  location: string;
  description: string;
  stats: string;
  image: string;
}

export const COMPANY_CONTACTS = {
  name: 'A PLUS Development',
  legalName: 'ОсОО «А Плюс Девелопмент»',
  license: 'Серия КРЦ-2 № 012064 от 31.01.2025 г.',
  phone: '+996 888 88-88-88',
  phoneDisplay: '0 888 88-88-88',
  email: 'office@a-plus.kg',
  salesEmail: 'sales@a-plus.kg',
  address: 'г. Бишкек, пр. Чынгыза Айтматова 243, БЦ «A Plus», 6 этаж',
  workHours: {
    weekdays: 'Пн — Пт: с 09:00 до 18:00',
    saturday: 'Суббота: с 10:00 до 16:00',
    sunday: 'Воскресенье: по предварительной записи'
  },
  whatsappUrl: 'https://wa.me/996888888888',
  instagram: 'https://instagram.com/aplus_development',
  telegram: 'https://t.me/aplus_development_kg',
  twoGisUrl: 'https://2gis.kg/bishkek'
};

export const PROJECTS: Project[] = [
  {
    id: 'senator',
    name: 'ЖК SENATOR',
    subtitle: 'Аристократичный комфорт в сердце Асанбая',
    classType: 'Business+',
    location: 'ул. Аалы Токомбаева, 23/8 (район Асанбай)',
    district: 'Асанбай / Южная магистраль',
    completion: 'II квартал 2026',
    floors: 16,
    apartmentsCount: 130,
    ceilingHeight: '3.1 м',
    areaRange: 'от 46 м² до 148 м²',
    pricePerSqM: 1250,
    mainImage: 'https://static.tildacdn.net/tild3330-6564-4033-a261-613031303031/senator_001_3.png',
    nightImage: 'https://static.tildacdn.net/tild3737-3663-4432-b235-333930616439/32_night__1_2.png',
    gallery: [
      'https://static.tildacdn.net/tild3863-3966-4632-b230-333033333539/senator_002.png',
      'https://static.tildacdn.net/tild3736-6536-4566-b034-316331393134/senator_2.png',
      'https://static.tildacdn.net/tild3737-3663-4432-b235-333930616439/32_night__1_2.png',
      'https://static.tildacdn.net/tild6163-6533-4064-a537-656338323339/sen_001_4.png',
      'https://static.tildacdn.net/tild3864-6166-4539-b363-383234656538/sen_002.png',
      'https://static.tildacdn.net/tild6132-6635-4331-a433-363330363330/sen_003.png',
      'https://static.tildacdn.net/tild3732-3464-4635-b566-303434313532/IMG_0612_1_3.png'
    ],
    description: 'Флагманский 16-этажный жилой дом класса Business+, расположенный в наиболее экологичном и престижном районе столицы — Асанбай. Утонченный неоклассический фасад из натурального камня, продуманные функциональные планировки с высокими потолками 3.1 м и витражным остеклением европейского профиля.',
    advantages: [
      'Престижная локация в экологически чистом районе Асанбай',
      'Закрытая охраняемая территория 24/7 с контролем доступа FaceID',
      'Двухуровневый подземный отапливаемый паркинг с зарядками для электромобилей',
      'Бесшумные скоростные лифты премиум-класса с плавным ходом',
      'Энергоэффективный вентилируемый фасад из натурального травертина и гранита',
      'Детские безопасные площадки европейского производства без доступа машин'
    ],
    specs: [
      { label: 'Класс жилья', value: 'Business+' },
      { label: 'Этажность', value: '16 этажей' },
      { label: 'Всего квартир', value: '130 резиденций' },
      { label: 'Высота потолков', value: '3.1 метра' },
      { label: 'Остекление', value: 'Reynaers Aluminium (Бельгия)' },
      { label: 'Отопление', value: 'Автономная газовая котельная' },
      { label: 'Срок сдачи', value: 'II квартал 2026 года' }
    ],
    coordinates: { lat: 42.8252, lng: 74.6291 }
  },
  {
    id: 'grand',
    name: 'ЖК GRAND',
    subtitle: 'Высота, созданная для подлинной жизни',
    classType: 'Premium',
    location: 'пр. Чынгыза Айтматова, 239 (Южная магистраль)',
    district: 'Пр. Ч. Айтматова / Южная магистраль',
    completion: 'IV квартал 2028',
    floors: 21,
    apartmentsCount: 90,
    ceilingHeight: '3.3 м',
    areaRange: 'от 86 м² до 270 м²',
    pricePerSqM: 1450,
    mainImage: 'https://static.tildacdn.net/tild6232-6437-4235-b634-613231373063/grand_001_3.png',
    nightImage: 'https://static.tildacdn.net/tild6436-6331-4463-b461-646233626333/12_night__2_1_1_3.png',
    gallery: [
      'https://static.tildacdn.net/tild6133-3466-4231-b763-613333366138/grand_002.png',
      'https://static.tildacdn.net/tild6436-6331-4463-b461-646233626333/12_night__2_1_1_3.png',
      'https://static.tildacdn.net/tild6334-6134-4133-b634-383830643639/IMG_0613_1.png',
      'https://static.tildacdn.net/tild6637-6339-4132-b237-663336346364/IMG_0614_1.png'
    ],
    description: 'Премиальный 21-этажный архитектурный комплекс всего на 90 квартир. Дом клубного формата на главном столичном проспекте Айтматова, окруженный 5 городскими парками в радиусе 500 метров. Просторные европланировки, видовые пентхаусы с террасами и приватная внутренняя инфраструктура для резидентов.',
    advantages: [
      'Всего 90 эксклюзивных квартир — абсолютная приватность и высокий статус',
      '5 благоустроенных парков в шаговой доступности (менее 500 м)',
      'Собственный коворкинг, фитнес-зал и приватный мини-кинотеатр только для жильцов',
      'Видовая лаунж-терраса на крыше с панорамой гор Ала-Тоо',
      'Панорамные окна Schuco в пол с защитой от ультрафиолета и теплопотерь',
      'Консьерж-сервис 24/7, лобби с авторским интерьером и каминной зоной'
    ],
    specs: [
      { label: 'Класс жилья', value: 'Premium Club' },
      { label: 'Этажность', value: '21 этаж' },
      { label: 'Количество квартир', value: '90 квартир' },
      { label: 'Высота потолков', value: '3.3 метра' },
      { label: 'Остекление', value: 'Schüco (Германия)' },
      { label: 'Инфраструктура', value: 'Кинотеатр, фитнес, коворкинг, терраса' },
      { label: 'Срок сдачи', value: 'IV квартал 2028 года' }
    ],
    coordinates: { lat: 42.8315, lng: 74.5862 }
  },
  {
    id: 'tunguch',
    name: 'ЖК TUNGUCH RESIDENCE',
    subtitle: 'Масштабный квартал комфорта и семейного счастья',
    classType: 'Comfort+ / Business',
    location: 'ул. Анкара, 1/8 (мкр. Тунгуч)',
    district: 'Тунгуч / ул. Анкара',
    completion: 'IV квартал 2029',
    floors: 14,
    apartmentsCount: 728,
    ceilingHeight: '3.3 м',
    areaRange: 'от 48 м² до 138 м²',
    pricePerSqM: 950,
    mainImage: 'https://static.tildacdn.net/tild3837-3837-4566-a134-366530313537/tunguch_001_3.png',
    gallery: [
      'https://static.tildacdn.net/tild3561-3434-4637-b863-316433656532/tunguch_002.png',
      'https://static.tildacdn.net/tild3732-6163-4138-b533-663366653032/Aplus-Tunguch_9_2.png',
      'https://static.tildacdn.net/tild6439-3331-4535-b339-386133343964/Aplus-Tunguch_20_2.png',
      'https://static.tildacdn.net/tild3938-3838-4939-b031-643764353538/_DSC1298_2.png',
      'https://static.tildacdn.net/tild6435-3763-4265-a463-393462363330/_DSC1466_2.png'
    ],
    description: 'Грандиозный жилой комплекс на закрытой территории 2 гектара из 8 современных монолитных блоков на 728 квартир. Идеальная семейная среда с концепцией «двор без машин», собственным детским садом на территории, беговыми дорожками, воркаут-зонами и вместительным паркингом на 610 автомобилей.',
    advantages: [
      'Территория 2 гектара с продуманным ландшафтным парком и зонами отдыха',
      'Собственный современный детский сад прямо во дворе комплекса',
      'Безопасный двор без машин — дети играют в полной безопасности',
      'Круговая беговая и велосипедная дорожка, спортивные площадки',
      'Паркинг на 610 машиномест (подземный и охраняемый гостевой)',
      'Высота потолков 3.3 м даже в базовых планировках'
    ],
    specs: [
      { label: 'Площадь территории', value: '2 гектара' },
      { label: 'Количество блоков', value: '8 монолитных домов' },
      { label: 'Всего квартир', value: '728 квартир' },
      { label: 'Паркинг', value: '610 машиномест' },
      { label: 'Высота потолков', value: '3.3 метра' },
      { label: 'Собственный детсад', value: 'На территории' },
      { label: 'Срок сдачи', value: 'IV квартал 2029 года' }
    ],
    coordinates: { lat: 42.8512, lng: 74.6734 }
  },
  {
    id: 'aristocrat',
    name: 'ЖК АРИСТОКРАТ',
    subtitle: 'Коллекционная архитектура вне времени',
    classType: 'Club Premium',
    location: 'ул. Аалы Токомбаева, 1/9 (Южная магистраль)',
    district: 'Южная магистраль / Ботанический сад',
    completion: 'III квартал 2029',
    floors: 14,
    apartmentsCount: 110,
    ceilingHeight: '3.4 м',
    areaRange: 'от 75 м² до 240 м²',
    pricePerSqM: 1350,
    mainImage: 'https://static.tildacdn.net/tild6431-3665-4833-a231-356465633064/IMG08902-.jpg',
    gallery: [
      'https://static.tildacdn.net/tild3736-6536-4566-b034-316331393134/senator_2.png',
      'https://static.tildacdn.net/tild3665-6338-4365-b832-333434363561/sen_005.png',
      'https://static.tildacdn.net/tild3765-3637-4839-a639-633731363337/sen_007.png'
    ],
    description: 'Новый клубный проект компании A PLUS Development на первой линии Южной магистрали напротив Ботанического сада. Старт строительства — сентябрь 2026. Монументальная неоклассическая архитектура с элементами современной эстетики: натуральный полированный гранит, благородный травертин и панорамное остекление.',
    advantages: [
      'Первая линия Южной магистрали с потрясающим видом на горы и парк',
      'Клубный статус и однородное социальное окружение',
      'Фасад из натурального гранита и южного травертина',
      'Индивидуальные системы очистки и рекуперации воздуха',
      'Приватный двор с фонтаном и прогулочной аллеей',
      'Презентабельное лобби с консьержем и лаунжем для деловых встреч'
    ],
    specs: [
      { label: 'Класс жилья', value: 'Club Premium' },
      { label: 'Старт строительства', value: 'Сентябрь 2026 года' },
      { label: 'Высота потолков', value: '3.4 метра' },
      { label: 'Материалы фасада', value: 'Натуральный гранит и травертин' },
      { label: 'Остекление', value: 'Schüco триплекс' },
      { label: 'Срок сдачи', value: 'III квартал 2029 года' }
    ],
    coordinates: { lat: 42.8288, lng: 74.6053 }
  }
];

export const FLOOR_PLANS: FloorPlan[] = [
  {
    id: 'plan-1k-senator',
    projectId: 'senator',
    projectName: 'ЖК SENATOR',
    rooms: 1,
    roomsLabel: '1-комнатная квартира',
    area: 46.2,
    floorRange: '3 – 15 этажи',
    image: 'https://static.tildacdn.net/tild3861-6366-4139-b930-373937623730/46_1_3.png',
    priceTotal: 57750,
    monthlyPaymentEstimate: 808,
    features: ['Просторная спальня 17.5 м²', 'Кухня с выходом на лоджию', 'Гардеробная ниша в прихожей', 'Высота потолков 3.1 м'],
    roomsBreakdown: [
      { name: 'Кухня-столовая', area: 13.8 },
      { name: 'Спальня', area: 17.5 },
      { name: 'Прихожая с гардеробом', area: 6.9 },
      { name: 'Совмещенный санузел', area: 4.8 },
      { name: 'Теплая лоджия', area: 3.2 }
    ]
  },
  {
    id: 'plan-2k-senator',
    projectId: 'senator',
    projectName: 'ЖК SENATOR',
    rooms: 2,
    roomsLabel: '2-комнатная квартира',
    area: 68.4,
    floorRange: '2 – 14 этажи',
    image: 'https://static.tildacdn.net/tild3933-3532-4262-a335-383535656233/46_1.png',
    priceTotal: 85500,
    monthlyPaymentEstimate: 1197,
    features: ['Мастер-спальня с гардеробом', 'Кухня-гостиная 23.4 м²', 'Два санузла', 'Окна на тихий сквер'],
    roomsBreakdown: [
      { name: 'Кухня-гостиная', area: 23.4 },
      { name: 'Мастер-спальня', area: 18.2 },
      { name: 'Детская / Кабинет', area: 13.1 },
      { name: 'Главный санузел', area: 5.2 },
      { name: 'Гостевой санузел', area: 2.8 },
      { name: 'Холл', area: 5.7 }
    ]
  },
  {
    id: 'plan-3k-senator',
    projectId: 'senator',
    projectName: 'ЖК SENATOR',
    rooms: 3,
    roomsLabel: '3-комнатная квартира',
    area: 104.5,
    floorRange: '4 – 16 этажи',
    image: 'https://static.tildacdn.net/tild3539-3332-4230-a639-326433633362/_0010_11tif1-standar.png',
    priceTotal: 130625,
    monthlyPaymentEstimate: 1828,
    features: ['Двусторонняя планировка (распашонка)', 'Вид на горы Ала-Тоо', '3 раздельные спальни', 'Постирочная комната'],
    roomsBreakdown: [
      { name: 'Гостиная', area: 28.5 },
      { name: 'Кухня-столовая', area: 18.2 },
      { name: 'Мастер-спальня', area: 20.4 },
      { name: 'Детская спальня', area: 15.6 },
      { name: 'Санузел и постирочная', area: 8.4 },
      { name: 'Лоджия с витражом', area: 5.4 },
      { name: 'Прихожая', area: 8.0 }
    ]
  },
  {
    id: 'plan-2k-grand',
    projectId: 'grand',
    projectName: 'ЖК GRAND',
    rooms: 2,
    roomsLabel: '2-комнатная резиденция',
    area: 86.0,
    floorRange: '3 – 18 этажи',
    image: 'https://static.tildacdn.net/tild6230-6566-4662-a462-383064323763/_0009_221-standard-s.png',
    priceTotal: 124700,
    monthlyPaymentEstimate: 1745,
    features: ['Панорамный эркер Schuco', 'Потолки 3.3 м', 'Мастер-блок со своей гардеробной', 'Шумоизоляция премиум'],
    roomsBreakdown: [
      { name: 'Кухня-гостиная open space', area: 34.0 },
      { name: 'Мастер-спальня', area: 22.5 },
      { name: 'Гардеробная комната', area: 8.2 },
      { name: 'Санузел', area: 6.8 },
      { name: 'Холл', area: 8.5 },
      { name: 'Французский балкон', area: 6.0 }
    ]
  },
  {
    id: 'plan-3k-grand',
    projectId: 'grand',
    projectName: 'ЖК GRAND',
    rooms: 3,
    roomsLabel: '3-комнатная резиденция',
    area: 142.0,
    floorRange: '5 – 19 этажи',
    image: 'https://static.tildacdn.net/tild6133-3035-4763-b561-663531326236/_0017_19_4_1.png',
    priceTotal: 205900,
    monthlyPaymentEstimate: 2880,
    features: ['Угловое панорамное остекление', 'Панорама на Южную магистраль и горы', 'Отдельный гостевой блок', '2 мастер-спальни'],
    roomsBreakdown: [
      { name: 'Парадная гостиная', area: 42.0 },
      { name: 'Кухня-столовая', area: 22.0 },
      { name: 'Мастер-спальня с ванной', area: 28.0 },
      { name: 'Спальня 2', area: 19.5 },
      { name: 'Гостевой санузел', area: 4.5 },
      { name: 'Гардеробные (2 шт.)', area: 14.0 },
      { name: 'Входной вестибюль', area: 12.0 }
    ]
  },
  {
    id: 'plan-penthouse-grand',
    projectId: 'grand',
    projectName: 'ЖК GRAND',
    rooms: 'penthouse',
    roomsLabel: 'Пентхаус с открытой террасой',
    area: 268.0,
    floorRange: '20 – 21 этажи',
    image: 'https://static.tildacdn.net/tild6133-3035-4763-b561-663531326236/_0017_19_4_1.png',
    priceTotal: 388600,
    monthlyPaymentEstimate: 5440,
    features: ['Личная терраса на крыше 65 м²', 'Панорамный обзор 360°', 'Высота потолков 3.6 м', 'Возможность установки камина'],
    roomsBreakdown: [
      { name: 'Гранд-гостиная со вторым светом', area: 68.0 },
      { name: 'Кухня шеф-повара', area: 26.0 },
      { name: 'Мастер-сьют с террасой', area: 44.0 },
      { name: 'Спальня 2', area: 22.0 },
      { name: 'Спальня 3', area: 20.0 },
      { name: 'Кабинет с библиотекой', area: 18.0 },
      { name: 'Открытая терраса с BBQ', area: 65.0 },
      { name: 'Ванные комнаты (3 шт.)', area: 21.0 }
    ]
  },
  {
    id: 'plan-1k-tunguch',
    projectId: 'tunguch',
    projectName: 'ЖК TUNGUCH RESIDENCE',
    rooms: 1,
    roomsLabel: '1-комнатная квартира',
    area: 48.0,
    floorRange: '2 – 14 этажи',
    image: 'https://static.tildacdn.net/tild3934-3436-4436-b262-396666643832/TunguchR-131048_1.png',
    priceTotal: 45600,
    monthlyPaymentEstimate: 638,
    features: ['Квадратная эргономичная спальня', 'Большая кухня 14.2 м²', 'Потолки 3.3 м', 'Вид на закрытый эко-двор'],
    roomsBreakdown: [
      { name: 'Кухня', area: 14.2 },
      { name: 'Спальня', area: 18.5 },
      { name: 'Санузел', area: 4.8 },
      { name: 'Прихожая', area: 6.5 },
      { name: 'Балкон', area: 4.0 }
    ]
  },
  {
    id: 'plan-2k-tunguch',
    projectId: 'tunguch',
    projectName: 'ЖК TUNGUCH RESIDENCE',
    rooms: 2,
    roomsLabel: '2-комнатная квартира',
    area: 72.5,
    floorRange: '3 – 12 этажи',
    image: 'https://static.tildacdn.net/tild3934-3436-4436-b262-396666643832/TunguchR-131048_1.png',
    priceTotal: 68875,
    monthlyPaymentEstimate: 964,
    features: ['Раздельный санузел', 'Кухня-гостиная 24 м²', 'Лоджия с теплым полом', 'Идеально для молодой семьи'],
    roomsBreakdown: [
      { name: 'Гостиная', area: 22.0 },
      { name: 'Спальня родителей', area: 16.5 },
      { name: 'Кухня-столовая', area: 15.0 },
      { name: 'Ванная комната', area: 4.5 },
      { name: 'Санузел гостевой', area: 2.5 },
      { name: 'Коридор', area: 8.0 },
      { name: 'Лоджия', area: 4.0 }
    ]
  }
];

export const BMW_PROMO = {
  title: 'Выиграйте BMW X7 при покупке квартиры в 2026 году!',
  carModel: 'BMW X7 xDrive40i M Sport (2026)',
  image: 'https://static.tildacdn.net/tild6364-3231-4634-b934-383236366466/bmw_2.png',
  altImage: 'https://static.tildacdn.net/tild3034-3164-4464-b161-373966643932/BMW-MY26-X7-DI22_000.webp',
  subtitle: 'Эксклюзивный розыгрыш от A PLUS Development для всех покупателей недвижимости в любом из наших жилых комплексов.',
  terms: [
    'Каждые $20 000 стоимости квартиры = 1 лотерейный билет',
    'Участвуют все жилые комплексы: Senator, Grand, Tunguch Residence, Aristocrat',
    'Больше сумма сделки — выше ваши шансы стать владельцем премиального флагманского кроссовера',
    'Официальный прозрачный розыгрыш в прямом эфире с участием независимой комиссии'
  ],
  deadline: 'Декабрь 2026 года'
};

export const LANDMARK_PROJECTS: LandmarkProject[] = [
  {
    title: 'Стадион «Илбирс»',
    category: 'Спортивная инфраструктура столицы',
    location: 'г. Бишкек',
    description: 'A PLUS Development выступает генеральным подрядчиком строительства ультрасовременного спортивно-оздоровительного стадиона международного уровня. Комплекс задает новый стандарт спортивной инфраструктуры Кыргызстана.',
    stats: '15 000+ мест · ФИФА стандарты',
    image: 'https://static.tildacdn.net/tild6431-3665-4833-a231-356465633064/IMG08902-.jpg'
  },
  {
    title: 'Гидроэлектростанция (ГЭС) в Сокулуке',
    category: 'Энергетический промышленный объект',
    location: 'Чуйская область, г. Сокулук',
    description: 'Один из сложнейших проектов гидротехнического строительства, реализованный силами наших инженеров с нуля. 3 года непрерывных работ, более 4 километров водопроводящих каналов промышленной гидротехники.',
    stats: '4 км каналов · 3 года работ с нуля',
    image: 'https://static.tildacdn.net/tild3334-6437-4731-b536-343761353430/00c13230db8f5babea19.jpg'
  },
  {
    title: 'Флагманский комплекс АЗС «Partner Neft»',
    category: 'Коммерческая инфраструктура',
    location: 'г. Токмок',
    description: 'Более 10 лет мы специализируемся на проектировании и возведении высокотехнологичных автозаправочных комплексов. Проект в Токмоке задал принципиально новый уровень сервиса и экологической безопасности на рынке КР.',
    stats: 'Европейские эко-стандарты · 10+ лет опыта',
    image: 'https://static.tildacdn.net/tild3665-6631-4138-b235-353432653462/orig.jpg'
  },
  {
    title: 'Бизнес-Центр «A Plus»',
    category: 'Премиальная деловая недвижимость',
    location: 'пр. Ч. Айтматова, 243',
    description: 'Собственный современный деловой центр класса А, объединяющий штаб-квартиру компании, флагманский клиентский офис продаж и пространства для ведущих международных партнеров.',
    stats: 'Класс А · Штаб-квартира A PLUS',
    image: 'https://static.tildacdn.net/tild6136-6364-4038-a264-313061363732/Artboard_122x_2.png'
  }
];

export const LEADERSHIP: Leader[] = [
  {
    name: 'Кидибаев Аваз Мустафаевич',
    role: 'Генеральный директор A PLUS Development',
    quote: '«Мы не разделяем строительство и жизнь. Для нас важен результат — ощущение комфорта, тишины и уверенности, которое человек получает, возвращаясь домой. Этот уровень — не ориентир, а обязательный стандарт компании.»',
    image: 'https://static.tildacdn.net/tild6363-6130-4233-b636-363830333132/000_2.png'
  },
  {
    name: 'Жумалиев Эркинбек Кубанычбекович',
    role: 'Первый заместитель генерального директора',
    quote: '«Надежность нельзя доказать громкими обещаниями — она проявляется в поступках, строгом соблюдении графиков и культуре строительства, которую каждый покупатель может оценить лично на стройплощадке.»',
    image: 'https://static.tildacdn.net/tild3865-3138-4736-b733-666266356332/001_2.png'
  },
  {
    name: 'Сыдыгалиев Замир Эркинбекович',
    role: 'Директор по строительству',
    quote: '«В основе монолита наших зданий — расчет на сейсмостойкость до 9 баллов, использование арматуры повышенной прочности и бетона класса B30. В вопросах безопасности мы не идем ни на малейшие компромиссы.»',
    image: 'https://static.tildacdn.net/tild3439-3965-4032-a532-613265373237/002_2.png'
  }
];

export const PARTNERS_AND_MATERIALS = [
  {
    name: 'Schüco',
    country: 'Германия',
    role: 'Алюминиевые светопрозрачные фасадные системы',
    logo: 'https://static.tildacdn.net/tild3635-3461-4561-a262-346163303033/schuco.png'
  },
  {
    name: 'Reynaers Aluminium',
    country: 'Бельгия',
    role: 'Премиальные раздвижные и оконные конструкции',
    logo: 'https://static.tildacdn.net/tild3466-3036-4361-a361-623737646131/reynaers.png'
  },
  {
    name: 'Walter',
    country: 'Австрия / Германия',
    role: 'Высокоточная архитектурная фурнитура и крепеж',
    logo: 'https://static.tildacdn.net/tild6664-3931-4239-a234-326631356662/walter.png'
  },
  {
    name: 'Gazprom',
    country: 'Международный стандарт',
    role: 'Газификация и энергоэффективные котельные системы',
    logo: 'https://static.tildacdn.net/tild6232-3633-4731-b462-613738333334/gazprom.png'
  },
  {
    name: 'GLOBUD',
    country: 'Европа',
    role: 'Профессиональные строительные смеси и теплоизоляция',
    logo: 'https://static.tildacdn.net/tild6637-3534-4539-a434-313838313739/globud.png'
  },
  {
    name: 'Crocus',
    country: 'Швейцария',
    role: 'Премиальные инженерные системы и сантехника',
    logo: 'https://static.tildacdn.net/tild3361-3739-4661-b065-666537346438/crocus_4.png'
  }
];

export const CONSTRUCTION_UPDATES: ConstructionUpdate[] = [
  {
    id: 'up-senator-2026-03',
    projectId: 'senator',
    projectName: 'ЖК SENATOR',
    date: 'Март 2026',
    month: 'Март',
    year: 2026,
    title: 'Монтаж панорамного остекления Reynaers и отделка фасада травертином',
    description: 'Полностью завершено возведение 16-этажного железобетонного монолитного каркаса и кирпичной кладки стен. На 85% смонтированы алюминиевые витражи Reynaers. Ведутся работы по облицовке фасада натуральным травертином и разводка внутренних инженерных сетей (отопление, электрика, вентиляция).',
    overallProgress: 82,
    stages: [
      { name: 'Монолитный каркас 16 этажей', progress: 100 },
      { name: 'Кирпичное заполнение стен', progress: 95 },
      { name: 'Остекление Reynaers', progress: 85 },
      { name: 'Вентилируемый фасад из травертина', progress: 70 },
      { name: 'Инженерные сети и коммуникации', progress: 65 }
    ],
    images: [
      'https://static.tildacdn.net/tild3863-3966-4632-b230-333033333539/senator_002.png',
      'https://static.tildacdn.net/tild3732-3464-4635-b566-303434313532/IMG_0612_1_3.png',
      'https://static.tildacdn.net/tild3665-6338-4365-b832-333434363561/sen_005.png'
    ]
  },
  {
    id: 'up-grand-2026-02',
    projectId: 'grand',
    projectName: 'ЖК GRAND',
    date: 'Февраль 2026',
    month: 'Февраль',
    year: 2026,
    title: 'Бетонирование конструкций 9-го этажа и гидроизоляция подземного паркинга',
    description: 'Успешно завершен нулевой цикл и два подземных уровня отапливаемого паркинга. Возводятся несущие колонны и перекрытия 9-го жилого этажа 21-этажной башни. Проведены независимые лабораторные испытания бетона B30 — показатели прочности превышают проектные нормы на 12%.',
    overallProgress: 46,
    stages: [
      { name: 'Котлован и фундаментная плита', progress: 100 },
      { name: 'Двухуровневый паркинг', progress: 100 },
      { name: 'Монолитные этажи 1–9', progress: 45 },
      { name: 'Закупка остекления Schuco', progress: 80 }
    ],
    images: [
      'https://static.tildacdn.net/tild6232-6437-4235-b634-613231373063/grand_001_3.png',
      'https://static.tildacdn.net/tild6133-3466-4231-b763-613333366138/grand_002.png'
    ]
  },
  {
    id: 'up-tunguch-2026-01',
    projectId: 'tunguch',
    projectName: 'ЖК TUNGUCH RESIDENCE',
    date: 'Январь 2026',
    month: 'Январь',
    year: 2026,
    title: 'Торжественная закладка капсулы времени и заливка первого бетона блоков 1–3',
    description: 'На площадке в 2 гектара состоялась торжественная закладка капсулы времени с участием руководства A PLUS Development и почетных гостей. Развернуты башенные краны, полным ходом идут фундаментные работы первых трех блоков жилого квартала.',
    overallProgress: 24,
    stages: [
      { name: 'Ограждение и подготовка площадки 2 га', progress: 100 },
      { name: 'Котлованы блоков 1, 2, 3', progress: 100 },
      { name: 'Фундаментные подушки и ростверки', progress: 60 },
      { name: 'Подземные коммуникации', progress: 35 }
    ],
    images: [
      'https://static.tildacdn.net/tild3938-3838-4939-b031-643764353538/_DSC1298_2.png',
      'https://static.tildacdn.net/tild6435-3763-4265-a463-393462363330/_DSC1466_2.png',
      'https://static.tildacdn.net/tild3837-3837-4566-a134-366530313537/tunguch_001_3.png'
    ]
  }
];
