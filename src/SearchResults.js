import React from "react";
import moment from "moment";
import "./App.css";

const SearchResults = props => {
  return (
    <table className="table">
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
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.firstName}</td>
            <td>{item.surname}</td>
            <td>
              <a href={"mailto:" + item.email}>{item.email}</a>
            </td>
            <td>{item.roomId}</td>
            <td>{item.checkInDate}</td>
            <td>{item.checkOutDate}</td>
            <td>
              {moment(Date.parse(item.checkOutDate)).diff(
                Date.parse(item.checkInDate),
                "days"
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
