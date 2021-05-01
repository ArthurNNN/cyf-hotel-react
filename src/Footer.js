import React from "react";
import "./App.css";

const Footer = props => {
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

export default Footer;
