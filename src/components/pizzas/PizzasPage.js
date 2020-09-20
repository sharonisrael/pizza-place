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
                id={pizza.id}
                pizza={pizza.name}
                image={pizza.image}
                description={pizza.description}
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

  function addPizza(pizzaId) {
    let newPizzas = [...pizzas, pizzaId];
    setPizzas(newPizzas);
    console.log("Pizzas: " + newPizzas);
  }

  function removePizza(pizzaId) {
    let newPizzas = [...pizzas];
    // return found idex or -1 if not found
    var pizzaIndex = newPizzas.indexOf(pizzaId);
    // remove starting from pizzaIndex 1 item
    if (pizzaIndex >= 0) {
      newPizzas.splice(pizzaIndex, 1);
    }
    setPizzas(newPizzas);
    console.log("Pizzas: " + newPizzas);
  }

  function formatTotal() {
    const result = pizzas.reduce(
      (total, currentValue) => (total = total + currentValue),
      0
    );
    return result;
  }
};

export default PizzasPage;
