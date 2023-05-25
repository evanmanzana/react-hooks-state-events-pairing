import React, { useState } from "react";
import video from "../data/video";
import CommentCard from "./CommentCard";
import SearchBar from "./SearchBar";

function Comments({ comments }) {
  const [search, setSearch] = useState("");
  function onSearchChange(e) {
    setSearch(e.target.value);
  }
  let filteredComments = comments.filter((comment) =>
    comment.user.includes(search)
  );
  return (
    <>
      <SearchBar onSearchChange={onSearchChange} />
      <div className="comment-card_container">
        <h3>{filteredComments.length} comments</h3>
        {filteredComments.map((comment) => (
          <CommentCard user={comment.user} comment={comment.comment} />
        ))}
      </div>
    </>
  );
}

export default Comments;
