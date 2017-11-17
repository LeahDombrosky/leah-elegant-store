// import stuff from '../assets/stuff'

const axios = require('axios');

const initialState = {
  stuff: [],
  cart: [],
  loading: false
}

// Action Types
const ADD_TO_CART = "ADD_TO_CART";
const CHECKOUT = "CHECKOUT";
const GET_PRODUCTS = "GET_PRODUCTS";

// Reducer
export default function reducer( state = initialState, action ) {
  console.log("Reducer fired");
  console.log("State:", state);
  console.log("Action:", action);
  switch( action.type ) {
    case ADD_TO_CART: 
      if ( state.cart.indexOf( action.payload ) === -1 ) {
        return Object.assign({},state,{cart: [ ...state.cart, action.payload ]})
      };
      return false;
    case CHECKOUT: return Object.assign({}, initialState);
    case GET_PRODUCTS+"_PENDING": return Object.assign({}, state, {loading: true});
    case GET_PRODUCTS+"_FULFILLED":
    console.log(action.payload);
    return Object.assign({}, state, {loading: false, stuff : action.payload});
    default: return state;

  }
}

// Action Creators
export function addToCart( id ) {
  return {
    type: ADD_TO_CART,
    payload: id
  }
}

export function checkout() {
  return {
    type: CHECKOUT,
    payload: null
  }
}
export function getProducts() {
  return {
    type: GET_PRODUCTS,
    payload: axios.get('/api/products').then(response=> response.data)
  }
}