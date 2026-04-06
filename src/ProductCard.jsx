import React from "react";
import "./App.css";

const ProductCard = (props) => {

    const handleAddToCart = () => {
        alert("Add to Cart is procssed")
    }

    return (
        <div className="card">
            <img src={props.imageUrl} alt={props.productName} className="card-img-top" />
            <div className="card-body">
                <h4 className="card-title">{props.productName}</h4>
                <p className="card-text">{props.price}</p>
                <a href="#" className="btn btn-primary" onClick={() => {
                    console.log("added to cart");
                    props.onAddToCart();
                }}>Add to Cart</a>
            </div>

        </div>
    )


}

export default ProductCard;