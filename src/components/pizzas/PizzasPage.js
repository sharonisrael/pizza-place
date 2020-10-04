import React from "react";
import Button from "react-bootstrap/Button";
import PizzaCard from "./PizzaCard";
import { connect } from "react-redux";
import * as pizzaActions from "../../redux/actions/pizzaActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
// import { getAllPizzas } from "../../api/pizzasApi";
import { allPizzas } from "../../redux/pizzaTypes";

class PizzasPage extends React.Component {
  state = {
    catalog_pizzas: [],
  };

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

  isOrderPizzasDisabled = () => {
    return this.props.pizzas.length === 0;
  };

  componentDidMount() {
    // Check if should reset in case too much time since last ordered pizza
    let pizzas = [...this.props.pizzas];
    // console.log(JSON.stringify(pizzas));
    if (pizzas.length > 0) {
      const last_ordered_pizza = pizzas.reduce((max, current) =>
        new Date(max.order_date) > new Date(current.order_date) ? max : current
      );
      let nowDate = new Date();
      // console.log(nowDate);
      let lastOrderedDate = new Date(last_ordered_pizza.order_date);
      // console.log(lastOrderedDate);
      let diffTime = nowDate - lastOrderedDate;
      const diffMinutes = Math.ceil(diffTime / (1000 * 60));
      // console.log(diffMinutes);

      // if passed more 10 minutes then I will reset because probably he went away and came back
      if (diffMinutes > 10) {
        this.props.actions.resetPizzas();
      }
    }

    // getAllPizzas().then((pizzas) => {
    //   this.setState({ catalog_pizzas: pizzas });
    // });
    this.setState({ catalog_pizzas: allPizzas });
  }

  render() {
    return (
      <div>
        <h1>Pizzas</h1>
        <hr />
        <div style={{ display: "flex", flexDirection: "row" }}>
          {this.state.catalog_pizzas.map((pizza) => {
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
        <Button
          href={process.env.PUBLIC_URL + "/#/cart"}
          variant="success"
          style={{ margin: "10px" }}
          disabled={this.isOrderPizzasDisabled()}
        >
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
    // pizzas is in the this.props
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
export default connectedStateAndProps(PizzasPage);
