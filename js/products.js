var products = [
    {
      id: 2,
      name: "Товар 2",
      category: "Категорія 2",
      price: 1000,
      emoji: "😊",
      desc: "Опис товару 2"
    },
    {
        id: 1,
        name: "Товар 3",
        category: "Категорія 3",
        price: 1000,
        emoji: "😊",
        desc: "Опис товару 3"
      },
      {
        id: 1,
        name: "Товар 3",
        category: "Категорія 3",
        price: 1000,
        emoji: "😊",
        desc: "Опис товару 3"
      },
      {
        id: 1,
        name: "Товар 4",
        category: "Категорія 4",
        price: 1000,
        emoji: "😊",
        desc: "Опис товару 4"
      },
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