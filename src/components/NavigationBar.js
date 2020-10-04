import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function NavigationBar() {
  // {" "} is a extra space in navigation bar because we are in multiple rows
  return (
    <Navbar bg="primary" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link href={process.env.PUBLIC_URL + "/#/pizzas"}>Pizzas</Nav.Link>
        <Nav.Link href={process.env.PUBLIC_URL + "/#/cart"}>
          <img
            src={process.env.PUBLIC_URL + "/images/online_cart_empty.png"}
            height="50"
            alt="cart"
          />
        </Nav.Link>
        <Nav.Link href={process.env.PUBLIC_URL + "#/contact"}>
          Contact Us
        </Nav.Link>
      </Nav>
      <Button variant="outline-info">Sign in</Button>
    </Navbar>
  );
}

export default NavigationBar;
