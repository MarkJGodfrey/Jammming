import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  const [searchText, setSearchText] = useState('');
  const handleTextChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();//don't know if this is required
    props.onSearch(searchText);
  };
  const onEnter = (e) => {
    if(e.key==='Enter'){
      handleSearch(e);
    }
  };

  return (
    <div className="SearchBar">
      <input 
        type='text' 
        aria-label='Enter A Song Title' 
        placeholder="Enter A Song Title" 
        value={searchText} 
        onChange={handleTextChange}
        onKeyDown={onEnter}
        />
      <button className="SearchButton" onClick={handleSearch}>SEARCH</button>
    </div>
  );
};