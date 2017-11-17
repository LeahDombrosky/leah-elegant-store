import React from 'react';

import './Product.css';
import { Link } from 'react-router-dom';

export default function Product( { title, img, id } ) {
  return (
    <div id="CartProduct__container">
      <img alt="Product" src={ img } width="80px" height="80px" />
      <span id="CartProduct__title"> { title } </span>
      <Link to="/details/:id">Click</Link>
    </div>
  )
}