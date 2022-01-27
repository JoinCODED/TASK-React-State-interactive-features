import React from "react";

const SearchBar = () => {
  return (
    <input
      className="searchBar"
      onChange={(event) => console.log(event.target.value)}
      placeholder="Search for a cookie name"
    />
  );
};

export default SearchBar;
