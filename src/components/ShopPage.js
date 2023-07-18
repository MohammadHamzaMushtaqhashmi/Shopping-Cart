import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';


const products = [
    { id: 1, title: 'Brake Pads' },
    { id: 2, title: 'Oil Filter' },
    { id: 3, title: 'Spark Plug' },
  ];
  

function ShopPage() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((items) => [...items, product]);
  };

  return (
    <div>
      <div style={{ position: 'sticky', top: 0, backgroundColor: '#fff' }}>
        <p>Items in cart: {cartItems.length}</p>
        <button>Go to cart</button>
      </div>
      <div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
