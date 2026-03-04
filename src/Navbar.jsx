import { useState } from "react";
import React from "react";
import { Link, useLocation } from "wouter";


export default function Navbar() {

    const [isNavbarShowing, setNavbarShowing] = useState(false);

    //returns the current url
    const [location] = useLocation();

    //  Toggle bar collapes state
    const ToggleNavbar = () => {
        setNavbarShowing(!isNavbarShowing);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" href="/">E-Shop</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={ToggleNavbar}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavbarShowing ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className={`nav-link ${location === '/' ? 'active' : ""}`} href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/products" className={`nav-link ${location === '/products' ? 'active' : ''}`}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" className={`nav-link ${location === '/about' ? 'active' : ''}`}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/register" className={`nav-link ${location === '/register' ? 'active' : ''}`}>
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}