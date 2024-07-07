import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;

}

interface CartItemProps {
  product: Product;
  removeFromCart: (product: Product) => void;
  updateQuantity: (product: Product, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, removeFromCart, updateQuantity }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateQuantity(product, quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    updateQuantity(product, quantity + 1);
  };

  return (
    <div className="flex items-center p-4 border-b border-gray-200">
      <img src={product.image} alt={product.name} className="w-20 h-20 object-cover" />
      <div className="ml-4 flex-grow">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={handleDecrement}
          className="px-2 py-1 bg-gray-300 rounded-l hover:bg-gray-400"
        >
          -
        </button>
        <span className="px-4 py-1 border-t border-b">{quantity}</span>
        <button
          onClick={handleIncrement}
          className="px-2 py-1 bg-gray-300 rounded-r hover:bg-gray-400"
        >
          +
        </button>
        <button
          onClick={() => removeFromCart(product)}
          className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
