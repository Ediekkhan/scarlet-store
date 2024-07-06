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

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const App: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const products: Product[] = [
    { id: 1, name: 'Product 1', price: 19.99, image: img1 },
    { id: 2, name: 'Product 2', price: 29.99, image: img2 },
    { id: 3, name: 'Product 3', price: 39.99, image: img3 },
    { id: 4, name: 'Product 4', price: 49.99, image: img4 },
    { id: 5, name: 'Product 5', price: 49.99, image: img5 },
    { id: 6, name: 'Product 6', price: 49.99, image: img6 },
  ];

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product: Product) => {
    setCart(cart.filter(item => item.id !== product.id));
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
                <div className="flex justify-center mt-8">
                  <button className="text-black border border-black rounded-xl px-4 py-2">See More</button>
                </div>

                <h1 className="text-3xl font-bold mt-14 m-8 text-left">FEATURED</h1>
                <ProductList products={products} addToCart={addToCart} />
                
              </div>
            }
          />
          <Route
            path="/cart"
            element={
              <ShoppingCart cartItems={cart} removeFromCart={removeFromCart} />
            }
          />
          <Route
            path="/products"
            element={
              <ProductList products={products} addToCart={addToCart} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
