import React from 'react';
import CartItem from './CartItem';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartSummaryProps {
  cartItems: Product[];
  quantities: { [key: number]: number };
  removeFromCart: (product: Product) => void;
  updateQuantity: (product: Product, quantity: number) => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  cartItems,
  quantities,
  removeFromCart,
  updateQuantity,
}) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * (quantities[item.id] || 1),
    0
  );

  return (
    <div className="border rounded-lg p-4 shadow-md mb-6">
      <h2 className="text-lg font-bold mb-4">Cart Summary</h2>
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
        </div>
      )}
    </div>
  );
};

export default CartSummary;
