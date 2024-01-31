import React, {useState} from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

export default function Playlist(props) {
  const PlaylistName = () => {
    const [nameText, setNameText] = useState('');
    const [inputRequired, setInputRequired] = useState(false);
    if(!props.playlistName){setInputRequired(true)}
    const handleNameTextChange = (e) => {
      setNameText(e.target.value);
    };
    const handleNameChange = (e) => {
      e.preventDefault();
      props.changeName(nameText);
      setInputRequired(false);
    };
    const handleEnter = (e) => {
      if(e.key==='Enter'){
        alert('enter');
        handleNameChange(e);
      }
    };

    if(inputRequired){
      return (
        <div>
          <h3>Enter a name for your playlist.</h3>
          <input onChange={handleNameTextChange} onKeyDown={handleEnter} value={nameText}/>
          <button onClick={handleNameChange}>Confirm Name</button>
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
      <TrackList tracklist={props.playlistTracks} playlistTracks={props.playlistTracks} onRemove={props.onRemove} type='playlist'/>
      <button >SAVE TO SPOTIFY</button>
    </div>
  );
};