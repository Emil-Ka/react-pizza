cart = [
  {
    "id": "81a6879d-bd95-4546-b94f-8b7c2368d09a",
    "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
    "name": "Четыре сезона",
    "price": 395,
    "doughLabel": "тонкое",
    "diameterLabel": "30 см.",
    "_id": 8
  },
  {
    "id": "4eb9632b-1dd2-4ff3-a30f-d4f56b84e147",
    "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
    "name": "Маргарита",
    "price": 450,
    "doughLabel": "толстое",
    "diameterLabel": "40 см.",
    "_id": 7
  },
  {
    "id": "81a6879d-bd95-4546-b94f-8b7c2368d09a",
    "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
    "name": "Четыре сезона",
    "price": 395,
    "doughLabel": "тонкое",
    "diameterLabel": "30 см.",
    "_id": 5
  },
  {
    "id": "81a6879d-bd95-4546-b94f-8b7c2368d09a",
    "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
    "name": "Четыре сезона",
    "price": 395,
    "doughLabel": "тонкое",
    "diameterLabel": "30 см.",
    "_id": 8
  },
  {
    "id": "4eb9632b-1dd2-4ff3-a30f-d4f56b84e147",
    "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
    "name": "Маргарита",
    "price": 450,
    "doughLabel": "толстое",
    "diameterLabel": "40 см.",
    "_id": 7
  },
]

const cartWithoutRepeats = []

for (let i = 0; i < cart.length; i++) {
  if (i === 0) {
    cartWithoutRepeats.push(cart[i])
    continue
  }

  let repeats = 0

  for (let j = 0; j < cartWithoutRepeats.length; j++) {
    if (JSON.stringify(cart[i]) === JSON.stringify(cartWithoutRepeats[j])) {
      repeats++
    }
  }

  if (!repeats) {
    cartWithoutRepeats.push(cart[i])
  }
}

console.log(cartWithoutRepeats)