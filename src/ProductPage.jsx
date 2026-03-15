import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { useCart } from './CartStore';
import { useFlashMessage } from './FlashMessageStore';
import { useLocation } from 'wouter';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [, setLocation] = useLocation();
  const { addProductToCart } = useCart();
  const { showMessage } = useFlashMessage();


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products.json');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Product Page</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <ProductCard
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
              handleAddToCart={() => {
                addProductToCart(product)
                showMessage("Product has been added to cart", "success");
                setLocation('/cart');
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;