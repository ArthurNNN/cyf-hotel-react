import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  // const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBookings(data);
      });
  }, []);

  const search = searchVal => {
    var filtredGuests = FakeBookings;
    if (searchVal === "") {
      filtredGuests = FakeBookings;
    } else {
      filtredGuests = FakeBookings.filter(
        guest =>
          guest.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          guest.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    }
    setBookings(filtredGuests);
  };

  return (
    <div>
      <div className="App-content">
        <div className="container">
          <Search search={search} />
        </div>
      </div>
      <SearchResults results={bookings} color="purple" />
    </div>
  );
};

export default Bookings;
