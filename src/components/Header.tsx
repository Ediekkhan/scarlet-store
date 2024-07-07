import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaDesktop, FaMobileAlt } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClass = (path: string) => {
    return location.pathname === path ? 'text-[#D95F27]' : 'hover:text-[#D95F27] text-[#919191]';
  };

  return (
    <header className="bg-white text-black p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none mr-4">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
          <Link to="/" className="text-sm lg:text-2xl font-bold">
          The Scarlet Store
          </Link>
        </div>

        <div className="hidden md:flex items-center">
          <Link to="/" className="text-sm lg:text-2xl font-bold">
            The Scarlet Store
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            <Link to="/" className={getLinkClass('/')}>Home</Link>
            <Link to="/products" className={getLinkClass('/products')}>Products</Link>
            <Link to="/contact" className={getLinkClass('/contact')}>Contact Us</Link>
          </nav>

          <Link to="/cart">
            <FaShoppingCart className="text-2xl cursor-pointer" />
          </Link>
        </div>

        <div className="l:hidden hidden s:hidden  md:flex items-center justify-end space-x-4">
          {/* <FaDesktop className="text-xl cursor-pointer" /> */}
          {/* <FaMobileAlt className="text-xl cursor-pointer" /> */}
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col items-start space-y-4">
            <Link to="/" className={getLinkClass('/')}>Home</Link>
            <Link to="/products" className={getLinkClass('/products')}>Products</Link>
            <Link to="/contact" className={getLinkClass('/contact')}>Contact Us</Link>
            <Link to="/cart" className={getLinkClass('/cart')}>
              <FaShoppingCart className="text-2xl hover:text-[#D95F27] textcursor-pointer" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
