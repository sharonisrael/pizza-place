import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { HashRouter, BrowserRouter } from "react-router-dom";
import configureStore from "./redux/configureStore";
import { Provider as ReductProvider } from "react-redux";

// This can be a good place to initial store with data
const store = configureStore();

ReactDOM.render(
  <ReductProvider store={store}>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HashRouter>
  </ReductProvider>,

  document.getElementById("root")
);
