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
    return props.canRemove? <button onClick={removeTrack} title='Remove from playlist'>-</button> :
     <button onClick={addTrack} title='Add to playlist'>+</button>;

  };
  return (
    <div className="Track">
      <div className="Track-information">
      <h3>{props.track.name}</h3>
      <h3>{toString(props.canRemove)}</h3>
        <p>By: {props.track.artist} | From: {props.track.album}</p>
      </div>
      <AddOrRemove />
    </div>
  );
};