
import React from "react";
import { Link } from "react-router-dom";
import './Product.css';

export default function Product( { id, title, img, price, addToCart } ) {
  return (
    
    <div id="StoreProduct__container">
    
    <div id="CartProduct__container"> 
     <Link  to={{ pathname: `/details/${id}`, state: {id, title, img, price}}}>
        <img alt="Product img" src={ img } width="350px" height="400px" />
     </Link>
    </div> 

    <div id="StoreProduct__details">
        {/* <div id="StoreProduct__title"> */}
        {/* <div> */}
      <Link to={{ pathname: `/details/${id}`, state: {id, title, img, price}}} className="StoreProduct__navLink" >
        <p> { title } </p>
        <p> ${ price } </p> 
      </Link>
    </div> 

        {/* <p> ${ price } </p> */}
    <div id="StoreProduct__addToCart" onClick={ () => {  addToCart( id ) } }>
        <p> ADD TO CART </p>
    </div> 
        {/* <button class="Add-To-Cart" onClick={ () => {  addToCart( id ) } }>
            Add to Cart
        </button> */}
      {/* </div> */}
    </div>
  )
}


