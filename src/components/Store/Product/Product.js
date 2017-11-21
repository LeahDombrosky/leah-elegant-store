
import React from "react";
import { Link } from "react-router-dom";

import './Product.css';

export default function Product( { id, title, img, price, addToCart } ) {
  return (
    
    <div id="StoreProduct__container">
    
    <Link  to={{ pathname: `/details/${id}`, state: {id: {id}, title:{ title }, img:{ img }, price:{ price } }}}>
      <div id="CartProduct__container">
        <img alt="Product img" src={ img } width="220px" height="270px" />
        {/* <span id="CartProduct__title"> { title } </span> */}
      </div>
    </Link>
      <div id="StoreProduct__details">
        <div id="StoreProduct__title">
          <Link to={ `/details/${ id }` } className="StoreProduct__navLink" >
            <span> { title } </span>
            <p> ${ price } </p>
          </Link>
        </div>
        <div id="StoreProduct__addToCart" onClick={ () => { addToCart( id ) } }>
          {/* <p> ${ price } </p> */}
          <span> Add to Cart </span>
        </div>
      </div>
    </div>
  )
}


