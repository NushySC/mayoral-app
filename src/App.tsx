import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Search from './components/Search';
import { ReactComponent as CloseIcon } from './img/close.svg';

const App: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [sortQuery, setSortQuery] = useState<string>('');

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleSortChange = (sortQuery: string) => {
        setSortQuery(sortQuery);
    };
    const clearQuery = () => {
        setSearchQuery('');
    };

    return (
        <div className="app">
            <Search onSearch={handleSearch} onSortChange={handleSortChange} />
            {searchQuery && (
                <div className="results">
                    <p dangerouslySetInnerHTML={{
                            __html: `Your search on <span> ${searchQuery} </span> has provided " " results`,
                        }}></p>
                    <button className="results__clear" onClick={clearQuery}>
                        Clear Search
                        <CloseIcon className='results__icon' />
                    </button>
                </div>
            )}
            <ProductList searchQuery={searchQuery} sortQuery={sortQuery} />
        </div>
    );
};

export default App;
