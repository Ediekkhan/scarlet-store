import React, { useState } from 'react';
import CartSummary from '../utils/libs/CartSummary';
import CheckoutForm from './CheckoutForm';


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

  const handleFormSubmit = (formData: { name: string; email: string; address: string }) => {
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className=" flex  mx-auto mt-10">
      <CheckoutForm onSubmit={handleFormSubmit} />

      
      <CartSummary
        cartItems={cartItems}
        quantities={quantities}  
        removeFromCart={removeFromCart}  
        updateQuantity={updateQuantity}  
      />
    </div>
  );
};

export default CheckoutPage;
