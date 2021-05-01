import React from "react";
import "./App.css";

const TouristInfoCards = props => {
  return props.citiesArr.map((item, index) => (
    <div className="card" key={index}>
      <img src={item.imgUrl} className="card-img-top" alt="City img" />
      <div className="card-body">
        <p>{item.text}</p>
        <a href={item.citySiteUrl} className="btn btn-primary">
          {item.name}
        </a>
      </div>
    </div>
  ));
};

export default TouristInfoCards;
