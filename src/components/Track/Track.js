import React from "react";
import "./Track.css";

export default function Track(props) {
  const addTrack = () => {
    props.onAdd(props.track);
  };
  const removeTrack = () => {
    props.onRemove(props.track);
  };
  const AddOrRemove = () => {
    return props.canRemove? <button  className='RemoveTrack' onClick={removeTrack} title='Remove from playlist'>-</button> :
     <button  className='AddTrack' onClick={addTrack} title='Add to playlist'>+</button>;

  };
  return (
    <div className="Track">
      <div className="TrackInformation">
        <h3>{props.track.name}</h3>
        <br></br>
        <p>By: {props.track.artist} | From: {props.track.album}</p>
      </div>
      <AddOrRemove/>
    </div>
  );
};