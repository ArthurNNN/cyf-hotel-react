import React from "react";
import "./App.css";

const BestPocemon = props => {
  // var abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  return (
    <div>
      <ul className="footer">
        {props.footerArr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPocemon;
