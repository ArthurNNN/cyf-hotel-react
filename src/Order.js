import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  var [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
    console.log(orders);
  };

  return (
    <li>
      {props.orderType}: {orders} <RestaurantButton handleClick={orderOne} />
    </li>
  );
};

export default Order;
