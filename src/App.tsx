import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Search from './components/Search';
import { ReactComponent as CloseIcon } from './img/close.svg';
import { productData } from './productData';

const App: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortQuery, setSortQuery] = useState('');

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleSortChange = (sortQuery: string) => {
        setSortQuery(sortQuery);
    };

    const clearQuery = () => {
        setSearchQuery('');
    };

    const { products } = productData;

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const lengthResults = filteredProducts.length;

    return (
        <div className="app">
            <Search onSearch={handleSearch} onSortChange={handleSortChange} />
            {searchQuery && (
                <div className="results">
                    <p>Your search on <span>{searchQuery}</span> has provided {lengthResults} results</p>
                    <button className="results__clear" onClick={clearQuery}>
                        Clear Search
                        <CloseIcon className='results__icon' />
                    </button>
                </div>
            )}
            <ProductList products={filteredProducts} searchQuery={searchQuery} sortQuery={sortQuery} />
        </div>
    );
};

export default App;
