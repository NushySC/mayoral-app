import React from 'react';

interface SortProps {
    onChange: (sortQuery: string) => void;
}

const Sort: React.FC<SortProps> = ({ onChange }) => {

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        onChange(selectedValue);
    };

    return (
        <select className='sort' name="price" id="sortPrice" onChange={handleSortChange}>
            <option value="">Sort by price</option>
            <option value="expensive">From low to high</option>
            <option value="cheap">From high to low</option>
        </select>
    );
};

export default Sort;
