import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../utils/libs/CartItem';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ShoppingCartProps {
  cartItems: Product[];
  removeFromCart: (product: Product) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartItems, removeFromCart }) => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const updateQuantity = (product: Product, quantity: number) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [product.id]: quantity,
    }));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * (quantities[item.id] || 1),
    0
  );

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              product={item}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          ))}
          <div className="flex justify-between items-center mt-4">
            <span className="font-bold">Total:</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
          <Link to="/checkout" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
