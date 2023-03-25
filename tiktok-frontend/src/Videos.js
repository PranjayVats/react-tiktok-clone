import React from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import ReactPlayer from "react-player";
import "./Videos.css";

function Videos({ url, channel, desciption, song, likes, shares, messages }) {
  return (
    <div className="video">
      <ReactPlayer
        className="video_player"
        loop={true}
        controls={true}
        url={url}
      />

      <VideoFooter channel={channel} desciption={desciption} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Videos;
