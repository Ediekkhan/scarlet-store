import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  color :string ;
  size:string;

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
    <div className="flex items-center lg:p-4 p-1 border-b border-gray-200 ">
      <img src={product.image} alt={product.name} className="w-20 lg:h-20 h-32 rounded-lg object-cover" />

      <div className=" sm:flex flex-row md:flex lg:flex items-center justify-between px-8 flex-grow">
        <h2 className="lg:text-lg font-semibold lg:px-2 items-center">{product.name}</h2>

        <div className=" flex items-center mt-2 lg:mx-2">
            <span className="mr-2">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12.5" r="12" fill="black"/>
              </svg>
            </span>

            <span className="text-gray-700">
              <div className='flex items-center '>
                {product.color}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 14C9.41668 14 8.83335 13.775 8.39168 13.3334L2.95835 7.90003C2.71668 7.65837 2.71668 7.25837 2.95835 7.0167C3.20002 6.77503 3.60002 6.77503 3.84168 7.0167L9.27502 12.45C9.67502 12.85 10.325 12.85 10.725 12.45L16.1583 7.0167C16.4 6.77503 16.8 6.77503 17.0417 7.0167C17.2833 7.25837 17.2833 7.65837 17.0417 7.90003L11.6083 13.3334C11.1667 13.775 10.5833 14 10 14Z" fill="#929292"/>
                  </svg>

              </div>
            </span>
      </div>

      <div className="flex items-center mt-2 lg:mx-2">
        <span className="mr-2"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12.5" r="12" fill="#F7DFD4"/>
      <path d="M14.1446 16.5V10.908L11.9606 15.072H11.0366L8.85259 10.908V16.5H7.19659V7.98H8.97259L11.4926 12.828L14.0366 7.98H15.8006V16.5H14.1446Z" fill="#D95F27"/>
      </svg>
      </span>


        <span className="text-gray-700">
            <div className='flex items-center '>
               {product.size}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 14C9.41668 14 8.83335 13.775 8.39168 13.3334L2.95835 7.90003C2.71668 7.65837 2.71668 7.25837 2.95835 7.0167C3.20002 6.77503 3.60002 6.77503 3.84168 7.0167L9.27502 12.45C9.67502 12.85 10.325 12.85 10.725 12.45L16.1583 7.0167C16.4 6.77503 16.8 6.77503 17.0417 7.0167C17.2833 7.25837 17.2833 7.65837 17.0417 7.90003L11.6083 13.3334C11.1667 13.775 10.5833 14 10 14Z" fill="#929292"/>
              </svg>

            </div>
        </span>
        
              </div>
      <span className=' lg:p-0 p-1 flex text-xl items-center mt-2 text-[#D95F27]'>
        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.1087 11.0883H19.8325V7.93966H23.1087C23.601 7.93966 24 7.54102 24 7.04865C24 6.55623 23.601 6.15734 23.1087 6.15734H19.8325V1.78846C19.8325 1.15071 19.7065 0.682623 19.4581 0.397484C19.222 0.126224 18.9115 0 18.4817 0C18.0715 0 17.7727 0.125353 17.5412 0.39492C17.2956 0.68035 17.171 1.14931 17.171 1.78875V6.15788H11.0084L8.38812 2.19281C8.16387 1.83895 7.95301 1.50748 7.74825 1.18931C7.56389 0.902765 7.38408 0.669469 7.21424 0.495271C7.06388 0.341046 6.89254 0.221689 6.69213 0.129947C6.50303 0.0436221 6.26263 0.000290194 5.97821 0.000290194C5.61545 0.000290194 5.28616 0.0996732 4.97084 0.303856C4.65881 0.505814 4.44312 0.755504 4.31138 1.06724C4.19575 1.36351 4.13457 1.81748 4.13457 2.40347V6.15759H0.890965C0.398789 6.15763 0 6.55652 0 7.04889C0 7.54126 0.398789 7.9399 0.891013 7.9399H4.13462V11.0889H0.891013C0.398789 11.0889 0 11.4877 0 11.9802C0 12.4724 0.398789 12.8709 0.891013 12.8709H4.13462V17.859C4.13462 18.4779 4.26467 18.9413 4.52224 19.2357C4.76719 19.5164 5.07777 19.6468 5.49953 19.6468C5.90645 19.6468 6.2146 19.5159 6.47015 19.2346C6.73183 18.9465 6.8642 18.4834 6.8642 17.8591V12.8709H12.4407L15.4584 17.4983C15.6682 17.8042 15.8849 18.1129 16.101 18.4156C16.2959 18.6875 16.5086 18.927 16.733 19.1271C16.9351 19.3081 17.1518 19.4407 17.377 19.5216C17.6088 19.605 17.8798 19.6474 18.1805 19.6474C18.9966 19.6474 19.8324 19.3975 19.8324 17.5447V12.8709H23.1086C23.6009 12.8709 23.9999 12.4718 23.9999 11.9796C24 11.4874 23.601 11.0883 23.1087 11.0883ZM17.171 7.93961V11.0882H14.2673L12.1867 7.93961H17.171ZM6.86425 4.32173L8.06168 6.15734H6.86425V4.32173ZM6.86425 11.0883V7.93966H9.22439L11.2781 11.0883H6.86425ZM17.171 15.483L15.4453 12.8709H17.171V15.483Z" fill="#D95F27" />
        </svg>
        {product.price}
      </span>
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
      
    </div>
  </div>
    );
};

export default CartItem;
