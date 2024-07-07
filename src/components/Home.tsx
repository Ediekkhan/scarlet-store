import React from 'react';
import bgimg from "../assets/img/Frame 160.png";
import full from '../assets/img/unsplash_h5cd51KXmRQ.png';
import hal1 from '../assets/img/unsplash_MYbhN8KaaEc.png';
import hal2 from '../assets/img/unsplash_wINNAh0IeCg.png';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface HomeProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ products, addToCart }) => {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-100"></div>
        <img src={bgimg} className="w-full opacity-50 sm:h-64 md:h-96 lg:h-auto" alt="background" />
        <div className="absolute top-1/2 transform -translate-y-1/2 text-left text-white mx-10 sm:mx-4 md:mx-8 lg:mx-10">
          <h3 className='text-lg lg:text-2xl sm:text-xl'>Explore trendy outfits</h3>
          <h1 className="text-xl font-semibold sm:text-4xl md:text-6xl lg:text-8xl">Mid year megasales</h1>
          <p className="text-lg mt-2 sm:text-xl">Get up to 30% discounts on tops</p>
        </div>
      </div>

      <section className="w-auto m-4">
        <h1 className="text-4xl font-bold text-left m-8">COLLECTION</h1>
        <div className="flex flex-col md:flex-row">
          <div className="m-4 w-full md:w-1/2 flex">
            <div className="relative">
              <img src={full} alt="full" className="h-auto object-contain" />
              <div className="absolute bottom-4 left-4 text-left py-3 pr-20 pl-3 bg-white bg-opacity-75 text-black rounded">
                <p className='text-gray-700'>NEW IN</p>
                <h3 className='text-black'>BODY CONS</h3>
                <p className='underline text-[#D95F27] underline-offset-1'>show now</p>
              </div>
            </div>
          </div>

          <div className="m-4 w-full md:w-1/2">
            <div className="relative mb-4">
              <img src={hal1} alt="hal1" className="h-auto w-full object-contain" />
              <div className="absolute bottom-4 left-4 text-left py-3 pr-20 pl-3 bg-white bg-opacity-75 text-black rounded">
                <p className='text-gray-700'>NEW IN</p>
                <h3 className='text-black'>BODY CONS</h3>
                <p className='underline text-[#D95F27] underline-offset-1'>show now</p>
              </div>
            </div>
            <div className="relative">
              <img src={hal2} alt="hal2" className="h-auto w-full object-contain" />
              <div className="absolute bottom-4 left-4 text-left py-3 pr-20 pl-3 bg-white bg-opacity-75 text-black rounded">
                <p className='text-gray-700'>NEW IN</p>
                <h3 className='text-black'>BODY CONS</h3>
                <p className='underline text-[#D95F27] underline-offset-1'>show now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-auto m-4">
        <h1 className="text-4xl font-bold text-left m-8">30% DISCOUNT DEALS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.slice(0, 6).map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow-md">
              <img src={product.image} alt={product.name} className="h-64 w-full object-contain mb-4" />
              <div className="bottom-4 left-4 text-left py-3 bg-white bg-opacity-75 text-black rounded">
                <h3 className="text-black">{product.name}</h3>
                <p className="text-gray-700 mb-4 line-through">$13000</p>
                <div className='flex justify-between w-full'>
                  <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
                  <button
                    className="bg-[#D95F27] items-center text-white px-4 py-2 rounded hover:bg-[#4b200b]"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
