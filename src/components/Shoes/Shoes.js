import React, { Component } from "react";
import { connect } from "react-redux";
import '../Store/Store.css';
import Product from '../Store/Product/Product';
import { addToCart, getShoes} from '../../ducks/reducer';

class Shoes extends Component {

componentDidMount(){
  this.props.getShoes().then(res => console.log(res))
}

 render() { 
  console.log(this.props)
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

export default connect( mapStateToProps, { getShoes, addToCart } )( Shoes );