import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./redux/configureStore";
import { Provider as ReductProvider } from "react-redux";

// This can be a good place to initial store with data
const store = configureStore();

ReactDOM.render(
  <ReductProvider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ReductProvider>,

  document.getElementById("root")
);
