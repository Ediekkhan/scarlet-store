import React from 'react';
import bgimg from "../assets/img/Frame 160.png";
import full from '../assets/img/unsplash_h5cd51KXmRQ.png';
import hal1 from '../assets/img/unsplash_MYbhN8KaaEc.png';
import hal2 from '../assets/img/unsplash_wINNAh0IeCg.png';
import '../App.css'


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

      <section className="w-auto mx-12 my-4 ">
        <h1 className="text-4xl font-bold text-left m-6">COLLECTION</h1>
        <div className="flex flex-col md:flex-row">
          <div className="my-4  w-full md:w-1/2 flex">
            <div className="relative mb-4">
              <img src={full} alt="full" className="h-auto w-80 lg:w-auto object-contain" />
              <div className="absolute bottom-4 left-4 text-left py-3 pr-20 pl-3 bg-white bg-opacity-75 text-black rounded">
                <p className='text-[#919191]'>NEW IN</p>
                <h3 className='text-black'>BODY CONS</h3>
                <p className='underline text-[#D95F27] underline-offset-1'>show now</p>
              </div>
            </div>
          </div>

          <div className="m-4 w-full md:w-1/2">
            <div className="relative mb-4">
              <img src={hal1} alt="hal1" className="lg:h-[364px] h-auto w-80 lg:w-full object-contain" />
              <div className="absolute bottom-4  left-4 lg:left-24 text-left ml-35 py-3 pr-20 pl-3 bg-white bg-opacity-75 text-black rounded">
                <p className='text-[#919191]'>NEW IN</p>
                <h3 className='text-black'>BODY CONS</h3>
                <p className='underline text-[#D95F27] underline-offset-1'>show now</p>
              </div>
            </div>
            <div className="relative">
              <img src={hal2} alt="hal2" className="lg:h-[364px] h-auto w-80 lg:w-full object-contain" />
              <div className="absolute bottom-4  left-4 lg:left-24 text-left ml-35 py-3 pr-20 pl-3 bg-white bg-opacity-75 text-black rounded">
                <p className='text-[#919191]'>NEW IN</p>
                <h3 className='text-black'>BODY CONS</h3>
                <p className='underline text-[#D95F27] underline-offset-1'>show now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section className="w-auto mx-12 my-4">
        <h1 className="text-4xl font-bold text-left m-8">30% DISCOUNT DEALS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.slice(0, 6).map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow-md">
              <img src={product.image} alt={product.name} className="h-64 w-full  mb-4" />
              <div className="bottom-4 left-4 text-left py-3 bg-white bg-opacity-75 text-black rounded">
                <h3 className="text-[#1E1E1E]">{product.name}</h3>
                <p className="text-gry-700 mb-4 custom-line-through custom-line-through::after">N 13000</p>
                <div className='flex justify-between w-full'>
                <span className='flex text-xl items-center'>
                  <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.1087 11.0883H19.8325V7.93966H23.1087C23.601 7.93966 24 7.54102 24 7.04865C24 6.55623 23.601 6.15734 23.1087 6.15734H19.8325V1.78846C19.8325 1.15071 19.7065 0.682623 19.4581 0.397484C19.222 0.126224 18.9115 0 18.4817 0C18.0715 0 17.7727 0.125353 17.5412 0.39492C17.2956 0.68035 17.171 1.14931 17.171 1.78875V6.15788H11.0084L8.38812 2.19281C8.16387 1.83895 7.95301 1.50748 7.74825 1.18931C7.56389 0.902765 7.38408 0.669469 7.21424 0.495271C7.06388 0.341046 6.89254 0.221689 6.69213 0.129947C6.50303 0.0436221 6.26263 0.000290194 5.97821 0.000290194C5.61545 0.000290194 5.28616 0.0996732 4.97084 0.303856C4.65881 0.505814 4.44312 0.755504 4.31138 1.06724C4.19575 1.36351 4.13457 1.81748 4.13457 2.40347V6.15759H0.890965C0.398789 6.15763 0 6.55652 0 7.04889C0 7.54126 0.398789 7.9399 0.891013 7.9399H4.13462V11.0889H0.891013C0.398789 11.0889 0 11.4877 0 11.9802C0 12.4724 0.398789 12.8709 0.891013 12.8709H4.13462V17.859C4.13462 18.4779 4.26467 18.9413 4.52224 19.2357C4.76719 19.5164 5.07777 19.6468 5.49953 19.6468C5.90645 19.6468 6.2146 19.5159 6.47015 19.2346C6.73183 18.9465 6.8642 18.4834 6.8642 17.8591V12.8709H12.4407L15.4584 17.4983C15.6682 17.8042 15.8849 18.1129 16.101 18.4156C16.2959 18.6875 16.5086 18.927 16.733 19.1271C16.9351 19.3081 17.1518 19.4407 17.377 19.5216C17.6088 19.605 17.8798 19.6474 18.1805 19.6474C18.9966 19.6474 19.8324 19.3975 19.8324 17.5447V12.8709H23.1086C23.6009 12.8709 23.9999 12.4718 23.9999 11.9796C24 11.4874 23.601 11.0883 23.1087 11.0883ZM17.171 7.93961V11.0882H14.2673L12.1867 7.93961H17.171ZM6.86425 4.32173L8.06168 6.15734H6.86425V4.32173ZM6.86425 11.0883V7.93966H9.22439L11.2781 11.0883H6.86425ZM17.171 15.483L15.4453 12.8709H17.171V15.483Z" fill="#333333"/>
                  </svg>

                  {product.price.toFixed(2)}
                </span>                  <button
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
