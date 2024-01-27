import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

export default function Playlist(props) {
  return (
    <div className="Playlist">
      <input />
      <TrackList />
      <button >SAVE TO SPOTIFY</button>
    </div>
  );
};