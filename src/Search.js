import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = props => {
  const [searchValue, setSearchValue] = useState("");

  const onSearch = () => {
    props.search(searchValue);
  };

  const custemerName = event => {
    // setSearchValue(document.getElementById("customerName").value);
    // console.log(document.getElementById("customerName").value);
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          {/* <form className="form-group search-box" > */}
          <label htmlFor="customerName">Customer name</label>
          <div className="search-row">
            <input
              type="text"
              id="customerName"
              className="form-control"
              placeholder="Customer name"
              onChange={custemerName}
            />
            <SearchButton onSearch={onSearch} />
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default Search;
