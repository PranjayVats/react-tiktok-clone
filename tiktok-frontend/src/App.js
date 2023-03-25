import axios from "./Axios.js";
import React, { useState, useEffect } from "react";
import "./App.css";
import Videos from "./Videos";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  }, []);
  return (
    <div className="app">
      <div className="app_video">
        {videos.map((v) => (
          <Videos
            url={v.url}
            channel={v.channel}
            song={v.song}
            likes={v.likes}
            messages={v.messages}
            description={v.description}
            shares={v.shares}
            key={v._id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
