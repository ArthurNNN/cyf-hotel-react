import React, { useState, useEffect } from "react";
import "./App.css";

const CustomerProfile = props => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    if (props.id) {
      fetch(`https://cyf-react.glitch.me/customers/${props.id}/`)
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          setProfileData(data);
        });
    }
  }, [props.id]);

  if (profileData) {
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
              <th scope="col">Vip</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{profileData.id}</td>
              <td>{profileData.title}</td>
              <td>{profileData.firstName}</td>
              <td>{profileData.surname}</td>
              <td>{profileData.email}</td>
              <td>{profileData.vip + ""}</td>
              <td>{profileData.phoneNumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return null;
  }
};

export default CustomerProfile;
