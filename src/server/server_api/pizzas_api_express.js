const pizzaTypes = require("./pizzaTypes");

const express = require("express");
var pizzaApp = express.Router();

pizzaApp.get("/", (req, res) => {
  // callback function which is route handler
  res.send("Hello pizza");
});

// http://localhost:3001/pizzas/api/all_pizzas
pizzaApp.get("/api/all_pizzas", (req, res) => {
  res.status(200).json(pizzaTypes);
});

// Use http://localhost:5000/api/pizza/100
pizzaApp.get("/api/pizza/:id", (req, res) => {
  // Can be either with find (object) or filter (array)
  // const pizza = pizzaTypes.find((p) => p.id === parseInt(req.params.id));
  // if (!pizza) {
  const pizza = pizzaTypes.filter((p) => p.id === parseInt(req.params.id));
  if (pizza.length == 0) {
    res.status(404).send(`Pizza ${req.params.id} not found`);
  } else {
    res.status(200).send(pizza);
  }
});

// This is the body in RAW JSON format
// Make sure in postman you use {..} and not [{..}]
// Good
//{"id":101,"name":"H1","image":"/images/pizza_vegetables.jpg","description":"Pizza with vegetables and special sauce","price":50}
// Bad
// [{"id":101,"name":"H1","image":"/images/pizza_vegetables.jpg","description":"Pizza with vegetables and special sauce","price":50}]
// {
//   id: 103,
//   name: 'Haim',
//   image: '/images/pizza_vegetables.jpg',
//   description: 'Pizza with vegetables and special sauce',
//   price: 50
// }
pizzaApp.post("/api/add_pizza", (req, res) => {
  const pizza = req.body;
  pizzaTypes.push(pizza);
  // return the pizza so client will know the id
  res.send(pizza);
});

// Make sure in postman you use {..} and not [{..}]
// Good
//{"id":101,"name":"H1","image":"/images/pizza_vegetables.jpg","description":"Pizza with vegetables and special sauce","price":50}
// Bad
// [{"id":101,"name":"H1","image":"/images/pizza_vegetables.jpg","description":"Pizza with vegetables and special sauce","price":50}]
pizzaApp.put("/api/update_pizza_name/:id", (req, res) => {
  let pizza = pizzaTypes.find((p) => p.id === parseInt(req.params.id));
  if (!pizza) {
    res.status(404).send(`Pizza ${req.params.id} not found`);
  } else {
    pizza.name = req.body.name;
    // return the pizza so client will know the id
    res.send(pizza);
  }
});

// Use http://localhost:5000/api/delete_pizza/100
pizzaApp.delete("/api/delete_pizza/:id", (req, res) => {
  // const pizza = pizzaTypes.filter((p) => p.id === parseInt(req.params.id));
  // if (pizza.length == 0) {
  const pizza = pizzaTypes.find((p) => p.id === parseInt(req.params.id));
  if (!pizza) {
    res.status(404).send(`Pizza ${req.params.id} not found`);
  } else {
    pizzaIndex = pizzaTypes.indexOf(pizza);
    pizzaTypes.splice(pizzaIndex, 1);
    res.status(200).send(pizza);
  }
});

module.exports = pizzaApp;
