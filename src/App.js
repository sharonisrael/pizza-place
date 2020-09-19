import React from "react";
import { Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import PageNotFound from "./components/PageNotFound";
import PizzasPage from "./components/pizzas/PizzasPage";
import CartPage from "./components/cart/CartPage";
import ContactUsPage from "./components/contactus/ContactUsPage";

function App() {
  // Route takes 2 props : the path which declares the URL and the component to load when path url matches
  // the exact is very important because otherwise / will be in all (/, /about and /courses)

  // container is bootstrap component
  // When you give Container in div class the frame size will be fixed for all screen.
  // and if you give container_fluid in div class frame size will take the size of screen pannel
  // container is white background with sharp corners

  return (
    <div className="container-fluid">
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={PizzasPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/contact" component={ContactUsPage} />
        <Route component={PageNotFound} />
      </Switch>

      <h1>Test</h1>
    </div>
  );
}

// Export in the class enables other places to import the class
// The default enables importing
export default App;
