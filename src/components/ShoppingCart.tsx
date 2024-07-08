import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../utils/libs/CartItem';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

interface ShoppingCartProps {
  cartItems: Product[];
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartItems,removeFromCart,  clearCart }) => {
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
    <div className="border rounded-lg p-4 mx-32 shadow-md">
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
            <div>
              <span className="font-bold mx-2 text-sm">Total:</span>
              <span className='flex text-xl items-center mx-2'>
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.1087 11.0883H19.8325V7.93966H23.1087C23.601 7.93966 24 7.54102 24 7.04865C24 6.55623 23.601 6.15734 23.1087 6.15734H19.8325V1.78846C19.8325 1.15071 19.7065 0.682623 19.4581 0.397484C19.222 0.126224 18.9115 0 18.4817 0C18.0715 0 17.7727 0.125353 17.5412 0.39492C17.2956 0.68035 17.171 1.14931 17.171 1.78875V6.15788H11.0084L8.38812 2.19281C8.16387 1.83895 7.95301 1.50748 7.74825 1.18931C7.56389 0.902765 7.38408 0.669469 7.21424 0.495271C7.06388 0.341046 6.89254 0.221689 6.69213 0.129947C6.50303 0.0436221 6.26263 0.000290194 5.97821 0.000290194C5.61545 0.000290194 5.28616 0.0996732 4.97084 0.303856C4.65881 0.505814 4.44312 0.755504 4.31138 1.06724C4.19575 1.36351 4.13457 1.81748 4.13457 2.40347V6.15759H0.890965C0.398789 6.15763 0 6.55652 0 7.04889C0 7.54126 0.398789 7.9399 0.891013 7.9399H4.13462V11.0889H0.891013C0.398789 11.0889 0 11.4877 0 11.9802C0 12.4724 0.398789 12.8709 0.891013 12.8709H4.13462V17.859C4.13462 18.4779 4.26467 18.9413 4.52224 19.2357C4.76719 19.5164 5.07777 19.6468 5.49953 19.6468C5.90645 19.6468 6.2146 19.5159 6.47015 19.2346C6.73183 18.9465 6.8642 18.4834 6.8642 17.8591V12.8709H12.4407L15.4584 17.4983C15.6685 17.8422 15.8785 18.1733 16.0791 18.4911C16.2638 18.7801 16.4455 19.013 16.6162 19.1886C16.7645 19.3344 16.9375 19.4522 17.1375 19.5436C17.3274 19.6296 17.5702 19.674 17.8616 19.674C18.2474 19.674 18.5663 19.5746 18.845 19.3694C19.1357 19.1521 19.3487 18.9041 19.4827 18.6189C19.6038 18.3692 19.6672 17.9723 19.6672 17.3675V12.8709H23.1087C23.601 12.8709 24 12.4723 24 11.9799C24 11.4876 23.601 11.0883 23.1087 11.0883Z" fill="#D95F27" />
                </svg>
                {total}
              </span>
            </div>
            <div>
             
              <Link to="/checkout">
                <button className="bg-[#D95F27] hover:bg-[#b24e20] text-white px-4 py-2 rounded ml-2">
                  Go to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
