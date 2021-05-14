import React, { useState } from "react";
import moment from "moment";
import "./App.css";

const TableRow = props => {
  const [colorStyle, setColorStyle] = useState("init-background-color");
  function highlightRow() {
    colorStyle === "init-background-color"
      ? setColorStyle("highlighted-background-color")
      : setColorStyle("init-background-color");
  }
  var row = props.item;

  const sendId = () => {
    props.parentCallback(props.item.id);
  };

  return (
    <tr key={props.index} onClick={highlightRow} className={colorStyle}>
      <td>{row.id}</td>
      <td>{row.title}</td>
      <td>{row.firstName}</td>
      <td>{row.surname}</td>
      <td>
        <a href={"mailto:" + row.email}>{row.email}</a>
      </td>
      <td>{row.roomId}</td>
      <td>{row.checkInDate}</td>
      <td>{row.checkOutDate}</td>
      <td>
        {moment(Date.parse(row.checkOutDate)).diff(
          Date.parse(row.checkInDate),
          "days"
        )}
      </td>
      <td>
        <button onClick={sendId}>Show profile</button>
      </td>
    </tr>
  );
};
export default TableRow;
