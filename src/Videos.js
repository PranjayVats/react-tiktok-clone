import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

import "./Videos.css";

function Videos({ url, channel, desciption, song, likes, shares, messages }) {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);
  const handleVideo = () => {
    // if video is playing --- stop it...
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    }
    // if video is stopped --- play it...
    else {
      videoRef.current.play();
      setPlay(true);
    }
  };
  return (
    <div className="video">
      <video
        onClick={handleVideo}
        className="video_player"
        loop
        src={url}
        ref={videoRef}
      ></video>

      {/* Videos Footer*/}
      <VideoFooter channel={channel} desciption={desciption} song={song} />
      {/* VideosSidebar */}
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Videos;
