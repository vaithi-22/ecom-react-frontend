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
                <h2 className="card-title">{props.name}</h2>
                <p className="card-text">{props.price}</p>
                <button className="btn btn-primary" onClick={props.handleAddToCart}>Add to Cart</button>
            </div>

        </div>
    )


}

export default ProductCard;