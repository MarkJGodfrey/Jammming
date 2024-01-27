import React, { useState } from "react";
import "./App.css";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Utilities from "../../utilities/Utilities";

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const addTrack = () => {

  };

  return (
    <div>
      <h1>Jammming</h1>
      <div className="App">
        <SearchBar onSearch={Utilities.search} />
        
        <div className="App-playlist">
          {/* <SearchResults searchResults={searchResults} onAdd={addTrack} /> */}
          {/* <Playlist /> */}
        </div>
      </div>
    </div>
  );
};