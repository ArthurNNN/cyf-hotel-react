import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  var [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
    console.log(orders);
  };

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders} <RestaurantButton handleClick={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
