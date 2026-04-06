
import React, { useEffect } from 'react';
import { useCart } from './CartStore';



const ShoppingCart = () => {
    const { cart, fetchCart, getCartTotal, modifyQuantity, removeFromCart, isLoading } = useCart();

    // Fetch the cart data when the component mounts
    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <div className="container mt-4">
            <h2>Shopping Cart</h2>
            {isLoading ? (
                <p>Loading cart...</p>
            ) : cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className="list-group">
                        {cart.map((item) => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <img src={item.imageUrl} alt={item.name} className="cart-image" />
                                    <h5>{item.name}</h5>
                                    <div className="d-flex align-items-center">
                                        <button className="btn btn-sm btn-secondary me-2" onClick={() => modifyQuantity(item.product_id, item.quantity - 1)}>-</button>
                                        <p className="mb-0">Quantity: {item.quantity}</p>
                                        <button className="btn btn-sm btn-secondary ms-2" onClick={() => modifyQuantity(item.product_id, item.quantity + 1)}>+</button>
                                        <button className="btn btn-sm btn-danger ms-2" onClick={() => removeFromCart(item.product_id)}>Remove</button>
                                    </div>
                                </div>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-3 mb-3 text-end">
                        <h4>Total: ${getCartTotal()}</h4>
                    </div>
                </>
            )}
        </div>
    );
};

export default ShoppingCart;