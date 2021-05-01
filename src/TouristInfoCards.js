import React from "react";
import "./App.css";

const TouristInfoCards = props => {
  return (
    <div className="cards">
      {props.citiesArr.map((item, index) => (
        <a href={item.citySiteUrl} key={index}>
          <div className="card">
            <img src={item.imgUrl} className="card-img-top" alt="City img" />
            <div className="card-body">
              <h1>{item.name}</h1>
              <p>{item.text}</p>
              <button href={item.citySiteUrl} className="btn btn-primary">
                More information
              </button>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default TouristInfoCards;
