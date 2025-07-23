import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]); // Replace with real cart data

  return (
    <div className="container my-4">
      <h2 className="mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.itemId} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{item.product.name}</h5>
                <p className="card-text">Quantity: {item.quantity} kg</p>
                <p className="card-text">Price: ₹{item.price}</p>
              </div>
            </div>
          ))}
          <Link to="/checkout" className="btn btn-success">Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;