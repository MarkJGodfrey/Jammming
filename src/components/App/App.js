import React, { useState } from "react";
import "./App.css";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Utilities from "../../utilities/Utilities";

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const onSearch = (searchText) => {
    setSearchResults(Utilities.search(searchText));
  };

  const [playlistTracks, setPlaylistTracks] = useState([]);
  const addTrack = (track) => {
    setPlaylistTracks((prevTracks)=>[...prevTracks, track]);
  };
  const removeTrack = (track) => {
    setPlaylistTracks((prevTracks)=>prevTracks.filter((prevTrack)=>prevTrack.id!==track.id));
  };

  const [playlistName, setPlaylistName] = useState('');
  const changeName = (name) => {
    setPlaylistName(name);
  };

  return (
    <div>
      <h1>Jammming</h1>
      <div className="App">
        <SearchBar onSearch={onSearch} />
        
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} playlistTracks={playlistTracks} onAdd={addTrack} onRemove={removeTrack}/>
          <Playlist playlistName={playlistName} changeName={changeName} playlistTracks={playlistTracks} onRemove={removeTrack}/>
        </div>
      </div>
    </div>
  );
};