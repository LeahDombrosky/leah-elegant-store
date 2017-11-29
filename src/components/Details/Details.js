import React, { Component } from "react";
import './Details.css';
import { addToCart, getProducts} from '../../ducks/reducer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Store from'../Store/Store';


class Details extends Component {

  // console.log(props);
  // const {id, img, title, price, addToCart} = props.location.state;
  render() {
    const {id, img, title, price} = this.props.location.state;
    const { addToCart } = this.props
  return (
    <div id="Details__container">
       <Link to="/" id="Details__storeLink">
         <p> { '<' } Back to store </p>
       </Link>
      {/* <div> */}
         <img alt="Details img" src={img} width="500px" height="700px" />
      {/* </div> */}
         <p id="Details__title"> {title} </p>
         <p id="Details__price"> ${price}</p>
      <div id="AddToCart">   
         <div id="StoreProduct__addToCart" onClick={ () => {         addToCart( id ) } }>
            <p> Add to Cart </p>
         </div>
      </div>   
    </div>
  )
}
}
export default connect(null, { getProducts, addToCart } )( Details );

