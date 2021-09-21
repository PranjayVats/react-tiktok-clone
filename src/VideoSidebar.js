import React,{useState} from 'react';
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";




function VideoSidebar({likes, shares, messages}) {
    const [like,setLike]=useState(false);
    
    return (
        <div className="videoSidebar">
            <div className="sidebar_button">
               { 
                    like ? (
                                <FavoriteIcon fontSize="large"
                                onClick={(e) => setLike(false)}/>
                    ) : (
                            <FavoriteBorderIcon fontSize="large"
                            
                            onClick={(e) => setLike(true)}/>
                        
                    )

                } 
                <p>{like ? likes + 1 : likes }</p>
                
            </div>
            <div className="sidebar_button">
                <MessageIcon fontSize="large"/>
                <p>{messages}</p>
            </div>
            <div className="sidebar_button">
                <ShareIcon fontSize="large"/>
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
