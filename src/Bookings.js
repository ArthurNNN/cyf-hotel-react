import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [isError, setIsError] = useState(false);
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
    fetch(`https://cyf-react.glitch.me/`)
      .then(handleErrors)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBookings(data);
        setIsDataLoaded(true);
      })
      .catch(error => console.log(error));
  }, []);

  const addingBooking = newBooking => {
    setBookings(bookings.concat(newBooking));
  };

  const search = searchVal => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(bookings => {
        const filteredGuests = bookings.filter(guest => {
          return (
            guest.firstName.toLowerCase().indexOf(searchVal.toLowerCase()) !==
            -1
          );
        });
        setBookings(filteredGuests);
      });
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
          <SearchResults
            results={bookings}
            onAddNewBooking={addingBooking}
            color="purple"
          />
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
