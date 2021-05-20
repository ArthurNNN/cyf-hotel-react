import React, { useState } from "react";
import TableRow from "./TableRow";
import CustomerProfile from "./CustomerProfile";
import "./App.css";

const SearchResults = props => {
  // const [profileText, setProfileText] = useState(null);
  const [id, setId] = useState(null);
  const [newBooking, setNewBooking] = useState({
    id: 6,
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: 999,
    checkInDate: "",
    checkOutDate: ""
  });

  const callbackFunction = id => {
    setId(id);
    // setProfileText("Customer " + id + " Profile");
  };

  const handleChange = evt => {
    const value = evt.target.value;
    setNewBooking({ ...newBooking, [evt.target.name]: value });
    // console.log("newBooking from handleChange:");
    // console.log(newBooking);
  };

  const sendNewBooking = () => {
    console.log("newBooking from sendNewBooking:");
    console.log(newBooking);
    props.onAddNewBooking(newBooking);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">ID</th>
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
          <tr>
            <th>
              <input
                type="number"
                name="id"
                value={newBooking.id}
                onChange={handleChange}
                placeholder="ID"
              />
            </th>
            <th>
              <input
                type="text"
                name="title"
                value={newBooking.title}
                onChange={handleChange}
                placeholder="Title"
              />
            </th>
            <th>
              <input
                type="text"
                name="firstName"
                value={newBooking.firstName}
                onChange={handleChange}
                placeholder="Name"
              />
            </th>
            <th>
              <input
                type="text"
                name="surname"
                value={newBooking.surname}
                onChange={handleChange}
                placeholder="Surname"
              />
            </th>
            <th>
              <input
                type="email"
                name="email"
                value={newBooking.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </th>
            <th>
              <input
                type="number"
                name="roomId"
                value={newBooking.roomId}
                onChange={handleChange}
                placeholder="RoomId"
              />
            </th>
            <th>
              <input
                type="text"
                name="checkInDate"
                value={newBooking.checkinDate}
                onChange={handleChange}
                placeholder="CheckIn Date"
              />
            </th>
            <th>
              <input
                type="text"
                name="checkOutDate"
                value={newBooking.checkOutDate}
                onChange={handleChange}
                placeholder="CheckOut Date"
              />
            </th>
            <th />
            <th>
              <button className="btn btn-primary" onClick={sendNewBooking}>
                Add booking
              </button>
            </th>
          </tr>
        </tbody>
      </table>
      <CustomerProfile id={id} />
    </div>
  );
};

export default SearchResults;
