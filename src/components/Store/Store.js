import React, { Component } from "react";
import { connect } from "react-redux";
import './Store.css';
import Product from './Product/Product';
import { addToCart, getProducts} from '../../ducks/reducer';
// import axios from "axios";
// import { Link } from 'react-router-dom';


class Store extends Component {

componentDidMount(){
  this.props.getProducts().then(res => console.log(res))
}

 render() { 
  console.log(this.props.stuff)
   const stuffComponents = this.props.stuff.map( stuff => {
   return(
    <Product
      key={ stuff.id }
      id={ stuff.id }
      title={ stuff.title }
      img={ stuff.img }
      price={ stuff.price }
      addToCart={ this.props.addToCart } 
    />
  )})
  
  return (
    <div className="store__container">
      { stuffComponents } 
    </div>
  )
}
}

function mapStateToProps( state ) {
  return {
    stuff: state.stuff
  }
}

export default connect( mapStateToProps, { getProducts, addToCart } )( Store );