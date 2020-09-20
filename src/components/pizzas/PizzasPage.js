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
        <hr />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Card style={{ margin: "10px" }}>
            <Card.Img
              variant="top"
              src="/images/pizza_napolitana.jpg"
              style={{ height: "250px", width: "300px", padding: "10px" }}
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
          <Card style={{ margin: "10px" }}>
            <Card.Img
              variant="top"
              src="/images/pizza_vegetables.jpg"
              style={{ height: "250px", width: "300px", padding: "10px" }}
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
        <br />
        <Button href="/cart" variant="success" style={{ margin: "10px" }}>
          Order pizza
        </Button>
      </div>
    );
  }
}

export default PizzasPage;
