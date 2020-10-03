export const allPizzas = [
  {
    id: 100,
    name: "Napolitana",
    // with package.json "homepage" need in the img src to consider the process.env.PUBLIC_URL
    image: "/images/pizza_napolitana.jpg",
    description: "Pizza with tomatoe sauce and olives",
    price: 40,
    order_date: new Date().toJSON,
  },
  {
    id: 101,
    name: "Vegetables",
    image: "/images/pizza_vegetables.jpg",
    description: "Pizza with vegetables and special sauce",
    price: 50,
    order_date: new Date().toJSON,
  },
];
