import React from 'react';
import { useParams } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductDescriptionProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ products, addToCart }) => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find(p => p.id === parseInt(productId || '', 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 object-cover mb-4 md:mb-0" />
        <div className="md:ml-4">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <button
            className="bg-[#D95F27] text-white px-4 py-2 rounded hover:bg-[#4b200b]"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
