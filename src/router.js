import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './components/Home/Home';
import Store from './components/Store/Store';
import Apparel from './components/Apparel/Apparel';
import Shoes from './components/Shoes/Shoes';
import Details from './components/Details/Details';
import Checkout from './components/Checkout/Checkout';
import Payment from './components/Payment/Payment';


export default (
  <Switch>
    <Route component={ Home } path="/" exact />
    <Route component={ Store } path="/store"/>
    <Route component={ Apparel } path="/apparel"/>
    <Route component={ Shoes } path="/shoes"/>
    <Route component={ Details } path="/details/:id" /> 
    <Route component={ Checkout } path="/checkout" />
    <Route component={ Payment } path="/payment" />
  </Switch>
)