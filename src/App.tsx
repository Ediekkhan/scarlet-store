import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ProductDescription from './components/ProductDescription'; // Ensure to import ProductDescription

import img1 from '../src/assets/img/image 12-1.png';
import img2 from '../src/assets/img/image 12-2.png';
import img3 from '../src/assets/img/image 12-3.png';
import img4 from '../src/assets/img/image 12.png';
import img5 from '../src/assets/img/image c cut.png';
import img6 from '../src/assets/img/unsplash_MYbhN8KaaEc.png';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  
}

const App: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const products: Product[] = [
    { id: 1, name: 'Product 1', price: 19.99, image: img1, description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', price: 29.99, image: img2, description: 'Description for Product 2' },
    { id: 3, name: 'Product 3', price: 39.99, image: img3, description: 'Description for Product 3' },
    { id: 4, name: 'Product 4', price: 49.99, image: img4, description: 'Description for Product 4' },
    { id: 5, name: 'Product 5', price: 49.99, image: img5, description: 'Description for Product 5' },
    { id: 6, name: 'Product 6', price: 49.99, image: img6, description: 'Description for Product 6' },
  ];

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product: Product) => {
    setCart(cart.filter(item => item.id !== product.id));
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

                <h1 className="text-3xl font-bold mt-14 m-8 text-left">FEATURED</h1>
                <ProductList products={products} addToCart={addToCart} searchQuery={searchQuery} />
              </div>
            }
          />
          <Route
            path="/cart"
            element={<ShoppingCart cartItems={cart} removeFromCart={removeFromCart} />}
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
                    className="border rounded px-4 m-2 py-2 w-1/2"
                  />
                  <button className="bg-[#D95F27] text-white  m-2 px-4 py-2 rounded">Search</button>
                </div>

                <ProductList products={products} addToCart={addToCart} searchQuery={searchQuery} />
              </div>
            }
          />
          <Route
            path="/product/:productId"
            element={<ProductDescription products={products} addToCart={addToCart} />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
