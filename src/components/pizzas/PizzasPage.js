import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import PizzaCard from "./PizzaCard";

const PizzasPage = () => {
  const [pizzas, setPizzas] = useState([]);

  const allPizzas = [
    {
      id: 100,
      name: "Napolitana",
      image: "/images/pizza_napolitana.jpg",
      description: "Pizza with tomatoe sauce and olives",
      price: 40,
    },
    {
      id: 101,
      name: "Vegetables",
      image: "/images/pizza_vegetables.jpg",
      description: "Pizza with vegetables and special sauce",
      price: 50,
    },
  ];

  return (
    <div>
      <h1>Pizzas</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row" }}>
        {allPizzas.map((pizza) => {
          return (
            <div key={pizza.id}>
              <PizzaCard
                pizza={pizza}
                addPizza={addPizza}
                removePizza={removePizza}
              />
            </div>
          );
        })}
      </div>
      <br />
      <Button href="/cart" variant="success" style={{ margin: "10px" }}>
        Order pizza
      </Button>
      <span>Total {formatTotal()}$</span>
    </div>
  );

  function consoleLogPizzas(logPizzas) {
    console.log("Pizzas: " + logPizzas.length);
    logPizzas.map((pizza) => {
      console.log(
        "Pizza: " +
          pizza.id +
          " " +
          pizza.name +
          " " +
          pizza.description +
          " " +
          pizza.price
      );
      return 0;
    });
  }

  function addPizza(pizza) {
    let newPizzas = [...pizzas, pizza];
    setPizzas(newPizzas);
    consoleLogPizzas(newPizzas);
  }

  function removePizza(pizza) {
    let newPizzas = [...pizzas];
    // return found idex or -1 if not found
    // Array.prototype.indexOf() expects a value as first parameter. This makes it a good choice to find the index in arrays of primitive types (like string, number, or boolean).
    // Array.prototype.findIndex() expects a callback as first parameter. Use this if you need the index in arrays with non-primitive types (e.g. objects) or your find condition is more complex than just a value.
    var pizzaIndex = newPizzas.findIndex(
      (currentPizza) => currentPizza.id === pizza.id
    );
    console.log("pizzaIndex " + pizzaIndex);
    // remove starting from pizzaIndex 1 item
    if (pizzaIndex >= 0) {
      newPizzas.splice(pizzaIndex, 1);
      setPizzas(newPizzas);
      consoleLogPizzas(newPizzas);
    }
  }

  function formatTotal() {
    const result = pizzas.reduce(
      (total, currentPizza) => (total = total + currentPizza.price),
      0
    );
    return result;
  }
};

export default PizzasPage;
