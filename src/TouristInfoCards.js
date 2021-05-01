import React from "react";
import "./App.css";

const TouristInfoCards = props => {
  return (
    <div className="cards">
      {props.citiesArr.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.imgUrl} className="card-img-top" alt="City img" />
          <div className="card-body">
            <h1>{item.name}</h1>
            <p>{item.text}</p>
            <a href={item.citySiteUrl} className="btn btn-primary">
              More information
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
