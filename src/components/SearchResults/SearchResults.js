import React from "react";
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

export default function SearchResults(props) {
  return (
    <div className='SearchResults'>
      <h2>Results</h2>
      <TrackList
      tracklist={props.searchResults}
      playlistTracks={props.playlistTracks}
      onAdd={props.onAdd}
      onRemove={props.onRemove}
      type='searchResults'
      />
    </div>
  );
};