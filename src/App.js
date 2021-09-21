import axios from "./Axios.js";
import React , {useState, useEffect} from "react";
import "./App.css";
import Videos from "./Videos";
import Ironman from "./Videos/iron_man.mp4";
import Lucifer from "./Videos/Lucifer.mp4";

function App() {
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    async function fetchPosts(){
      const response =await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  },[]);
  console.log(videos);
  return (
    <div className="app">
      <div className="app_video">
        {videos.map(({channel, description, song, likes, messages, shares})=>(
            <>
            <Videos
              url={Ironman}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />,
            <Videos
              url={Lucifer}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
            </>
        ))}
      </div>
    </div>
  );
}

export default App;
