import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  }

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      onSearch(event.target.value);
    }
  };

  return (
    <div>
    <h3>Search: </h3>
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button type="submit">Search</button>
    </form>
    </div>
  );
}



export default SearchBar;