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
  );
}



// const SearchBar = () => {
//   return (
//     <div>
//         <h1>s</h1>
//     </div>
//   );
// };

export default SearchBar;