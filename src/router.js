import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './components/Home/Home';
import Store from './components/Store/Store';
import Details from './components/Details/Details';
import Checkout from './components/Checkout/Checkout';

export default (
  <Switch>
    <Route component={ Home } path="/" exact />
    <Route component={ Store } path="/store"/>
    {/* <Route component={ Shoes } path="/shoes"/>
    <Route component={ Apparel } path="/apparel"/> */}
    <Route component={ Details } path="/details/:id" /> 
    <Route component={ Checkout } path="/checkout" />
  </Switch>
)