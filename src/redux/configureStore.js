import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from "./localStorage";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

// We configure our store and set up for the browser debug
export default function configureStore(initialState) {
  // add support for redux dev tools in the browser
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const persistedState = loadStateFromLocalStorage();

  // reduxImmutableStateInvariant will warn us on state changes
  let store = createStore(
    rootReducer,
    persistedState,
    //initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );

  // register to local storage in case someone is doing refresh F5 or moving beteern tabs
  store.subscribe(() => saveStateToLocalStorage(store.getState()));

  return store;
}
