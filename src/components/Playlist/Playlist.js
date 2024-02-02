import React, {useState} from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

export default function Playlist(props) {
  const handleSave = () => {
    props.savePlaylist(props.PlaylistName, props.playlistTracks);
  };

  const PlaylistName = () => {
    const [nameText, setNameText] = useState(props.playlistName);
    const [inputRequired, setInputRequired] = useState(props.playlistName==='');
    const handleNameTextChange = (e) => {
      setNameText(e.target.value);
    };
    const handleNameChange = (e) => {
      e.preventDefault();
      if(nameText!==''){
        props.changeName(nameText);
        setInputRequired(false);
      }
    };
    const handleEnter = (e) => {
      if(e.key==='Enter'){
        handleNameChange(e);
      }
    };

    if(inputRequired){
      return (
        <div>
          <h3>Enter a name for your playlist.</h3>
          <input
          onChange={handleNameTextChange}
          onKeyDown={handleEnter}
          value={nameText}
          autoFocus
          />
          <button onClick={handleNameChange}>CONFIRM NAME</button>
        </div>
      )

    } else {
      return (
        <div>
          <h2>{props.playlistName}</h2>
          <button onClick={()=>{setInputRequired(true)}}>Change Playlist Name</button>
        </div>
      )
    }
  };

  return (
    <div className="Playlist">
      <PlaylistName />
      <button className='Save' onClick={handleSave}>SAVE TO SPOTIFY</button>
      <TrackList
      tracklist={props.playlistTracks}
      playlistTracks={props.playlistTracks}
      onRemove={props.onRemove}
      type='playlist'
      />
    </div>
  );
};