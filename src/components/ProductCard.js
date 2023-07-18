import React, { useState } from 'react';

function ProductCard({ title, onAddToCart }) {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-card">
      <h2>{title}</h2>
      <button onClick={handleDecrement}>-</button>
      <input type="number" value={quantity} readOnly />
      <button onClick={handleIncrement}>+</button>
      <button onClick={onAddToCart}>Add to cart</button>
    </div>
  );
}

export default ProductCard;
