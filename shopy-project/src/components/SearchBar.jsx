import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input type="text" placeholder="Search" className="search-input" />
      <button type="submit" className="search-button">
        <AiOutlineSearch className="button-icon" />
      </button>
    </div>
  );
}

export default SearchBar;
