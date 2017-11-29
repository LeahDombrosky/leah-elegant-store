import React from "react";
import { Link } from "react-router-dom";

import './Product.css';
// import MinusSquare from 'react-icons/lib/fa/minus-square';
import TraashO from 'react-icons/lib/fa/trash-o';



export default function Product( { title, img, price, id } ) {
  return (
    <Link to={ `details/${id}` } id="CheckoutProduct__navLink">
      <div id="CheckoutProduct__container">
        <img id="CheckoutProduct__img" src={ img } alt="Product" width="200px" height="240px" />
        <div id="CheckoutProduct__details">
          <p id="CheckoutProduct__title"> { title } </p>
          <p id="CheckoutProduct__price"> ${ price } </p>
           {/* <MinusSquare id="MinusSquare" />  */}
           <TraashO id="TraashO" />
        </div>
      </div>
    </Link>
  )

}