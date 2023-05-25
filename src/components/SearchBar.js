import React from "react";

function SearchBar({ onSearchChange }) {
  return (
    <>
      <form>
        <label>Search Comments:</label>
        <input onChange={onSearchChange} type="text"></input>
      </form>
    </>
  );
}

export default SearchBar;
