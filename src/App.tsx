import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import data from "./components/Products";
import Card from "./components/Card";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const products = data.map((item) => {
    return (
      <Card
        key={item.id}
        coverImg={item.coverImg}
        name={item.name}
        price={item.price}
        rating={item.rating}
        reviews={item.reviews}
      />
    );
  });

  return (
    <Router>
      <div>
        <Navbar products={products} />
        <Switch>
          <Route exact path="/">
            <Home products={products} />
          </Route>
          <Route exact path="/cart">
            <Cart products={products}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
