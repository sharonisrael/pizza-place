import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as pizzaActions from "../../redux/actions/pizzaActions";
import CartList from "./CartList";
import PizzaOrderForm from "./PizzaOrderForm";

function CartPage(props) {
  const [order, setOrder] = useState({
    full_name: "",
    address: "",
    payment: 1,
  });

  function resetPizzas() {
    props.actions.resetPizzas();
  }

  function handleChange(event) {
    setOrder({
      ...order,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Send to server
    // courseApi.saveCourse(course).then(() => {
    //   props.history.push("/courses");
    // });
    //console.log("Issue order: " + JSON.stringify(order));
    props.actions.resetPizzas();
    // Using "homepage" attribute
    props.history.push("/");
  }

  return (
    <div style={{ width: "400px" }}>
      <h1>Cart</h1>
      <hr />
      <PizzaOrderForm
        order={order}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onReset={resetPizzas}
      />
      <br />
      <hr />
      <CartList pizzas={props.pizzas} />
    </div>
  );
}

CartPage.propTypes = {
  pizzas: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

// After reducer updates store we expect method to be called
function mapStateToProps(state) {
  //debugger;
  // can be also author_list or authorReducer I didn't understand yet
  return {
    // pizzas is in the props
    // state.pizzas are actually the store's state
    pizzas: state.pizzas,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pizzaActions, dispatch),
  };
}

// connect function connects components to redux. These are container components
const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(CartPage);
