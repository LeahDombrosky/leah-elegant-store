import React from "react";
import './Details.css';
import { addToCart, getProducts} from '../../ducks/reducer';
import { Link } from 'react-router-dom';


export default function Details (props) {
  const {id, img, title, price, addToCart} = props.location.state;
  console.log( { id });
  return (
    <div id="Details__container">
    <Link to="/" id="Details__storeLink">
      <p> { '<' } Back to store </p>
    </Link>
    {/* <div> */}
      <img alt="Details img" src={img.img} width="400px" height="500px" />
      {/* </div> */}
      <p id="Details__title"> {title.title} </p>
      <p id="Details__price"> {price.price}</p>

      {/* <div id="StoreProduct__addToCart" onClick={ () => { addToCart( id ) } }>
         <span> ${ price } </span>
         <span> Add to Cart </span> 
        </div> */}
    </div>
  )
}


{/* <div id="Details__container">
      <Link to="/" id="Details__storeLink">
      <p> { '<' } Back to store </p>
    </Link>
      <img id="Details__img" src={ swag.img } alt="Product" width="400px" />
      <p id="Details__title"> { swag.title } </p>
      <p id="Details__price"> ${ swag.price } </p>
      <button id="Details__addToCart" onClick={ addAndRedirect }> Add to Cart </button>
      <p> { swag.description } </p>
      <p> { swag.promo } </p>
    </div>
  )
} */}