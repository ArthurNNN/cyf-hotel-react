import React, { useState } from "react";

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
          Pizzas: {orders}{" "}
          <button onClick={orderOne} className="btn btn-primary">
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
