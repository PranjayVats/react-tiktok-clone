import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
import MusicWheel from "./Videos/MusicWheel.png";

function VideoFooter({ channel, desciption, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{channel}</h3>
        <p>{desciption}</p>
        <div className="videoFooter_ticker">
          <MusicNoteIcon className="videoFooter_icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
          <img className="videoFooter_record" src={MusicWheel} alt="Hello" />
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
