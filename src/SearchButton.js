import React from "react";
import "./App.css";

const SearchButton = props => {
  return (
    <button className="btn btn-primary" onClick={props.onSearch}>
      Search
    </button>
  );
};

export default SearchButton;
