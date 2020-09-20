import { combineReducers } from "redux";
import pizzas from "./pizzaReducer";

const rootReducer = combineReducers({
  // this is how we will contact the reducer so we may rename to courses
  pizzas: pizzas,
});

export default rootReducer;
