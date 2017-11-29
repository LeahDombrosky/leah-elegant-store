import React from "react";
import { Link } from "react-router-dom";
import { removeFromCart } from '../../../ducks/reducer';
import './Product.css';
// import MinusSquare from 'react-icons/lib/fa/minus-square';
import TraashO from 'react-icons/lib/fa/trash-o';




export default function Product( { title, img, price, id, removeFromCart } ) {
return (
  <div id="CheckoutProduct__container">
        <img id="CheckoutProduct__img" src={ img } alt="Product" width="200px" height="240px" />
        <div id="CheckoutProduct__details">
       
    <Link to={{ pathname: `/details/${id}`, state: {id, title, img, price}}} id="CheckoutProduct__navLink">
          <p id="CheckoutProduct__title"> { title } </p> 
    </Link>
          <p id="CheckoutProduct__price"> ${ price } </p>
          {/* <p id="CheckoutProduct__count"> { count } </p> */}
           {/* <MinusSquare id="MinusSquare" />  */}
           <div onClick={ () => { removeFromCart( id ) } }>
          <TraashO id="TraashO"/>
          </div>
        </div>
      </div>
  )

}

