import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

export default function TrackList(props) {
  return (
    <div className="TrackList">
      {props.tracks.map((track) => {
        return (
          <Track />
        );
      })}
    </div>
  );
};