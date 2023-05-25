import React, { useState } from "react";
import video from "../data/video";

function Buttons({ upvotes, downvotes, handleHiddenComments, commentsHidden }) {
  let [liveUpVotes, setLiveUpVotes] = useState(upvotes);
  let [liveDownVotes, setLiveDownVotes] = useState(downvotes);
  let buttonText = commentsHidden ? "Show Comments" : "Hide Comments";
  function handleUpVote() {
    setLiveUpVotes(liveUpVotes + 1);
  }
  function handleDownVote() {
    setLiveDownVotes(liveDownVotes + 1);
  }
  return (
    <>
      <div className="likes_container">
        <div>
          <button onClick={handleUpVote} className="like-button">
            {liveUpVotes}👍
          </button>
          <button onClick={handleDownVote} className="dislike-button">
            {liveDownVotes}👎
          </button>
        </div>
        <button onClick={handleHiddenComments}>{buttonText}</button>
      </div>
    </>
  );
}

export default Buttons;
