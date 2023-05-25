import React from "react";
import video from "../data/video";

function VideoContainer() {
  return (
    <>
      <div className="video">
        <iframe
          width="919"
          height="525"
          src={video.embedUrl}
          frameBorder="0"
          allowFullScreen
          title="Thinking in React"
        />
      </div>
    </>
  );
}

export default VideoContainer;
