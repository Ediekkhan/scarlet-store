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
          <Link to="/" className="text-sm lg:text-2xl self-center ml-20 lg:ml-0  font-bold">
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

          <Link to="/cart"  >
            {/* <FaShoppingCart className="text-2xl cursor-pointer" /> */}
            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.6307 13.4508H6.67363L7.37441 12.0234L19.0182 12.0023C19.4119 12.0023 19.7494 11.7211 19.8197 11.332L21.4322 2.30625C21.4744 2.06953 21.4111 1.82578 21.2564 1.64062C21.18 1.5495 21.0846 1.4761 20.977 1.42551C20.8693 1.37492 20.7519 1.34835 20.633 1.34766L5.8205 1.29844L5.69394 0.703125C5.61425 0.323437 5.27207 0.046875 4.88301 0.046875H1.26191C1.04249 0.046875 0.832051 0.134041 0.676894 0.289198C0.521737 0.444355 0.43457 0.654794 0.43457 0.874219C0.43457 1.09364 0.521737 1.30408 0.676894 1.45924C0.832051 1.6144 1.04249 1.70156 1.26191 1.70156H4.21269L4.76582 4.33125L6.12754 10.9242L4.37441 13.7859C4.28337 13.9088 4.22853 14.0547 4.21611 14.2071C4.20368 14.3596 4.23416 14.5124 4.3041 14.6484C4.44472 14.9273 4.72832 15.1031 5.04238 15.1031H6.51425C6.20047 15.5199 6.03098 16.0275 6.03144 16.5492C6.03144 17.8758 7.10957 18.9539 8.43613 18.9539C9.76269 18.9539 10.8408 17.8758 10.8408 16.5492C10.8408 16.0266 10.6674 15.518 10.358 15.1031H14.1338C13.82 15.5199 13.6505 16.0275 13.651 16.5492C13.651 17.8758 14.7291 18.9539 16.0557 18.9539C17.3822 18.9539 18.4603 17.8758 18.4603 16.5492C18.4603 16.0266 18.2869 15.518 17.9775 15.1031H20.633C21.0877 15.1031 21.4603 14.7328 21.4603 14.2758C21.459 14.0566 21.371 13.8468 21.2155 13.6923C21.0601 13.5377 20.8499 13.4509 20.6307 13.4508ZM6.16504 2.92969L19.6603 2.97422L18.3385 10.3758L7.73769 10.3945L6.16504 2.92969ZM8.43613 17.2898C8.02832 17.2898 7.6955 16.957 7.6955 16.5492C7.6955 16.1414 8.02832 15.8086 8.43613 15.8086C8.84394 15.8086 9.17675 16.1414 9.17675 16.5492C9.17675 16.7456 9.09872 16.934 8.95983 17.0729C8.82094 17.2118 8.63255 17.2898 8.43613 17.2898ZM16.0557 17.2898C15.6478 17.2898 15.315 16.957 15.315 16.5492C15.315 16.1414 15.6478 15.8086 16.0557 15.8086C16.4635 15.8086 16.7963 16.1414 16.7963 16.5492C16.7963 16.7456 16.7182 16.934 16.5794 17.0729C16.4405 17.2118 16.2521 17.2898 16.0557 17.2898Z" fill="#929292"/>
            </svg>

          </Link>

        </div>

         <Link to="/cart" className=' lg:hidden md:hidden sm:hidden' >
            {/* <FaShoppingCart className="text-2xl cursor-pointer" /> */}
            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.6307 13.4508H6.67363L7.37441 12.0234L19.0182 12.0023C19.4119 12.0023 19.7494 11.7211 19.8197 11.332L21.4322 2.30625C21.4744 2.06953 21.4111 1.82578 21.2564 1.64062C21.18 1.5495 21.0846 1.4761 20.977 1.42551C20.8693 1.37492 20.7519 1.34835 20.633 1.34766L5.8205 1.29844L5.69394 0.703125C5.61425 0.323437 5.27207 0.046875 4.88301 0.046875H1.26191C1.04249 0.046875 0.832051 0.134041 0.676894 0.289198C0.521737 0.444355 0.43457 0.654794 0.43457 0.874219C0.43457 1.09364 0.521737 1.30408 0.676894 1.45924C0.832051 1.6144 1.04249 1.70156 1.26191 1.70156H4.21269L4.76582 4.33125L6.12754 10.9242L4.37441 13.7859C4.28337 13.9088 4.22853 14.0547 4.21611 14.2071C4.20368 14.3596 4.23416 14.5124 4.3041 14.6484C4.44472 14.9273 4.72832 15.1031 5.04238 15.1031H6.51425C6.20047 15.5199 6.03098 16.0275 6.03144 16.5492C6.03144 17.8758 7.10957 18.9539 8.43613 18.9539C9.76269 18.9539 10.8408 17.8758 10.8408 16.5492C10.8408 16.0266 10.6674 15.518 10.358 15.1031H14.1338C13.82 15.5199 13.6505 16.0275 13.651 16.5492C13.651 17.8758 14.7291 18.9539 16.0557 18.9539C17.3822 18.9539 18.4603 17.8758 18.4603 16.5492C18.4603 16.0266 18.2869 15.518 17.9775 15.1031H20.633C21.0877 15.1031 21.4603 14.7328 21.4603 14.2758C21.459 14.0566 21.371 13.8468 21.2155 13.6923C21.0601 13.5377 20.8499 13.4509 20.6307 13.4508ZM6.16504 2.92969L19.6603 2.97422L18.3385 10.3758L7.73769 10.3945L6.16504 2.92969ZM8.43613 17.2898C8.02832 17.2898 7.6955 16.957 7.6955 16.5492C7.6955 16.1414 8.02832 15.8086 8.43613 15.8086C8.84394 15.8086 9.17675 16.1414 9.17675 16.5492C9.17675 16.7456 9.09872 16.934 8.95983 17.0729C8.82094 17.2118 8.63255 17.2898 8.43613 17.2898ZM16.0557 17.2898C15.6478 17.2898 15.315 16.957 15.315 16.5492C15.315 16.1414 15.6478 15.8086 16.0557 15.8086C16.4635 15.8086 16.7963 16.1414 16.7963 16.5492C16.7963 16.7456 16.7182 16.934 16.5794 17.0729C16.4405 17.2118 16.2521 17.2898 16.0557 17.2898Z" fill="#929292"/>
            </svg>

          </Link>

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
            {/* <Link to="/cart" className={getLinkClass('/cart')}>
              <FaShoppingCart className="text-2xl hover:text-[#D95F27] textcursor-pointer" />
            </Link> */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
