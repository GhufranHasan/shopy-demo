import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';

const Navbar = (props) => {
  const name = "ghufran";
  if(name === "ahmad"){
    return (
      <nav>
          <Logo src="logo-shopy.png" alt="Logo" />
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Accessories</li>
          <li>Summer Sale</li>
          <li>Kids</li>
          <li>{name}</li>
        </ul>
        <SearchBar />
      </nav>
    );
  }
  else{
    return (
      <nav>
          <Logo src="logo-shopy.png" alt="Logo" />
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Accessories</li>
          <li>Summer Sale</li>
          <li>Kids</li>
        </ul>
        <SearchBar />
      </nav>
    );
  }
}

export default Navbar;