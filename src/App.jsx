import React from "react";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import { Route, Switch } from "wouter";
import ProductPage from "./ProductPage";
import Login from "./Login";
import AboutPage from "./AboutPage";
import RegisterPage from "./RegisterPage";
import FlashMessage from "./FlashMessage";
import ShoppingCart from './ShoppingCart';


export default function App() {

  return (
    <>
      <Navbar />
      <FlashMessage />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={ShoppingCart} />
      </Switch>
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2026 E-Shop. All rights reserved.</p>
        </div>
      </footer>


    </>
  )
}