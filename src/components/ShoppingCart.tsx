import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../utils/libs/CartItem';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity?: number;
  color :string ;
  size:string;
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

  const totalItems = cartItems.reduce((acc, item) => acc + (quantities[item.id] || 0), 0);
  

  return (
    <div className=" lg:border lg:rounded-lg p-4 lg:mx-32 mx-2 lg:shadow-md">
            <div className='flex justify-between'>

              <h1 className='text-black'>
                {totalItems} Items in cart
              </h1>


              <button className=" text-[#D95F27] px-4 lg:py-2  p-1 rounded flex items-center" onClick={clearCart}>
                  <span>
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 6.72998C20.98 6.72998 20.95 6.72998 20.92 6.72998C15.63 6.19998 10.35 5.99998 5.12001 6.52998L3.08001 6.72998C2.66001 6.76998 2.29001 6.46998 2.25001 6.04998C2.21001 5.62998 2.51001 5.26998 2.92001 5.22998L4.96001 5.02998C10.28 4.48998 15.67 4.69998 21.07 5.22998C21.48 5.26998 21.78 5.63998 21.74 6.04998C21.71 6.43998 21.38 6.72998 21 6.72998Z" fill="#D95F27"/>
                      <path d="M8.49999 5.72C8.45999 5.72 8.41999 5.72 8.36999 5.71C7.96999 5.64 7.68999 5.25 7.75999 4.85L7.97999 3.54C8.13999 2.58 8.35999 1.25 10.69 1.25H13.31C15.65 1.25 15.87 2.63 16.02 3.55L16.24 4.85C16.31 5.26 16.03 5.65 15.63 5.71C15.22 5.78 14.83 5.5 14.77 5.1L14.55 3.8C14.41 2.93 14.38 2.76 13.32 2.76H10.7C9.63999 2.76 9.61999 2.9 9.46999 3.79L9.23999 5.09C9.17999 5.46 8.85999 5.72 8.49999 5.72Z" fill="#D95F27"/>
                      <path d="M15.21 22.7501H8.79001C5.30001 22.7501 5.16001 20.8201 5.05001 19.2601L4.40001 9.19007C4.37001 8.78007 4.69001 8.42008 5.10001 8.39008C5.52001 8.37008 5.87001 8.68008 5.90001 9.09008L6.55001 19.1601C6.66001 20.6801 6.70001 21.2501 8.79001 21.2501H15.21C17.31 21.2501 17.35 20.6801 17.45 19.1601L18.1 9.09008C18.13 8.68008 18.49 8.37008 18.9 8.39008C19.31 8.42008 19.63 8.77007 19.6 9.19007L18.95 19.2601C18.84 20.8201 18.7 22.7501 15.21 22.7501Z" fill="#D95F27"/>
                      <path d="M13.66 17.25H10.33C9.92 17.25 9.58 16.91 9.58 16.5C9.58 16.09 9.92 15.75 10.33 15.75H13.66C14.07 15.75 14.41 16.09 14.41 16.5C14.41 16.91 14.07 17.25 13.66 17.25Z" fill="#D95F27"/>
                      <path d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z" fill="#D95F27"/>
                      </svg>

                      

                  </span>
                  <p className='mx-3 items-center justify-end '> Clear Cart</p>
              </button>

            </div>
                  


      {/* <h2 className="text-lg font-bold mb-4">Shopping Cart</h2> */}
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
          <div className="flex  w-auto justify-between items-center mt-4">
            <div >
              <span className="font-bold mx-2 text-sm">Total Price</span>
              <span className='flex text-xl items-center mx-2'>
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.1087 11.0883H19.8325V7.93966H23.1087C23.601 7.93966 24 7.54102 24 7.04865C24 6.55623 23.601 6.15734 23.1087 6.15734H19.8325V1.78846C19.8325 1.15071 19.7065 0.682623 19.4581 0.397484C19.222 0.126224 18.9115 0 18.4817 0C18.0715 0 17.7727 0.125353 17.5412 0.39492C17.2956 0.68035 17.171 1.14931 17.171 1.78875V6.15788H11.0084L8.38812 2.19281C8.16387 1.83895 7.95301 1.50748 7.74825 1.18931C7.56389 0.902765 7.38408 0.669469 7.21424 0.495271C7.06388 0.341046 6.89254 0.221689 6.69213 0.129947C6.50303 0.0436221 6.26263 0.000290194 5.97821 0.000290194C5.61545 0.000290194 5.28616 0.0996732 4.97084 0.303856C4.65881 0.505814 4.44312 0.755504 4.31138 1.06724C4.19575 1.36351 4.13457 1.81748 4.13457 2.40347V6.15759H0.890965C0.398789 6.15763 0 6.55652 0 7.04889C0 7.54126 0.398789 7.9399 0.891013 7.9399H4.13462V11.0889H0.891013C0.398789 11.0889 0 11.4877 0 11.9802C0 12.4724 0.398789 12.8709 0.891013 12.8709H4.13462V17.859C4.13462 18.4779 4.26467 18.9413 4.52224 19.2357C4.76719 19.5164 5.07777 19.6468 5.49953 19.6468C5.90645 19.6468 6.2146 19.5159 6.47015 19.2346C6.73183 18.9465 6.8642 18.4834 6.8642 17.8591V12.8709H12.4407L15.4584 17.4983C15.6685 17.8422 15.8785 18.1733 16.0791 18.4911C16.2638 18.7801 16.4455 19.013 16.6162 19.1886C16.7645 19.3344 16.9375 19.4522 17.1375 19.5436C17.3274 19.6296 17.5702 19.674 17.8616 19.674C18.2474 19.674 18.5663 19.5746 18.845 19.3694C19.1357 19.1521 19.3487 18.9041 19.4827 18.6189C19.6038 18.3692 19.6672 17.9723 19.6672 17.3675V12.8709H23.1087C23.601 12.8709 24 12.4723 24 11.9799C24 11.4876 23.601 11.0883 23.1087 11.0883Z" fill="black" />
                </svg>
                {total}
              </span>
            </div>
            <div className='lg:text-2xl sm:text-sm'>
             
              <Link to="/checkout">
                <button className="bg-[#D95F27] hover:bg-[#b24e20] text-white px-6 lg:py-2 lg:p-4 p-2 rounded-md lg:ml-2 items-center">
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
