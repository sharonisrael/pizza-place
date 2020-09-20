import React from "react";
import Button from "react-bootstrap/Button";
import PizzaCard from "./PizzaCard";
import { connect } from "react-redux";
import * as pizzaActions from "../../redux/actions/pizzaActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { allPizzas } from "../../redux/pizzaTypes";

class PizzasPage extends React.Component {
  addPizza = (pizza) => {
    this.props.actions.addPizza(pizza);
  };

  removePizza = (pizza) => {
    this.props.actions.removePizza(pizza);
  };

  formatTotal = () => {
    let pizzas = [...this.props.pizzas];
    let result = pizzas.reduce(
      (total, currentPizza) => (total = total + currentPizza.price),
      0
    );
    return result;
  };

  render() {
    return (
      <div>
        <h1>Pizzas</h1>
        <hr />
        <div style={{ display: "flex", flexDirection: "row" }}>
          {allPizzas.map((pizza) => {
            // console.log("Adding inside " + pizza.name);
            return (
              <div key={pizza.id}>
                <PizzaCard
                  pizza={pizza}
                  addPizza={this.addPizza}
                  removePizza={this.removePizza}
                />
              </div>
            );
          })}
        </div>
        <br />
        <Button href="/cart" variant="success" style={{ margin: "10px" }}>
          Order pizza
        </Button>
        <span>Total {this.formatTotal()}$</span>
      </div>
    );
  }
}

PizzasPage.propTypes = {
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
export default connectedStateAndProps(PizzasPage);
