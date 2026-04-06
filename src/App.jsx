import React from "react";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import { Route, Switch } from "wouter";
import ProductPage from "./ProductPage";
import LoginPage from "./LoginPage";
import AboutPage from "./AboutPage";
import RegisterPage from "./RegisterPage";
import FlashMessage from "./FlashMessage";
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';


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
        <Route path="/login" component={LoginPage} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2026 E-Shop. All rights reserved.</p>
        </div>
      </footer>


    </>
  )
}