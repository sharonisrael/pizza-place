import React from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as pizzaActions from "../../redux/actions/pizzaActions";
import CartList from "./CartList";

class CartPage extends React.Component {
  resetPizzas = () => {
    this.props.actions.resetPizzas();
  };

  render() {
    return (
      <div style={{ width: "400px" }}>
        <h1>Cart</h1>
        <Button variant="success" style={{ margin: "10px" }}>
          Purchase
        </Button>
        <Button
          variant="danger"
          style={{ margin: "10px" }}
          onClick={this.resetPizzas}
        >
          Reset
        </Button>
        <hr />
        <CartList pizzas={this.props.pizzas} />
        <hr />
        <Button variant="success" style={{ margin: "10px" }}>
          Purchase
        </Button>
        <Button
          variant="danger"
          style={{ margin: "10px" }}
          onClick={this.resetPizzas}
        >
          Reset
        </Button>
      </div>
    );
  }
}

CartPage.propTypes = {
  pizzas: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

// After reducer updates store we expect this method to be called
function mapStateToProps(state) {
  //debugger;
  // can be also author_list or authorReducer I didn't understand yet
  return {
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
