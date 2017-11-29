// import stuff from '../assets/stuff'

const axios = require('axios');

const initialState = {
  stuff: [],
  cart: [],
  loading: false
}

// Action Types
const GET_PRODUCTS = "GET_PRODUCTS";
const GET_APPAREL = "GET_APPAREL";
const GET_SHOES = "GET_SHOES";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CHECKOUT = "CHECKOUT";

// Reducer
export default function reducer( state = initialState, action ) {
  console.log("Reducer fired");
  console.log("State:", state);
  console.log("Action:", action);
  switch( action.type ) {
    
    
    case GET_PRODUCTS+"_PENDING": return Object.assign({}, state, {loading: true});
    case GET_PRODUCTS+"_FULFILLED":
    console.log(action.payload);
    return Object.assign({}, state, {loading: false, stuff : action.payload});

    case GET_APPAREL+"_PENDING": return Object.assign({}, state, {loading: true});
    case GET_APPAREL+"_FULFILLED":
    console.log(action.payload);
    return Object.assign({}, state, {loading: false, stuff : action.payload});

    case GET_SHOES+"_PENDING": return Object.assign({}, state, {loading: true});
    case GET_SHOES+"_FULFILLED":
    console.log(action.payload);
    return Object.assign({}, state, {loading: false, stuff : action.payload});

    case ADD_TO_CART: 
    console.log("add to cart:")
    if ( state.cart.indexOf( action.payload ) === -1 ) {
      return Object.assign({},state,{cart: [ ...state.cart, action.payload ]})
    };
    // return state;

    case REMOVE_FROM_CART: 
    console.log("cart:", state.cart)
    if ( state.cart.indexOf( action.payload ) !== -1 ) {
      var index = state.cart.indexOf(action.payload);
      console.log("cart pre splice:", state.cart)
      state.cart.splice(index, 1);
      console.log("cart after splice", state.cart)
      return Object.assign({},state,{cart: state.cart })
    };
    
    return state;

    case CHECKOUT: return Object.assign({}, initialState);

    default: return state;

  }
}

// Action Creators

export function getProducts() {
  return {
    type: GET_PRODUCTS,
    payload: axios.get('/api/products').then(response=> response.data)
  }
}
export function getApparel() {
  return {
    type: GET_APPAREL,
    payload: axios.get('/api/apparel').then(response=> response.data)
  }
}
export function getShoes() {
  return {
    type: GET_SHOES,
    payload: axios.get('/api/shoes').then(response=> response.data)
  }
}
export function addToCart( id ) {
  return {
    type: ADD_TO_CART,
    payload: id
  }
}

export function removeFromCart( id ) {
  return {
    type: REMOVE_FROM_CART,
    payload: id
  }
}

export function checkout() {
  return {
    type: CHECKOUT,
    payload: null
  }
}