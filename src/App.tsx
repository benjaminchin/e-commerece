import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import data from "./components/Products";
import Card from "./components/Card";

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
  console.log(products[0].props.name);

  
  return (
    <div>
      <Navbar 
        products={products}
      />
      <Hero
        img="tees.jpg"
        text={"SALE: Up to 70% off select T-Shirts"}
        code="Use code 'BENJAMIN' at checkout"
      />
      <div className="products">{products}</div>
    </div>
  );
};

export default App;
