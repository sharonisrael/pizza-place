import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

// reducer slices the store
// = initState is the default if undefined
function pizzaReducer(state = initialState.pizzas, action) {
  //debugger;
  switch (action.type) {
    case actionTypes.ADD_PIZZA: {
      // ... spread operator
      let nextId = 1;
      // console.log("state.length " + state.length);
      if (state.length > 0) {
        nextId =
          Math.max.apply(
            Math,
            state.map(function (o) {
              return o.id;
            })
          ) + 1;
      }
      // console.log("nextId" + nextId);
      let newPizza = { ...action.pizza, id: nextId };
      let newState = [...state, newPizza];
      // consoleLogPizzas(newState);
      // return updated copy of state to the store. Whatever return from reducer becomes new state for this reducer
      return newState;
    }
    case actionTypes.REMOVE_PIZZA: {
      let newState = [...state];
      // return found idex or -1 if not found
      // Array.prototype.indexOf() expects a value as first parameter. This makes it a good choice to find the index in arrays of primitive types (like string, number, or boolean).
      // Array.prototype.findIndex() expects a callback as first parameter. Use this if you need the index in arrays with non-primitive types (e.g. objects) or your find condition is more complex than just a value.
      var pizzaIndex = newState.findIndex(
        (currentPizza) => currentPizza.name === action.pizza.name
      );
      // console.log("pizzaIndex " + pizzaIndex);
      // remove starting from pizzaIndex 1 item
      if (pizzaIndex >= 0) {
        newState.splice(pizzaIndex, 1);
      }
      // consoleLogPizzas(newState);
      // return updated copy of state to the store. Whatever return from reducer becomes new state for this reducer
      return newState;
    }
    case actionTypes.RESET_PIZZAS: {
      let newState = [];
      // consoleLogPizzas(newState);
      // return updated copy of state to the store. Whatever return from reducer becomes new state for this reducer
      return newState;
    }
    default:
      return state;
  }
}

// function consoleLogPizzas(logPizzas) {
//   console.log("Pizzas: " + logPizzas.length);
//   logPizzas.map((pizza) => {
//     console.log(
//       "Pizza: " +
//         pizza.id +
//         " " +
//         pizza.name +
//         " " +
//         pizza.description +
//         " " +
//         pizza.price
//     );
//     return 0;
//   });
// }

export default pizzaReducer;
