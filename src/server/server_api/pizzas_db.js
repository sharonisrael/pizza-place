const allPizzas = [
  {
    id: 100,
    name: "Napolitana",
    // With homepage in package.json it moves to https://sharonisrael.github.io/pizza-place/images/pizza_napolitana.jpg
    // Here is will remain the same as server doesn't know the public URL
    // However in the UI part with package.json "homepage" need in the img src to consider the process.env.PUBLIC_URL
    image: "/pizza-place/images/pizza_napolitana.jpg",
    description: "Pizza with tomatoe sauce and olives",
    price: 140,
  },
  {
    id: 101,
    name: "Vegetables",
    image: "/images/pizza_vegetables.jpg",
    description: "Pizza with vegetables and special sauce",
    price: 150,
  },
];

module.exports = allPizzas;
