var products = [

  {
    id: 1,
    name: "Airbus A320",
    category: "Пасажирські",
    price: 98000000,
    emoji: "✈️",
    desc: "Популярний середньомагістральний пасажирський літак"
  },
  {
    id: 2,
    name: "Boeing 737",
    category: "Пасажирські",
    price: 89000000,
    emoji: "✈️",
    desc: "Один з найпоширеніших літаків у світі"
  },
  {
    id: 3,
    name: "F-16 Fighting Falcon",
    category: "Військові",
    price: 18000000,
    emoji: "🛩️",
    desc: "Маневрений винищувач для бойових місій"
  },
  {
    id: 4,
    name: "Boeing 747",
    category: "Пасажирські",
    price: 250000000,
    emoji: "🛫",
    desc: "Великий далекомагістральний авіалайнер"
  },
  {
    id: 5,
    name: "Cessna 172",
    category: "Навчальні",
    price: 400000,
    emoji: "🛩️",
    desc: "Легкий літак для навчання пілотів"
  },
  {
    id: 6,
    name: "B-2 Spirit",
    category: "Військові",
    price: 2000000000,
    emoji: "✈️",
    desc: "Стелс-бомбардувальник нового покоління"
  },
  {
    id: 7,
    name: "Gulfstream G650",
    category: "Приватні",
    price: 65000000,
    emoji: "🛫",
    desc: "Розкішний бізнес-джет для приватних польотів"
  },
  {
    id: 8,
    name: "Airbus A380",
    category: "Пасажирські",
    price: 445000000,
    emoji: "✈️",
    desc: "Найбільший пасажирський літак у світі"
  },
  {
    id: 9,
    name: "Antonov An-225 Mriya",
    category: "Вантажні",
    price: 300000000,
    emoji: "🚀",
    desc: "Найбільший вантажний літак у світі"
  }
]

  

  function getProduct(id) {
    for (let i = 0; i < products.length; i++) {
  
    }
  }

  function getProduct(id) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) return products[i];
    }
  
    return null;
  }