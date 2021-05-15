import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [isError, setIsError] = useState(false);
  // const [errorMessage, setErrorMessage] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const handleErrors = response => {
    if (!response.ok || typeof response.ok === "undefined") {
      setIsError(true);
      // console.log(!response.ok);
      throw Error(response.statusText);
    }
    return response;
  };

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/error`)
      .then(handleErrors)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBookings(data);
        setIsDataLoaded(true);
      })
      .catch(error => console.log(error));
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

  if (isError) {
    return (
      <div>
        <img className="spinner" src="/error.jpg" alt="error img" />
      </div>
    );
  } else {
    if (isDataLoaded) {
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
    } else {
      return (
        <div>
          <img
            className="spinner"
            src="/fidget-spinner-loading.gif"
            alt="Spinner pic"
          />
        </div>
      );
    }
  }
};

export default Bookings;
