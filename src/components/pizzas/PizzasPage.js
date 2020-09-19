import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class PizzasPage extends React.Component {
  state = {
    pizzas: [],
  };

  handleOrder = (event) => {
    let newPizza = event.target.value;
    let newPizzas = [...this.state.pizzas, newPizza];
    this.setState({ pizzas: newPizzas });
    console.log("Pizzas: " + newPizzas);
  };

  render() {
    return (
      <div>
        <h1>Pizzas</h1>
        <br />
        <div>
          <Card>
            <Card.Img
              variant="top"
              src="/images/pizza_napolitana.jpg"
              style={{ width: "400px" }}
            />
            <Card.Body>
              <Card.Title>Napolitana</Card.Title>
              <Card.Text>Pizza with tomatoe sauce and olives</Card.Text>
              <Button
                variant="primary"
                value="Napolitana"
                onClick={this.handleOrder}
              >
                Add
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Img
              variant="top"
              src="/images/pizza_vegetables.jpg"
              style={{ width: "400px" }}
            />
            <Card.Body>
              <Card.Title>Vegetables</Card.Title>
              <Card.Text>Pizza with vegetables and special sauce</Card.Text>
              <Button
                variant="primary"
                value="Vegetables"
                onClick={this.handleOrder}
              >
                Add
              </Button>
            </Card.Body>
          </Card>
        </div>
        <Button href="/cart" variant="success">
          Order pizza
        </Button>
      </div>
    );
  }
}

export default PizzasPage;
