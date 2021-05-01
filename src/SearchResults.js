import React from "react";
import "./App.css";

const SearchResults = props => {
  var booking = props.results;
  var keys = Object.keys(props.results[0]);
  console.log("Keys from props.results in SearchResults.js:");
  console.log(keys);
  return (
    <table className="table">
      <thead>
        <tr>
          {keys.map((item, index) => (
            <th key={index} scope="col">
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {booking.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.firstName}</td>
            <td>{item.surname}</td>
            <td>{item.email}</td>
            <td>{item.roomId}</td>
            <td>{item.checkInDate}</td>
            <td>{item.checkOutDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
