import React from 'react';

function Cart({ cartItems }) {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
