import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2B1308] text-white p-6 mt-10 flex flex-col md:flex-row justify-between">
      <div className="m-4 text-left">
        <h1 className='text-3xl font-semibold'>The Scarlet Store</h1>
        <p className='text-white pt-6 pb-6'>
          The Scarlet Store is your one-stop shop for classic
          ladies wears like crop tops, bodycon tops, and trousers.
        </p>
        <div className="flex justify-start space-x-6 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
      <div className="m-4 text-left">
        <h1 className='text-3xl font-semibold'>Reach Us</h1>
        <div className='flex py-4 items-center'>
          <HiOutlineMail size="30px" />
          <p className='px-2'>@calmkris3@gmail.com</p>
        </div>
        <div className='flex py-4 items-center'>
          <FaPhoneAlt size="30px" />
          <p className='px-2'>+234(0)7010135914</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
