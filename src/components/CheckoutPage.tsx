import React, { useState } from 'react';
import CartSummary from '../utils/libs/CartSummary';
import CheckoutForm from './CheckoutForm';
import { Link } from 'react-router-dom';


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  color :string ;
  size:string;
}

interface CheckoutPageProps {
  cartItems: Product[];
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cartItems }) => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const removeFromCart = (product: Product) => {
    // should not happenon checkoutout ratther cart
  };

  const updateQuantity = (product: Product, quantity: number) => {
    // should not happenon checkoutout ratther cart
  };

  const handleSubmit = (formData: {  firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    country: string;
    city: string;
    address: string;
    cardHolderName: string;
    cardNumber: string;
    cvv: string;
    expiryDate: string; }) => {
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="  lg:mt-10 mx-4 lg:mx-24">

        <span className="flex items-center lg:text-xl md:text-base text-gray-500 pr-24 font-semibold lg:my-4">
                          <Link to="/products">
                        <button className="text-gray-400 ">
                          Product
                        </button>
                          </Link>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14 9.99998C14 10.5833 13.775 11.1667 13.3334 11.6083L7.90003 17.0417C7.65837 17.2833 7.25837 17.2833 7.0167 17.0417C6.77503 16.8 6.77503 16.4 7.0167 16.1583L12.45 10.725C12.85 10.325 12.85 9.67498 12.45 9.27498L7.0167 3.84165C6.77503 3.59999 6.77503 3.19998 7.0167 2.95832C7.25837 2.71665 7.65837 2.71665 7.90003 2.95832L13.3334 8.39165C13.775 8.83332 14 9.41665 14 9.99998Z"
                                fill="#929292"
                              />
                            </svg>
                            <span >
                                  <Link to="/cart">
                                <button className="text-gray-400 ">
                                  cart
                                </button>
                                  </Link>
                            </span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14 9.99998C14 10.5833 13.775 11.1667 13.3334 11.6083L7.90003 17.0417C7.65837 17.2833 7.25837 17.2833 7.0167 17.0417C6.77503 16.8 6.77503 16.4 7.0167 16.1583L12.45 10.725C12.85 10.325 12.85 9.67498 12.45 9.27498L7.0167 3.84165C6.77503 3.59999 6.77503 3.19998 7.0167 2.95832C7.25837 2.71665 7.65837 2.71665 7.90003 2.95832L13.3334 8.39165C13.775 8.83332 14 9.41665 14 9.99998Z"
                                fill="#929292"
                              />
                            </svg>

                            <span className="text-[#D95F27] underline underline-offset-1">Checkout</span>


                            
        </span>

      <div className='lg:flex justify-between'>
       

          <CheckoutForm onSubmit={handleSubmit} />
<br />
<br />
          
          <CartSummary
            cartItems={cartItems}
            quantities={quantities}  
            removeFromCart={removeFromCart}  
            updateQuantity={updateQuantity}  
          />
      </div>
    </div>
  );
};

export default CheckoutPage;
