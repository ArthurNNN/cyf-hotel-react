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

  return (
    <tr key={props.index} onClick={highlightRow} className={colorStyle}>
      <td>{props.item.id}</td>
      <td>{props.item.title}</td>
      <td>{props.item.firstName}</td>
      <td>{props.item.surname}</td>
      <td>
        <a href={"mailto:" + props.item.email}>{props.item.email}</a>
      </td>
      <td>{props.item.roomId}</td>
      <td>{props.item.checkInDate}</td>
      <td>{props.item.checkOutDate}</td>
      <td>
        {moment(Date.parse(props.item.checkOutDate)).diff(
          Date.parse(props.item.checkInDate),
          "days"
        )}
      </td>
    </tr>
  );
};
export default TableRow;
