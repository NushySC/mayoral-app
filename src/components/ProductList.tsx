import React from 'react';
import ProductCard from './ProductCard';
import { productData } from '../productData';

interface Props {
    searchQuery: string;
    sortQuery: string;
}

const ProductList: React.FC<Props> = ({ searchQuery, sortQuery }) => {
    const { products } = productData;
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortQuery === 'cheap') {
            return b.price - a.price;
        } else if (sortQuery === 'expensive') {
            return a.price - b.price;
        }
        return 0;
    });

    return (
        <div className="product-list">
            {sortedProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
