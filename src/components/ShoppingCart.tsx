import React from 'react';

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
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <span className="font-bold">Total:</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
