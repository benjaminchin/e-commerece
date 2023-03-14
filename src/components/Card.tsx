import React from "react";

interface Props {
  coverImg: string;
  name: string;
  price: number;
  rating: string;
  reviews: number;
}

const Card = ({ coverImg, name, price, rating, reviews }: Props) => {
  return (
    <div className="card">
      <div className="card-body">
        <img className="product-img" src={coverImg} alt="product" />
        <div className="card-title">
          <span>
            <img src="./star-svgrepo-com.svg" height="20px" />
            {rating} •
          </span>

          <span>{` (${reviews} Reviews)`}</span>

          <p className="product-name">{name}</p>
          <p>{`Price: ${price}`}</p>
          <a href="#" className="btn btn-secondary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
