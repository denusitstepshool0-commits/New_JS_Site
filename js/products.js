var products = [
  // 🕯️ ЗАТИШОК
  {
    id: 1,
    name: "Ароматична свічка Vanilla",
    category: "Затишок",
    price: 250,
    emoji: "🕯️",
    desc: "Приємний аромат ванілі для домашнього комфорту"
  },
  {
    id: 6,
    name: "Аромадифузор Lavender",
    category: "Затишок",
    price: 300,
    emoji: "🌸",
    desc: "Розслабляючий аромат лаванди"
  },
  {
    id: 8,
    name: "Плед Soft Dream",
    category: "Затишок",
    price: 500,
    emoji: "🧣",
    desc: "Теплий і приємний плед для холодних вечорів"
  },
  {
    id: 10,
    name: "Свічка Coffee Aroma",
    category: "Затишок",
    price: 270,
    emoji: "🕯️",
    desc: "Аромат кави для затишної атмосфери"
  },
  {
    id: 11,
    name: "Еко свічка Honey Glow",
    category: "Затишок",
    price: 260,
    emoji: "🍯",
    desc: "Натуральна свічка з медовим ароматом"
  },

  // 💡 ОСВІТЛЕННЯ
  {
    id: 2,
    name: "Гірлянда LED тепле світло",
    category: "Освітлення",
    price: 180,
    emoji: "💡",
    desc: "Створює атмосферу затишку у кімнаті"
  },
  {
    id: 5,
    name: "Настільна лампа",
    category: "Освітлення",
    price: 350,
    emoji: "🛋️",
    desc: "М'яке світло для вечірнього відпочинку"
  },
  {
    id: 9,
    name: "Нічник Moon Light",
    category: "Освітлення",
    price: 400,
    emoji: "🌙",
    desc: "Лампа у вигляді місяця для атмосфери"
  },
  {
    id: 13,
    name: "LED стрічка RGB",
    category: "Освітлення",
    price: 320,
    emoji: "🌈",
    desc: "Кольорове підсвічування для кімнати"
  },
  {
    id: 14,
    name: "Неонова лампа Love",
    category: "Освітлення",
    price: 450,
    emoji: "💖",
    desc: "Стильний неон для декору кімнати"
  },

  // 🖼️ ДЕКОР
  {
    id: 3,
    name: "Мінімалістичний постер",
    category: "Декор",
    price: 120,
    emoji: "🖼️",
    desc: "Стильний постер для сучасного інтер'єру"
  },
  {
    id: 7,
    name: "Декоративна подушка",
    category: "Декор",
    price: 280,
    emoji: "🛏️",
    desc: "М'яка подушка для дивану або ліжка"
  },
  {
    id: 16,
    name: "Постер Nature Vibes",
    category: "Декор",
    price: 150,
    emoji: "🌿",
    desc: "Природний стиль для твоєї кімнати"
  },
  {
    id: 17,
    name: "Фоторамка Minimal",
    category: "Декор",
    price: 200,
    emoji: "🖼️",
    desc: "Стильна рамка для фото"
  },
  {
    id: 18,
    name: "Настінний годинник Modern",
    category: "Декор",
    price: 350,
    emoji: "🕰️",
    desc: "Сучасний дизайн для будь-якої кімнати"
  },

  // ☕ КУХНЯ
  {
    id: 4,
    name: "Чашка Cozy Mood",
    category: "Кухня",
    price: 150,
    emoji: "☕",
    desc: "Ідеальна чашка для чаю або кави"
  },
  {
    id: 20,
    name: "Чашка Minimal White",
    category: "Кухня",
    price: 140,
    emoji: "☕",
    desc: "Проста біла чашка в мінімалістичному стилі"
  },
  {
    id: 21,
    name: "Термочашка Travel",
    category: "Кухня",
    price: 300,
    emoji: "🥤",
    desc: "Зручна чашка для напоїв у дорозі"
  },
  {
    id: 22,
    name: "Набір дерев’яних ложок",
    category: "Кухня",
    price: 180,
    emoji: "🥄",
    desc: "Еко набір для кухні"
  },
  {
    id: 23,
    name: "Склянка Glass Aesthetic",
    category: "Кухня",
    price: 160,
    emoji: "🥛",
    desc: "Стильна склянка для напоїв"
  }
];

function getProduct(id) {
  for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) return products[i];
  }

  return null;
}