import React, { useState, useContext } from 'react';
import { FoodContext } from '../../contexts/FoodContext';

const SearchBar: React.FC = () => {
  const [term, setTerm] = useState('');
  const context = useContext(FoodContext);

  if (!context) {
    throw new Error('SearchBar must be used within a FoodProvider');
  }

  const { searchFood } = context;

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchFood(term);
    }
  };

  return (
    <input
      type="text"
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      onkeypress={handleSearch}
      placeholder="Search for food..."
    />
  );
};

export default SearchBar;
