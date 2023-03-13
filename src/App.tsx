import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import data from "./components/Products";
import Card from "./components/Card";

const App = () => {
  const products = data.map((item) => {
    return (
      <Card
        coverImg={item.coverImg}
        name={item.name}
        price={item.price}
        rating={item.rating}
        reviews={item.reviews}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="products">
        {products}
      </div>
    </div>
  );
};

export default App;
