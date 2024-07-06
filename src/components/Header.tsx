import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaDesktop, FaMobileAlt } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-white text-black p-6">
      <div className=" mx-auto justify-between flex px-4">
        <div className="flex justify-start ">
          <div className="text-2xl font-bold">SCARLET STORE</div>
        </div>

        <div  className="flex items-center  space-x-4">

            <nav className="hidden md:flex  space-x-4">
                <Link to="/" className="hover:text-[#D95F27]">Home</Link>
                <Link to="/products" className="hover:text-[#D95F27]">Products</Link>
                <Link to="/contact" className="hover:text-[#D95F27]">Contact Us</Link>
            </nav>
            <div className="md:hidden">
                <FaBars className="text-xl cursor-pointer" />
            </div>

            <Link to="/cart">
            <FaShoppingCart className="text-2xl cursor-pointer" />
          </Link>

        </div>

        <div className="flex items-center justify-end space-x-4">
          <FaDesktop className="hidden md:block text-xl cursor-pointer" />
          <FaMobileAlt className=" text-xl cursor-pointer" />
          
        </div>
      </div>
    </header>
  );
};

export default Header;
