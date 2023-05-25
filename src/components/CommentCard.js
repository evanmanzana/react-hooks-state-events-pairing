import React, { useState } from "react";
import video from "../data/video";

function CommentCard(props) {
  let [liveUpVotes, setLiveUpVotes] = useState(0);
  let [liveDownVotes, setLiveDownVotes] = useState(0);
  function handleUpVote() {
    setLiveUpVotes(liveUpVotes + 1);
  }
  function handleDownVote() {
    setLiveDownVotes(liveDownVotes + 1);
  }
  return (
    <>
      <div>
        <h4>{props.user}</h4>
        <p>{props.comment}</p>
        <button onClick={handleUpVote} className="like-button">
          {liveUpVotes}👍
        </button>
        <button onClick={handleDownVote} className="dislike-button">
          {liveDownVotes}👎
        </button>
      </div>
    </>
  );
}

export default CommentCard;
