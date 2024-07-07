import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
//   description: string;

}

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-[380px] object-cover mb-4"/>
      <h2 className="text-lg font-bold mb-2 text-[#1E1E1E]">{product.name}</h2>
      <div className=' flex justify-between'>
      <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
      <button
        className="bg-[#D95F27] text-white px-4 py-2 rounded hover:bg-[#4b200b]"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
      </div>
    </div>
  );
};

export default ProductCard;
