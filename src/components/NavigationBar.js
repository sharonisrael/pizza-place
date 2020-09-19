import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

class NavigationBar extends Component {
  state = {};
  render() {
    // {" "} is a extra space in navigation bar because we are in multiple rows
    return (
      <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/pizzas">Pizzas</Nav.Link>
          <Nav.Link href="/cart">
            <img src="/images/online_cart_empty.png" height="50" alt="cart" />
          </Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
        </Nav>
        <Button variant="outline-info">Sign in</Button>
      </Navbar>
    );
  }
}

export default NavigationBar;
