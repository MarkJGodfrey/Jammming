import React, { useState } from "react";
import "./App.css";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Utilities from "../../utilities/Utilities";

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  async function onSearch(searchText) {
    setSearchResults(await Utilities.search(searchText));
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
  const savePlaylist = () => {
    Utilities.savePlaylist(playlistName, playlistTracks);
    setPlaylistName('');
    setPlaylistTracks([]);
  };

  return (
    <div className='main'>
      <header>
        <h1>Jammming</h1>
      </header>
      <div className='Image'>
        <div className="Gradient">
          <SearchBar onSearch={onSearch} />
          <div className="Lists">
            <SearchResults
            searchResults={searchResults}
            onAdd={addTrack}
            onRemove={removeTrack}
            playlistTracks={playlistTracks}
            />
            <Playlist
            playlistName={playlistName}
            changeName={changeName}
            onRemove={removeTrack}
            playlistTracks={playlistTracks}
            savePlaylist={savePlaylist}
            />
          </div>
        </div>
      </div>
    </div>
  );
};