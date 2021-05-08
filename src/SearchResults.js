import React from "react";
import TableRow from "./TableRow";
import "./App.css";

const SearchResults = props => {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">RoomId</th>
          <th scope="col">CheckIn Date</th>
          <th scope="col">CheckOut Date</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((item, index) => (
          <TableRow item={item} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
