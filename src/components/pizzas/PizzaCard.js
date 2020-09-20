import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PizzaCard = (props) => {
  return (
    <Card key={props.id} style={{ margin: "10px" }}>
      <Card.Img
        variant="top"
        src={props.image}
        style={{ height: "250px", width: "300px", padding: "10px" }}
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button
          variant="primary"
          onClick={() => props.addPizza(props.id)}
          style={{ margin: "10px" }}
        >
          Add
        </Button>
        <Button
          variant="primary"
          onClick={() => props.removePizza(props.id)}
          style={{ margin: "10px" }}
        >
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PizzaCard;
