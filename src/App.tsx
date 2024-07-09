import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';
import Home from './components/Home';
import img1 from '../src/assets/img/image 12-1.png';
import img2 from '../src/assets/img/image 12-2.png';
import img3 from '../src/assets/img/image 12-3.png';
import img4 from '../src/assets/img/image 12.png';
import img5 from '../src/assets/img/image c cut.png';
import img6 from '../src/assets/img/unsplash_MYbhN8KaaEc.png';
import Footer from './components/Footer';
import CheckoutPage from './components/CheckoutPage';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  // quantity?: number;
  color :string ;
  size:string;
}

const App: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const products: Product[] = [
    { id: 1, name: 'Cargo Pant', price: 1900, image: img1, color: 'Black', size: 'Medium' },
    { id: 2, name: 'Gajio Jumper Pants', price: 2990, image: img2, color: 'Blue', size: 'Large' },
    { id: 3, name: 'Product 3', price: 3500, image: img3, color: 'Red', size: 'Small' },
    { id: 4, name: 'Product 4', price: 4590, image: img4, color: 'Green', size: 'Medium' },
    { id: 5, name: 'Product 5', price: 4590, image: img5, color: 'Yellow', size: 'XLarge' },
    { id: 6, name: 'Product 6', price: 4590, image: img6, color: 'White', size: 'Medium' },
  ];
  

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product: Product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Router>
      <Header />
      <div className="mx-auto">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Home products={products} addToCart={addToCart} />
                <div className="flex justify-center mt-20">
                  <button className="text-black border border-black rounded-xl px-4 py-2">See More</button>
                </div>
                <div className="mx-12">
                  <h1 className="text-3xl font-bold mt-14 text-left">FEATURED</h1>
                  <ProductList products={products} addToCart={addToCart} searchQuery={searchQuery} />
                </div>
              </div>
            }
          />
          <Route
            path="/cart"
            element={
              <div >
                <div className='flex items-center justify-between lg:mx-32 mx-5'>
                <span className="flex items-center lg:text-xl  font-semibold  lg:my-4 my-2">
                  Product
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
                  <span className="text-[#D95F27] underline underline-offset-2">cart</span>

                  
                </span>

                  
                </div>
                <ShoppingCart cartItems={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
              </div>
            }
          />
          <Route
            path="/products"
            element={
              <div>
                <div className="mb-4 md:ml-4 flex md:justify-start justify-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search ..."
                    className="border rounded px-4 m-2 py-2 w-2/5"
                  />
                  {/* <button className="bg-[#D95F27] text-white m-2 px-4 py-2 rounded">Search</button> */}
                </div>
                <ProductList products={products} addToCart={addToCart} searchQuery={searchQuery} />
              </div>
            }
          />
          <Route path="/checkout" element={<CheckoutPage cartItems={cart} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
