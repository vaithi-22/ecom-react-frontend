import { atom, useAtom } from 'jotai';
import axios from 'axios';
import React from "react";
import { useJwt } from "./UserStore";

// Define the initial state of the cart. We put in one piece of test data
const initialCart = [
    
];

// Create an atom for the cart
export const cartAtom = atom(initialCart);
export const cartLoadingAtom = atom(false);

// Custom hook for cart operations
export const useCart = () => {
    const [cart, setCart] = useAtom(cartAtom);

    const [isLoading, setIsLoading] = useAtom(cartLoadingAtom);

    // make sure `useJwt` is imported (see 7.1)
    const { getJwt } = useJwt();

     const fetchCart = async () => {
        const jwt = getJwt();
        setIsLoading(true);
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/api/cart`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            setCart(response.data);
        } catch (error) {
            console.error("Error fetching cart:", error);
        } finally {
            setIsLoading(false);
        }
    };


    // updatedCart contains the latest cart items
    const updateCart = async (updatedCart) => {
        const jwt = getJwt();
        setIsLoading(true);
        try {
            // .map  will generate the new array
            // which will consist of the elements from the
            // original array but transformed somehow
            const updatedCartItems = updatedCart.map(item => ({
                product_id: item.product_id,
                quantity: item.quantity
            })
            );
            await axios.put(import.meta.env.VITE_API_URL + '/api/cart', {
                cartItems: updatedCartItems
            }, {
                headers: {
                    Authorization: 'Bearer ' + jwt
                }
            })

        } catch (e) {
            console.error("Error updating cart:", error);
        } finally {
            setIsLoading(false);
        }
    }

    // Function to calculate the total price of items in the cart
    const getCartTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    const addToCart = (product) => {
        // check if the product is already in the shopping cart
        const existingCartItem = cart.find(cartItem => cartItem.product_id === product.id);

        // if the product is not in the cart
        if (!existingCartItem) {
            // create a new cart item and add to cart
            const newCartItem = {
                id: Math.floor(Math.random() * 1000 + 1),
                product_id: product.id,
                product_name: product.name,
                image_url: product.imageUrl,
                description: product.description,
                quantity: 1,
                price: product.price
            }
            const cloned = [...cart, newCartItem];
            setCart(cloned);
            updateCart(cloned);
        } else {
            modifyQuantity(existingCartItem.product_id, existingCartItem.quantity + 1)
        }

    }

    const modifyQuantity = (product_id, quantity) => {

        if (quantity < 1) {
            return;
        }

        // check if the product is already in the shopping cart
        const existingCartItem = cart.find(cartItem => cartItem.product_id === product_id);

        // modifying the cart item's quantity to be its current quantity + 1
        const clonedCartItem = { ...existingCartItem, "quantity": quantity };

        const cloned = cart.map(currentCartItem => {
            if (currentCartItem.id !== clonedCartItem.id) {
                return currentCartItem
            } else {
                return clonedCartItem;
            }
        })

        setCart(cloned);
        updateCart(cloned);

    }

    const removeFromCart = (product_id) => {
        const existingCartItem = cart.find(i => i.product_id === product_id);
        const cloned = cart.filter(currentCartItem => currentCartItem.id !== existingCartItem.id)
        setCart(cloned);
        updateCart(cloned);

    }

    return { cart, getCartTotal, addToCart, modifyQuantity, removeFromCart, fetchCart, updateCart };
};