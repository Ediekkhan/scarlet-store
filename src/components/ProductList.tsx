import React from 'react';
// import ProductCard from './ProductCard';
import ProductCard from '../utils/libs/ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;

}

interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void; 
  searchQuery: string;
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart, searchQuery }) => {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-8  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
