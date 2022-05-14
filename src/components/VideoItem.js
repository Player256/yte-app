import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.default.url}
      />{" "}
      <div className="content"> {video.snippet.title} </div>{" "}
    </div>
  );
};
export default VideoItem;
