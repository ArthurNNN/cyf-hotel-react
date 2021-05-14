import React, { useState } from "react";
import TableRow from "./TableRow";
import CustomerProfile from "./CustomerProfile";
import "./App.css";

const SearchResults = props => {
  const [profileText, setProfileText] = useState(null);

  const callbackFunction = id => {
    setProfileText("Customer " + id + " Profile");
    // console.log("ChildData: " + childData);
  };

  return (
    <div>
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
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((item, index) => (
            <TableRow
              item={item}
              key={index}
              parentCallback={callbackFunction}
            />
          ))}
        </tbody>
      </table>
      <CustomerProfile profileText={profileText} />
    </div>
  );
};

export default SearchResults;
