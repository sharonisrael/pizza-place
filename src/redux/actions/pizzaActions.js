import * as actionTypes from "./actionTypes";

// This is action creator
// It creates and action which is an object with a type and payload
// can do Objet shorthand syntax return { type: "CREATE_COURSE", course};
export function addPizza(pizza) {
  //debugger;
  return { type: actionTypes.ADD_PIZZA, pizza: pizza };
}

export function removePizza(pizza) {
  //debugger;
  return { type: actionTypes.REMOVE_PIZZA, pizza: pizza };
}
