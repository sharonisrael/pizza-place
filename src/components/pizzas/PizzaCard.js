import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function PizzaCard(props) {
  return (
    <Card key={props.pizza.id} style={{ margin: "10px" }}>
      <Card.Img
        variant="top"
        src={props.pizza.image}
        style={{ height: "250px", width: "300px", padding: "10px" }}
      />
      <Card.Body>
        <Card.Title>{props.pizza.name}</Card.Title>
        <Card.Text>{props.pizza.description}</Card.Text>
        <Button
          variant="primary"
          onClick={() => props.addPizza(props.pizza)}
          style={{ margin: "10px" }}
        >
          Add
        </Button>
        <Button
          variant="primary"
          onClick={() => props.removePizza(props.pizza)}
          style={{ margin: "10px" }}
        >
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
}

// import Badge from "react-bootstrap/Badge";
// <Badge variant="secondary">5</Badge>

export default PizzaCard;
