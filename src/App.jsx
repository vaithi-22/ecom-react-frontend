import React from "react";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import { Route, Switch } from "wouter";
import ProductPage from "./ProductPage";
import RegisterPageNormal from "./RegisterPageNormal";
import AboutPage from "./AboutPage";
import RegisterPage from "./RegisterPage";

export default function App() {

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/register-1" component={RegisterPageNormal} />
      </Switch>
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2026 E-Shop. All rights reserved.</p>
        </div>
      </footer>


    </>
  )
}