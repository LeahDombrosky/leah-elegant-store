
import React from "react";
import { Link } from "react-router-dom";

import './Product.css';

export default function Product( { id, title, img, price, addToCart } ) {
  return (
    
    <div id="StoreProduct__container">
    
    <Link  to={{ pathname: `/details/${id}`, state: {id, title, img, price}}}>
      <div id="CartProduct__container">
        <img alt="Product img" src={ img } width="350px" height="400px" />
      </div>
    </Link>
      <div id="StoreProduct__details">
        <div id="StoreProduct__title">
          <Link to={{ pathname: `/details/${id}`, state: {id, title, img, price}}} className="StoreProduct__navLink" >
            <p> { title } </p>  
          </Link>
        </div>
        <p> ${ price } </p>
        <div id="StoreProduct__addToCart" onClick={ () => {  addToCart( id ) } }>
          <span> Add to Cart </span>
        </div>
      </div>
    </div>
  )
}


