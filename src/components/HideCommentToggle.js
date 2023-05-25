import React from "react";

function HideCommentToggle({ commentsHidden, setCommentsHidden }) {
  function handleToggle(e) {
    setCommentsHidden(e.target.checked ? "Hide Comments" : "Show Comments");
  }
  return (
    <label>
      <input
        checked={commentsHidden === "Hide Comments"}
        onClick={handleToggle}
      />
    </label>
  );
}

export default HideCommentToggle;
