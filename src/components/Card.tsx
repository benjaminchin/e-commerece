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
      <img className="product-img" src={coverImg} alt="product" />
      <div className="details">
        <div className="ratings">
          <span>
            <img src="./star-svgrepo-com.svg" height="20px" />
            {rating} •
          </span>
          <span>{`(${reviews} Reviews)`}</span>
        </div>
        <p className="product--name">{name}</p>
        <p>{`Price: ${price}`}</p>
      </div>
    </div>
  );
};

export default Card;
