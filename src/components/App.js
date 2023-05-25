import video from "../data/video.js";
import VideoContainer from "./VideoContainer.js";
import VideoDetails from "./VideoDetails.js";
import Buttons from "./Buttons.js";
import CommentCard from "./CommentCard.js";
import Comments from "./Comments.js";
import React, { useState } from "react";
import HideCommentToggle from "./HideCommentToggle.js";

function App() {
  // console.log("Here's your data:", video);
  const [commentsHidden, setCommentsHidden] = useState(false);

  function handleHiddenComments() {
    setCommentsHidden(!commentsHidden);
  }

  let hideComment = commentsHidden ? null : (
    <Comments comments={video.comments} />
  );

  return (
    <div className="App">
      <VideoContainer />
      <VideoDetails
        title={video.title}
        views={video.views}
        createdAt={video.createdAt}
      />
      <Buttons
        upvotes={video.upvotes}
        downvotes={video.downvotes}
        handleHiddenComments={handleHiddenComments}
        commentsHidden={commentsHidden}
      />
      {hideComment}
    </div>
  );
}

export default App;
