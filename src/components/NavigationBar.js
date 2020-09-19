import React, { Component } from "react";

class NavigationBar extends Component {
  state = {};
  render() {
    // {" "} is a extra space in navigation bar because we are in multiple rows
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/">Pizzas</a> | <a href="/cart">Cart</a> |{" "}
          <a href="/contact">Contact us</a>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
