import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

export default function TrackList(props) {
  const canRemove = (track) => {
  if(props.type==='searchResults'){
      return props.playlistTracks.some((playlistTrack)=>playlistTrack.id===track.id)
    } else if (props.type==='playlist'){
      return true;
    }
  }
  return (
    <div className="TrackList">
      {props.tracklist.map((track)=>{
        return (
          <Track 
          track={track}
          key={track.id}
          onAdd={props.onAdd}
          onRemove={props.onRemove}
          canRemove={canRemove(track)}
          />
        );
      })}
    </div>
  );
};