import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  var results = [];
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    results = FakeBookings;
  };

  console.log("Loaded FakeBookings from data/fakeBookings.json in Booking():");
  console.log(FakeBookings);

  return (
    <div>
      <div className="App-content">
        <div className="container">
          <Search search={search} />
        </div>
      </div>
      <SearchResults results={FakeBookings} />
    </div>
  );
};

export default Bookings;
