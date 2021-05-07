import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = () => {
  var [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
    console.log(orders);
  };

  return (
    <li>
      Pizzas: {orders} <RestaurantButton handleClick={orderOne} />
    </li>
  );
};

export default Order;
