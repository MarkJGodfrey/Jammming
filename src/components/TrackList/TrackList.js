import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

export default function TrackList(props) {
  if(props.canAdd){
    return (
      <div className="TrackList">
        {props.tracklist.map((track)=><Track onButton={{func: props.onAdd,
                                                        title: 'Add to playlist',
                                                        text: '+'}} track={track} key={track.id}/>)}

                                                        
      </div>
    );
  } else {
    return (
      <div className="TrackList">
        {props.tracklist.map((track)=><Track onButton={{func: props.onRemove,
                                                        title: 'Remove from playlist',
                                                        text: '-'}} track={track} key={track.id}/>)}

                                                        
      </div>
    );
  }
};