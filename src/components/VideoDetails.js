import React from "react";
import video from "../data/video";

function VideoDetails({ title, views, createdAt, upvotes, downvotes }) {
  return (
    <div className="title">
      <h2>{title}</h2>
      <p>
        {views} views | Uploaded {createdAt}
      </p>
    </div>
  );
}

export default VideoDetails;
